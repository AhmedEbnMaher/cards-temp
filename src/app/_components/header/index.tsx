"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className=" bg-[#D9D9D920] h-[80px]">
      <div className="container mx-auto px-7 h-full">
        <nav className="flex gap-16 items-center h-full">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} priority />
          <ul className="flex gap-16">
            {NAV_LINKS.map(({ href, label }) => (
              <li
                key={href}
                className={pathname === href ? "text-[#285F9D]" : ""}
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
