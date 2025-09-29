import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { Geist, Geist_Mono } from "next/font/google"
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "./globals.css"
import Navbar from '@/components/Header'
import Footer from '@/components/Footer'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RentAuto.tj",
  description: "Created by Vakhidov Ismoil",
};

export default async function RootLayout({ children,params }) {
   const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer/>
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
