import React from "react";

const SELECT_OPTION_NAME = [
  { name: "Sungai petani" },
  { name: "Penang" },
  { name: "johor" },
];

export default function NameOption() {
  return (
    <div>
      <select className=' rounded-xl  focus:ring-2 dark:focus:ring-purple-600 text-black w-full lg:w-[12rem] focus:outline-none'>
        {SELECT_OPTION_NAME.map((option) => {
          return (
            <option key={1} value=''>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
