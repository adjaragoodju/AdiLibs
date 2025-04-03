// components/ReviewsSection.jsx
import React from 'react';
import ReviewCard from './reviewcard';

const ReviewsSection = ({ reviewsRef, customerReviews }) => {
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
          {customerReviews.map((review, index) => (
            <div key={index}>
              <ReviewCard
                name={review.name}
                avatar={review.avatar}
                rating={review.rating}
                text={review.text}
                date={review.date}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
