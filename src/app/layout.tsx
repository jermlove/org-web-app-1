/**
 * Root Layout for Org Web App 1
 * Crimson Voyager Theme
 */

import '../../styles/globals.css';
import '../../styles/crimson-voyager-theme.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/lib/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Org Web - Crimson Voyager',
  description: 'Embark on your organizational journey with confidence',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
