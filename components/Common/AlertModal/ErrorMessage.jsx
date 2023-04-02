import React from "react";
import { usePopup } from "../../../lib/contexts/PopupContext";
import ErrorMessageSVG from "../../SVG/ErrorMessageSVG";
import ShowErrorSVG from "../../SVG/ShowErrorSVG";

function ErrorMessage({ errorAlert }) {
  const { showError } = usePopup();

  return (
    <div
      aria-live='assertive'
      className='z-20 fixed inset-0 flex px-4 py-6 pointer-events-none sm:p-6 sm:items-start'>
      <div className='w-full flex flex-col items-center space-y-4 '>
        <div className='max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div className='p-4'>
            <div className='flex items-start'>
              <div className='flex-shrink-0'>
               <ErrorMessageSVG/>
              </div>
              <div className='ml-3 w-0 text-center  flex-1 pt-0.5'>
                <p className='text-lg font-medium text-gray-500'>
                  {errorAlert}
                </p>
              </div>
              <div className='ml-4 flex-shrink-0 flex'>
                <button className='bg-white rounded-md inline-flex text-gray-500 hover:text-gray-500 focus:outline-none focus:ring-2 '>
                  <span className='sr-only'>Close</span>
                 <ShowErrorSVG  showError={ showError}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
