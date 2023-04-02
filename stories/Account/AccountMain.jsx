import React from "react";
import Account from "./Account";
import AccountPopup from "./AccountPopup";
import { useState } from "react";

export default function AccountMain() {
  const [Popup, setPopup] = useState();
  return (
    <div>
      <div className='relative'>
        <Account Popup={Popup} setPopup={setPopup} />

        <div className=''>
          <AccountPopup />
        </div>
      </div>
    </div>
  );
}
