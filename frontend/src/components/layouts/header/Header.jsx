'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/foundations/Button';
import PosnodIcon from '@/components/icons/brand/LogoPosnod';
import MenuCompact from '@/components/icons/ui/MenuCompact';
import CancelIcon from '@/components/icons/ui/CancelIcon';

const NAV_LINKS = [
  { name: 'Discover', href: '/PublicWeb/discover' },
  { name: 'TUF', href: '/PublicWeb/tuf' },
  { name: 'Private Mode', href: '/PublicWeb/privatemode' },
  { name: 'Komunitas', href: '/PublicWeb/community', isComingSoon: true },
  { name: 'Tentang', href: '/PublicWeb/about' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleAuth = () => {
    window.location.href = 'https://auth.posnod.com';
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-tertiary' : 'bg-tertiary'
      }`}
    >
      <div className="container-wide mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" aria-label="Posnod" className="flex items-center">
            <PosnodIcon className="h-8 w-8 text-primary" />
          </Link>

          {/* Navigasi Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-disabled={link.isComingSoon}
                className={`text-body-sm font-medium transition-colors flex items-center gap-1.5 ${
                  link.isComingSoon
                    ? 'text-disabled cursor-not-allowed pointer-events-none'
                    : 'text-primary hover:text-gray-700'
                }`}
              >
                {link.name}
                {link.isComingSoon && (
                  <span className="bg-primary text-xs px-1.5 py-0 rounded-md tracking-wider">
                    Soon
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Sisi Kanan: Auth Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <Button
            onClick={handleAuth}
            variant="ghost"
            size="sm"
            radius="32"
            className="text-body-sm text-primary"
          >
            Login
          </Button>
          <button
            onClick={handleAuth}
            className="bg-primary text-white text-body-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Gabung Posnod
          </button>

        </div>

        {/* Sisi Kanan: Mobile & Tablet */}
        <div className="flex lg:hidden items-center gap-3">
          {isMobileMenuOpen && (
            <button
              onClick={handleAuth}
              className="bg-primary text-white text-body-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Gabung Posnod
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {isMobileMenuOpen ? (
              <CancelIcon className="h-6 w-6" />
            ) : (
              <MenuCompact className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-20 z-40 bg-tertiary"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white py-4 px-6 flex flex-col gap-4 z-50">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-disabled={link.isComingSoon}
              className={`text-body-base font-medium flex items-center gap-2 ${
                link.isComingSoon ? 'text-disabled pointer-events-none' : 'text-primary'
              }`}
            >
              {link.name}
              {link.isComingSoon && (
                <span className="bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-md uppercase tracking-wider font-semibold">
                  Soon
                </span>
              )}
            </Link>
          ))}
        </div>
        </>
      )}
    </header>
  );
}
