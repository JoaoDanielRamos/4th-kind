import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useStore } from '../store';
import tw from '../modules/tw';

export default function MenuNav() {
  const { menu } = useStore((state: any) => state.app);
  const fakeMenu_one = useRef(null!);
  const fakeMenu_two = useRef(null!);
  const mainMenu = useRef(null!);

  const styles = {
    nav: ['fixed', 'top-0', 'right-0', 'w-full', 'max-w-[600px]', 'z-[5]'],
    fakeMenuOne: [
      'fixed',
      'bg-light-black',
      'dark:bg-dark-white',
      'w-full',
      'min-h-screen',
      'z-10',
      'translate-x-full',
    ],
    fakeMenuTwo: [
      'fixed',
      'bg-light-blue',
      'dark:bg-dark-red',
      'w-full',
      'min-h-screen',
      'z-20',
      'translate-x-full',
    ],
    mainMenu: [
      'fixed',
      'flex',
      'flex-col',
      'justify-between',
      'min-h-screen',
      'w-full',
      'dark:text-dark-white',
      'bg-light-white',
      'dark:bg-dark-black',
      'p-11',
      'z-30',
      'translate-x-full',
    ],
    navLinks: ['hover:text-light-blue', 'dark:hover:text-dark-red'],
    internalLinksContainer: [
      'flex',
      'flex-col',
      'gap-y-2',
      'text-4xl',
      'justify-center',
      'flex-1',
    ],
    externalLinksContainer: [
      'flex',
      'flex-col',
      'gap-y-2',
      'justify-center',
      'text-2xl',
    ],
  };

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
    <div className={tw(styles.nav)}>
      <div className={tw(styles.fakeMenuOne)} ref={fakeMenu_one} />

      <div className={tw(styles.fakeMenuTwo)} ref={fakeMenu_two} />

      <nav className={tw(styles.mainMenu)} ref={mainMenu}>
        <div className={tw(styles.internalLinksContainer)}>
          {['About', 'Blog', 'Investments'].map(link => (
            <a href='#' className={tw(styles.navLinks)}>
              {link}
            </a>
          ))}
        </div>

        <div className={tw(styles.externalLinksContainer)}>
          {['Instagram', 'Crunchbase', 'Twitter'].map(link => (
            <a href='#' className={tw(styles.navLinks)}>
              {link}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
