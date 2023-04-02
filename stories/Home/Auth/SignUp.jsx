import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Yup from "yup";

export default function SignUp() {
  return (
    <div className='p-10'>
      <h1 className='text-5xl text-center font-bold text-gray-600'>Signup</h1>
      <div className='p-10 max-w-5xl mx-auto'>
        <div className='p-5 bg-[#f9f9f9] rounded-lg shadow-xl border-[#f9f9f9]'>
          <div className='p-4 lg:px-10 lg:py-10 '>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                phone: "",
                email: "",
                password: "",
                conformpassword: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.firstname) {
                  errors.firstname = "Required";
                }
                if (!values.lastname) {
                  errors.lastname = "Required";
                }
                if (!values.phone) {
                  errors.phone = "Required";
                }
                if (!values.password) {
                  errors.password = "Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}>
              {({ isSubmitting }) => (
                <Form>
                  <div className=''>
                    <div className='lg:flex lg:gap-x-14'>
                      <div className=''>
                        <label htmlFor='First Name' className='text-gray-500'>
                          First Name
                        </label>
                        <br />
                        <Field
                          type='firstname'
                          name='firstname'
                          placeholder='First Name'
                          className='border-[1px]  mt-2 py-2 w-full px-2 lg:pr-[8rem] rounded-md focus:outline-none focus:border-2 placeholder-gray-400 focus:border-indigo-700'
                        />
                        <ErrorMessage
                          name='firstname'
                          className='text-red-400'
                          component='div'
                        />
                      </div>
                      <div className='mt-5 md:mt-0'>
                        <label htmlFor='Last Name' className='text-gray-500'>
                          Last Name
                        </label>
                        <br />
                        <Field
                          type='lastname'
                          name='lastname'
                          className='border-[1px] mt-2 py-2 px-2 w-full lg:pr-[8rem] rounded-md focus:outline-none  focus:border-2 placeholder-gray-400  focus:border-indigo-700'
                          placeholder='Last Name'
                        />
                        <ErrorMessage
                          className='text-red-400'
                          name='lastname'
                          component='div'
                        />
                      </div>
                    </div>
                    <div className='lg:flex lg:mt-4 lg:gap-x-14'>
                      <div className='mt-5 md:mt-0'>
                        <label htmlFor='phone' className='text-gray-500'>
                          Phone
                        </label>
                        <br />
                        <Field
                          type='phone'
                          name='phone'
                          className='border-[1px] mt-2 py-2 px-2 w-full lg:pr-[8rem] rounded-md focus:outline-none  focus:border-2 placeholder-gray-400  focus:border-indigo-700'
                          placeholder='Phone'
                        />
                        <ErrorMessage
                          className='text-red-400'
                          name='phone'
                          component='div'
                        />
                      </div>
                      <div className='mt-5 md:mt-0'>
                        <label htmlFor='Email' className='text-gray-500'>
                          Email
                        </label>
                        <br />
                        <Field
                          type='email'
                          name='email'
                          placeholder='Email'
                          className='border-gray-200 mt-2 focus:border-gray-0 py-2 px-2 w-full lg:pr-[8rem] focus:outline-none  focus:border-indigo-700 placeholder-gray-400  focus:border-2 rounded-md'
                        />
                        <ErrorMessage
                          className='text-red-400'
                          name='email'
                          component='div'
                        />
                      </div>
                    </div>
                    <div className='lg:flex lg:gap-x-14 lg:mt-4'>
                      <div className='mt-5 md:mt-0'>
                        <label htmlFor='password' className='text-gray-500'>
                          Password
                        </label>
                        <br />
                        <Field
                          type='password'
                          name='password'
                          placeholder='Password'
                          className='border-gray-300 mt-2 py-2 px-2 w-full lg:pr-[8rem] focus:outline-none  focus:border-indigo-700 placeholder-gray-400  focus:border-2 rounded-md'
                        />
                        <ErrorMessage
                          className='text-red-400'
                          name='password'
                          component='div'
                        />
                      </div>
                      <div className='mt-5 md:mt-0'>
                        <label
                          htmlFor='Conform Password'
                          className='text-gray-500'>
                          Conform Password
                        </label>
                        <br />
                        <Field
                          type='password'
                          name='conformpassword'
                          placeholder='Conform Password'
                          className='border-gray-300 mt-2 py-2 px-2 w-full lg:pr-[8rem] focus:outline-none  focus:border-indigo-700 placeholder-gray-400  focus:border-2 rounded-md'
                        />
                        <ErrorMessage
                          className='text-red-400'
                          name='password'
                          component='div'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='flex mt-10 justify-center'>
                    <Field
                      type='checkbox'
                      name='radio'
                      className='border-gray-500 mt-1 md:mt-0.5 rounded-[0.250rem] focus:ring-0'
                    />
                    <p className='ml-2 text-sm sm:text-base max-w-[22rem] md:max-w-full text-gray-500'>
                      I agreed to the
                      <a
                        href=''
                        className='text-indigo-700 ml-1 mr-1 hover:underline hover:font-medium'>
                        Terms and Conditions
                      </a>
                      governing the use of jobportal
                    </p>
                  </div>
                  <div className=' lg:max-w-[12rem] lg:mx-auto'>
                    <button
                      type='submit'
                      className='border mt-8 py-2 w-full  text-center text-xl flex justify-center px-4  items-center rounded-lg font-bold text-white border-indigo-700 bg-hiti-400 hover:bg-hiti-600 focus:shadow-lg'
                      disabled={isSubmitting}>
                      Create Account
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <p className='text-center text-gray-500 mt-10'>
              Already a member
              <a
                href=''
                className='text-indigo-700 hover:underline ml-2 hover:font-medium'>
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
