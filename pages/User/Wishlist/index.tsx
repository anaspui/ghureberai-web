import Navbar from '../Navbar';

export default () => {
  const tableItems = [
    {
      avatar:
        'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: 'Liam James',
      email: 'liamjames@example.com',
      phone_nimber: '+1 (555) 000-000',
      position: 'Software engineer',
      salary: '$100K',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      name: 'Olivia Emma',
      email: 'oliviaemma@example.com',
      phone_nimber: '+1 (555) 000-000',
      position: 'Product designer',
      salary: '$90K',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
      name: 'William Benjamin',
      email: 'william.benjamin@example.com',
      phone_nimber: '+1 (555) 000-000',
      position: 'Front-end developer',
      salary: '$80K',
    },
    {
      avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      name: 'Henry Theodore',
      email: 'henrytheodore@example.com',
      phone_nimber: '+1 (555) 000-000',
      position: 'Laravel engineer',
      salary: '$120K',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: 'Amelia Elijah',
      email: 'amelia.elijah@example.com',
      phone_nimber: '+1 (555) 000-000',
      position: 'Open source manager',
      salary: '$75K',
    },
  ];

  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4 md:px-8'>
        <div className='items-start justify-between md:flex'>
          <div className='max-w-lg'>
            <h3 className='text-xl font-bold text-gray-800 sm:text-2xl'>
              Wishlist
            </h3>
          </div>
        </div>
        <div className='mt-8 overflow-x-auto rounded-lg border shadow-sm'>
          <table className='w-full table-auto text-left text-sm'>
            <thead className='border-b bg-gray-50 font-medium text-gray-600'>
              <tr>
                <th className='px-6 py-3'>Hotel</th>
                <th className='px-6 py-3'>Phone</th>
                <th className='px-6 py-3'>Type</th>
                <th className='px-6 py-3'>Location</th>
                <th className='px-6 py-3'>Address</th>
                <th className='px-6 py-3'>Ratings</th>
                <th className='px-6 py-3'>Validity</th>
                {/* <th className="py-3 px-6"></th> */}
              </tr>
            </thead>
            <tbody className='divide-y text-gray-600'>
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td className='flex items-center gap-x-3 whitespace-nowrap px-6 py-3'>
                    <img
                      src={item.avatar}
                      className='h-10 w-10 rounded-full'
                      alt='pp'
                    />
                    <div>
                      <span className='block text-sm font-medium text-gray-700'>
                        {item.name}
                      </span>
                      <span className='block text-xs text-gray-700'>
                        {item.email}
                      </span>
                    </div>
                  </td>
                  <td className='whitespace-nowrap px-6 py-4'>
                    {item.phone_nimber}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4'>
                    {item.position}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4'>{item.salary}</td>
                  <td className='whitespace-nowrap px-6 py-4'>{item.salary}</td>
                  <td className='whitespace-nowrap px-6 py-4'>{item.salary}</td>
                  <td className='whitespace-nowrap px-6 py-4'>{item.salary}</td>
                  <td className='whitespace-nowrap px-6 text-right'>
                    {/* <button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Delete
                                        </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
