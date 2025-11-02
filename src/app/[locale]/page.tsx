import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm">
        <h1 className="mb-4 text-center text-4xl font-bold">{t('title')}</h1>
        <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://nextjs.org/docs"
            className="rounded-lg bg-foreground px-5 py-3 font-semibold text-background no-underline transition hover:bg-foreground/90"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('getStarted')}
          </a>
        </div>
      </div>
    </main>
  );
}
