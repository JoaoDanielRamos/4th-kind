import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import tw from '../hooks/tw';
import { useStore } from '../store';

export default function Spiral() {
  const { menu } = useStore((state: any) => state.app);

  const styles = {
    spiral: [
      'w-[544px]',
      'h-[544px]',
      'scale-[0.54] sm:scale-[1]',
      'border-2',
      'border-solid',
      'border-light-blue',
      'dark:border-dark-red',
      'overflow-hidden',
      'transition-all ease duration-[0.8s]',
      menu
        ? 'fixed top-[50%] translate-y-[-50%] translate-x-[-94px] sm:translate-x-[-95px]'
        : 'fixed top-[50%] translate-y-[-50%]',
    ],
    square: [
      'absolute top-[50%]',
      'left-[50%]',
      'translate-x-[-50%]',
      'translate-y-[-50%]',
      'border-2',
      'border-solid',
      'border-light-blue dark:border-dark-red',
      'bg-light-blue/0 dark:bg-dark-red/0',
      'hover:bg-light-blue/25 hover:dark:bg-dark-red/25',
    ],
  };

  const squareXS = useRef(null!);
  const squareS = useRef(null!);
  const squareM = useRef(null!);
  const squareL = useRef(null!);
  const spiralTimeline = gsap.timeline({ repeat: -1 });

  useEffect(() => {
    const squares = [
      squareL.current,
      squareM.current,
      squareS.current,
      squareXS.current,
    ];

    spiralTimeline
      .set(squares, {
        rotate: 0,
      })
      .set(squares[0], { rotate: 15 })
      .set(squares[2], { rotate: -15 })
      .to(squares, { rotate: '+=90', duration: 4, stagger: 0.25 });
  }, []);

  return (
    <div className={tw(styles.spiral)}>
      <div
        className={`w-[414px] h-[414px] rotate-[15deg]  ${tw(styles.square)}`}
        ref={squareL}
      ></div>
      <div
        className={`w-[289px] h-[289px] ${tw(styles.square)}`}
        ref={squareM}
      ></div>
      <div
        className={`w-[158px] h-[158px] rotate-[-15deg] ${tw(styles.square)}`}
        ref={squareS}
      ></div>
      <div
        className={`w-[30px]  h-[30px] ${tw(styles.square)}`}
        ref={squareXS}
      ></div>
    </div>
  );
}
