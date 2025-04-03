// components/FaqsSection.jsx
import React from 'react';

const FaqsSection = ({ faqsRef }) => {
  return (
    <section id='faqs' ref={faqsRef} className='container mx-auto px-4 py-20'>
      <div className='text-center mb-12'>
        <div className='inline-block mb-3'>
          <div className='w-20 h-px bg-black mx-auto mb-2'></div>
          <div className='text-sm tracking-widest text-gray-700 uppercase'>
            QUESTIONS
          </div>
        </div>
        <h2 className='text-4xl font-bold mb-6'>Frequently Asked Questions</h2>
        <p className='text-gray-700 max-w-2xl mx-auto'>
          Find answers to common questions about our platform.
        </p>
      </div>

      <div className='max-w-3xl mx-auto space-y-6'>
        <div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
          <h3 className='text-xl font-bold mb-2'>
            How do I add a book to my favorites?
          </h3>
          <p className='text-gray-600'>
            When viewing a book, simply click the "Add to Favorites" button. You
            can access your favorites anytime by clicking the Favorites link in
            the navigation menu.
          </p>
        </div>

        <div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
          <h3 className='text-xl font-bold mb-2'>
            Are all books available for immediate reading?
          </h3>
          <p className='text-gray-600'>
            Many books offer sample chapters that you can read immediately. For
            full books, we provide links to purchase or borrow from partnered
            libraries and bookstores.
          </p>
        </div>

        <div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
          <h3 className='text-xl font-bold mb-2'>
            How are book recommendations generated?
          </h3>
          <p className='text-gray-600'>
            Our recommendations are based on your reading history, favorite
            genres, authors you follow, and books similar to ones you've enjoyed
            in the past.
          </p>
        </div>

        <div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
          <h3 className='text-xl font-bold mb-2'>
            Can I suggest books to be added to the platform?
          </h3>
          <p className='text-gray-600'>
            Absolutely! We welcome suggestions from our community. Please use
            the Contact Us form with your recommendations and we'll review them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
