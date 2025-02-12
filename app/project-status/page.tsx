import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

import Image from 'next/image';
import badge from '@/public/badge.jpg';
import groupPhoto from '@/public/Group-Photo-Edit.jpg';
import verticalBanner from '@/public/verticalbanner.jpg';
import leftarrow from '@/public/left-arrow.png';
import rightarrow from '@/public/right-arrow.png';

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
          <h1 className='text-4xl font-bold mx-2'>Project Status</h1>
          <MdKeyboardDoubleArrowRight size={24} />
        </div>
      </div>

      {/* Badge Image */}
      <div className='flex items-center justify-center'>
        <Image src={badge} alt='badge in landing page' className='z-0' />
      </div>

      <section className='flex h-screen'>
        {/* left section */}
        <div className='relative w-1/2 h-full p-6 ml-6 '>
          <Image
            src={verticalBanner}
            alt='background banner'
            className='h-full w-full object-cover rounded-3xl'
          />
          <div className='absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-foreground z-20 w-max mt-8'>
            <div className='flex flex-row items-center justify-center whitespace-nowrap p-2 text-primary mt-8'>
              <Image
                src={leftarrow}
                alt='left arrow'
                className='z-0 mr-6 w-8 h-8'
              />
              <h1 className='font-extrabold text-2xl'>Incomning Events</h1>
              <Image
                src={rightarrow}
                alt='right arrow'
                className='z-0 ml-6 w-8 h-8'
              />
            </div>

            <p className='mt-4 text-base list-disc list-inside text-center space-y-2'>
              Check back for more information to stay up-to-date.
            </p>
          </div>
        </div>

        <div className='relative w-1/2 h-full p-6 mr-6'>
          <Image
            src={verticalBanner}
            alt='background banner'
            className='h-full w-full object-cover rounded-3xl'
          />
          <div className='absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-foreground z-20 w-max mt-8'>
            <div className='flex flex-row items-center justify-center whitespace-nowrap p-2 text-primary mt-8'>
              <Image
                src={leftarrow}
                alt='left arrow'
                className='z-0 mr-6 w-8 h-8'
              />
              <h1 className='font-extrabold text-2xl'>Past Events</h1>
              <Image
                src={rightarrow}
                alt='right arrow'
                className='z-0 ml-6 w-8 h-8'
              />
            </div>

            <p className='mt-4 text-base list-disc list-inside text-center space-y-2'>
              Check back for more information to stay up-to-date.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
