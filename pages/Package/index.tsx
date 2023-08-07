import React from 'react'
import Navbar from '../Navbar'
import Submenu from './Submenu'

const Package = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">

        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

          <img className="h-40 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
          <div className="p-2">

          <h2 className="font-bold text-lg mb-2 ">Heading</h2>

          <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>
        </div>

        <div className="m-2">
          <a role='button' href='#' className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
        </div>
        </div>
      </div>
    </>
  )
}

export default Package