// src/layout.tsx

import './globals.css';
import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthProvider } from '../context/AuthContext';
import { MTThemeProvider } from './MTailwind';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>A Way Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`min-h-screen flex flex-col text-black`}>
        <MTThemeProvider>
          <AuthProvider>
            <Navbar />
            <div className="flex-grow">
              <div className="bg-[#61988E] h-12 w-full"></div>
              <main className="flex-grow flex items-center justify-center bg-white w-full">
                {children}
              </main>
            </div>
            <Footer />
          </AuthProvider>
        </MTThemeProvider>
      </body>
    </html>
  );
}
