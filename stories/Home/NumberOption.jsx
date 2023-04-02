import React from "react";

const SELECT_OPTION_VALUE = [
  { value: "" },
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5+" },
];

export default function NumberOption() {
  return (
    <div>
      <select className=' rounded-xl w-full md:pr-0 lg:w-48  focus:outline-none'>
        {SELECT_OPTION_VALUE.map((option) => {
          return (
            <option key={1} value=''>
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
