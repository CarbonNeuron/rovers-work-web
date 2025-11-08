import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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

export const metadata: Metadata = {
  title: 'rovers.work - Universal Opportunities Remote Operations Portal',
  description:
    'Remote mining rover operations portal for Universal Opportunities contractors',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning={true}
      >
        <MUISetup theme={theme}>
          {children}
        </MUISetup>
      </body>
    </html>
  );
}
