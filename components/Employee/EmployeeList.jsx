import axios from "axios";
import Router from "next/router";
import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";

export default function EmployeeList() {
  const [employeeId, setEmployeeId] = useState();
  const { data: { data: employees = [] } = {}, refetch } = useQuery(
    "get-employees",
    () => axios.get("http://localhost:9002/employee"),
    {
      onSuccess(data) {
        setEmployeeId(data.data[0]?._id);
      },
    }
  );

  const { mutate } = useMutation(
    "delete-employee",
    (values) => {
      return axios.post(`http://localhost:9002/employee/delete-one`, values);
    },
    {
      onSuccess(data) {
        alert(data?.data?.message);
        refetch();
      },
      onError(error) {
        alert(error?.data?.response?.message);
      },
    }
  );
  const { mutate: detete } = useMutation(
    "delete-employees",
    (values) => axios.post(`http://localhost:9002/employee/delete`),

    {
      onSuccess(data) {
        alert(data?.data?.message);
        refetch();
      },
      onError(error) {
        alert(error?.data?.response?.message);
      },
    }
  );

  const { data: { data: employeeDetail } = {} } = useQuery(
    ["get-employee", employeeId],
    () => {
      if (employeeId)
        return axios.get(`http://localhost:9002/employee/${employeeId}`);
    }
  );

  return (
    <div className='p-8 mt-8 max-w-6xl mx-auto'>
      <div className='flex justify-between'>
        <div className='flex'>
          <h1 className='text-4xl font-semibold'>Employee Details</h1>
        </div>

        <button
          className=' bg-blue-500 rounded-md px-4 py-0.5 text-white'
          onClick={() => Router.push("/employee/new")}>
          Create
        </button>
      </div>
      <div className="flex mt-5 space-x-4" >
        <div>
          <button
            className=' bg-blue-500 rounded-md px-4 py-0.5 text-white'
            onClick={() => Router.push("/employee/trash")}>
            View Trash
          </button>
        </div>
        <div className='space-x-4'>
          <button
            className=' bg-blue-500 rounded-md px-4 py-0.5 text-white'
            onClick={() => detete()}>
            Delete All
          </button>
        </div>
      </div>
      <div className='flex space-x-4 my-4'>
        {employees.length > 0 ? (
          <div className=''>
            {employees.map((emp) => {
              return (
                <div
                  onClick={() => setEmployeeId(emp._id)}
                  key={emp._id}
                  className={`rounded-md p-2 mt-5 hover:cursor-pointer bg-sandle-100 border shadow-md ${
                    employeeId === emp._id && "border border-blue-400"
                  }`}>
                  <div className='flex justify-between'>
                    <p>
                      {emp.firstName}
                      {emp.lastName}
                    </p>
                    <div className='flex space-x-2'>
                      <div onClick={() => mutate({ id: emp._id })}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='w-4 h-4 text-red-500 hover:cursor-pointer'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                          />
                        </svg>
                      </div>
                      <div onClick={() => Router.push(`/employee/${emp._id}`)}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='w-4 h-4 text-blue-500 hover:cursor-pointer'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p>{emp.email}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Employee details not found</div>
        )}
        <EmployeeDetail employeeDetail={employeeDetail} />
      </div>
    </div>
  );
}

function EmployeeDetail({ employeeDetail }) {
  return (
    <div className='mt-3 p-2'>
      <div className='mx-auto w-[800px]'>
        <div className=' rounded-xl shadow-md bg-sandle-100 dark:bg-bgForm px-4 sm:px-6 lg:px-8 py-10 '>
          <div className='sm:pb-1'>
            <h1 className='text-4xl text-center font-bold'>Employee Details</h1>
          </div>

          <hr className='dark:opacity-40 mt-5' />
          {employeeDetail ? (
            <div className='mt-6 px-4 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-400'>
                    Employee Name
                  </dt>
                  <dd className='mt-1 text-sm '>
                    {employeeDetail?.firstName}
                    {employeeDetail?.lastName}
                  </dd>
                </div>

                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-400'>Contact</dt>
                  <dd className='mt-1 text-sm '>{employeeDetail?.contact}</dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-400'>Email</dt>
                  <dd className='mt-1 text-sm '>{employeeDetail?.email}</dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-400'>Gender</dt>
                  <dd className='mt-1 text-sm '>{employeeDetail?.gender}</dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-400'>
                    Employee Id
                  </dt>
                  <dd className='mt-1 text-sm '>
                    {employeeDetail?.employeeId}
                  </dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-400'>
                    Marritial Status
                  </dt>
                  <dd className='mt-1 text-sm '>
                    {employeeDetail?.maritialStatus}
                  </dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-400'>
                    Create Date
                  </dt>
                  <dd className='mt-1 text-sm '>
                    {employeeDetail?.createdDate?.slice(0, 10)}
                  </dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-400'>Salary</dt>
                  <dd className='mt-1 text-sm '>{employeeDetail?.salary}</dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-sm font-medium text-gray-400'>Period</dt>
                  <dd className='mt-1 text-sm '>{employeeDetail?.period}</dd>
                </div>
                <div className='sm:col-span-2'>
                  <dt className='text-sm font-medium text-gray-400'>Address</dt>
                  <dd className='mt-1 text-sm '>{employeeDetail?.address}</dd>
                </div>
              </div>
            </div>
          ) : (
            <div className='text-center mt-5'>Employee Detail not found</div>
          )}
        </div>
      </div>
    </div>
  );
}
