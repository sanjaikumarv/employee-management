import React from "react";

const JOBS = [
  {
    name: "anethiestiest",
    jobs: "(241 jobs)",
  },
  {
    name: "anethiestiest",
    jobs: "(241 jobs)",
  },
  {
    name: "anethiestiest",
    jobs: "(241 jobs)",
  },
  {
    name: "anethiestiest",
    jobs: "(241 jobs)",
  },
  {
    name: "anethiestiest",
    jobs: "(241 jobs)",
  },
  {
    name: "anethiestiest",
    jobs: "(241 jobs)",
  },
];

export default function NavbarBottom() {
  return (
    <div className='sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto'>
      <div className='flex flex-wrap justify-center gap-5 sm:gap-2'>
        {JOBS.map((job) => {
          return (
            <>
              <div
                key={"1"}
                className=' bg-indigo-100 bg-opacity-20 rounded-md hover:shadow-xl  hover:bg-indigo-700 hover:scale-110 px-10 py-12 lg:px-8 lg:py-10'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 mx-auto '
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
                  />
                </svg>
                <h1 className='mt-2 '>{job.name}</h1>
                <p>{job.jobs}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
