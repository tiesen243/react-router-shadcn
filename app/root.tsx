import '@/globals.css'

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'
import { ThemeProvider } from 'next-themes'

import type { Route } from './+types/root'
import { ThemeToggle } from '@/components/theme-toggle'
import { Typography } from '@/components/ui/typography'

// prettier-ignore
export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap' },
  { rel: 'icon', type: 'image/x-icon', href: 'https://tiesen.id.vn/favicon.ico' },
]

// prettier-ignore
export const meta: Route.MetaFunction = () => [
  { title: 'React router - Shadcn' },
  { name: 'description', content: 'Demo application exploring React Router v7 features integrated with Shadcn UI components library for modern web interfaces' },
]

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
          <ThemeToggle />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status.toString()
    details =
      error.status === 404 ? 'This page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="container flex min-h-dvh flex-col items-center justify-center">
      <Typography variant="h1">{message}</Typography>
      <Typography>{details}</Typography>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
