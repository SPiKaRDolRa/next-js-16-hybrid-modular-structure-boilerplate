# Next.js Enterprise Boilerplate 2025

A production-ready Next.js 16 boilerplate with TypeScript, internationalization (i18n), and modern tooling. Perfect starting point for any web application.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4.0](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Form Management:** [React Hook Form](https://react-hook-form.com/)
- **Validation:** [Zod](https://zod.dev/)
- **Code Quality:** ESLint + Prettier
- **Package Manager:** [Bun](https://bun.sh/)

## 🌍 Internationalization (i18n)

Built-in support for multiple languages:

- **Default Locale:** English (en)
- **Supported Locales:** English (en), Thai (th)
- **SEO-friendly:** Locale-based routing
- **Type-safe:** Full TypeScript support for translations

## 📁 Project Structure - Hybrid Approach

```text
src/
├── app/
│   └── [locale]/           # i18n routing
│       ├── layout.tsx      # Root layout with i18n
│       └── page.tsx        # Home page
├── i18n/
│   ├── config.ts           # i18n configuration
│   └── request.ts          # Server-side i18n setup
├── locales/                # Translation files
│   ├── en.json             # English translations
│   └── th.json             # Thai translations
├── features/               # Feature-based modules
│   └── [feature]/
│       ├── components/     # Feature components
│       ├── hooks/          # Feature hooks
│       ├── services/       # API services
│       ├── stores/         # Feature state
│       ├── types/          # Feature types
│       └── validations/    # Zod schemas
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Reusable sections
│   └── layouts/            # Layout components
├── lib/
│   ├── axios.ts            # Axios configuration
│   ├── react-query.ts      # React Query setup
│   └── utils.ts            # Utility functions
├── hooks/                  # Global custom hooks
├── stores/                 # Global Zustand stores
│   ├── theme-store.ts      # Theme management
│   └── navigation-store.ts # Navigation state
├── types/                  # Global TypeScript types
│   ├── common.types.ts     # Common types
│   └── i18n.d.ts           # i18n type definitions
├── data/                   # Static data
├── config/                 # App configuration
│   ├── site.ts             # Site metadata
│   └── navigation.ts       # Navigation config
└── providers/              # React providers
    └── query-provider.tsx  # React Query provider
middleware.ts               # Next.js middleware for i18n
```

### Architecture Philosophy

**Hybrid Approach** balances simplicity and scalability:

- **Simple Sections** (`components/sections/`): Display-only components without state
- **Complex Features** (`features/`): Full-featured modules with state, API, and validation
- **i18n First**: Internationalization built into the core architecture
- **SEO Optimized**: Metadata, OpenGraph, and structured routing

#### When to use `components/sections/`

- Display-only components
- No state management
- No API calls
- Static or props-based data

#### When to use `features/`

- State management (Zustand)
- API calls (React Query + Axios)
- Form validation (React Hook Form + Zod)
- Complex business logic
- Multiple interconnected components

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.0+)
- Node.js (v18+ for compatibility)

### Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd nextjs-boilerplate-2025
```

1. Install dependencies:

```bash
bun install
```

1. Copy environment variables:

```bash
cp env.example .env.local
```

1. Configure your environment variables in `.env.local`

1. Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📝 Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun format` - Format code with Prettier
- `bun format:check` - Check code formatting

## 🎨 UI Components with shadcn/ui

Add new shadcn/ui components:

```bash
bunx shadcn@latest add button
bunx shadcn@latest add card
bunx shadcn@latest add form
```

Components will be automatically added to `src/components/ui/`.

## 🌐 Adding New Languages

1. Add locale to `src/i18n/config.ts`:

```typescript
export const locales = ['en', 'th', 'ja'] as const; // Add 'ja'
```

1. Create translation file `src/locales/ja.json`:

```json
{
  "metadata": {
    "title": "...",
    "description": "..."
  },
  "common": {
    "home": "ホーム"
  }
}
```

1. Update locale names in `src/i18n/config.ts`

## 🔧 Configuration

### Path Aliases

Configured in `tsconfig.json`:

- `@/*` → `src/*`
- `@/components/*` → `src/components/*`
- `@/features/*` → `src/features/*`
- `@/lib/*` → `src/lib/*`
- `@/hooks/*` → `src/hooks/*`
- `@/stores/*` → `src/stores/*`
- `@/types/*` → `src/types/*`
- `@/locales/*` → `src/locales/*`
- `@/i18n/*` → `src/i18n/*`
- `@/data/*` → `src/data/*`
- `@/config/*` → `src/config/*`

### Environment Variables

See `env.example` for all available environment variables.

Required variables:

- `NEXT_PUBLIC_API_URL` - API base URL
- `NEXT_PUBLIC_APP_URL` - Application URL
- `NEXT_PUBLIC_APP_NAME` - Application name

## 📚 Key Features

### Internationalization (i18n)

```typescript
'use client';

import { useTranslations } from 'next-intl';

export function Component() {
  const t = useTranslations('common');
  return <h1>{t('home')}</h1>;
}
```

### State Management (Zustand)

```typescript
import { useThemeStore } from '@/stores/theme-store';

const { theme, setTheme } = useThemeStore();
```

### Data Fetching (React Query)

```typescript
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';

const { data, isLoading } = useQuery({
  queryKey: ['data'],
  queryFn: () => axiosInstance.get('/api/data'),
});
```

### Form Handling

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

const form = useForm({
  resolver: zodResolver(schema),
});
```

## 🎯 Best Practices

1. **Component Organization**: Use hybrid approach - sections vs features
1. **Type Safety**: Always define TypeScript types
1. **i18n**: Use translation keys for all user-facing text
1. **State Management**: Zustand for global state, React Query for server state
1. **Code Formatting**: Run Prettier before committing
1. **Linting**: Fix ESLint errors and warnings
1. **SEO**: Update metadata in layout files

## 🚀 Deployment

### Vercel (Recommended)

```bash
vercel
```

### Docker

```dockerfile
FROM oven/bun:1 AS base
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build
EXPOSE 3000
CMD ["bun", "start"]
```

## 📖 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TanStack Query Documentation](https://tanstack.com/query/latest/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Hook Form Documentation](https://react-hook-form.com/get-started)
- [Zod Documentation](https://zod.dev)

## 📄 License

MIT License - feel free to use this boilerplate for your projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💡 Use Cases

This boilerplate is perfect for:

- SaaS applications
- E-commerce platforms
- Multi-language websites
- Admin dashboards
- Corporate websites
- Advanced Portfolio
- Any web application requiring i18n

---

Built with ❤️ using Next.js 16 and modern web technologies

**Ready to fork and start building!** 🚀
