export default () => {

  return (
      <section className="py-14 max-w-screen-xl mx-auto">
          <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-xl bg-[#EB5148] md:px-8 md:mx-8">
              <div className="relative z-10 max-w-xl mx-auto sm:text-center">
                  <div className="space-y-3">

                      <h3 className="text-3xl text-white font-bold">
                          Stay tuned with Ghureberai
                      </h3>
                      <p className="text-blue-100 leading-relaxed">
                      Subscribe to your newsletter to stay in the loop. Our newsletter
                      is sent once in <br />a week on every friday so subscribe to get
                      latest news and updates.
                      </p>
                  </div>
                  <div className="mt-6">
                      <form
                          onSubmit={(e) => e.preventDefault()}
                          className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto">
                          <input
                              type="email"
                              placeholder="Enter your email"
                              className="text-gray-500 w-full p-2 outline-none"
                          />
                          <button
                              className="p-2 px-3 rounded-lg font-medium text-white bg-[#EB5148]
                              hover:bg-[#bf5b54] duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
                          >
                              Subscribe
                          </button>
                      </form>
                  </div>
              </div>
              <div className="absolute inset-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(235, 81, 72, 0.76) 50%, rgba(255, 0, 0, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
          </div>
      </section>
  )
}
