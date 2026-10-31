"use client";

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center gap-sm">
        <Link href="/PublicWeb/discover" className="hover-text-primary">Discover</Link>
        <Link href="/PublicWeb/tuf" className="hover-text-primary">TUF</Link>
        <Link href="/PublicWeb/privatemode" className="hover-text-primary">Private Mode</Link>
        <Link href="/PublicWeb/komunitas" className="hover-text-primary">Komunitas</Link>
        <Link href="/PublicWeb/tentang" className="hover-text-primary">Tentang</Link>
    </nav>
  );
};

export default Navbar;