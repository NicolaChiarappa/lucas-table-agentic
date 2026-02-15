import { prisma } from "@/lib/prisma"
import { ReviewsSectionClient } from "./ReviewsSectionClient"

export async function ReviewsSection() {
  const reviews = await prisma.review.findMany({
    where: { approved: true },
    orderBy: { date: "desc" },
  })

  const initialReviews = reviews.map((r) => ({
    id: r.id,
    name: r.name,
    rating: r.rating,
    comment: r.comment,
    date: r.date,
  }))

  return <ReviewsSectionClient initialReviews={initialReviews} />
}
