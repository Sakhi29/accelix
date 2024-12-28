"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Kdam_Thmor_Pro } from "next/font/google";

const kdamThmorPro = Kdam_Thmor_Pro({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const navLinks = [
  { href: "/our-work", label: "Our Work" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact-us", label: "Contact Us" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='fixed w-full bg-black z-50 py-8 px-4 sm:px-8'>
      <div className='max-w-[1400px] mx-auto'>
        <div className='flex items-center justify-between'>
          <Link
            href='/'
            className={`text-[#FF3D00] text-3xl font-bold ${kdamThmorPro.className}`}
          >
            ACCELIX
          </Link>
          <ul className='flex items-center gap-8'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-base tracking-wider font-medium text-white hover:text-[#FF3D00] transition-colors ${
                    pathname === link.href ? "text-[#FF3D00]" : ""
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 right-0 bottom-[-6px] h-[2px] bg-[#FF3D00] transform origin-left transition-transform duration-300 ${
                      pathname === link.href ? "scale-x-100" : "scale-x-0"
                    } group-hover:scale-x-100`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
