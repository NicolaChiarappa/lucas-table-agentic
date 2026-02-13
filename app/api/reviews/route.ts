import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const REPO_OWNER = 'NicolaChiarappa';
const REPO_NAME = 'lucas-table-seofriendly';
const FILE_PATH = 'data/reviews.json';
const GITHUB_API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;

// Helper to get local file path
const getLocalFilePath = () => path.join(process.cwd(), FILE_PATH);

// Helper to read local reviews
async function getReviewsLocal() {
    try {
        const fileContent = await fs.readFile(getLocalFilePath(), 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        return [];
    }
}

// Helper to save local reviews
async function saveReviewsLocal(reviews: any[]) {
    await fs.writeFile(getLocalFilePath(), JSON.stringify(reviews, null, 2), 'utf-8');
}

// Helper to read reviews from GitHub
async function getReviewsGitHub() {
    const response = await fetch(GITHUB_API_URL, {
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json',
        },
        cache: 'no-store' // Ensure we always get fresh data
    });

    if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    return {
        reviews: JSON.parse(content),
        sha: data.sha
    };
}

export async function GET() {
    try {
        // If GITHUB_TOKEN is configured, try fetching from GitHub
        if (process.env.GITHUB_TOKEN) {
            try {
                const { reviews } = await getReviewsGitHub();
                return NextResponse.json(reviews);
            } catch (error) {
                console.error('Error fetching from GitHub, falling back to local:', error);
            }
        }

        // Fallback to local file
        const reviews = await getReviewsLocal();
        return NextResponse.json(reviews);

    } catch (error) {
        console.error('Error in GET /api/reviews:', error);
        return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const newReview = await request.json();

        // Basic validation
        if (!newReview.name || !newReview.comment || !newReview.rating) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (process.env.GITHUB_TOKEN) {
            try {
                // 1. Get current file content and SHA from GitHub
                const { reviews: currentReviews, sha } = await getReviewsGitHub();

                // 2. Add new review
                const updatedReviews = [...currentReviews, newReview];

                // 3. Update file on GitHub
                const response = await fetch(GITHUB_API_URL, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
                        'Accept': 'application/vnd.github.v3+json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: `Add review from ${newReview.name}`,
                        content: Buffer.from(JSON.stringify(updatedReviews, null, 2)).toString('base64'),
                        sha: sha
                    })
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`GitHub API error: ${response.status} - ${JSON.stringify(errorData)}`);
                }

                return NextResponse.json(newReview, { status: 201 });

            } catch (error) {
                console.error('Error saving to GitHub:', error);
                return NextResponse.json({ error: 'Failed to save review to GitHub' }, { status: 500 });
            }
        } else {
            // Local fallback
            const reviews = await getReviewsLocal();
            reviews.push(newReview);
            await saveReviewsLocal(reviews);
            return NextResponse.json(newReview, { status: 201 });
        }

    } catch (error) {
        console.error('Error in POST /api/reviews:', error);
        return NextResponse.json({ error: 'Failed to save review' }, { status: 500 });
    }
}
