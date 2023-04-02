import React from "react";

//import useTheme from "../../../lib/hooks/useTheme";
//import { useAuth } from "../../../lib/contexts/AuthContext";
//import LoggedInOnly from "../../Common/LoggedInOnly";
//import AccountMain from "../Account/AccountMain";

export default function MobileSignup() {
  return (
    <div className='flex space-x-2 items-center'>
      <div className='flex gap-x-3'>
        <div className='flex gap-5'>
          <button className=' font-medium text-base hover:text-purple-600'>
            Signup
          </button>
          /
          <button className=' font-medium text-base hover:text-purple-600'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
