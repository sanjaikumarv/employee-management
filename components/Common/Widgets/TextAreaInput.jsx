import { useField, ErrorMessage } from "formik";

const TextAreaInput = (props) => {
  const formProps = { ...props };
  const [field, meta] = useField(props);
  const hasError = meta.error && meta.touched;

  const required = props.required;
  const bgColor = props.disabled ? "bg-gray-100" : "";

  if (required) {
    // Removing html defalut required
    delete formProps.required;
  }
  const rows = props.rows || 4;
  return (
    <div className='my-2'>
      {formProps.label ? (
        <label
          htmlFor={formProps.id || formProps.name}
          className={`block text-sm font-medium leading-5 text-gray-700 ${
            required ? "required" : ""
          }`}>
          {formProps.label}
        </label>
      ) : null}

      <textarea
        {...field}
        {...formProps}
        className={`block w-full mt-1.5 sm:text-sm px-3 py-2 rounded-md bg-white border border-gray-300 dark:placeholder-white focus:ring-1 focus:ring-purple-600 ${bgColor}  ${
          hasError ? "border-red-500" : ""
        } ${props.disabled && "dark:bg-white dark:bg-opacity-10 bg-gray-100 "}`}
        rows={rows}
      />

      <ErrorMessage
        component='div'
        name={formProps.name}
        className='mt-1 text-sm left-0 top-15 text-red-500'
      />
    </div>
  );
};

export default TextAreaInput;
