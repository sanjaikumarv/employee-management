import { useField, ErrorMessage } from "formik";
import React from "react";
import Select from "react-select";

export default function MultiSelectInput({ options = [], name, isDisabled }) {
  const [field, meta, helpers] = useField({ name });
  const { serError, setTouched, setValue } = helpers;
  return (
    <div>
      <Select
        className='dark:text-white text-black '
        closeMenuOnSelect={false}
        onChange={(options) => {
          setValue(options.map((op) => op.value));
        }}
        value={options.filter((o) => field.value.includes(o.value))}
        onBlur={() => {
          setTouched(true);
        }}
        isDisabled={isDisabled}
        isMulti
        options={options}
      />
      <ErrorMessage
        component='div'
        name={name}
        className='mt-1 text-sm text-red-500'
      />
    </div>
  );
}
