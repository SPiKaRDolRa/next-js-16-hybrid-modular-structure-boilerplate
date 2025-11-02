'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

import { localeNames, locales, type Locale } from '@/i18n/config';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  return (
    <div className="flex gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={`rounded px-3 py-1 text-sm ${
            locale === loc
              ? 'bg-foreground text-background'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}
