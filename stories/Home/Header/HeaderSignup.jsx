import React from "react";
import Router from "next/router";

export default function HeaderSignup() {
  return (
    <div className=''>
      <div className='flex ml-2 '>
        <button
          onClick={() => {
            Router.push("/Auth/SignUp");
          }}
          className='text-base hover:text-purple-600   dark:border-white hover:border-purple-600 mx-2'>
          Signup
        </button>
        /
        <button
          onClick={() => {
            Router.push("/Auth/SignIn");
          }}
          className='text-base hover:text-purple-600  dark:border-white  hover:border-purple-600 mx-2 '>
          Login
        </button>
      </div>
    </div>
  );
}
