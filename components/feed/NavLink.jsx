import Link from 'next/link';
import React from 'react';

const NavLink = () => {
  return (
    <nav className='flex items-center gap-10 text-lg max-w-max mx-auto'>
      <Link href='#'>Platform</Link>
      <Link href='#'>Tools</Link>
      <Link href='#'>TUF</Link>
      <Link href='#'>Networks</Link>
      <Link href='#'>Tentang</Link>
    </nav>
  );
};

export default NavLink;
