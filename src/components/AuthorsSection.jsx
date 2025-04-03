// components/AuthorsSection.jsx
import React from 'react';
import AuthorCard from './authorcard';
import Book from './book';

const AuthorsSection = ({
  authorsRef,
  popularAuthors,
  selectedAuthor,
  setSelectedAuthor,
  getBooksByFilter,
  handleBookClick,
}) => {
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
              image={author.image || '/placeholder-author.jpg'}
              books={author.books}
              genre={author.genre}
              description={author.description}
              onClick={() => {
                setSelectedAuthor(author.name);
                window.setTimeout(() => {
                  const authorBooksSection =
                    document.getElementById('author-books');
                  if (authorBooksSection) {
                    authorBooksSection.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }
                }, 100);
              }}
            />
          </div>
        ))}
      </div>

      {/* Filtered Books by Author Section */}
      {selectedAuthor && (
        <div id='author-books' className='mt-12'>
          <div className='flex items-center gap-4 mb-6'>
            <h3 className='text-2xl font-bold'>{selectedAuthor}'s Books</h3>
            <div className='h-1 w-24 bg-black rounded'></div>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
            {getBooksByFilter('author', selectedAuthor).map((book, index) => (
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

export default AuthorsSection;
