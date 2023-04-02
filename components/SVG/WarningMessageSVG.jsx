import React from "react";

export default function WarningMessageSVG() {
  return (
    <div className='flex-shrink-0 flex items-center justify-center  rounded-full text-yellow-500'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-[1.6rem] w-[1.6rem]'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    </div>
  );
}
