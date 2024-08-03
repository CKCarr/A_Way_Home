// src/app/layout.tsx
import 'dotenv/config';
import type { Metadata } from 'next';
import { Sumana, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './MTailwind';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestAuth from '../components/TestAuth';
import { AuthProvider } from '../context/AuthContext';

const inter = Inter({ subsets: ['latin'] });
const sumana = Sumana({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'A Way Home',
  description: 'Connecting Pets and People Online',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sumana.className}`}>
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            <TestAuth />
            <div className="bg-[#61988E] h-12 w-full"></div>
            <div className="flex-grow flex items-center justify-center bg-white">
              <main className="w-full">{children}</main>
            </div>
            <div className="bg-[#61988E] h-12 w-full"></div>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
