import React from 'react';
import Logo from './logo';
import SearchBar from './search-bar';
import ChatIcon from '@heroicons/react/solid/ChatIcon'
import BellIcon from '@heroicons/react/solid/BellIcon'
import LogoutIcon from '@heroicons/react/outline/LogoutIcon'
import { signOut } from "next-auth/react"


const Header = () => {
  return (
    <header className='flex flex-1 p-3 bg-primary text-text-color items-center justify-between'>
      <div className='flex'>
        <Logo />
        <SearchBar />
      </div>
      <div className='flex'>
        <ChatIcon className='w-5 m-2' />
        <BellIcon className='w-5 m-2' />
        <LogoutIcon className='w-5 m-2'  onClick={() => signOut()} />
      </div>
    </header>
  );
};

export default Header;
