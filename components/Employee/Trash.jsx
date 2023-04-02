import axios from "axios";
import Router from "next/router";
import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";

export default function Trash() {
  const [employeeId, setEmployeeId] = useState();
  const { data: { data: employees = [] } = {}, refetch } = useQuery(
    "get-employees",
    () => axios.get("http://localhost:9002/employee/trash")
  );

  const { mutate } = useMutation(
    "delete-employees",
    () =>
      axios.delete(
        `http://localhost:9002/employee/delete-employees-from-trash`
      ),
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
    ["delete-employee"],
    (values) =>
      axios.post(
        `http://localhost:9002/employee/delete-employee-from-trash`,
        values
      ),
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
  const { mutate: restore } = useMutation(
    "restore-employee",
    (values) =>
      axios.put(
        `http://localhost:9002/employee/restore-employee-from-trash`,
        values
      ),

    {
      onSuccess(data) {
        alert(data?.data?.message);
        refetch();
        Router.push("/employee");
      },
      onError(error) {
        alert(error?.data?.response?.message);
      },
    }
  );
  const { mutate: restoreMany } = useMutation(
    "restore-employees",
    (values) =>
      axios.put(`http://localhost:9002/employee/restore-employees-from-trash`),

    {
      onSuccess(data) {
        alert(data?.data?.message);
        refetch();
        Router.push("/employee");
      },
      onError(error) {
        alert(error?.data?.response?.message);
      },
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
      <div className='flex space-x-4 my-4'>
        {employees.length > 0 ? (
          <div className=''>
            <div className='space-x-4'>
              <button
                className=' bg-blue-500 rounded-md px-4 py-0.5 text-white'
                onClick={() => mutate()}>
                Delete All
              </button>
              <button
                className=' bg-blue-500 rounded-md px-4 py-0.5 text-white'
                onClick={() => restoreMany()}>
                Restore All
              </button>
            </div>
            <div className='flex space-x-4 flex-wrap'>
              {employees.map((emp) => {
                return (
                  <div
                    key={emp._id}
                    className={`rounded-md w-[300px] p-2 mt-5 hover:cursor-pointer bg-sandle-100 border shadow-md ${
                      employeeId === emp._id && "border border-blue-400"
                    }`}>
                    <div className='flex justify-between'>
                      <p>
                        {emp.firstName}
                        {emp.lastName}
                      </p>
                      <div className='flex space-x-2'>
                        <div onClick={() => detete({ id: emp._id })}>
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
                        <div onClick={() => restore({ id: emp._id })}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-4 h-4 text-blue-500'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z'
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
          </div>
        ) : (
          <div>Employee details not found</div>
        )}
      </div>
    </div>
  );
}
