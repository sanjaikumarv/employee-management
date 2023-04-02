import { useState } from "react";
import { validateFileSizeAndExtension } from "./file.upload.util";

function formatFileSize(bytes, decimalPoint) {
  if (bytes === 0) return "0 Bytes";
  var k = 1000,
    dm = decimalPoint || 2,
    sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

const ALLOWED_FORMATS = ["jpeg", "jpg", "png", "pdf", "txt"];
const MAX_FILE_SIZE = 2; // 2MB

const UploadDocument = (props) => {
  const {
    allowedExtension,
    maxFileSize,
    onChange,
    errorMessage,
    disabled,
    onBlur,
  } = props;

  const [uploadFile, setUploadFile] = useState(null);

  const extension = allowedExtension || ALLOWED_FORMATS;
  const maxSize = Number(maxFileSize) || MAX_FILE_SIZE;

  let inputBorderStyle =
    "mt-1 w-full flex rounded-md shadow-sm border rounded-none rounded-l-md";

  if (errorMessage) {
    inputBorderStyle =
      "mt-1 flex w-full rounded-md shadow-sm border border-red-400 rounded-none rounded-l-md";
  }

  return (
    <div className={inputBorderStyle}>
      <div
        className={`relative flex-grow focus-within:z-10 ${
          disabled && "bg-gray-100"
        }`}>
        <label className='w-full rounded-none rounded-l-md absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer transition ease-in-out duration-150 sm:text-sm sm:leading-5'>
          <svg
            className='h-5 w-5 text-gray-400'
            viewBox='0 0 24 24'
            fill='currentColor'>
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M14 13.5V8a4 4 0 1 0-8 0v5.5a6.5 6.5 0 1 0 13 0V4h2v9.5a8.5 8.5 0 1 1-17 0V8a6 6 0 1 1 12 0v5.5a3.5 3.5 0 0 1-7 0V8h2v5.5a1.5 1.5 0 0 0 3 0z' />
          </svg>
          <span
            className='text-md font-semibold text-gray-400 ml-1 truncate w-10/12'
            data-toggle='tooltip'
            title={uploadFile ? uploadFile.name : "Choose file"}>
            {uploadFile ? uploadFile.name : "Choose file"}
          </span>
          <input
            type='file'
            className='hidden'
            disabled={disabled}
            onBlur={onBlur}
            onChange={(e) => {
              const file = e.target.files[0];

              const validFile = validateFileSizeAndExtension(
                file,
                extension,
                maxSize
              );

              if (file && validFile) {
                // file.allowedFileTypes = extension;
                // file.maxFileSize = maxSize;
                setUploadFile(file);
                onChange(file);
              } else {
                setUploadFile(null);
                onChange(null);
                e.target.value = null;
              }
            }}
          />
        </label>
      </div>
      <div
        className={`relative inline-flex items-center ${
          disabled && "bg-gray-100"
        }`}>
        <span className='-ml-px relative inline-flex items-center px-4 py-2 text-sm text-gray-400 leading-5 font-medium rounded-r-md'>
          {uploadFile ? <>{formatFileSize(uploadFile.size)}</> : null}
        </span>

        <button
          aria-label={`Close`}
          onClick={() => {
            setUploadFile(null);
            onChange(null);
          }}
          type='button'
          className='-ml-px relative inline-flex items-center px-4 py-2 text-sm leading-5 font-medium text-gray-500 rounded-r-md focus:outline-none focus:shadow-outline-blue'>
          <svg
            className='h-5 w-5 text-gray-700'
            viewBox='0 0 24 24'
            fill='currentColor'>
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UploadDocument;
