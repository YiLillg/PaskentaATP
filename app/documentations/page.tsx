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
          <h1 className='text-4xl font-bold mx-2'>Documentations</h1>
          <MdKeyboardDoubleArrowRight size={24} />
        </div>
      </div>

      {/* Badge Image */}
      <div className='flex items-center justify-center'>
        <Image src={badge} alt='badge in landing page' className='z-0' />
      </div>

      <section className='flex flex-col md:flex-row  md:min-h-screen sm:h-auto'>
        <div className='flex flex-col w-full md:w-1/3 h-screen'>
          {/* Stakeholder List Section */}
          <Card className='p-6 shadow-2xl flex flex-col items-center md:h-full sm:h-auto '>
            {/* Title with Arrows */}
            <div className='flex flex-row items-center justify-center whitespace-nowrap p-2'>
              <MdKeyboardDoubleArrowLeft size={24} className='text-primary' />
              <h1 className='text-2xl font-bold mx-2 text-center'>
                Safe System Approach
              </h1>
              <MdKeyboardDoubleArrowRight size={24} className='text-primary' />
            </div>

            {/* Stakeholder List */}
            <CardBody className='mt-4 w-full flex-grow flex flex-col justify-start'>
              <h2>
                The U.S. Department of Transportation adopted the Safe System
                Approach as the guiding paradigm to address roadway safety. The
                Safe System Approach has been embraced by the transportation
                community as an effective way to address and mitigate the risks
                inherent in our enormous and complex transportation system. It
                works by building and reinforcing multiple layers of protection
                to both prevent crashes from happening in the first place and
                minimize the harm caused to those involved when crashes do
                occur. It is a holistic and comprehensive approach that provides
                a guiding framework to make places safer for people.
              </h2>
            </CardBody>
            <Image
              src={approach}
              alt={'System Approach'}
              className='p-6 sm:h-auto sm:w-68 '
            />
          </Card>
        </div>

        {/* Right Section - Public Input */}
        <div className='w-full md:w-2/3 flex flex-col items-center justify-start p-6 sm:h-auto'>
          {/* Title */}
          <div className='flex flex-row items-center justify-start mb-8 text-primary whitespace-nowrap mt-8'>
            <Image src={leftarrow} alt='left arrow' className='w-8 h-8 mr-4' />
            <h1 className='font-extrabold text-2xl md:text-3xl text-center'>
              Please checkout later to keep up-to-date
            </h1>
            <Image
              src={rightarrow}
              alt='right arrow'
              className='w-8 h-8 ml-4'
            />
          </div>

          {/* Survey Download Link */}
          {/* <h2 className='text-lg font-bold text-primary text-center my-8'>
            Click Here to Participate in the Survey:{' '}
            <a
              href='/Survey.pdf'
              download='Tribal_Crash_Data_Tool_Survey.pdf'
              className='underline hover:text-blue-600 transition-colors'
            >
              Download the Survey
            </a>
          </h2> */}
        </div>
      </section>
    </div>
  );
}
