import React from 'react';
import Modal from '../layout/Modal';
import { useFavorites } from '../../context/FavoritesContext';

const FavoritesModal = ({
  setShowFavoritesModal,
  setSelectedBook,
  scrollToSection,
  genresRef,
}) => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <Modal onClose={() => setShowFavoritesModal(false)}>
      <div>
        <h2 className='text-3xl font-bold mb-6'>Your Favorites</h2>

        {favorites.length > 0 ? (
          <div className='space-y-4'>
            {favorites.map((book, index) => (
              <div
                key={index}
                className='flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors'
              >
                <img
                  src={book.image || '/placeholder-book.jpg'}
                  alt={book.title}
                  className='w-16 h-24 object-cover mr-4 rounded'
                />
                <div className='flex-grow'>
                  <h3 className='font-medium'>{book.title}</h3>
                  <p className='text-sm text-gray-600'>
                    {book.author} - {book.year}
                  </p>
                </div>
                <div className='flex gap-2'>
                  <button
                    className='text-black hover:text-gray-600 p-2'
                    onClick={() => {
                      setShowFavoritesModal(false);
                      setSelectedBook(book);
                    }}
                    aria-label='View book details'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                      />
                    </svg>
                  </button>
                  <button
                    className='text-red-500 hover:text-red-700 p-2'
                    onClick={() => removeFromFavorites(book)}
                    aria-label='Remove from favorites'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='text-center py-16 bg-gray-50 rounded-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-16 w-16 mx-auto text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
            <p className='mt-4 text-xl font-medium'>No favorites yet</p>
            <p className='text-gray-500 mb-8'>
              Start exploring books to add to your favorites
            </p>
            <button
              onClick={() => {
                setShowFavoritesModal(false);
                scrollToSection(genresRef);
              }}
              className='bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors font-medium'
            >
              Browse Books
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default FavoritesModal;
