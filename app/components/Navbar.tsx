"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, ChevronDown } from "lucide-react";
import Image from 'next/image';

const links = [
  { name: "Trang chủ", href: "/" },
  { name: "Sản Phẩm", links: [
      { name: "Pha Espresso", href: "/Espresso" },
      { name: "Pha Phin", href: "/Phin" },
      { name: "Pha Pour", href: "/Pour" },
    ]
  },
  { name: "Về chúng tôi", links: [
      { name: "Câu chuyện", href: "/Blog" },
      { name: "Tuyển dụng", href: "/Careers" },
    ]
  },
  { name: "Thông tin liên hệ", href: "/Contact" }, 
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src='/logo.png' 
              alt="Next Commerce Logo" 
              width={100} 
              height={20} 
              className="cursor-pointer" 
            />
          </Link>

          <button
            onClick={toggleMenu}
            className="lg:hidden ml-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <nav className={`lg:flex lg:gap-12 lg:ml-8 ${menuOpen ? 'block' : 'hidden'}`}>
          {links.map((link, idx) => (
            <div key={idx} className="relative group">
              {link.links ? (
                <>
                  <span
                    className="py-2 text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary cursor-pointer flex items-center"
                  >
                    {link.name}
                    <ChevronDown className="ml-1" />
                  </span>
                  <div className="absolute z-10 mt-2 hidden group-hover:flex flex-col bg-white border border-white dark:bg-gray-900 dark:border-white divide-y divide-white dark:divide-gray-700 rounded-lg shadow-lg">
                    {link.links.map((sublink, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sublink.href}
                        className="mt-2 block py-2 px-7 text-nowrap font-semibold text-gray-600 transition duration-100 hover:text-primary"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  className={`block py-2 text-lg font-semibold ${pathname === link.href ? 'text-primary' : 'text-gray-600'} transition duration-100 hover:text-primary`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
