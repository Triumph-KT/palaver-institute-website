import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Palaver Institute - Where African Minds Convene to Solve Global Challenges',
  description: 'Building intellectual sovereignty through indigenous-centered research and pan-African collaboration.',
  keywords: [
    'Palaver Institute',
    'African research',
    'indigenous intelligence',
    'human intelligence research',
    'decolonized research',
    'African epistemology',
    'pan-African collaboration',
    'intellectual sovereignty',
    'research fellowship',
    'academic research'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://palaverinstitute.org',
    title: 'Palaver Institute - Where African Minds Convene to Solve Global Challenges',
    description: 'Building intellectual sovereignty through indigenous-centered research and pan-African collaboration.',
    siteName: 'Palaver Institute',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palaver Institute - Where African Minds Convene to Solve Global Challenges',
    description: 'Building intellectual sovereignty through indigenous-centered research and pan-African collaboration.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}