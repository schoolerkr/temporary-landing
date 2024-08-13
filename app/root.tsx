import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import 'normalize.css'
import './styles/globals.css'
import './styles/tailwind.css'

import ChannelIO from './components/ChannelIO'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>Schooler - 모두를 위한 학교 SIS/MIS 솔루션</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="모두를 위한 학교 SIS/MIS 솔루션" />

        <Meta />
        <Links />

        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <ChannelIO />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
