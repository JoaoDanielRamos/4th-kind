import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useStore } from '../store';

export default function MenuNav() {
  const { menu } = useStore((state: any) => state.app);
  const fakeMenu_one = useRef(null!);
  const fakeMenu_two = useRef(null!);
  const mainMenu = useRef(null!);

  useEffect(() => {
    if (menu) {
      gsap.to(fakeMenu_one.current, { translateX: '0px', duration: 1 });
      gsap.to(fakeMenu_two.current, {
        translateX: '0px',
        duration: 1,
        delay: 0.1,
      });
      gsap.to(mainMenu.current, {
        translateX: '0px',
        duration: 1,
        delay: 0.2,
      });
    } else {
      gsap.to(mainMenu.current, { translateX: '100%', duration: 1 });
      gsap.to(fakeMenu_two.current, {
        translateX: '100%',
        duration: 1,
        delay: 0.1,
      });
      gsap.to(fakeMenu_one.current, {
        translateX: '100%',
        duration: 1,
        delay: 0.2,
      });
    }
  }, [menu]);
  return (
    <div className={`fixed top-0 right-0 w-full max-w-[600px] z-[5]`}>
      {/* Fake Menu 1*/}
      <div
        className={`fixed bg-light-black dark:bg-dark-white w-full min-h-screen z-10 translate-x-full`}
        ref={fakeMenu_one}
      ></div>

      {/* Fake Menu 2*/}
      <div
        className={` fixed bg-light-blue dark:bg-dark-red w-full min-h-screen z-20 translate-x-full`}
        ref={fakeMenu_two}
      ></div>

      {/* Main Menu*/}
      <nav
        className={`fixed flex flex-col justify-between min-h-screen w-full dark:text-dark-white bg-light-white dark:bg-dark-black p-11 translate-x-full`}
        ref={mainMenu}
      >
        <div className='flex flex-col gap-y-2 text-4xl justify-center flex-1'>
          <a
            href='#'
            className='hover:text-light-blue dark:hover:text-dark-red'
          >
            About
          </a>
          <a
            href='#'
            className='hover:text-light-blue dark:hover:text-dark-red'
          >
            Blog
          </a>
          <a
            href='#'
            className='hover:text-light-blue dark:hover:text-dark-red'
          >
            Investments
          </a>
        </div>

        <div className='flex flex-col gap-y-2 justify-center text-2xl'>
          <a
            href='#'
            className='hover:text-light-blue dark:hover:text-dark-red'
          >
            Instagram
          </a>
          <a
            href='#'
            className='hover:text-light-blue dark:hover:text-dark-red'
          >
            Crunchbase
          </a>
          <a
            href='#'
            className='hover:text-light-blue dark:hover:text-dark-red'
          >
            Twitter
          </a>
        </div>
      </nav>
    </div>
  );
}
