import type { Metadata } from "next";
import { Montserrat, Kdam_Thmor_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Loader from './components/Loader'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

const kdamThmorPro = Kdam_Thmor_Pro({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Accelix",
  description: "Accelix - Modern Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Navbar />
        <Loader />
        <main className={montserrat.className}>{children}</main>
      </body>
    </html>
  );
}
