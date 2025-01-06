import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../partials/Common/Navbar";
import Loader from "../partials/Elements/Loader";
import Footer from "@/partials/Common/Footer";

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
    <html lang="en">
      <body className={`${montserrat.className} overflow-hidden`}>
        <div className="relative min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <Loader />
      </body>
    </html>
  );
}
