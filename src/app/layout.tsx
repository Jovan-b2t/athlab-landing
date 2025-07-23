import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AthLab - AI-Driven Athletic Performance',
  description: 'The future of training. AI-powered coaching that adapts to your unique body, schedule, and progress.',
  keywords: 'AI coaching, athletic performance, training optimization, sports technology, personalized training, biometric analysis',
  authors: [{ name: 'AthLab' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: 'hsl(245, 45%, 4%)',
  openGraph: {
    title: 'AthLab - AI-Driven Athletic Performance',
    description: 'The future of training. AI-powered coaching that adapts to your unique body, schedule, and progress.',
    type: 'website',
    url: 'https://athlab.io',
    siteName: 'AthLab',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AthLab - AI-Driven Athletic Performance'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AthLab - AI-Driven Athletic Performance',
    description: 'The future of training. AI-powered coaching that adapts to your unique body, schedule, and progress.',
    images: ['/img/og-image.jpg']
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
  alternates: {
    canonical: 'https://athlab.io'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Font preloads - ADD YOUR FONT FILES HERE */}
        <link
          rel="preload"
          href="/fonts/ClashDisplay-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SpaceGrotesk-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        

      </head>
      <body 
        className="font-space"
        style={{
          '--font-clash': 'Clash Display Variable, ui-sans-serif, system-ui, sans-serif',
          '--font-space': 'Space Grotesk Variable, ui-sans-serif, system-ui, sans-serif',
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  )
} 