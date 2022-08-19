import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useStore } from '../store';

export default function Wipe() {
  const wipe = useRef(null!);
  const { theme } = useStore((state: any) => state.app);

  useEffect(() => {
    // * Brings the wipe offscreen on top
    gsap.set(wipe.current, { translateY: '-100%' });

    // * Brings the wipe down everi time the theme changes
    if (theme) {
      gsap.to(wipe.current, { translateY: '100%', duration: 1.5 });
    } else {
      gsap.to(wipe.current, { translateY: '100%', duration: 1.5 });
    }
  }, [theme]);
  return (
    <div
      ref={wipe}
      className='w-full min-h-screen bg-light-blue dark:bg-dark-red fixed z-[100]'
    ></div>
  );
}
