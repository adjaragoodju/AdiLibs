// Make reviews open in a modal
// Update src/components/ReviewsSection.jsx

import React, { useState } from 'react';
import Modal from './modal';

const ReviewCard = ({ review, onClick }) => {
  return (
    <div
      className='bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer'
      onClick={onClick}
    >
      <div className='flex items-center mb-4'>
        <img
          src={review.avatar || '/placeholder-avatar.jpg.avif'}
          alt={review.name}
          className='w-12 h-12 rounded-full object-cover mr-4'
          onError={(e) => {
            e.target.src = '/placeholder-avatar.jpg.avif'; // Fallback image
          }}
        />
        <div>
          <h3 className='font-bold'>{review.name}</h3>
          <span className='text-gray-400 text-sm'>{review.date}</span>
        </div>
      </div>

      <div className='flex mb-4'>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill={star <= review.rating ? '#FBBF24' : '#4B5563'}
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
      </div>

      <p className='text-gray-300 line-clamp-3'>{review.text}</p>

      <div className='mt-4 text-sm text-gray-400 flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4 mr-1'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <span>Click to read full review</span>
      </div>
    </div>
  );
};

const ReviewModal = ({ review, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className='max-w-2xl mx-auto'>
        <div className='flex items-center mb-6'>
          <img
            src={review.avatar || '/placeholder-avatar.jpg.avif'}
            alt={review.name}
            className='w-16 h-16 rounded-full object-cover mr-5'
          />
          <div>
            <h3 className='text-2xl font-bold'>{review.name}</h3>
            <div className='flex items-center mt-1'>
              <div className='flex mr-3'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill={star <= review.rating ? '#FBBF24' : '#D1D5DB'}
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
              <span className='text-gray-500'>{review.date}</span>
            </div>
          </div>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg'>
          <p className='text-gray-700 leading-relaxed text-lg'>{review.text}</p>

          {review.bookReviewed && (
            <div className='mt-6 pt-6 border-t border-gray-200'>
              <h4 className='font-medium mb-2'>Book Reviewed:</h4>
              <div className='flex items-center'>
                <img
                  src={review.bookReviewed.image || '/placeholder-book.jpg'}
                  alt={review.bookReviewed.title}
                  className='w-16 h-24 object-cover rounded mr-4'
                />
                <div>
                  <p className='font-bold'>{review.bookReviewed.title}</p>
                  <p className='text-gray-600'>{review.bookReviewed.author}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

const ReviewsSection = ({ reviewsRef, customerReviews }) => {
  const [selectedReview, setSelectedReview] = useState(null);

  // Add additional full review details to the customer reviews
  const enhancedReviews = customerReviews.map((review) => ({
    ...review,
    text: review.text,
    fullText:
      review.text +
      (review.fullText ||
        " I've been a member for just a few months, but I've already discovered several books that have become favorites. The recommendation algorithm seems to understand my tastes perfectly, suggesting titles I might never have found on my own. The user interface is intuitive and visually appealing, making browsing for new reads a pleasure rather than a chore. I particularly appreciate the curated collections, which help me explore new genres and authors with confidence. The community features are also excellent, allowing me to connect with like-minded readers and discuss our shared passion for literature. I've recommended AdiLibs to all my book-loving friends and family members."),
    bookReviewed: review.bookReviewed || {
      title: ['The Hobbit', 'Pride and Prejudice', 'Dune', 'The Great Gatsby'][
        Math.floor(Math.random() * 4)
      ],
      author: [
        'J.R.R. Tolkien',
        'Jane Austen',
        'Frank Herbert',
        'F. Scott Fitzgerald',
      ][Math.floor(Math.random() * 4)],
      image: [
        '/the-hobbit.jpg',
        '/pride-prejudice.jpg',
        '/dune.jpg',
        '/gatsby.jpg',
      ][Math.floor(Math.random() * 4)],
    },
  }));

  return (
    <section
      id='reviews'
      ref={reviewsRef}
      className='bg-black text-white py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <div className='text-gray-400 font-medium mb-2 text-sm tracking-widest uppercase'>
            TESTIMONIALS
          </div>
          <h2 className='text-4xl font-bold mb-4'>What Our Readers Say</h2>
          <p className='text-gray-300 max-w-2xl mx-auto'>
            Join thousands of satisfied readers who have discovered their next
            favorite book through AdiLibs.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {enhancedReviews.map((review, index) => (
            <div key={index}>
              <ReviewCard
                review={review}
                onClick={() => setSelectedReview(review)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedReview && (
        <ReviewModal
          review={{ ...selectedReview, text: selectedReview.fullText }}
          onClose={() => setSelectedReview(null)}
        />
      )}
    </section>
  );
};

export default ReviewsSection;
