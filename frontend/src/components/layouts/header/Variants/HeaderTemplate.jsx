'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Layout } from "@/components/layouts/Layout";
import LogoPosnod from '@/components/icons/brand/posnod-logo.svg';
import Navbar from '@/components/layouts/header/parts/center/Navbar';
import { AuthButtons } from '@/components/layouts/header/headright/AuthButtons';
import DotsVerticalIcon from '@/components/icons/system/menu-compact.svg';
import CloseIcon from '@/components/icons/cancel.svg';

export default function HeaderTemplate({ size = "lg" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary relative z-40">
      <Layout size={size}>
        <div className="header-row">
          <div className="header-left">
            <Link href="/" aria-label="Posnod" className="block">
              <LogoPosnod className="w-10 h-10" />
            </Link>
          </div>

          <div className="header-center hidden md:flex">
            <Navbar />
          </div>

          <div className="header-right">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 text-primary"
              aria-label="Buka menu"
            >
              <DotsVerticalIcon className="w-5 h-5" />
            </button>

            <div className="hidden md:block">
              <AuthButtons />
            </div>
          </div>
        </div>
      </Layout>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="header-row">
            <div className="header-left">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <LogoPosnod className="w-10 h-10" />
              </Link>
            </div>

            <div className="header-right">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-primary"
                aria-label="Tutup menu"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="px-5 pb-8">
            <div className="[&>nav]:flex [&>nav]:flex-col [&>nav]:gap-4 [&_a]:block">
              <Navbar />
            </div>

            <div className="mt-6 pt-4 border-t border-light">
              <AuthButtons />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
