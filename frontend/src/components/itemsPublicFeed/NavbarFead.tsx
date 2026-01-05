import React from 'react';
import PosnodIcon from '../icons/brand/PosnodIcon';
import { Search } from 'lucide-react';
import Note from '../icons/system/Note';
import Message from '../icons/system/Message';
import Notification from '../icons/system/Notification';
import Setting from '../icons/system/Setting';
import Image from 'next/image';

const NavbarFead = () => {
  return (
    <div className='border-b'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4'>
        {/* icon and input Search */}
        <div className='flex justify-between items-center gap-5'>
          {/* icon breand */}
          <PosnodIcon />

          {/* icon note */}
          <Note />

          {/* Search */}
          <div className='flex gap-3 items-center w-70 rounded-full bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-300'>
            <Search />
            <input
              type='text'
              placeholder='Apa yang anda cari?'
              className='w-full bg-transparent outline-none text-sm placeholder:text-gray-400'
            />
          </div>
        </div>

        {/* icon and profile */}
        <div className='flex justify-between items-center gap-6'>
          <Message />
          <Notification />
          <Setting />
          <Image
            src="/profile/profile.png"
            alt='profile'
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarFead;
