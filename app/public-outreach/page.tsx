import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

import Image from 'next/image';
import badge from '@/public/badge.jpg';
import groupPhoto from '@/public/Group-Photo-Edit.jpg';
import verticalBanner from '@/public/verticalbanner.jpg';
import lefterrow from '@/public/left-arrow.jpg';
import righterror from '@/public/right-arrow.jpg';
import StreetStory from '@/public/StreetStory.png';

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
          <h1 className='text-4xl font-bold mx-2'>Public Outreach</h1>
          <MdKeyboardDoubleArrowRight size={24} />
        </div>
      </div>

      {/* Badge Image */}
      <div className='flex items-center justify-center'>
        <Image src={badge} alt='badge in landing page' className='z-0' />
      </div>

      <section className='flex h-screen'>
        {/* Left Section - 1/3 Width */}
        <div className='relative w-1/3 h-full'>
          <Image
            src={verticalBanner}
            alt='background banner'
            className='h-full w-full object-cover'
          />

          <div className='absolute top-0 left-1/2 -translate-x-1/2 flex flex-row items-center justify-center text-foreground z-20 mt-12 p-2 whitespace-nowrap w-max'>
            <MdKeyboardDoubleArrowLeft size={24} className='text-primary' />
            <h1 className='text-2xl font-bold mx-2'>Stakeholder Lists</h1>
            <MdKeyboardDoubleArrowRight size={24} className='text-primary' />
          </div>
        </div>

        {/* Right Section - 2/3 Width */}
        <div className='w-2/3 h-full flex flex-col items-center justify-center p-6 mx-6'>
          {/* title */}
          <div className='flex flex-row size-16 items-center justify-center mb-8 text-primary whitespace-nowrap'>
            <Image src={lefterrow} alt='left arrow' className='z-0 mr-6' />
            <h1 className='font-extrabold text-3xl mx-6'>
              Share Inputs with Us
            </h1>
            <Image src={righterror} alt='right arrow' className='z-0' />
          </div>
          <h1 className='text-lg font-normal text-foreground text-center mb-8'>
            Your voice matters! Help shape the future of our community by
            sharing your thoughts, experiences, or reporting
            collisions/near-misses on the Street Story website. Together, we can
            create safer roads and pathways for everyone. Let’s make a
            difference—share your story today!
          </h1>

          <h2 className='text-lg font-bold text-primary text-center mb-8'>
            Click Here to Report:{' '}
            <span className='underline'>
              <a href='https://streetstory.berkeley.edu/city/pastenta#'>
                Street Story
              </a>
            </span>
          </h2>
          <Image
            src={StreetStory}
            alt='street story sceenshots'
            className='rounded-lg'
          />

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
