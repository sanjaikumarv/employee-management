import Input from "./Input";
import React from "react";
import Image from "next/image";
import NumberOption from "./NumberOption";
import NameOption from "./NameOption";
import SearchButton from "./SearchButton";
import NavbarBottom from "./NavbarBottom";
import HeaderNavbar from "./Header/HeaderNavbar";
import HeaderSignup from "./Header/HeaderSignup";

import PopUP from "./Header/PopUp";

export default function Home() {
  return (
    <div className='background-image'>
      <header className='flex justify-between px-5  py-5 lg:px-14 lg:py-5'>
        <HeaderNavbar />
        <HeaderSignup />
        <PopUP />
      </header>
      <div className='mt-14 p-6 md:p-24 md:mt-5 lg:mt-14 lg:px-40'>
        <div className=''>
          <h1 className='text-[#60c9ea] text-4xl md:text-6xl  font-normal '>
            THE MALAYSIA’S NO1
          </h1>
          <h1 className='text-white  text-4xl md:text-5xl  mt-2 font-extralight'>
            LOCUM DOCTOR AGENCY
          </h1>
        </div>

        <div className=' space-y-10 lg:space-y-0 lg:flex block mt-5 sm:mt-10 gap-y-10   lg:gap-x-5 md:gap-y-5 sm:mx-0 md:max-w-3xl lg:max-w-[56rem] lg:px-[2rem]  p-8 lg:py-6 bg-opacity-20 bg-indigo-50 rounded-lg shadow-2xl lg:mt-10  md:p-10 '>
          <Input />
          <NameOption />
          <NumberOption />
          <div className='text-center lg:text-base'>
            <SearchButton />
          </div>
        </div>
        <div className='mt-5 px-10 sm:px-0 sm:mt-14 lg:mt-10  max-w-2xl lg:max-w-[54rem]'>
          <p className='text-white text-sm md:text-base font-semibold'>
            Trending Keywords:
            <span className='font-light ml-2'>
              General, Medicine - Cardiology, Medicine -
              Endocrinology,Neurology, Medicine - Palliative Care, Medicine -
              Rehabilitation,Respiratory, Medicine - Strok{" "}
            </span>
          </p>
        </div>
      </div>
      <div className='px-6 mt-10 sm:px-0 bg-opacity-20 text-white '>
        <NavbarBottom />
      </div>
    </div>
  );
}
