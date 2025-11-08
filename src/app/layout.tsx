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
  title: 'rovers.work - Universal Opportunities Remote Operations Portal',
  description:
    'Remote mining rover operations portal for Universal Opportunities contractors',
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
