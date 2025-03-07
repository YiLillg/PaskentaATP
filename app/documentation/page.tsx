import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { Card, CardBody } from '@heroui/react';

import Image from 'next/image';
import badge from '@/public/badge.jpg';
import groupPhoto from '@/public/Group-Photo-Edit.jpg';
import leftarrow from '@/public/left-arrow.png';
import rightarrow from '@/public/right-arrow.png';
import approach from '@/public/system appraoch.png';

export default function PublicOutreach() {
  return (
    <div className='flex flex-col z-10'>
      <div className='w-full flex items-center justify-center z-10 relative'>
        {/* 添加渐变层 */}
        <div
          className='relative w-full'
          style={{
            backgroundImage: 'linear-gradient(to bottom, white, black)',
          }}
        >
          <Image
            src={groupPhoto}
            alt='About picture'
            className='w-full h-auto mix-blend-multiply'
            style={{
              opacity: 1,
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'fill',
            }}
          />
        </div>

        <div className='absolute bottom-10 right-10 flex flex-row items-center text-white z-20'>
          <MdKeyboardDoubleArrowLeft size={24} />
          <h1 className='text-4xl font-bold mx-2'>Documentation</h1>
          <MdKeyboardDoubleArrowRight size={24} />
        </div>
      </div>

      {/* Badge Image */}
      <div className='flex items-center justify-center'>
        <Image src={badge} alt='badge in landing page' className='z-0' />
      </div>

      {/* Main Section with improved styling */}
      <section className='flex flex-col md:flex-row px-4 py-8 gap-8 max-w-7xl mx-auto'>
        {/* Left Column - Safe System Approach */}
        <div className='flex flex-col w-full md:w-5/12 lg:w-1/3'>
          <Card className='shadow-xl rounded-xl overflow-hidden h-full flex flex-col'>
            {/* Title with Arrows - Improved spacing and alignment */}
            <div className='bg-gray-50 p-4 border-b'>
              <div className='flex flex-row items-center justify-center'>
                <MdKeyboardDoubleArrowLeft size={24} className='text-primary' />
                <h1 className='text-2xl font-bold mx-3 text-center'>
                  Safe System Approach
                </h1>
                <MdKeyboardDoubleArrowRight
                  size={24}
                  className='text-primary'
                />
              </div>
            </div>

            {/* Content with better spacing and readability */}
            <CardBody className='p-6 flex-grow flex flex-col justify-between'>
              <div>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  The U.S. Department of Transportation adopted the Safe System
                  Approach as the guiding paradigm to address roadway safety.
                  The Safe System Approach has been embraced by the
                  transportation community as an effective way to address and
                  mitigate the risks inherent in our enormous and complex
                  transportation system.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  It works by building and reinforcing multiple layers of
                  protection to both prevent crashes from happening in the first
                  place and minimize the harm caused to those involved when
                  crashes do occur. It is a holistic and comprehensive approach
                  that provides a guiding framework to make places safer for
                  people.
                </p>
              </div>

              {/* Image container with proper sizing and margins */}
              <div className='mt-6 flex justify-center'>
                <Image
                  src={approach}
                  alt='Safe System Approach Diagram'
                  className='rounded-lg max-w-full'
                  style={{
                    maxHeight: '280px',
                    width: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Right Section - Documentation */}
        <div className='w-full md:w-7/12 lg:w-2/3 flex flex-col'>
          <Card className='shadow-xl rounded-xl overflow-hidden h-full flex flex-col'>
            {/* Title with improved styling */}
            <div className='bg-gray-50 p-4 border-b'>
              <div className='flex flex-row items-center justify-center'>
                <Image
                  src={leftarrow}
                  alt='left arrow'
                  className='w-8 h-8 mr-4'
                />
                <h1 className='font-extrabold text-2xl md:text-3xl text-center'>
                  Available Documentation
                </h1>
                <Image
                  src={rightarrow}
                  alt='right arrow'
                  className='w-8 h-8 ml-4'
                />
              </div>
            </div>

            {/* Content with placeholder for future documentation */}
            <CardBody className='p-8 flex-grow flex flex-col'>
              <div className='flex flex-col items-center justify-center h-full'>
                <div className='text-center mb-8'>
                  <h2 className='text-2xl font-semibold text-primary mb-4'>
                    Documentation Coming Soon
                  </h2>
                  <p className='text-gray-600 max-w-2xl mx-auto'>
                    We&apos;re currently preparing comprehensive documentation
                    for this project. Please check back later to access the
                    latest reports, guidelines, and resources related to our
                    transportation safety initiatives.
                  </p>
                </div>

                {/* Optional: Document placeholders */}
                <div className='w-full max-w-2xl mx-auto mt-8'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {[
                      'Final Report',
                      'Safety Guidelines',
                      'Community Feedback',
                      'Implementation Plan',
                    ].map((docName) => (
                      <div
                        key={docName}
                        className='bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-center opacity-60'
                      >
                        <div className='mr-4 text-gray-400'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-10 w-10'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={1.5}
                              d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className='font-medium text-gray-500'>
                            {docName}
                          </h3>
                          <p className='text-sm text-gray-400'>Coming soon</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
}
