import Image from 'next/image';
import React from 'react';
import logofead from 'public/iconfeed/logo.svg';
import frame from 'public/iconfeed/frame.svg';

const Navbar = ({ children }) => {
  return (
    <>
      <div className='w-full p-5 bg-[#F8F8F8]'>{children}</div>
      <header className='w-full border-b px-8 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          {/* logo */}
          <Image
            src={logofead}
            alt='Logo'
          />

          <Image
            src={frame}
            alt='Logo'
          />

          <input
            type='text'
            placeholder='Apa yang kamu cari?'
            className='px-4 py-2 rounded-full bg-gray-100 text-sm w-64'
          />
        </div>

        <div className='flex items-center gap-4'>
          <button className='w-8 h-8 rounded-full border flex items-center justify-center'>⌕</button>
          <button className='w-8 h-8 rounded-full border flex items-center justify-center'>⚙</button>
          <div className='w-9 h-9 rounded-full bg-gray-300 overflow-hidden'></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
