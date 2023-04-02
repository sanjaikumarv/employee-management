import React from "react";

import Select from "react-select";
// import makeAnimated from "react-select/animated";
// const animatedComponents = makeAnimated();

export default function MultiSelectInput({ options = [] }) {
  return (
    <Select
      className='dark:text-white text-black'
      closeMenuOnSelect={false}
      // components={animatedComponents}
      isMulti
      options={options}
    />
  );
}
