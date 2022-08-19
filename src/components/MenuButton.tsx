import { useEffect, useRef } from 'react';
import { useStore } from '../store';
import gsap from 'gsap';

export default function MenuButton() {
  const toggleMenu = useStore((state: any) => state.toggleMenu);
  const { menu } = useStore((state: any) => state.app);

  return (
    <button
      className='group flex items-center gap-x-2 hover:text-light-blue dark:hover:text-dark-red z-20'
      onClick={toggleMenu}
    >
      <span>{menu ? 'Close' : 'Menu'}</span>
      <MenuIcon />
    </button>
  );
}

function MenuIcon() {
  const { menu } = useStore((state: any) => state.app);

  const lineTop = useRef(null!);
  const lineMid = useRef(null!)!;
  const lineBottom = useRef(null!);

  useEffect(() => {
    if (menu) {
      gsap.to(lineTop.current, {
        rotation: 45,
        transformOrigin: '50% 50%',
        y: 8,
      });

      gsap.to(lineMid.current, { width: 0 });

      gsap.to(lineBottom.current, {
        rotation: -45,
        transformOrigin: '50% 50%',
        y: -8,
      });
    } else {
      gsap.to(lineTop.current, {
        rotation: 0,
        y: 0,
      });

      gsap.to(lineMid.current, { width: 28 });

      gsap.to(lineBottom.current, {
        rotation: 0,
        y: 0,
      });
    }
  });

  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      xmlns='http://www.w3.org/2000/svg'
      className='group-hover:child:fill-light-blue dark:group-hover:child:fill-dark-red dark:child:fill-dark-white'
    >
      <rect ref={lineMid} x='6' y='18' width='28' height='4' />
      <rect ref={lineTop} x='6' y='10' width='28' height='4' />
      <rect ref={lineBottom} x='6' y='26' width='28' height='4' />
    </svg>
  );
}
