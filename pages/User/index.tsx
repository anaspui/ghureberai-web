import React, { useState } from 'react';
import { useEffect } from "react";
import Navbar from "./Navbar"
import Cookies from 'js-cookie';
import axiosInstance from '../utils/axiosInstance';

export default () => {

  interface UserData {
    Address: string,
    Dob: string,
    Email: string,
    FirstName: string,
    Gender: string,
    LastName: string,
    Phone: string,
    Picture: string,
    Role: string,
    UserId: number,
    Username: string
  }


  const [user, setUser] = useState('');
  const [userData, setUserData] = useState<UserData>({
    Address: '',
    Dob: '',
    Email: '',
    FirstName: '',
    Gender: '',
    LastName: '',
    Phone: '',
    Picture: '',
    Role: '',
    UserId: 0,
    Username: '',
  });

  useEffect(() => {
    const data:any = localStorage.getItem('username')
    setUser(data);
  }, []);

  useEffect(() => {
    async function GetUserData() {
        try {
          const response = await axiosInstance.get(`/customer/${user}`);
          setUserData(response.data[0])
        } catch (error) {
          console.error('Error fetching user data:' , error);
        }
    }
    GetUserData();
  }, [user]);
  
    const [dob, setDob] = useState('');

    useEffect(() => {
    const timestamp = userData.Dob;
    var date = new Date(timestamp);
    

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    

    var formattedDate = year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;
    setDob(formattedDate);
    }, [userData.Dob])
    
    

  return (
    <>
    <Navbar />
    <main className="py-14 flex justify-center ">
          <div className="px-4 text-gray-600 md:px-8">
            <div className="relative w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-12 h-12 text-gray-400 left-6 top-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
            </div>
                  <p className="text-gray-700 text-xs mt-4 ml-8">@{userData.UserId}</p>
              <div className="mt-8 max-w-lg mx-auto">
                  <form
                      onSubmit={(e) => e.preventDefault()}
                      className="space-y-5"
                  >
                    <div>
                          <label className="font-medium">
                              Username
                          </label>
                          <input
                              type="text"
                              readOnly
                              className="border w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none focus:border-indigo-600 shadow-sm rounded-lg"
                              defaultValue={user}
                          />
                      </div>
                      <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                        
                          <div>
                              <label className="font-medium">
                                  First name
                              </label>
                              <input
                                  type="text"
                                  required
                                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                  defaultValue={userData.FirstName}
                              />
                          </div>
                          <div>
                              <label className="font-medium">
                                  Last name
                              </label>
                              <input
                                  type="text"
                                  required
                                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                  defaultValue={userData.LastName}
                              />
                          </div>
                      </div>
                      <div>
                          <label className="font-medium">
                              Email
                          </label>
                          <input
                              type="email"
                              readOnly
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                              defaultValue={userData.Email}
                          />
                      </div>
                      <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                        
                          <div>
                              <label className="font-medium">
                                  Gender
                              </label>
                              <input
                                  type="text"
                                  required
                                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                  defaultValue={userData.Gender}
                              />
                          </div>
                          <div>
                              <label className="font-medium">
                                  Date of birth
                              </label>
                              <input
                                  type="date"
                                  required
                                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                  defaultValue={dob}
                              />
                          </div>
                      </div>
                      <div>
                          <label className="font-medium">
                              Phone number
                          </label>
                          <div className="relative mt-2">
                              <input
                                  type="text"
                                  placeholder="+1 (555) 000-000"
                                  required
                                  className="w-full px-3 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                  defaultValue={'0' + userData.Phone}
                              />
                          </div>
                      </div>
                      <div>
                          <label className="font-medium">
                              Address
                          </label>
                          <input
                              type="text"
                              required
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                              defaultValue={userData.Address}
                          />
                      </div>
                  </form>
              </div>
          </div>
      </main>
      </>
  )
}