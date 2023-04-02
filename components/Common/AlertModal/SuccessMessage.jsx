import React from "react";
import { usePopup } from "../../../lib/contexts/PopupContext";
import ShowSuccessSVG from "../../SVG/ShowSuccessSVG";
import SuccessMessageSVG from "../../SVG/SuccessMessageSVG";

function SuccessMessage({ successAlert }) {
  const { showSuccess } = usePopup();
  return (
    <div
      aria-live='assertive'
      className='z-20 fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start'>
      <div className='w-full flex flex-col items-center space-y-4 '>
        <div className='max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div className='p-4'>
            <div className='flex items-start '>
              <div className='flex-shrink-0 mt-1'>
                <SuccessMessageSVG />
              </div>
              <div className='ml-3 w-0 text-center  flex-1 pt-0.5'>
                <p className='text-lg font-medium text-gray-500'>
                  {successAlert}
                </p>
              </div>
              <div className='ml-4 flex-shrink-0 flex '>
                <button className='inline-flex text-gray-500 hover:text-gray-500 focus:outline-none focus:ring-2 '>
                  <span className='sr-only'>Close</span>
                  <ShowSuccessSVG showSuccess={showSuccess} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessMessage;
