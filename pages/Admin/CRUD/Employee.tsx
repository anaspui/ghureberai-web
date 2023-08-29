import React, { useEffect, useState } from 'react';
import Layout from '@/pages/Admin/Components/Layout';
import axiosInstance from '@/pages/utils/axiosInstance';
import TableHead from '../Components/TableHead';
import Modal from '../Components/Modal';
import ConfirmationModal from '../Components/Modal/ConfirmationModal';
import { FaTimes } from 'react-icons/fa';
import CreateEmployeeModal from '../Components/Modal/CreateEmployeeModal';
const colNames = ['Username', 'Name', 'Position', 'Phone', 'Status', ''];
const limit = 5;

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
        <div className='mx-auto max-w-screen-xl bg-white px-4 pt-14 md:px-8'>
          <div className='items-start justify-between md:flex'>
            <div className='max-w-lg'>
              <h3 className='text-xl font-bold text-gray-800 sm:text-2xl'>
                Employee
              </h3>
              <p className='mt-2 text-gray-600'>
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
          <div className='mt-12 overflow-x-auto rounded-lg border shadow-sm'>
            <table className='w-full table-auto text-left text-sm'>
              <TableHead colNames={colNames} />
              <tbody className='divide-y text-gray-600'>
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
          <div className='mx-auto max-w-screen-xl px-4 py-12 text-gray-600 md:px-8'>
            <div className='flex items-center justify-between text-sm font-medium text-gray-600'>
              <button
                onClick={() =>
                  currentPage > 1 && setCurrentPage((prev) => prev - 1)
                }
                className='rounded-lg border px-4 py-2 duration-150 hover:bg-gray-50'
              >
                Previous
              </button>
              <div>
                Page {currentPage} of {Math.round(employeeData?.length / limit)}
              </div>
              <button
                onClick={() =>
                  currentPage < Math.round(employeeData?.length / limit) &&
                  setCurrentPage((prev) => prev + 1)
                }
                className='rounded-lg border px-4 py-2 duration-150 hover:bg-gray-50'
              >
                Next
              </button>
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
            ? `Delete Employee ${selectedEmployee.Username}`
            : 'Delete Employee'
        }
        description='Do you want to delete this employee?'
        actionTitle='Delete'
        icon={
          <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100'>
            <FaTimes className='text-red-600' />
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
        <td className='flex items-center gap-x-3 whitespace-nowrap px-6 py-3'>
          <img
            src={
              employee.Picture ||
              'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg'
            }
            className='h-10 w-10 rounded-full'
          />
          <div>
            <span className='block text-sm font-medium text-gray-700'>
              {employee.Username}
            </span>
            <span className='block text-xs text-gray-700'>
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
            className='rounded-lg px-3 py-2 font-medium text-indigo-600 duration-150 hover:bg-gray-50 hover:text-indigo-500'
          >
            Edit
          </button>
          <button
            onClick={() => {
              setShowConfirmationModal((prev: boolean) => !prev);
              setSelectedEmployee(employee);
            }}
            className='rounded-lg px-3 py-2 font-medium leading-none text-red-600 duration-150 hover:bg-gray-50 hover:text-red-500'
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
