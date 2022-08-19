import React from 'react';

export default function Logo() {
  return (
    <h1 className='flex items-center gap-x-2  hover:text-light-blue  dark:hover:text-dark-red cursor-pointer'>
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='11.5146'
          y='5.30304'
          width='24'
          height='24'
          transform='rotate(15 11.5146 5.30304)'
          className='fill-light-blue dark:fill-dark-red'
        />
      </svg>
      4th Kind Ventures
    </h1>
  );
}
