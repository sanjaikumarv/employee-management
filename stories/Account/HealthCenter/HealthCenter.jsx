import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useCallback } from "react";
import * as Yup from "yup";
import { TextAreaInput, TextInput } from "../../../components/Common/Widgets";

const HealthCenterSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  contactnumber: Yup.number().required("Required"),
  address: Yup.string().required("Required"),
  address2: Yup.string().required("Required"),
  postcode: Yup.number().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  status: Yup.string().required("Required"),
});

export default function HealthCenter() {
  return (
    <div className='max-w-2xl mx-auto'>
      <Formik
        initialValues={{
          firstName: "",
          lastname: "",
          category: "",
          contactnumber: "",
          contactperson: "",
          address: "",
          address2: "",
          postcode: "",
          city: "",
          state: "",
          country: "",
          status: "",
        }}
        validationSchema={HealthCenterSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
        className='space-y-8 divide-t divide-gray-200 dark:divide-opacity-30'>
        {({ isSubmitting }) => (
          <Form className='space-y-8 divide-y divide-gray-200 dark:divide-opacity-30 sm:space-y-5'>
            <h3 className='text-lg leading-6 font-medium'>Health Center</h3>
            {/* photo field */}
            <div className='mt-6 sm:mt-5 space-y-6 sm:space-y-5'>
              <div className='sm:grid sm:grid-cols-3 border-gray-200 sm:gap-4 sm:items-center sm:border-t dark:border-opacity-20 sm:pt-5'>
                <label htmlFor='photo' className='block text-sm font-medium'>
                  Photo
                </label>
                <div className='mt-1 sm:mt-0 sm:col-span-2'>
                  <div className='flex items-center'>
                    <span className='h-12 w-12 rounded-full overflow-hidden bg-gray-100'>
                      <svg
                        className='h-full w-full text-gray-300'
                        fill='currentColor'
                        viewBox='0 0 24 24'>
                        <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                      </svg>
                    </span>
                    <button
                      type='button'
                      className='ml-5 bg-white py-2 px-3 border  border-gray-700 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-8 space-y-6 sm:pt-10 sm:space-y-5'>
              {/* Personal imformation text */}
              <div>
                <h3 className='text-lg leading-6 font-medium '>
                  Personal Information
                </h3>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 dark:border-opacity-30 sm:pt-5'>
                  <label
                    htmlFor='First Name'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    First Name
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput name='firstName' placeholder='First Name' />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    Last Name
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput name='lastname' placeholder='Last Name' />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='Category'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    Category
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput name='category' placeholder='Category' />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    Contact Number
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput
                      name='contactnumber'
                      placeholder='Contact Number'
                    />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    Contact Person
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput
                      name='contactperson'
                      placeholder='Contact Person'
                    />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='Address'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    Address 1
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextAreaInput name='address' placeholder='Address 1' />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='Address 2'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    Address 2
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextAreaInput name='address2' placeholder='Address 2' />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='PostCode'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    Post Code
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput name='postcode' placeholder='Post Code' />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='City'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    City
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput name='city' placeholder='City' />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='state'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    State
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput class name='state' placeholder='State' />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='Country'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    Country
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput class name='country' placeholder='Country' />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='Status'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    Status
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput name='status' placeholder='Status' />
                  </div>
                </div>
              </div>
            </div>

            <button type='submit' className='border-2'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
