import React from "react";

export default function PopUP() {
  return (
    <button className='lg:hidden block focus:border-hiti-400 border-2 px-1.5 py-1 lg:px-2.5 lg:py-2 border-opacity-20 rounded-md border-[#FFFFFF]'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-4 lg:h-6 lg:w-6  text-white focus:text-hiti-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>
    </button>
  );
}
