"use client";
import { SessionProvider } from 'next-auth/react';
import type { Session } from "next-auth";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { CartProvider } from '@/context/CartContext';

// Configuração da fonte Inter
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session?: Session,
}>) {
  return (
    <SessionProvider session={session}>
       <html lang="en">
        <body
        className={inter.className}
        >
          <CartProvider>
            <Header/>
            {children}
            <Footer/>
          </CartProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
