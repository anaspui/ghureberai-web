import Footer from '../Footer';

const posts = [
  {
    title: 'Revolutionizing Travel: The Future of Tourism Systems',
    desc: 'Explore the cutting-edge technology and innovations shaping the future of travel planning and management.',
    img: 'https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    date: 'Mar 4 2023',
    href: 'javascript:void(0)',
  },
  {
    title: 'Exploring the Benefits of a Digital Tourism System',
    desc: 'Discover the advantages of embracing digital tourism systems for seamless travel experiences and unforgettable adventures.',
    img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    date: 'Feb 1 2023',
  },
  {
    title: 'Maximizing Your Vacation: How Tourism Systems Enhance Your Trips',
    desc: 'Learn how tourism systems can help you make the most of your vacations, from itinerary planning to on-the-go assistance.',
    img: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    date: 'Jun 25 2022',
  },
  {
    title: 'Behind the Scenes: How Tourism Systems Plan Your Dream Getaway',
    desc: 'Take a peek into the inner workings of tourism systems and how they craft your dream getaway with precision.',
    img: 'https://images.unsplash.com/photo-1682685796852-aa311b46f50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    date: 'Dec 12 2021',
  },
];

export default () => {
  return (
    <>
      <section className='py-8'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div className='space-y-5 sm:mx-auto sm:max-w-md sm:text-center'>
            <h1 className='text-3xl font-extrabold text-gray-800 sm:text-4xl'>
              Latest blog posts
            </h1>
            <p className='text-gray-600'>
              Blogs that are loved by the community. Updated every hour.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className='items-center justify-center gap-3 sm:flex'
            >
              <div className='relative'>
                <svg
                  className='absolute inset-y-0 left-3 my-auto h-6 w-6 text-gray-400'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                  />
                </svg>
                <input
                  type='text'
                  placeholder='Enter your email'
                  className='w-full rounded-lg border bg-transparent py-2 pl-12 pr-3 text-gray-500 shadow-sm outline-none focus:border-indigo-600 sm:max-w-xs'
                />
              </div>
              <button className='mt-3 block w-full rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-medium text-white shadow hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none sm:mt-0 sm:w-auto'>
                Subscribe
              </button>
            </form>
          </div>
          <ul className='mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
            {posts.map((items, key) => (
              <li className='group mx-auto w-full sm:max-w-sm' key={key}>
                <a>
                  <img
                    src={items.img}
                    loading='lazy'
                    alt={items.title}
                    className='w-full rounded-lg'
                  />
                  <div className='mt-3 space-y-2'>
                    <span className='block text-sm text-indigo-600'>
                      {items.date}
                    </span>
                    <h3 className='text-lg font-semibold text-gray-800 duration-150 group-hover:text-indigo-600'>
                      {items.title}
                    </h3>
                    <p className='text-sm text-gray-600 duration-150 group-hover:text-gray-800'>
                      {items.desc}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};
