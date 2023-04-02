import { useField, ErrorMessage } from "formik";

const TextInput = (props) => {
  const formProps = { ...props };
  const [field, meta] = useField(props);
  const hasError = meta.error && meta.touched;

  const required = props.required;
  const bgColor = props.disabled ? "bg-gray-100 " : "";

  if (required) {
    // Removing html defalut required
    delete formProps.required;
  }

  return (
    <div>
      {formProps.label ? (
        <label
          htmlFor={formProps.id || formProps.name || formProps.label}
          className={`flex text-md font-normal leading-5 ${
            required ? "required" : ""
          }`}>
          {formProps.label}
        </label>
      ) : null}
      <input
        placeholder={props.placeholder || ""}
        aria-label={formProps.id || formProps.name || formProps.label}
        {...field}
        type={props.type || "text"}
        {...formProps}
        className={`block mt-1 sm:mt-2 w-full sm:text-sm rounded-md bg-white border border-gray-300 focus:ring-1   ${
          props?.className || ""
        } ${props.disabled && "dark:bg-white dark:bg-opacity-10 bg-gray-100"}`}
      />

      <ErrorMessage
        component='div'
        name={formProps.name}
        className='mt-1 text-sm text-red-500'
      />
    </div>
  );
};

export default TextInput;
