import { useField, ErrorMessage } from "formik";

const CheckboxInput = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.

  // Formik does this too! When you specify `type` to useField(), it will

  // return the correct bag of props for you

  const [field, meta, helpers] = useField({ ...props, type: "checkbox" });

  return (
    <div className='relative'>
      <div>
        <input
          type='checkbox'
          {...field}
          {...props}
          checked={meta.value === true ? true : false}
          onChange={() => {
            helpers.setValue(meta.value === true ? false : true);
          }}
          className='mt-2.5 rounded-[4px]'
        />

        <label className='checkbox ml-1'>{children}</label>
      </div>
      <div className='absolute top-18'>
        <ErrorMessage
          component='div'
          name={props.name}
          className='mt-1 text-sm text-red-500'
        />
      </div>
    </div>
  );
};

export default CheckboxInput;
