import React, { useEffect, useState } from 'react';
import Modal from '.';
import axiosInstance from '@/pages/utils/axiosInstance';

type TProps = {
  show: boolean;
  hide: () => void;
  employee?: any;
  handleAction: (data: any) => void;
  actionTitle: string;
  setEmployeeData: any;
};

function CreateEmployeeModal({
  show,
  hide,
  employee,
  handleAction,
  actionTitle,
  setEmployeeData,
}: TProps) {
  const [formData, setFormData] = useState({
    Username: '',
    Email: '',
    Phone: '',
    Password: '',
    Validity: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    Username: '',
    Email: '',
    Phone: '',
    Password: '',
    Validity: '',
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        Username: employee.Username,
        Email: employee.Email,
        Password: '',
        Validity: employee.Validity,
        Phone: employee.Phone,
      });
    } else {
      setFormData({
        Username: '',
        Email: '',
        Password: '',
        Validity: '',
        Phone: '',
      });
    }
  }, [employee]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newValidationErrors = { ...validationErrors };
    if (!formData.Username) {
      newValidationErrors.Username = 'Username is required.';
    } else {
      newValidationErrors.Username = '';
    }

    if (!formData.Email) {
      newValidationErrors.Email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      newValidationErrors.Email = 'Invalid email format.';
    } else {
      newValidationErrors.Email = '';
    }
    if (!formData.Phone) {
      newValidationErrors.Phone = 'Phone is required.';
    } else if (!/^\d{11}$/.test(formData.Phone)) {
      newValidationErrors.Phone = 'Invalid phone number format.';
    } else {
      newValidationErrors.Phone = '';
    }

    if (!formData.Password) {
      newValidationErrors.Password = 'Password is required.';
    } else {
      newValidationErrors.Password = '';
    }

    setValidationErrors(newValidationErrors);

    if (Object.values(newValidationErrors).some((error) => error !== '')) {
      return;
    }

    const data = {
      ...formData,
    };

    try {
      if (employee) {
        if (employee.Role == 'employee') {
          const response = await axiosInstance.put(
            '/admin/updateEmployee/' + employee.UserId,
            data,
            {
              withCredentials: true,
            }
          );

          if (response.status === 200) {
            setEmployeeData((prev: any) =>
              prev.map((employee: any) => {
                if (employee.UserId === response.data.UserId) {
                  return { ...employee, ...response.data };
                }
                return employee;
              })
            );
            hide();
            setFormData({
              Username: '',
              Email: '',
              Password: '',
              Validity: '',
              Phone: '',
            });
          } else {
            console.log('UPDATE: Employee Not Added');
          }
        }
        if (employee.Role == 'admin') {
          const response = await axiosInstance.put(
            '/admin/updateAdmin/' + employee.UserId,
            data,
            {
              withCredentials: true,
            }
          );

          if (response.status === 200) {
            setEmployeeData((prev: any) =>
              prev.map((employee: any) => {
                if (employee.UserId === response.data.UserId) {
                  return { ...employee, ...response.data };
                }
                return employee;
              })
            );
            hide();
            setFormData({
              Username: '',
              Email: '',
              Password: '',
              Validity: '',
              Phone: '',
            });
          } else {
            console.log('UPDATE: Employee Not Added');
          }
        }
        if (employee.Role == 'hotelManager') {
          const response = await axiosInstance.put(
            '/admin/updateHotelManager/' + employee.UserId,
            data,
            {
              withCredentials: true,
            }
          );
          console.log(response);
          if (response.status === 200) {
            setEmployeeData((prev: any) =>
              prev.map((employee: any) => {
                if (employee.UserId === response.data.UserId) {
                  return { ...employee, ...response.data };
                }
                return employee;
              })
            );
            hide();
            setFormData({
              Username: '',
              Email: '',
              Password: '',
              Validity: '',
              Phone: '',
            });
          } else {
            console.log('UPDATE REQ: HMANAGER Not Added');
          }
        }
      }
      if (!employee) {
        if (data.Email.includes('@hotel.ghureberai.com')) {
          const response = await axiosInstance.post(
            '/admin/addHotelManager',
            data,
            {
              withCredentials: true,
            }
          );
          console.log(response);

          if (response.status === 201) {
            console.log('Hotel Manager Added Successfully', response.data);
            setEmployeeData((prev: any) => [response.data, ...prev]);
            hide();
            setFormData({
              Username: '',
              Email: '',
              Password: '',
              Validity: '',
              Phone: '',
            });
          } else {
            console.log('Hotel Manager Not Added');
          }
        } else if (data.Email.includes('@admin.ghureberai.com')) {
          const response = await axiosInstance.post('/admin/addAdmin', data, {
            withCredentials: true,
          });
          console.log(response);

          if (response.status === 201) {
            console.log('Admin Added Successfully', response.data);
            setEmployeeData((prev: any) => [response.data, ...prev]);
            hide();
            setFormData({
              Username: '',
              Email: '',
              Password: '',
              Validity: '',
              Phone: '',
            });
          } else {
            console.log('Admin Not Added');
          }
        } else {
          const response = await axiosInstance.post(
            '/admin/addEmployee',
            data,
            {
              withCredentials: true,
            }
          );
          console.log(response);

          if (response.status === 201) {
            console.log('Employee Added Successfully', response.data);
            setEmployeeData((prev: any) => [response.data, ...prev]);
            hide();
            setFormData({
              Username: '',
              Email: '',
              Password: '',
              Validity: '',
              Phone: '',
            });
          } else {
            console.log('Employee Not Added');
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setValidationErrors({ ...validationErrors, [field]: '' });
  };

  const handleModalClose = () => {
    setFormData({
      Username: '',
      Email: '',
      Password: '',
      Validity: '',
      Phone: '',
    });

    setValidationErrors({
      Username: '',
      Email: '',
      Phone: '',
      Password: '',
      Validity: '',
    });

    hide();
  };

  if (!show) {
    return null;
  }

  return (
    <Modal
      show={show}
      hide={handleModalClose}
      title={employee ? 'Edit employee' : 'Create Employee'}
    >
      <div className=' rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
        <form
          className='mx-auto  px-12 py-4  text-gray-200'
          onSubmit={handleSubmit}
        >
          <label className='font-medium'>Username</label>
          <input
            type='text'
            placeholder='Username'
            value={formData.Username}
            onChange={(e) => handleInputChange('Username', e.target.value)}
            className='mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-white shadow-sm outline-none focus:border-indigo-600'
          />
          {validationErrors.Username && (
            <div className='text-red-500'>{validationErrors.Username}</div>
          )}
          <label className=' font-medium'>Email</label>
          <input
            type='text'
            placeholder='Email'
            value={formData.Email}
            onChange={(e) => handleInputChange('Email', e.target.value)}
            className='mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-white shadow-sm outline-none focus:border-indigo-600'
          />
          {validationErrors.Email && (
            <div className='text-red-500'>{validationErrors.Email}</div>
          )}
          <label className='font-medium'>Phone</label>
          <input
            type='tel'
            placeholder='Phone'
            autoComplete='off'
            aria-autocomplete='none'
            value={formData.Phone}
            onChange={(e) => handleInputChange('Phone', e.target.value)}
            className='mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-white shadow-sm outline-none focus:border-indigo-600'
          />
          {validationErrors.Phone && (
            <div className='text-red-500'>{validationErrors.Phone}</div>
          )}
          <label className='font-medium'>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={formData.Password}
            onChange={(e) => handleInputChange('Password', e.target.value)}
            className='mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-white shadow-sm outline-none focus:border-indigo-600'
          />
          {validationErrors.Password && (
            <div className='text-red-500'>{validationErrors.Password}</div>
          )}
          <label className='font-medium'>Validity</label>
          <div>
            <label>
              <input
                type='radio'
                value='true'
                checked={formData.Validity === 'true'}
                onChange={(e) => handleInputChange('Validity', e.target.value)}
                className='mr-2'
              />
              True
            </label>
            <label className='ml-4'>
              <input
                type='radio'
                value='false'
                checked={formData.Validity === 'false'}
                onChange={(e) => handleInputChange('Validity', e.target.value)}
                className='mr-2'
              />
              False
            </label>
          </div>
          {validationErrors.Validity && (
            <div className='text-red-500'>{validationErrors.Validity}</div>
          )}

          <div className='mt-6 items-center gap-2 sm:flex'>
            <button
              className='mt-2 w-full flex-1 rounded-md bg-indigo-600 p-2.5 capitalize text-white outline-none ring-indigo-600 ring-offset-2 hover:bg-indigo-800 focus:ring-2'
              type='submit'
            >
              {actionTitle}
            </button>
            <button
              className='mt-2 w-full flex-1 rounded-md border bg-gray-900 p-2.5 text-white outline-none ring-indigo-600 ring-offset-2 hover:bg-gray-700 focus:ring-2'
              onClick={handleModalClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default CreateEmployeeModal;
