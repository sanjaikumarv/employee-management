import React from "react";
import MobileHeaderSVG from "./MobileHeaderSVG";
import MobileNavbar from "./MobileNavbar";
import MobileSignup from "./MobileSignup";

export default function MobileSidebar() {
  return (
    <div className='space-y-4 max-w-xs bg-bgForm p-5 '>
      <div className=''>
        <MobileHeaderSVG />
      </div>
      <div className='space-y-5 py-5 border-t-2 border-white border-opacity-30'>
        <MobileNavbar />
        <MobileSignup />
      </div>
    </div>
  );
}
