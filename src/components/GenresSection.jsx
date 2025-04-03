// components/GenresSection.jsx
import React from 'react';
import Book from './book';

const GenresSection = ({
  genresRef,
  uniqueGenres,
  selectedGenre,
  setSelectedGenre,
  getBooksByFilter,
  handleBookClick,
}) => {
  return (
    <section
      id='genres'
      ref={genresRef}
      className='container mx-auto px-4 my-20'
    >
      <div className='text-sm tracking-widest text-gray-700 uppercase mb-2'>
        CATEGORIES
      </div>
      <h2 className='text-4xl font-bold mb-10'>Explore by Genre</h2>

      {/* Genre Selection Grid - Improved Design */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-10'>
        {uniqueGenres.map((genreItem) => (
          <button
            key={genreItem}
            onClick={() => setSelectedGenre(genreItem)}
            className={`
              p-6 rounded-lg text-center flex flex-col items-center justify-center shadow-sm transform transition-all duration-200 hover:-translate-y-1
              ${
                selectedGenre === genreItem
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:shadow'
              }
            `}
          >
            <span className='font-medium'>{genreItem}</span>
          </button>
        ))}
      </div>

      {/* Filtered Books Section */}
      {selectedGenre && (
        <div className='mt-8 bg-gray-50 p-8 rounded-xl shadow-inner'>
          <h3 className='text-2xl font-bold mb-6 flex items-center'>
            <span className='mr-3'>{selectedGenre} Books</span>
            <div className='h-1 w-16 bg-black rounded'></div>
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
            {getBooksByFilter('genre', selectedGenre).map((book, index) => (
              <div
                key={index}
                onClick={() => handleBookClick(book)}
                className='cursor-pointer bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105'
              >
                <Book
                  title={book.title}
                  author={book.author}
                  year={book.year}
                  image={book.image || '/placeholder-book.jpg'}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default GenresSection;
