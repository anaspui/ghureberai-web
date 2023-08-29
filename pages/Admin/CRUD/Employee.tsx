import React, { useEffect, useState } from 'react';
import Layout from '@/pages/Admin/Components/Layout';
import axiosInstance from '@/pages/utils/axiosInstance';
import TableHead from '../Components/TableHead';
import Modal from '../Components/Modal';
import ConfirmationModal from '../Components/Modal/ConfirmationModal';
import { FaTimes } from 'react-icons/fa';
import CreateEmployeeModal from '../Components/Modal/CreateEmployeeModal';
import { AiFillDelete } from 'react-icons/ai';
const colNames = ['Username', 'Name', 'Position', 'Phone', 'Status', ''];
const limit = 4;

function Employee() {
  const [employeeData, setEmployeeData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(undefined);

  useEffect(() => {
    async function fetchEmpData() {
      if (localStorage.user === 'true') {
        try {
          const response = await axiosInstance({
            method: 'get',
            url: '/admin/viewemployees',
            withCredentials: true,
          });
          setEmployeeData(response.data);
          return response.data;
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }

    fetchEmpData();
  }, []);

  useEffect(() => {
    if (employeeData && currentPage) {
      setEmployees(paginate(employeeData, currentPage, limit) || []);
    }
  }, [employeeData, currentPage]);

  function paginate(items: any, page = 1, perPage = limit) {
    // Check if the page number is valid.
    if (page < 1) {
      page = 1;
    }

    // Calculate the start and end index of the current page.
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    // Return the paginated array.
    return items.slice(startIndex, endIndex);
  }
  const handleDeleteEmployee = async () => {
    if (selectedEmployee) {
      try {
        const response = await axiosInstance.post(
          '/admin/deleteEmployee/' + selectedEmployee.UserId,
          null,
          {
            withCredentials: true,
          }
        );
        if (response.status === 201) {
          setEmployeeData((prev: any) =>
            prev.filter((emp: any) => emp.UserId !== selectedEmployee.UserId)
          );
          setShowConfirmationModal((prev: boolean) => !prev);
          setSelectedEmployee(undefined);
        } else {
          console.log('Employee Not Deleted', response);
        }
      } catch (error) {
        console.error('Error deleting employee', error);
      }
    }
  };

  return (
    <>
      <Layout>
        <div className='mt-2 px-8'>
          <ol className='inline-flex items-center space-x-1 text-sm font-medium md:space-x-2'>
            <li className='inline-flex items-center'>
              <a
                href='#'
                className='hover:text-primary-600 inline-flex items-center text-gray-700 dark:text-gray-300 dark:hover:text-white'
              >
                <svg
                  className='mr-2.5 h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className='flex items-center'>
                <svg
                  className='h-6 w-6 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <a
                  href='#'
                  className='hover:text-primary-600 ml-1 text-gray-700 dark:text-gray-300 dark:hover:text-white md:ml-2'
                >
                  Management
                </a>
              </div>
            </li>
            <li>
              <div className='flex items-center'>
                <svg
                  className='h-6 w-6 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span
                  className='ml-1 text-gray-400 dark:text-gray-500 md:ml-2'
                  aria-current='page'
                >
                  Employee
                </span>
              </div>
            </li>
          </ol>
        </div>
        <div className='mx-auto max-w-screen-xl bg-gray-900 px-4 pt-4 md:px-8'>
          <div className='mb-4 items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
            <div className='max-w-lg'>
              <h3 className='text-xl font-bold text-white sm:text-2xl'>
                Employee
              </h3>
              <p className='mt-2 text-white'>
                Find all the employee from here.
              </p>
            </div>
            <div className='mt-3 md:mt-0'>
              <button
                onClick={() => setShowModal(true)}
                className='inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700 md:text-sm'
              >
                Add Employee
              </button>
            </div>
          </div>
          <div className=' rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
            <div className='mt-12 overflow-x-auto rounded-lg border shadow-sm '>
              <table className='w-full table-auto text-left text-sm'>
                <TableHead colNames={colNames} />
                <tbody className='divide-y text-white'>
                  {employees?.map((employee, idx) => (
                    <EmployeeRow
                      key={idx}
                      employee={employee}
                      showConfirmationModal={showConfirmationModal}
                      setShowConfirmationModal={setShowConfirmationModal}
                      selectedEmployee={selectedEmployee}
                      setSelectedEmployee={setSelectedEmployee}
                      setShowModal={setShowModal}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className='mx-auto max-w-screen-xl px-4 py-12 text-white md:px-8'>
              <div className='flex items-center justify-between text-sm font-medium text-white'>
                <button
                  onClick={() =>
                    currentPage > 1 && setCurrentPage((prev) => prev - 1)
                  }
                  className='rounded-lg border bg-gray-900 px-4 py-2 duration-150 hover:bg-gray-600'
                >
                  Previous
                </button>
                <div>
                  Page {currentPage} of{' '}
                  {Math.round(employeeData?.length / limit)}
                </div>
                <button
                  onClick={() =>
                    currentPage < Math.round(employeeData?.length / limit) &&
                    setCurrentPage((prev) => prev + 1)
                  }
                  className='rounded-lg border bg-gray-900 px-4 py-2 duration-150 hover:bg-gray-600'
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <ConfirmationModal
        show={showConfirmationModal}
        hide={() => {
          setShowConfirmationModal((prev) => !prev);
          setSelectedEmployee(undefined);
        }}
        title={
          selectedEmployee
            ? selectedEmployee.Role === 'employee'
              ? `Delete Employee: ${selectedEmployee.Username}`
              : selectedEmployee.Role === 'hotelManager'
              ? `Delete Hotel Manager: ${selectedEmployee.Username}`
              : 'Delete Employee'
            : 'Delete Employee'
        }
        description={
          selectedEmployee
            ? selectedEmployee.Role === 'employee'
              ? 'Do you want to delete this employee?'
              : selectedEmployee.Role === 'hotelManager'
              ? 'Do you want to delete this hotel manager?'
              : 'Do you want to delete this employee?'
            : 'Do you want to delete this employee?'
        }
        actionTitle='Delete'
        icon={
          <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100'>
            <AiFillDelete size={25} className='text-red-700' />
          </div>
        }
        handleAction={handleDeleteEmployee}
      />
      <CreateEmployeeModal
        show={showModal}
        hide={() => {
          setSelectedEmployee(undefined);
          setShowModal((prev) => !prev);
        }}
        handleAction={(data) => console.log(data)}
        actionTitle='Create'
        employee={selectedEmployee ? selectedEmployee : undefined}
        setEmployeeData={setEmployeeData}
      />
    </>
  );
}

export default Employee;

const EmployeeRow = ({
  employee,
  setSelectedEmployee,
  setShowConfirmationModal,
  setShowModal,
}: any) => {
  return (
    <>
      <tr key={employee.UserId} className=''>
        <td className='flex items-center gap-x-3 whitespace-nowrap px-6 py-3 '>
          <img
            src={
              employee.Picture ||
              'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg'
            }
            className='h-10 w-10 rounded-full'
          />
          <div>
            <span className='block text-sm font-medium text-white'>
              {employee.Username}
            </span>
            <span className='block text-xs text-gray-200'>
              {employee.Email}
            </span>
          </div>
        </td>
        <td className='whitespace-nowrap px-6 py-4 capitalize'>
          {(employee.FirstName || '') + ' ' + (employee.LastName || '')}
        </td>
        <td className='whitespace-nowrap px-6 py-4 capitalize'>
          {employee.Role}
        </td>
        <td className='whitespace-nowrap px-6 py-4'>{employee.Phone}</td>
        <td className='whitespace-nowrap px-6 py-4 capitalize'>
          {employee.Validity}
        </td>
        <td className='whitespace-nowrap px-6 text-right'>
          <button
            onClick={() => {
              setSelectedEmployee(employee);
              setShowModal(true);
            }}
            className='rounded-lg px-3 py-2 font-medium leading-none text-indigo-500 duration-150 hover:bg-gray-200 hover:text-green-500'
          >
            Edit
          </button>
          <button
            onClick={() => {
              setShowConfirmationModal((prev: boolean) => !prev);
              setSelectedEmployee(employee);
            }}
            className='rounded-lg px-3 py-2 font-medium leading-none text-red-600 duration-150 hover:bg-red-600 hover:text-white'
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
