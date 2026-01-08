"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const LinkFeature = () => {
  const pathname = usePathname();
  const isFeedPage = pathname === '/feed'

  if (!isFeedPage) {
    return null; // Jangan tampilkan LinkFeature di luar halaman /feed
  }

  return (
    <div className='flex gap-4 justify-center items-center py-4 bg-[#F8F8F8] md:text-lg md:gap-8 font-medium text-sm'>
      <Link href='#'>Platform</Link>
      <Link href='#'>Tools</Link>
      <Link href='#'>Tuf</Link>
      <Link href='#'>Networks</Link>
      <Link href='#'>Tentang</Link>
    </div>
  );
};

export default LinkFeature;
