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
      <section className='flex flex-col md:flex-row  md:min-h-screen sm:h-auto p-4 gap-6'>
        <div className='flex flex-col w-full md:w-1/3 h-screen'>
          {/* Stakeholder List Section */}
          <Card className='p-6 shadow-2xl flex flex-col items-center md:h-1/2 sm:h-auto '>
            {/* Title with Arrows */}
            <div className='flex flex-row items-center justify-center whitespace-nowrap p-2'>
              <MdKeyboardDoubleArrowLeft size={24} className='text-primary' />
              <h1 className='text-2xl font-bold mx-2 text-center'>
                Stakeholder Lists
              </h1>
              <MdKeyboardDoubleArrowRight size={24} className='text-primary' />
            </div>

            {/* Stakeholder List */}
            <CardBody className='mt-4 w-full flex-grow flex flex-col justify-start'>
              <ul className='text-base list-disc list-inside text-center space-y-2'>
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

          {/* Contact Us Section */}
          <Card className='p-6 shadow-2xl flex flex-col items-center md:h-1/2 sm:h-1/2 sm:mt-16'>
            {/* Title with Arrows */}
            <div className='flex flex-row items-center justify-center whitespace-nowrap p-2'>
              <MdKeyboardDoubleArrowLeft size={24} className='text-primary' />
              <h1 className='text-2xl font-bold mx-2 text-center'>
                Contact Us
              </h1>
              <MdKeyboardDoubleArrowRight size={24} className='text-primary' />
            </div>

            {/* Contact Information */}
            <CardBody className='mt-4 w-full flex-grow flex flex-col justify-start sm:items-center py-2'>
              <p className='py-4'>Have a question? Contact us!</p>
              <p className='py-1'>Name: Yi Li</p>
              <p className='py-1'>Phone: (111) 222 - 3333</p>
              <p className='py-1'>Email: li@llgengineers.com</p>55r
            </CardBody>
          </Card>
        </div>

        {/* Right Section - Public Input */}
        <div className='w-full md:w-2/3 flex flex-col items-center justify-center p-6 sm:h-auto'>
          {/* Title */}
          <div className='flex flex-row items-center justify-center mb-8 text-primary whitespace-nowrap'>
            <Image src={leftarrow} alt='left arrow' className='w-8 h-8 mr-4' />
            <h1 className='font-extrabold text-2xl md:text-3xl text-center'>
              Share Inputs with Us
            </h1>
            <Image
              src={rightarrow}
              alt='right arrow'
              className='w-8 h-8 ml-4'
            />
          </div>

          {/* Description */}
          <h1 className='text-base md:text-lg text-foreground text-left mb-6 '>
            We want to hear your ideas and your experiences using the roadways
            in the Laguna Beach. We have prepared an Interactive Webmap where
            you can identify places where you've experienced roadway safety
            challenges traveling, whether in a car, on foot, on a bike, or on
            another mode. You can also identify specific safety concerns, such
            as speeding cars, poorly lit areas, or lack of sidewalks. Along with
            the Webmap is a survey where you can share you experiences with
            traveling in the City of Laguna Beach and your vision for the future
            of our roadways. The comment period is now closed as of 11/19.
            Information and updates about the project can be found on the City's
            website.
          </h1>

          {/* Report Link */}
          <h2 className='text-lg font-bold text-primary text-center mb-6'>
            Click Here to Report:{' '}
            <span className='underline'>
              <a href='https://streetstory.berkeley.edu/city/pastenta#'>
                Street Story
              </a>
            </span>
          </h2>

          {/* Image */}
          <Image
            src={StreetStory}
            alt='Street Story Screenshot'
            className='rounded-lg'
          />

          {/* Survey Download Link */}
          <h2 className='text-lg font-bold text-primary text-center my-8'>
            Click Here to Participate in the Survey:{' '}
            <a
              href='/Survey.pdf'
              download='Tribal_Crash_Data_Tool_Survey.pdf'
              className='underline hover:text-blue-600 transition-colors'
            >
              Download the Survey
            </a>
          </h2>
        </div>
      </section>
    </div>
  );
}
