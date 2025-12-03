'use client';

import Image from 'next/image';
import React from 'react';
import logofead from 'public/iconfeed/logo.svg';
import frame from 'public/iconfeed/frame.svg';
import { Search, MessageCircle, Bell, Bolt } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const link = [
    { name: 'Platform', href: '#' },
    { name: 'Tools', href: '#' },
    { name: 'TUF', href: '#' },
    { name: 'Networks', href: '#' },
    { name: 'Tentang', href: '#' },
  ];

  return (
    <>
      {pathname === '/beranda' ? (
        <div className='p-5 w-full bg-[#F8F8F8]'>
          <nav className='flex items-center gap-10 text-lg max-w-max mx-auto'>
            {link.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className='text-gray-700 hover:text-gray-900 font-medium'
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
      <header className='w-full border-b px-8 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-5'>
          {/* logo */}
          <Image
            src={logofead}
            alt='Logo'
          />

          <div className='flex justify-between items-center gap-2'>
            <Image
              src={frame}
              alt='Frame'
              width={45}
              height={45}
            />
            <form className='flex gap-2 items-center border-2 p-3 rounded-full'>
              <label htmlFor='search'>
                <Search />
              </label>
              <input
                type='text'
                placeholder='Apa yang kamu cari?'
                className='outline-none'
                id='search'
              />
            </form>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <button className='p-2 rounded-full border-2 flex items-center justify-center relative'>
            <span className='absolute h-3 w-3 rounded-full bg-[#38BE7E] top-1 -right-1' />
            <MessageCircle />
          </button>
          <button className='p-2 rounded-full border-2 flex items-center justify-center'>
            <Bell />
          </button>
          <button className='p-2 rounded-full border-2 flex items-center justify-center'>
            <Bolt />
          </button>
          <div className='w-9 h-9 rounded-full bg-gray-300 overflow-hidden'></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
