import type { Metadata, Viewport } from 'next'

import '@/styles/globals.css'
import { Navbar } from '@/components/organisms/navbar'
import site from '@/utils/config/site'
import cn from '@/utils/libs/cn'
import ogImage from '@/utils/libs/og-image'

import Providers from './providers'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s ${site.titleTemplate}`
  },
  description: site.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: '/favicon/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    site: '@krafanid',
    creator: '@krafanid',
    images: [ogImage({ information: site.url })]
  },
  keywords: site.keywords,
  creator: site.githubUsername,
  openGraph: {
    url: site.url,
    type: 'website',
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: 'en',
    images: [
      {
        url: ogImage({ information: site.url }),
        width: 1200,
        height: 630,
        alt: site.description,
        type: 'image/png'
      }
    ]
  },
  icons: {
    icon: '/favicon/favicon.svg',
    shortcut: '/favicon/favicon.svg',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [...site.favicons]
  }
}

export const viewport: Viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#ffffff'
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#000000'
    }
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={cn('scroll-smooth')}>
      <body className='relative'>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
