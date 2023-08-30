import { useState } from 'react';
import { MdOutlineHotelClass } from 'react-icons/md';

export default () => {
  const testimonials = [
    {
      avatar: 'https://avatars.githubusercontent.com/u/64026794?v=4',
      name: 'Mohammed Omar',
      country: 'Saudi Arabia',
      quote:
        'Ghureberai is the best travel agency in Bangladesh. We are here to help you to make your dream come true.',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
      name: 'Angela stian',
      country: 'Product designer',
      quote:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum.',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      name: 'Karim ahmed',
      country: 'DevOp engineer',
      quote:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati ',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className='py-14'>
      <div className='mb-4 flex items-center justify-center'>
        <MdOutlineHotelClass className='text-xl text-[#EB5148]' />
        <h2 className='mx-2 text-xl font-extrabold text-gray-900'>
          Ghureberai
        </h2>
      </div>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <h3 className='pb-6 font-semibold text-[#EB5148]'>
            What people are saying
          </h3>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial == idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className='text-xl font-semibold text-gray-800 sm:text-2xl'>
                        “{item.quote}“
                      </p>
                    </blockquote>
                    <div className='mt-6'>
                      <img
                        src={item.avatar}
                        className='mx-auto h-16 w-16 rounded-full'
                        alt='pp'
                      />
                      <div className='mt-3'>
                        <span className='block font-semibold text-gray-800'>
                          {item.name}
                        </span>
                        <span className='mt-0.5 block text-sm text-gray-600'>
                          {item.country}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ''
              )
            )}
          </ul>
        </div>
        <div className='mt-6'>
          <ul className='flex justify-center gap-x-3'>
            {testimonials.map((item, idx) => (
              <li key={idx}>
                {/* <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial == idx ? "bg-indigo-600" : "bg-gray-300"}`}
                                        onClick={() => setCurrentTestimonial(idx)}
                                    ></button> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
