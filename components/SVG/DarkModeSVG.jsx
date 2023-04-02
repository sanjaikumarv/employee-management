import React from "react";

export default function DarkModeSVG(props) {
  return (
    <div {...props} className='inline-flex font-medium text-white text-base bg-bgForm dark:bg-purple-600  p-2 rounded-full'>
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'></path>
      </svg>
    </div>
  );
}
