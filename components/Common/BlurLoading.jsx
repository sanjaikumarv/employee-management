import { BlurLoadingSVG } from "../SVG/BlurLoadingSVG";

function BlurLoading() {
  return (
    <div
      className='fixed inset-0 z-50 overflow-y-auto'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'>
      <div className='flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
        <div
          className='fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity'
          aria-hidden='true'></div>
        <span
          className='hidden sm:inline-block sm:h-screen sm:align-middle'
          aria-hidden='true'>
          &#8203;
        </span>
        <BlurLoadingSVG />
      </div>
    </div>
  );
}

export default BlurLoading;
