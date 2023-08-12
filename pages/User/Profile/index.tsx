import Navbar from "../Navbar"

export default () => {

  return (
    <>
    <Navbar />
      <main className="py-14 flex justify-center ">
          <div className="px-4 text-gray-600 md:px-8">
            <div className="relative w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-12 h-12 text-gray-400 left-6 top-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                  </svg>
            </div>
                  <p className="text-gray-700 text-xs mt-4 ml-5">@8457389</p>
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
                              />
                          </div>
                      </div>
                      <div>
                          <label className="font-medium">
                              Phone number
                          </label>
                          <div className="relative mt-2">
                              <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                  <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                      <option>US</option>
                                      <option>ES</option>
                                      <option>MR</option>
                                  </select>
                              </div>
                              <input
                                  type="text"
                                  placeholder="+1 (555) 000-000"
                                  required
                                  className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
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
                          />
                      </div>
                      <div>
                          <label className="font-medium">
                              Bio
                          </label>
                          <textarea required className="w-full mt-2 h-24 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                      </div>
                      <button
                          className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                      >
                          Submit
                      </button>
                  </form>
              </div>
          </div>
      </main>
      </>
  )
}