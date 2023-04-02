import React from "react";

export default function ErrorMessageSVG() {
  return (
    <div className='mx-auto flex-shrink-0 flex items-center justify-center rounded-full bg-red-100  '>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        stroke='red'
        viewBox='0 0 24 24'
        className='h-[1.6rem] w-[1.6rem]'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'></path>
      </svg>
    </div>
  );
}
