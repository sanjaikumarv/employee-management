import React from "react";
import { usePopup } from "../../../lib/contexts/PopupContext";
import ShowWarningSVG from "../../SVG/ShowWarningSVG";
import WarningMessageSVG from "../../SVG/WarningMessageSVG";

function WarningMessage({ warningAlert }) {
  const { showWarning } = usePopup();

  return (
    <div
      aria-live='assertive'
      className='z-20 fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start'>
      <div className='w-full flex flex-col items-center space-y-4'>
        <div className='max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div className='p-4'>
            <div className='flex items-start'>
              <div className='flex-shrink-0'>
                <WarningMessageSVG />
              </div>
              <div className='ml-3 w-0 text-center flex-1 pt-0.5'>
                <p className='text-md font-medium text-gray-700'>
                  {warningAlert}
                </p>
              </div>
              <div className='ml-4 flex-shrink-0 flex'>
                <button className='bg-white rounded-md inline-flex text-gray-500 hover:text-gray-500 focus:outline-none '>
                  <span className='sr-only'>Close</span>
                  <ShowWarningSVG showWarning={showWarning} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarningMessage;
