// components/PublishingCompanies.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const publishingCompanies = [
  {
    name: 'Penguin Random House',
    founded: 2013,
    headquarters: 'New York City, USA',
    description:
      "The world's largest trade book publisher, formed through a merger of Penguin and Random House.",
    logo: '/brands/penguin.svg',
  },
  {
    name: 'HarperCollins',
    founded: 1989,
    headquarters: 'New York City, USA',
    description:
      "One of the world's largest publishing companies and part of News Corp.",
    logo: '/brands/harpercollins.svg',
  },
  {
    name: 'Simon & Schuster',
    founded: 1924,
    headquarters: 'New York City, USA',
    description:
      'A major publishing unit of Paramount Global, publishing 2,000 titles annually.',
    logo: '/brands/simonschuster.svg',
  },
  {
    name: 'Hachette Book Group',
    founded: 2006,
    headquarters: 'New York City, USA',
    description:
      "A division of the French publisher Hachette Livre, one of the world's largest publishing companies.",
    logo: '/brands/hachette.svg',
  },
  {
    name: 'Macmillan Publishers',
    founded: 1843,
    headquarters: 'London, UK',
    description:
      'A global trade publishing company, owned by the German Holtzbrinck Publishing Group.',
    logo: '/brands/macmillan.svg',
  },
  {
    name: 'Oxford University Press',
    founded: 1586,
    headquarters: 'Oxford, UK',
    description:
      'The largest university press in the world, and the second oldest after Cambridge University Press.',
    logo: '/brands/oxford.svg',
  },
  {
    name: 'Scholastic Corporation',
    founded: 1920,
    headquarters: 'New York City, USA',
    description:
      "The world's largest publisher and distributor of children's books, known for publishing Harry Potter.",
    logo: '/brands/scholastic.svg',
  },
  {
    name: 'Pearson Education',
    founded: 1844,
    headquarters: 'London, UK',
    description:
      "The world's leading learning company, with 22,500 employees operating in 70 countries.",
    logo: '/brands/pearson.svg',
  },
];

const PublishingCompanies = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <section className='py-20 bg-white border-t border-b border-gray-200'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <div className='inline-block mb-3'>
            <div className='w-20 h-px bg-black mx-auto mb-2'></div>
            <div className='text-sm tracking-widest text-gray-700 uppercase'>
              Industry Leaders
            </div>
          </div>
          <h2 className='text-4xl font-bold mb-6'>
            Popular Book Publishing Companies
          </h2>
          <p className='text-gray-700 max-w-2xl mx-auto'>
            We collaborate with the world's leading publishers to bring you the
            highest quality books across all genres.
          </p>
        </div>

        {/* Brand Partners Swiper */}
        <div className='py-8 mb-10'>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView='auto'
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
          >
            {publishingCompanies.map((company, index) => (
              <SwiperSlide
                key={index}
                className='flex justify-center items-center'
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className='h-12 max-w-[180px] object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100'
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : (
                  <div className='text-gray-600 font-medium'>
                    {company.name}
                  </div>
                )}
                <div
                  className='text-gray-600 font-medium'
                  style={{ display: 'none' }}
                >
                  {company.name}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Publishing Companies Cards */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className='pb-12'
        >
          {publishingCompanies.map((company, index) => (
            <SwiperSlide key={index}>
              <div
                className='bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer h-full'
                onClick={() => setSelectedCompany(company)}
              >
                <div className='h-24 bg-gray-50 flex items-center justify-center p-4'>
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className='h-12 max-w-full object-contain'
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                  ) : (
                    <div className='text-xl font-medium text-gray-800'>
                      {company.name}
                    </div>
                  )}
                  <div
                    className='text-xl font-medium text-gray-800'
                    style={{ display: 'none' }}
                  >
                    {company.name}
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex justify-between text-sm text-gray-500 mb-3'>
                    <span>Est. {company.founded}</span>
                    <span>{company.headquarters.split(',')[0]}</span>
                  </div>
                  <p className='text-gray-600 text-sm line-clamp-3'>
                    {company.description}
                  </p>
                </div>
                <div className='px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-end'>
                  <button className='text-sm text-gray-700 font-medium flex items-center group'>
                    <span className='mr-1'>Learn more</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 transition-transform group-hover:translate-x-1'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Details modal */}
        {selectedCompany && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50'
            onClick={() => setSelectedCompany(null)}
          >
            <div
              className='bg-white rounded-lg max-w-2xl w-full overflow-hidden'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className='p-6 border-b border-gray-100 flex justify-between items-center'>
                <h3 className='text-2xl font-bold'>{selectedCompany.name}</h3>
                <button
                  onClick={() => setSelectedCompany(null)}
                  className='text-gray-400 hover:text-gray-600'
                  aria-label='Close modal'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className='p-6'>
                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div className='bg-gray-50 p-4 rounded'>
                    <div className='text-sm text-gray-500'>Founded</div>
                    <div className='font-medium'>{selectedCompany.founded}</div>
                  </div>
                  <div className='bg-gray-50 p-4 rounded'>
                    <div className='text-sm text-gray-500'>Headquarters</div>
                    <div className='font-medium'>
                      {selectedCompany.headquarters}
                    </div>
                  </div>
                </div>

                <div className='mb-6'>
                  <h4 className='font-medium mb-2'>
                    About {selectedCompany.name}
                  </h4>
                  <p className='text-gray-600'>{selectedCompany.description}</p>
                </div>

                <div className='flex justify-end'>
                  <button
                    className='bg-black text-white px-6 py-2 rounded'
                    onClick={() => setSelectedCompany(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublishingCompanies;
