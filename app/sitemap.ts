import { MetadataRoute } from 'next';

// Data dell'ultima modifica reale dei contenuti: aggiornala quando cambi i testi delle pagine.
const LAST_CONTENT_UPDATE = new Date('2026-11-07');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lucastable.ch';

  return [
    {
      url: baseUrl,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/private-chef-ticino`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/private-chef-lombardia`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
