import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../partials/Common/Navbar";
import Loader from "../partials/Elements/Loader";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accelix",
  description: "Accelix - Modern Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <div className='relative min-h-screen'>
          <Navbar />
          <main>{children}</main>
        </div>
        <Loader />
      </body>
    </html>
  );
}
