import { useEffect, useRef } from 'react';
import { useStore } from '../store';
import { gsap } from 'gsap';

export default function themeButton() {
  const { theme } = useStore((state: any) => state.app);
  const toggleTheme = useStore((state: any) => state.toggleTheme);
  const getOperationalSystemTheme = useStore(
    (state: any) => state.getOperationalSystemTheme
  );

  useEffect(() => {
    getOperationalSystemTheme();
  }, []);

  return (
    <button
      className='group fixed flex items-center gap-x-2 bottom-10 left-10 hover:text-light-blue dark:hover:text-dark-red z-0'
      onClick={toggleTheme}
    >
      <SVG_dark_mode />
      <span>{!theme ? 'Dark Mode' : 'Light Mode'}</span>
    </button>
  );
}

function SVG_dark_mode() {
  const { theme } = useStore((state: any) => state.app);

  const style = {
    rectangle:
      'stroke-light-black group-hover:stroke-light-blue dark:stroke-dark-white  dark:group-hover:stroke-dark-red',
    group: `translate-x-[19px] translate-y-[20px] group-hover:scale-[1.75] duration-100 ${
      theme ? 'origin-[35%_0%]' : 'origin-[0%_0%]'
    }`,
    circle:
      'fill-light-black dark:fill-dark-white group-hover:fill-light-blue dark:group-hover:fill-dark-red',
  };

  const circle1 = useRef(null!);

  useEffect(() => {
    theme
      ? gsap.to(circle1.current, { x: 24 })
      : gsap.to(circle1.current, { x: 0 });
  });

  return (
    <svg
      width='64'
      height='40'
      viewBox='0 0 64 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='8'
        y='9'
        width='46'
        height='22'
        rx='11'
        strokeWidth='2'
        className={style.rectangle}
      />

      <g className={style.group}>
        <circle
          cx='0'
          cy='0'
          r='6'
          className={`${style.circle} `}
          ref={circle1}
        />
      </g>

      <circle
        cx='19'
        cy='20'
        r='6'
        className={style.circle}
        fillOpacity='0.5'
      />

      <circle
        cx='43'
        cy='20'
        r='6'
        className={style.circle}
        fillOpacity='0.5'
      />
    </svg>
  );
}
