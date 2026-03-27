import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Le Rucher des Nectarines — Miels Artisanaux Bio',
    template: '%s | Le Rucher des Nectarines',
  },
  description:
    'Depuis 1987, la famille Mra98 cultive l\'art de l\'apiculture dans le respect de la nature. Miels artisanaux, certifiés bio, récoltés directement de nos ruches au cœur de la Provence.',
  keywords: [
    'miel artisanal',
    'miel bio',
    'apiculture',
    'rucher',
    'Provence',
    'miel de lavande',
    'miel d\'acacia',
    'adoption ruche',
  ],
  authors: [{ name: 'Famille Mra98' }],
  creator: 'Le Rucher des Nectarines',
  openGraph: {
    title: 'Le Rucher des Nectarines — Miels Artisanaux Bio',
    description:
      'De la ruche à votre table. Miels artisanaux bio, récoltés avec amour depuis 1987.',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-inter bg-cream text-dark antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
