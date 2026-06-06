import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://lucastable.ch';

  return {
    rules: [
      // Regola generale: consenti tutto tranne admin
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/'],
      },
      // --- Bot AI di ricerca/citazione: CONSENTITI ---
      // ChatGPT browsing in tempo reale
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/admin/'],
      },
      // OpenAI Search indexing
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: ['/admin/'],
      },
      // Perplexity AI search/citazione
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/admin/'],
      },
      // Claude retrieval in tempo reale
      {
        userAgent: 'Claude-User',
        allow: '/',
        disallow: ['/admin/'],
      },
      // --- Bot AI di training: BLOCCATI ---
      // OpenAI training
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      // Anthropic training
      {
        userAgent: 'ClaudeBot',
        disallow: ['/'],
      },
      // Google Gemini / AI training
      {
        userAgent: 'Google-Extended',
        disallow: ['/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
