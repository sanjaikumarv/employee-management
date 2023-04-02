import React from "react";
import { useField, ErrorMessage } from "formik";

const SelectInput = (props) => {
  const formProps = { ...props };
  const [field, meta] = useField(props);
  const hasError = meta.error && meta.touched;

  const required = props.required;
  const bgColor = props.disabled ? "bg-gray-100" : "bg-white";

  if (required) { 
    // Removing html defalut required
    delete formProps.required;
  }

  return (
    <div className='relative sm:static mt-3 sm:mt-7
    '>
      {formProps.label ? (
        <label
          htmlFor={formProps.id || formProps.name}
          className={`flex text-xs  font-medium leading-5  ${
            required ? "required" : ""
          }`}>
          {formProps.label}
        </label>
      ) : null}

      <select
        {...field}
        {...formProps}
        className={` dark:bg-white border-gray-300  border  py-1.5 px-2 w-full outline-none dark:placeholder-gray-200 rounded-md focus:ring-1 focus:ring-purple-600 ${
          props.disabled && " dark:bg-white bg-gray-100 dark:bg-opacity-10"
        }`}>
        {formProps.optionLoading
          ? "Loading..."
          : (formProps.options || []).map((x) => (
              <option
                className=' border-0 dark:bg-[#5f5f5f] focus:outline-none dark:placeholder-white rounded-md focus:ring-1 focus:ring-purple-600 w-full'
                key={x.value}
                value={x.value}>
                {x.label}
              </option>
            ))}
      </select>

      <ErrorMessage
        component='div'
        name={formProps.name}
        className='mt-1 text-sm text-red-500'
      />
    </div>
  );
};

export default SelectInput;
