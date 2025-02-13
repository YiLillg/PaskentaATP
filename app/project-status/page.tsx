import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { Card, CardHeader, CardBody, Button } from '@heroui/react';

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

      <section className='flex flex-col w-full gap-6 p-6 h-auto flex-grow'>
        <h2 className='py-8 px-20 pb-24'>
          In January 2025, the Tribe began partnering with LLG Engineers, a
          transportation consulting firm, to assist with the SS4A Plan.
          Subsequently, the team is working on the initial tasks, including data
          collections, public outreach, review of background documentations, and
          development of a Community Engagement Plan. We are encourage everyone
          to share their inputs, and help us sharpen a better active
          transportation plan for the tribe.
        </h2>

        {/* Incoming Events */}
        <Card className='w-full p-6 min-h-48 shadow-lg'>
          <CardHeader className='flex flex-col items-center'>
            <div className='flex items-center justify-center gap-4 text-primary'>
              <Image src={leftarrow} alt='left arrow' className='w-6 h-6' />
              <h1 className='font-extrabold text-2xl py-4'>Incoming Events</h1>
              <Image src={rightarrow} alt='right arrow' className='w-6 h-6' />
            </div>
          </CardHeader>
          <CardBody className='text-center'>
            <p className='text-base'>
              Check back for more information to stay up-to-date.
            </p>
          </CardBody>
        </Card>

        {/* Past Events */}
        <Card className='w-full p-6  min-h-48  shadow-lg'>
          <CardHeader className='flex flex-col items-center'>
            <div className='flex items-center justify-center gap-4 text-primary'>
              <Image src={leftarrow} alt='left arrow' className='w-6 h-6' />
              <h1 className='font-extrabold text-2xl py-4'>Past Events</h1>
              <Image src={rightarrow} alt='right arrow' className='w-6 h-6' />
            </div>
          </CardHeader>
          <CardBody className='text-center'>
            <p className='text-base'>
              Check back for more information to stay up-to-date.
            </p>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
