import React from "react";

export default function AccountPopup() {
  return (
    <div className='w-[18rem]'>
      <div className='dark:bg-bgForm bg-sandle-100 text-purple-600 rounded-xl'>
        <div className='px-5'>
          <div className='flex justify-center p-3'>
            <p className=' border rounded-full  p-1.5'>U I</p>
            <p className='mt-1.5 ml-2'>User Name</p>
          </div>
          <hr className='mb-5' />
          <div className='space-y-5'>
            <div className='flex justify-between '>
              <p>Profile</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <hr />
            <div className='flex justify-between '>
              <p>Profile</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <hr />
            <div className='text-center pb-5'>
              <button className='inline-flex font-medium text-base hover:text-purple-600 border border-white dark:border-white dark:hover:border-purple-600 hover:border-purple-600 rounded-lg px-14 py-1.5 focus:ring-offset-2 '>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
