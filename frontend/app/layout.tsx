import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// You'll need to add these fonts to your project via npm or by importing them here
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eliza | AI Meeting Notes',
  description: 'Your intelligent meeting notes companion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}
