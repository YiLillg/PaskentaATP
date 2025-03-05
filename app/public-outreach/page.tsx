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
      {/* Header Section */}
      <div className='w-full flex items-center justify-center relative z-10'>
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
          <h1 className='text-4xl font-bold mx-2'>Public Outreach</h1>
          <MdKeyboardDoubleArrowRight size={24} />
        </div>
      </div>

      {/* Badge Image */}
      <div className='flex items-center justify-center'>
        <Image src={badge} alt='badge in landing page' className='z-0' />
      </div>

      {/* Main Section */}
      {/* Main Section - Improved layout and styling */}
      <section className='flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-8 gap-8'>
        {/* Left Column - Stakeholders and Contact */}
        <div className='flex flex-col w-full md:w-1/3 gap-8'>
          {/* Stakeholder List - Enhanced Card */}
          <Card className='shadow-xl rounded-xl overflow-hidden'>
            {/* Title with Arrows - Improved styling */}
            <div className='bg-gray-50 border-b px-4 py-3'>
              <div className='flex flex-row items-center justify-center'>
                <MdKeyboardDoubleArrowLeft size={24} className='text-primary' />
                <h1 className='text-2xl font-bold mx-3 text-center'>
                  Stakeholder Lists
                </h1>
                <MdKeyboardDoubleArrowRight
                  size={24}
                  className='text-primary'
                />
              </div>
            </div>

            {/* Stakeholder List - Better spacing and styling */}
            <CardBody className='p-6'>
              <ul className='text-base list-disc list-outside pl-5 space-y-3 text-gray-700'>
                <li>Tribal Council Members</li>
                <li>Tribal Attorney</li>
                <li>Tribal Chairman</li>
                <li>Bureau of Indian Affairs (BIA) Representatives</li>
                <li>Non-profit Organizations</li>
                <li>Fire Department</li>
                <li>Lead Neighboring Tribal Leaders</li>
              </ul>
            </CardBody>
          </Card>

          {/* Contact Us - Enhanced Card */}
          <Card className='shadow-xl rounded-xl overflow-hidden'>
            {/* Title with Arrows - Improved styling */}
            <div className='bg-gray-50 border-b px-4 py-3'>
              <div className='flex flex-row items-center justify-center'>
                <MdKeyboardDoubleArrowLeft size={24} className='text-primary' />
                <h1 className='text-2xl font-bold mx-3 text-center'>
                  Contact Us
                </h1>
                <MdKeyboardDoubleArrowRight
                  size={24}
                  className='text-primary'
                />
              </div>
            </div>

            {/* Contact Information - Improved layout and styling */}
            <CardBody className='p-6'>
              <div className='text-center mb-4'>
                <p className='text-lg font-medium text-primary'>
                  Have a question? Contact us!
                </p>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-primary'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <p className='text-gray-700'>Name: Yi Li</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-primary'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                  <p className='text-gray-700'>Phone: (949) 825 - 6175</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-primary'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                  <p className='text-gray-700'>Email: li@llgengineers.com</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Right Section - Public Input with improved layout */}
        <div className='w-full md:w-2/3'>
          <Card className='shadow-xl rounded-xl overflow-hidden'>
            {/* Title with custom styling */}
            <div className='bg-gray-50 border-b px-4 py-4'>
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

            <CardBody className='p-6'>
              {/* Description - Improved typography and readability */}
              <div className='prose max-w-none mb-8'>
                <p className='text-gray-700 leading-relaxed'>
                  We want to hear from you! Share your experiences traveling on
                  the roadways within the Paskenta Band of Nomlaki Indians&apos;
                  community. We are working with StreetMap, developed by
                  SafeTREC and UC Berkeley, where you can mark locations where
                  you&apos;ve encountered safety challenges—whether you&apos;re
                  driving, walking, biking, or using another mode of
                  transportation.
                </p>
                <p className='text-gray-700 leading-relaxed mt-4'>
                  You can also highlight specific concerns like speeding, poor
                  lighting, or missing sidewalks. Alongside the Webmap, we
                  invite you to complete a survey to share your thoughts on
                  roadway safety and your vision for a safer community. Your
                  input will help guide future improvements.
                </p>
                <p className='text-gray-700 leading-relaxed mt-4 font-medium'>
                  The comment period is now closed as of 03/30/25. Visit our
                  website for updates and more information.
                </p>
              </div>

              {/* Action Links - Improved styling and visual hierarchy */}
              <div className='space-y-8'>
                {/* Survey Link - Enhanced styling */}
                <div className='bg-gray-100 rounded-lg p-5 text-center border border-gray-300'>
                  <h2 className='text-xl font-bold text-primary mb-3'>
                    Participate in Our Survey
                  </h2>
                  <a
                    href='https://www.surveymonkey.com/r/5S8F9YB'
                    className='inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Take the Survey
                  </a>
                </div>

                {/* Report Link and Image - Better organization */}
                <div className='bg-gray-100 rounded-lg p-5 border border-gray-300'>
                  <h2 className='text-xl font-bold text-primary mb-3 text-center'>
                    Report Safety Concerns
                  </h2>
                  <div className='flex flex-col items-center'>
                    <a
                      href='https://streetstory.berkeley.edu/city/pastenta#'
                      className='inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors mb-6'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Street Story Reporting Tool
                    </a>

                    {/* Image with proper container */}
                    <div className='mt-2 border border-gray-200 rounded-lg overflow-hidden shadow-md'>
                      <Image
                        src={StreetStory}
                        alt='Street Story Screenshot'
                        className='w-full h-auto'
                      />
                    </div>
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
