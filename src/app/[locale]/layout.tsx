import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { QueryProvider } from '@/providers/query-provider';

import '../globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Next.js Enterprise Boilerplate',
    template: '%s | Next.js Boilerplate',
  },
  description: 'A production-ready Next.js boilerplate with TypeScript, i18n, and modern tooling',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'i18n', 'Boilerplate'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Next.js Boilerplate',
    title: 'Next.js Enterprise Boilerplate',
    description: 'A production-ready Next.js boilerplate with TypeScript, i18n, and modern tooling',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Next.js Enterprise Boilerplate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Enterprise Boilerplate',
    description: 'A production-ready Next.js boilerplate with TypeScript, i18n, and modern tooling',
    images: ['/og-image.png'],
    creator: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>{children}</QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
