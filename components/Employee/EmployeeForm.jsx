import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCallback, useState, useEffect } from "react";

import Router from "next/router";

import {
  CheckboxInput,
  RadioInput,
  SelectInput,
  TextInput,
  UploadInput,
} from "../Common/Widgets";
import useHttpClient from "../../lib/hooks/useHttpClient";
import { useMutation, useQuery } from "react-query";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  contact: Yup.number().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  gender: Yup.string().required("Required"),
  employeeId: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  maritialStatus: Yup.string().required("Required"),
  createdDate: Yup.string().required("Required"),
  salary: Yup.number().required("Required"),
  period: Yup.string().required("Required"),
});

export default function EmployeeForm() {
  const [usertypes, setUsertypes] = useState([]);

  const employeeId = Router.query.id;
  const axios = useHttpClient();
  const { mutate } = useMutation(
    "post-employee",
    (values) => {
      return axios.post("http://localhost:9002/employee/create", values);
    },
    {
      onSuccess(data) {
        alert(data?.data?.message);
        Router.push("/employee");
      },
      onError(error) {
        alert(error?.data?.response?.message);
      },
    }
  );
  const { mutate: update } = useMutation(
    "put-employee",
    (values) =>
      axios.put(`http://localhost:9002/employee/update/${employeeId}`, values),
    {
      onSuccess(data) {
        alert(data?.data?.message);
        Router.push("/employee");
      },
      onError(error) {
        alert(error?.data?.response?.message);
      },
    }
  );

  const { data: { data: employeeDetail } = {} } = useQuery(
    ["get-employee", employeeId],
    () => axios.get(`http://localhost:9002/employee/${employeeId}`),
    {
      enabled: !!employeeId,
    }
  );

  return (
    <div className='px-10 dark:bg-bgGray'>
      <div className='lg:p-10 max-w-4xl mx-auto'>
        <div className='dark:bg-bgForm rounded-lg shadow-xl '>
          <h1 className='text-4xl py-10 text-center font-bold text-black dark:text-white'>
            {employeeDetail ? "Update Employee" : " Create Employee"}
          </h1>
          <hr className='border-gray-700 dark:border-white border-opacity-20' />

          <div className='px-5 sm:px-0 md:py-10 md:px-14 '>
            <Formik
              initialValues={{
                firstName: employeeDetail?.firstName || "",
                lastName: employeeDetail?.lastName || "",
                contact: employeeDetail?.contact || "",
                email: employeeDetail?.email || "",
                gender: employeeDetail?.gender || "",
                employeeId: employeeDetail?.employeeId || "",
                address: employeeDetail?.address || "",
                maritialStatus: employeeDetail?.maritialStatus || "",
                createdDate: employeeDetail?.createdDate.slice(0, 10) || "",
                salary: employeeDetail?.salary || "",
                period: employeeDetail?.period || "",
              }}
              enableReinitialize
              validationSchema={RegisterSchema}
              onSubmit={(values, { setSubmitting }) => {
                if (employeeDetail) {
                  return update(values);
                }
                mutate(values);
                setSubmitting(false);
              }}>
              {({ isSubmitting }) => (
                <Form>
                  <section>
                    <div className='sm:grid sm:grid-cols-2 gap-x-10 gap-y-6'>
                      <div className='relative mt-5 lg:mt-0'>
                        <label htmlFor='First Name'>First Name</label>
                        <Field
                          type='text'
                          name='firstName'
                          placeholder='First Name'
                          className='mt-2 bg-white dark:bg-opacity-30   focus:border-gray-0 py-2 px-2 w-full focus:outline-none dark:placeholder-white rounded-md focus:ring-1 focus:ring-purple-600'
                        />
                        <ErrorMessage
                          className='text-red-400 absolute top-18'
                          name='firstName'
                          component='div'
                        />
                      </div>
                      <div className='relative mt-5 lg:mt-0'>
                        <label htmlFor='lastName'>Last Name</label>

                        <Field
                          type='text'
                          name='lastName'
                          placeholder='Last Name'
                          className='mt-2 bg-white dark:bg-opacity-30   focus:border-gray-0 py-2 px-2 w-full focus:outline-none dark:placeholder-white rounded-md focus:ring-1 focus:ring-purple-600'
                        />
                        <ErrorMessage
                          className='text-red-400 mb-2 absolute top-18'
                          name='lastName'
                          component='div'
                        />
                      </div>
                      <div className='relative mt-5 lg:mt-0'>
                        <label htmlFor='Email'>Email</label>

                        <Field
                          type='text'
                          name='email'
                          placeholder='Email'
                          className='mt-2 bg-white dark:bg-opacity-30   focus:border-gray-0 py-2 px-2 w-full focus:outline-none dark:placeholder-white rounded-md focus:ring-1 focus:ring-purple-600'
                        />
                        <ErrorMessage
                          className='text-red-400 absolute top-18'
                          name='email'
                          component='div'
                        />
                      </div>
                      <div className='relative mt-5 lg:mt-0'>
                        <label htmlFor='Contact'>Contact</label>
                        <Field
                          type='number'
                          name='contact'
                          placeholder='Contact'
                          className='mt-2 bg-white dark:bg-opacity-30   focus:border-gray-0 py-2 px-2 w-full focus:outline-none dark:placeholder-white rounded-md focus:ring-1 focus:ring-purple-600'
                        />
                        <ErrorMessage
                          className='text-red-400 absolute top-18'
                          name='contact'
                          component='div'
                        />
                      </div>

                      <div className='relative mt-5 lg:mt-0'>
                        <label htmlFor='employeeId'>Employee Id</label>
                        <Field
                          type='text'
                          name='employeeId'
                          placeholder='Employee Id..'
                          className='mt-2 bg-white dark:bg-opacity-30   focus:border-gray-0 py-2 px-2 w-full focus:outline-none dark:placeholder-white rounded-md focus:ring-1 focus:ring-purple-600'
                        />
                        <ErrorMessage
                          className='text-red-400 mb-2 absolute top-18'
                          name='lastName'
                          component='div'
                        />
                      </div>

                      <div className='relative mt-5 lg:mt-0'>
                        <label htmlFor='Created'>Created Date</label>
                        <Field
                          type='date'
                          name='createdDate'
                          className='mt-2 bg-white dark:bg-opacity-30   focus:border-gray-0 py-2 px-2 w-full focus:outline-none dark:placeholder-white rounded-md focus:ring-1 focus:ring-purple-600'
                        />
                        <ErrorMessage
                          className='text-red-400 mb-2 absolute top-18'
                          name='lastName'
                          component='div'
                        />
                      </div>
                      <div className='relative mt-5 lg:mt-0'>
                        <label htmlFor='Salary'>Salary</label>
                        <Field
                          type='number'
                          name='salary'
                          placeholder='Salary...'
                          className='mt-2 bg-white dark:bg-opacity-30   focus:border-gray-0 py-2 px-2 w-full focus:outline-none dark:placeholder-white rounded-md focus:ring-1 focus:ring-purple-600'
                        />
                        <ErrorMessage
                          className='text-red-400 absolute top-18'
                          name='salary'
                          component='div'
                        />
                      </div>
                      <div>
                        <label htmlFor='Period'>Period</label>
                        <Field
                          as='select'
                          className='mt-2 bg-white dark:bg-opacity-30   focus:border-gray-0 py-2 px-2 w-full focus:outline-none dark:placeholder-white rounded-md focus:ring-1 focus:ring-purple-600'
                          name='period'>
                          <option value=''>Select</option>
                          <option value='Monthy'>Monthly</option>
                          <option value='yearly'>Yearly</option>
                          <option value='Weekly'>Weekly</option>
                          <option value='Day'>Day</option>
                        </Field>
                        <ErrorMessage
                          className='text-red-400 absolute top-18'
                          name='period'
                          component='div'
                        />
                      </div>
                      <div>
                        <RadioInput
                          name='gender'
                          label='Gender'
                          options={[
                            { label: "Male", value: "Male" },
                            {
                              label: "Female",
                              value: "Female",
                            },
                          ]}
                        />
                      </div>
                      <div>
                        <RadioInput
                          name='maritialStatus'
                          label='Maritial Status'
                          options={[
                            { label: "Married", value: "Married" },
                            {
                              label: "Single",
                              value: "Single",
                            },
                          ]}
                        />
                      </div>
                    </div>
                    <div className='relative mt-5 lg:mt-0'>
                      <label htmlFor='Address'>Address</label>
                      <Field
                        as='textarea'
                        name='address'
                        placeholder='Address'
                        className='mt-2 bg-white dark:bg-opacity-30   focus:border-gray-0 py-2 px-2 w-full focus:outline-none dark:placeholder-white rounded-md focus:ring-1 focus:ring-purple-600'
                      />
                      <ErrorMessage
                        className='text-red-400 mb-2 absolute top-18'
                        name='address'
                        component='div'
                      />
                    </div>
                  </section>
                  <div className='mt-8 flex justify-center'>
                    <button className='px-8 py-1 bg-blue-600 text-white rounded-md '>
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
