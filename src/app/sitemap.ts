import { MetadataRoute } from 'next';

import { locales } from '@/i18n/config';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Add home page for each locale
  locales.forEach((locale) => {
    routes.push({
      url: `${baseUrl}${locale === 'en' ? '' : `/${locale}`}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    });
  });

  return routes;
}
