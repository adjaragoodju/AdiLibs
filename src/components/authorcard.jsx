// components/authorcard.jsx
const AuthorCard = ({ name, image, books, genre, description, onClick }) => {
  return (
    <div
      className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer'
      onClick={onClick}
    >
      <div className='h-64 bg-gray-200 relative overflow-hidden group'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
          onError={(e) => {
            e.target.src = '/writer.jpg'; // Fallback image
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end'>
          <div className='p-4 text-white'>
            <p className='font-medium'>View {name}'s Books</p>
          </div>
        </div>
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-bold mb-2'>{name}</h3>
        <div className='flex justify-between text-sm text-gray-600 mb-3'>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mr-1 text-blue-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
              />
            </svg>
            <span>{books} Books</span>
          </div>
          <div className='px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium'>
            {genre}
          </div>
        </div>
        <p className='text-gray-700 line-clamp-3'>{description}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
