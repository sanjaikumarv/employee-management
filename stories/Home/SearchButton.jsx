import React from "react";

export default function SearchButton() {
  return (
    <div>
      <button
        type='button'
        className='inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-xl  text-[#FFFF] hover:text-[#000000] shadow-sm text-white bg-hiti-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4  '
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
        <span className='ml-1 '>Search</span>
      </button>
    </div>
  );
}
