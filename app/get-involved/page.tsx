import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { Card, CardBody } from '@heroui/react';
import Image from 'next/image';

import badge from '@/public/badge.jpg';
import groupPhoto from '@/public/Group-Photo-Edit.jpg';
import leftarrow from '@/public/left-arrow.jpg';
import rightarrow from '@/public/right-arrow.jpg';
import StreetStory from '@/public/StreetStory.png';

export default function PublicOutreach() {
  return (
    <div className='flex flex-col z-10'>
      <div className='w-full flex items-center justify-center z-10 relative'>
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
          <h1 className='text-4xl font-bold mx-2'>Get Involved</h1>
          <MdKeyboardDoubleArrowRight size={24} />
        </div>
      </div>

      {/* Badge Image */}
      <div className='flex items-center justify-center'>
        <Image src={badge} alt='badge in landing page' className='z-0' />
      </div>

      {/* Main Content - Improved UI */}
      <section className='max-w-5xl mx-auto px-4 py-8 mb-16'>
        <Card className='shadow-2xl rounded-2xl overflow-hidden border border-gray-100'>
          {/* Header with gradient background */}
          <div className='bg-gradient-to-r from-primary/90 to-primary px-6 py-5'>
            <div className='flex flex-row items-center justify-center'>
              <Image
                src={leftarrow}
                alt='left arrow'
                className='w-8 h-8 mr-4'
              />
              <h1 className='font-extrabold text-2xl md:text-3xl text-center text-primary'>
                Share Inputs with Us
              </h1>
              <Image
                src={rightarrow}
                alt='right arrow'
                className='w-8 h-8 ml-4'
              />
            </div>
          </div>

          <CardBody className='p-8'>
            {/* Description with better typography */}
            <div className='prose max-w-none mb-10'>
              <p className='text-gray-700 leading-relaxed text-lg'>
                We want to hear from you! Share your experiences traveling on
                the roadways within the Paskenta Band of Nomlaki Indians&apos;
                community. We are working with StreetMap, developed by SafeTREC
                and UC Berkeley, where you can mark locations where you&apos;ve
                encountered safety challenges—whether you&apos;re driving,
                walking, biking, or using another mode of transportation.
              </p>
              <p className='text-gray-700 leading-relaxed text-lg mt-4'>
                You can also highlight specific concerns like speeding, poor
                lighting, or missing sidewalks. Alongside the Webmap, we invite
                you to complete a survey to share your thoughts on roadway
                safety and your vision for a safer community. Your input will
                help guide future improvements.
              </p>

              {/* Status alert with better styling */}
              <div className='bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mt-6'>
                <p className='text-amber-800 font-medium'>
                  The comment period is now closed as of 03/30/25.
                </p>
              </div>
            </div>

            {/* Action Cards with improved layout */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
              {/* Survey Card - Enhanced design */}
              <div className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow'>
                <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-primary'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                </div>
                <h2 className='text-xl font-bold text-primary text-center mb-3'>
                  Participate in Our Survey
                </h2>
                <p className='text-gray-600 mb-6 text-center'>
                  Share your thoughts on roadway safety and help shape future
                  improvements
                </p>
                <div className='text-center'>
                  <a
                    href='https://www.surveymonkey.com/r/5S8F9YB'
                    className='inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-md'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Take the Survey
                  </a>
                </div>
              </div>

              {/* Contact Card - New design to match */}
              <div className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow'>
                <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-primary'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h2 className='text-xl font-bold text-primary text-center mb-3'>
                  Contact Us
                </h2>
                <p className='text-gray-600 mb-6 text-center'>
                  Have questions or need more information? Reach out to our team
                </p>
                <div className='text-center'>
                  <a
                    href='mailto:paskenta-sap@gmail.com'
                    className='inline-block px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all hover:scale-105 shadow-md'
                  >
                    paskenta-sap@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Street Story Section - Better visual separation */}
            <div className='mt-12 pt-8 border-t border-gray-200'>
              <div className='text-center mb-8'>
                <h2 className='text-2xl font-bold text-primary mb-3'>
                  Report Safety Concerns
                </h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                  Use the Street Story tool to mark locations where you've
                  encountered safety challenges
                </p>
              </div>

              <div className='flex flex-col items-center'>
                <a
                  href='https://streetstory.berkeley.edu/city/pastenta#'
                  className='inline-block px-8 py-4 mb-8 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors hover:scale-105 shadow-lg'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Street Story Reporting Tool
                </a>

                {/* Image with improved container */}
                <div className='w-full max-w-3xl border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow'>
                  <Image
                    src={StreetStory}
                    alt='Street Story Screenshot'
                    className='w-full h-auto'
                  />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
