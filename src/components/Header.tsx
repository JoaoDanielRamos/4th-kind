import React from 'react';
import Logo from './Logo';
import MenuButton from './MenuButton';
import MenuNav from './MenuNav';

export default function Header() {
  return (
    <div className='flex p-12 justify-between w-full self-start'>
      <Logo />
      <MenuButton />
      <MenuNav />
    </div>
  );
}
