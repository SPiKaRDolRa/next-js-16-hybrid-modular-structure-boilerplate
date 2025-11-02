import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('common');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="mb-4 text-4xl font-bold">404 - Not Found</h2>
      <p className="mb-8 text-gray-600">{t('error')}</p>
      <Link
        href="/"
        className="rounded-lg bg-foreground px-5 py-3 font-semibold text-background no-underline transition hover:bg-foreground/90"
      >
        {t('home')}
      </Link>
    </div>
  );
}
