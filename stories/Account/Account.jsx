import React from "react";
import { useState } from "react";

export default function Account({ Popup, setPopup }) {
  return (
    <div>
      <button
        onClick={() => setPopup(!Popup)}
        className='inline-flex font-medium border-black dark:border-white text-base hover:text-purple-600 border dark:hover:border-purple-600 p-4 hover:border-purple-600 rounded-full focus:ring-offset-2'>
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
            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'></path>
        </svg>
      </button>
    </div>
  );
}
