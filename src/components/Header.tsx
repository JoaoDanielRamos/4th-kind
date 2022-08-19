import React from 'react';
import Logo from './Logo';
import MenuButton from './MenuButton';
import MenuNav from './MenuNav';

export default function Header() {
  return (
    <div className='flex pt-6 px-5 lg:p-11 justify-between w-full self-start'>
      <Logo />
      <MenuButton />
      <MenuNav />
    </div>
  );
}
