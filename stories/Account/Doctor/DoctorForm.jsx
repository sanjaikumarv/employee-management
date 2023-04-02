import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useCallback } from "react";
import * as Yup from "yup";
import { TextInput } from "../../../components/Common/Widgets";

const DoctorFormSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  qualification: Yup.string().required("Required"),
  specialist: Yup.string().required("Required"),
  experience: Yup.string().required("Required"),
});

export default function DoctorForm() {
  return (
    <div className='max-w-2xl mx-auto'>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          qualification: "",
          specialist: "",
          experience: "",
        }}
        validationSchema={DoctorFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
        className=' space-y-8 divide-y dark:divide-opacity-20 divide-gray-200'>
        {({ isSubmitting }) => (
          <Form className='space-y-8 divide-y dark:divide-opacity-30 divide-gray-200 sm:space-y-5'>
            <h3 className='text-lg leading-6 font-medium'>Health Center</h3>

            <div className='mt-6 sm:mt-5 space-y-6 sm:space-y-5'>
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t dark:sm:border-black sm:pt-5'>
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
                      className='ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-8 space-y-6 sm:pt-10 sm:space-y-5'>
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
                    htmlFor='Last Name'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    Last Name
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput name='lastName' placeholder='Last Name' />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='Qualification'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    Category
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput
                      name='qualification'
                      placeholder='Qualification'
                    />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='Specialist'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    Contact Number
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput name='specialist' placeholder='Specialist' />
                  </div>
                </div>
              </div>
              <div className='space-y-6 sm:space-y-5'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t dark:border-opacity-30 sm:border-gray-200 sm:pt-5'>
                  <label
                    htmlFor='Experience'
                    className='block text-sm font-medium sm:mt-px sm:pt-2'>
                    Experience
                  </label>
                  <div className='col-span-2 max-w-lg sm:max-w-xs '>
                    <TextInput name='experience' placeholder='Experience' />
                  </div>
                </div>
              </div>
            </div>
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
