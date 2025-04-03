// Simplify authors section and make it open in a modal
// Update src/components/AuthorsSection.jsx

import React, { useState } from 'react';
import Modal from './modal';

const AuthorCard = ({ name, image, genre, description, onClick }) => {
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
            <p className='font-medium'>View Books</p>
          </div>
        </div>
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-bold mb-2'>{name}</h3>
        <div className='flex justify-between text-sm text-gray-600 mb-3'>
          <div className='px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium'>
            {genre}
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthorModal = ({ author, onClose, books, handleBookClick }) => {
  return (
    <Modal onClose={onClose}>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='md:w-1/3'>
          <img
            src={author.image}
            alt={author.name}
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>
        <div className='md:w-2/3'>
          <h2 className='text-3xl font-bold mb-2'>{author.name}</h2>
          <div className='mb-4'>
            <span className='text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full'>
              {author.genre}
            </span>
          </div>

          <div className='mb-6'>
            <p className='text-gray-700 leading-relaxed'>
              {author.description}
            </p>
          </div>

          <h3 className='text-xl font-semibold mb-4'>Books by {author.name}</h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
            {books.map((book, index) => (
              <div
                key={index}
                className='cursor-pointer hover:scale-105 transition-transform'
                onClick={() => {
                  handleBookClick(book);
                  onClose();
                }}
              >
                <img
                  src={book.image || '/placeholder-book.jpg'}
                  alt={book.title}
                  className='w-full h-48 object-cover rounded-lg shadow-md mb-2'
                />
                <h4 className='font-medium text-gray-900'>{book.title}</h4>
                <p className='text-sm text-gray-600'>{book.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

const AuthorsSection = ({
  authorsRef,
  popularAuthors,
  getBooksByFilter,
  handleBookClick,
}) => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
  };

  return (
    <section
      id='authors'
      ref={authorsRef}
      className='container mx-auto px-4 my-20'
    >
      <div className='text-sm tracking-widest text-gray-700 uppercase mb-2'>
        AUTHORS
      </div>
      <h2 className='text-4xl font-bold mb-10'>Featured Authors</h2>

      {/* Author Selection Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
        {popularAuthors.map((author, index) => (
          <div
            key={index}
            className='transition-transform hover:-translate-y-2 duration-300'
          >
            <AuthorCard
              name={author.name}
              image={`/authors/${author.image}`}
              genre={author.genre}
              description={author.description}
              onClick={() => handleAuthorClick(author)}
            />
          </div>
        ))}
      </div>

      {/* Author Modal */}
      {selectedAuthor && (
        <AuthorModal
          author={selectedAuthor}
          onClose={() => setSelectedAuthor(null)}
          books={getBooksByFilter('author', selectedAuthor.name)}
          handleBookClick={handleBookClick}
        />
      )}
    </section>
  );
};

export default AuthorsSection;
