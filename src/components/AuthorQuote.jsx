// components/AuthorQuote.jsx
import React from 'react';

const AuthorQuote = () => {
  return (
    <section className='relative my-20'>
      {/* Background Image */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: 'url("/antonio.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Black Overlay */}
      <div className='absolute inset-0 bg-black opacity-70 z-10' />

      {/* Content */}
      <div className='container mx-auto px-4 py-24 relative z-20'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='md:w-1/2'>
            <div className='text-8xl text-white font-serif mb-4'>"</div>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              A goal without a plan is just a wish.
            </h2>
            <p className='text-xl text-white mb-8'>
              - Antoine de Saint-Exupéry
            </p>
            <a
              href='/books/the-little-prince.pdf'
              className='inline-block bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg text-lg font-medium transition-colors'
            >
              Read The Little Prince
            </a>
          </div>

          <div className='md:w-1/3'>
            <a
              href='/books/the-little-prince.pdf'
              className='block transform transition-transform hover:scale-105'
            >
              <img
                src='/little-prince.webp'
                alt='The Little Prince by Antoine de Saint-Exupéry'
                className='w-full shadow-2xl rounded-lg'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorQuote;
