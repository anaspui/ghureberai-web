import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axiosInstance from '../../utils/axiosInstance';

const itemsPerPage = 2; //OLD

const Employees = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [employess, setEmployess] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await axiosInstance.get('/admin/allusers');
      setEmployess(response.data);
    } catch (error) {
      console.error('Error fetching employess:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(employess.length / itemsPerPage);
  const currentEmployees = employess.slice(offset, offset + itemsPerPage);

  const handleDeleteUser = async (UserId: any) => {
    try {
      await axiosInstance.delete(`/admin/user/${UserId}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
  console.log(employess);

  return (
    <>
      <h1>HWEllo </h1>
    </>
    // <div>
    //   <div>
    //     <table>
    //       {/* ... (table headers) */}
    //       <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800'>
    //         {currentEmployees.map((user: any) => (
    //           <tr
    //             className='hover:bg-gray-100 dark:hover:bg-gray-700'
    //             key={user.Username}
    //           >
    //             <td className='text-white'>{user.Username}</td>
    //             <td className='p-4 space-x-2 whitespace-nowrap'>
    //               <button
    //                 type='button'
    //                 onClick={() => handleDeleteUser(user.UserId)}
    //                 className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
    //               >
    //                 Delete
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>

    //     <div className='flex items-center justify-center mt-4 text-white'>
    //       <ReactPaginate
    //         previousLabel={'<<'}
    //         nextLabel={'>>'}
    //         breakLabel={'...'}
    //         breakClassName={'break-me'}
    //         pageCount={pageCount}
    //         marginPagesDisplayed={2}
    //         pageRangeDisplayed={5}
    //         onPageChange={handlePageChange}
    //         containerClassName={'pagination flex items-center space-x-2'}
    //         activeClassName={'active'}
    //         previousClassName={
    //           'rounded-full p-2 bg-gray-800 hover:bg-gray-700 cursor-pointer'
    //         }
    //         nextClassName={
    //           'rounded-full p-2 bg-gray-800 hover:bg-gray-700 cursor-pointer'
    //         }
    //         pageClassName={
    //           'rounded-full p-2 bg-gray-800 hover:bg-gray-700 cursor-pointer'
    //         }
    //         previousLinkClassName={'w-5 h-5 flex items-center justify-center'}
    //         nextLinkClassName={'w-5 h-5 flex items-center justify-center'}
    //         pageLinkClassName={'w-5 h-5 flex items-center justify-center'}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Employees;
