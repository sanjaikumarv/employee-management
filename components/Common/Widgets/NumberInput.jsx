import { useField, ErrorMessage } from "formik";

const NumericInput = (props) => {
  const formProps = { ...props };
  const [field, meta] = useField(props);
  const hasError = meta.error && meta.touched;

  const required = props.required;
  const bgColor = props.disabled ? "bg-gray-100" : "";

  if (required) {
    // Removing html defalut required
    delete formProps.required;
  }

  return (
    <div className='my-2'>
      {formProps.label ? (
        <label
          htmlFor={formProps.id || formProps.name}
          className={`block flex text-sm max-w-2xl font-medium leading-5 text-gray-700 mb-2 ${
            required ? "required" : ""
          }`}>
          {formProps.label}
        </label>
      ) : null}

      <input
        {...field}
        {...formProps}
        className={`block w-full shadow-sm sm:text-sm px-3 py-2 rounded-md border focus:outline-none border-gray-200 ${bgColor}  ${
          hasError ? "border-red-500" : ""
        }`}
        type='number'
      />

      <ErrorMessage
        component='div'
        name={formProps.name}
        className='mt-1 text-sm text-red-500'
      />
    </div>
  );
};

export default NumericInput;
