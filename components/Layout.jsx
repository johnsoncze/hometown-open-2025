import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Pozadí s overlayem */}
      <div className="absolute inset-0 bg-gym bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Ztmavení pro lepší čitelnost */}
      </div>

      {/* Obsah stránky */}
      <div className="relative z-10 flex flex-col items-center text-white min-h-screen">
        {/* Logo a navigace */}
        <header className="w-full flex justify-between items-center py-4 px-6 bg-gray-800">
          <Link href="/">
            <Image src="/images/cfht-logo.svg" alt="CrossFit Hometown" width={200} height={100} className="cursor-pointer" />
          </Link>

          {/* Desktopové menu */}
          <nav className="hidden sm:flex space-x-4">
            <Link href="/results" className="text-white text-lg hover:text-yellow-300 transition">🏆 Výsledky</Link>
            <Link href="/schedule" className="text-white text-lg hover:text-yellow-300 transition">📅 Rozpis</Link>
          </nav>

          {/* Mobilní menu tlačítko */}
          <button 
            className="sm:hidden text-white text-lg focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </header>

        {/* Mobilní menu - zobrazí se po kliknutí */}
        {menuOpen && (
          <nav className="sm:hidden flex flex-col items-center w-full bg-gray-900 py-4 space-y-2">
            <Link href="/results" className="text-white text-lg hover:text-yellow-300 transition">🏆 Výsledky</Link>
            <Link href="/schedule" className="text-white text-lg hover:text-yellow-300 transition">📅 Rozpis</Link>
          </nav>
        )}

        {/* Hlavní obsah */}
        <main className="w-full max-w-full p-1">{children}
        <Analytics id="GJ9ZQ5FQG3" />
        </main>
      </div>
    </div>
  );
};

export default Layout;
