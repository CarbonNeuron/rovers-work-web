import type { Metadata } from 'next';
import { Geist, Geist_Mono, Noto_Color_Emoji } from 'next/font/google';
import MUISetup from '@/components/MUISetup';
import { theme } from '@/theme/theme';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const notoColorEmoji = Noto_Color_Emoji({
  variable: '--font-noto-emoji',
  subsets: ['emoji'],
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rovers.work'),
  title: {
    default: 'rovers.work - Universal Opportunities Remote Operations Portal',
    template: '%s | Universal Opportunities'
  },
  description:
    'Remote mining rover operations portal for Universal Opportunities contractors. Control advanced mining rovers across distant planets, manage fleet operations, trade resources, and access fabrication systems.',
  keywords: [
    'remote operations',
    'mining rovers', 
    'space mining',
    'fleet management',
    'resource trading',
    'planetary operations',
    'Universal Opportunities',
    'rovers.work'
  ],
  authors: [{ name: 'Universal Opportunities Corporation' }],
  creator: 'Universal Opportunities',
  publisher: 'Universal Opportunities',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rovers.work',
    siteName: 'Universal Opportunities Remote Operations Portal',
    title: 'rovers.work - Universal Opportunities Remote Operations Portal',
    description: 'Remote mining rover operations portal for Universal Opportunities contractors. Control advanced mining rovers across distant planets.',
    images: [
      {
        url: '/favicon.svg',
        width: 512,
        height: 512,
        alt: 'Universal Opportunities Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'rovers.work - Universal Opportunities Remote Operations Portal',
    description: 'Remote mining rover operations portal for Universal Opportunities contractors.',
    creator: '@UniversalOpportunities',
  },
  alternates: {
    canonical: 'https://rovers.work',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16.svg', type: 'image/svg+xml', sizes: '16x16' }
    ],
    apple: [
      { url: '/apple-touch-icon.svg', type: 'image/svg+xml', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} ${notoColorEmoji.variable}`}
        suppressHydrationWarning={true}
      >
        <MUISetup theme={theme}>
          {children}
        </MUISetup>
      </body>
    </html>
  );
}
