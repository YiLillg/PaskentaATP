import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { Card, CardHeader, CardBody } from '@heroui/react';

import Image from 'next/image';
import badge from '@/public/badge.jpg';
import groupPhoto from '@/public/Group-Photo-Edit.jpg';
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

      {/* Improved section with better spacing, typography and card layout */}
      <section className='max-w-7xl mx-auto flex flex-col w-full gap-8 p-6 pb-24'>
        {/* Project description with improved typography and styling */}
        <div className='bg-background rounded-xl p-6 md:p-8 shadow-md border border-secondary/10'>
          <h2 className='text-xl md:text-2xl text-foreground leading-relaxed mb-4 font-medium'>
            Project Overview
          </h2>
          <p className='text-foreground/90 leading-relaxed'>
            The Tribe, in partnership with LLG Engineers, a transportation
            consulting firm, to assist with the Comprehensive Safety Action Plan
            (CSAP). Subsequently, the team is working on the initial tasks,
            including data collections, public outreach, review of background
            documentations, and development of a Community Engagement Plan. We
            are encourage everyone to share their inputs, and help us shape a
            better CSAP for the Tribe.
          </p>
        </div>

        {/* Timeline/Status cards in a grid for better layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Incoming Events - Enhanced card */}
          <Card className='rounded-xl overflow-hidden shadow-lg border border-primary/10 hover:shadow-xl transition-shadow'>
            <CardHeader className='flex flex-col items-center bg-background py-4 border-b border-primary/10'>
              <div className='flex items-center justify-center gap-4 text-primary'>
                <Image src={leftarrow} alt='left arrow' className='w-6 h-6' />
                <h1 className='font-extrabold text-2xl'>Incoming Events</h1>
                <Image src={rightarrow} alt='right arrow' className='w-6 h-6' />
              </div>
            </CardHeader>
            <CardBody className='text-center p-6 bg-background'>
              <div className='flex flex-col items-center justify-center min-h-40'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-16 w-16 text-primary/30 mb-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                <p className='text-foreground'>
                  Check back for more information to stay up-to-date.
                </p>
                <p className='text-sm text-foreground/70 mt-4'>
                  Future community meetings and engagement opportunities will be
                  posted here.
                </p>
              </div>
            </CardBody>
          </Card>

          {/* Past Events - Enhanced card */}
          <Card className='rounded-xl overflow-hidden shadow-lg border border-thirdary/10 hover:shadow-xl transition-shadow'>
            <CardHeader className='flex flex-col items-center bg-background py-4 border-b border-thirdary/10'>
              <div className='flex items-center justify-center gap-4 text-primary'>
                <Image src={leftarrow} alt='left arrow' className='w-6 h-6' />
                <h1 className='font-extrabold text-2xl'>Past Events</h1>
                <Image src={rightarrow} alt='right arrow' className='w-6 h-6' />
              </div>
            </CardHeader>
            <CardBody className='text-center p-6 bg-background'>
              <div className='flex flex-col items-center justify-center min-h-40'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-16 w-16 text-thirdary/30 mb-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <p className='text-foreground'>
                  Check back for more information to stay up-to-date.
                </p>
                <p className='text-sm text-foreground/70 mt-4'>
                  Previous project milestones and community events will be
                  documented here.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Project timeline - New addition for more information */}
        {/* <Card className='rounded-xl overflow-hidden shadow-lg border border-secondary/10 mt-4'>
          <CardHeader className='flex flex-col items-center bg-background py-4 border-b border-secondary/10'>
            <div className='flex items-center justify-center gap-4 text-primary'>
              <Image src={leftarrow} alt='left arrow' className='w-6 h-6' />
              <h1 className='font-extrabold text-2xl'>Project Timeline</h1>
              <Image src={rightarrow} alt='right arrow' className='w-6 h-6' />
            </div>
          </CardHeader>
          <CardBody className='p-6 bg-background'>
            <div className='space-y-8'>
              <div className='flex'>
                <div className='flex flex-col items-center mr-4'>
                  <div className='w-4 h-4 rounded-full bg-primary'></div>
                  <div className='w-1 h-full bg-primary/20'></div>
                </div>
                <div>
                  <h3 className='text-lg font-medium text-primary'>
                    January 2025
                  </h3>
                  <p className='text-foreground/90 mt-1'>
                    Project kickoff. Partnership established with LLG Engineers
                    to assist with the SS4A Plan.
                  </p>
                </div>
              </div>
              <div className='flex'>
                <div className='flex flex-col items-center mr-4'>
                  <div className='w-4 h-4 rounded-full bg-primary'></div>
                  <div className='w-1 h-full bg-primary/20'></div>
                </div>
                <div>
                  <h3 className='text-lg font-medium text-primary'>
                    February-March 2025
                  </h3>
                  <p className='text-foreground/90 mt-1'>
                    Data collection, public outreach, and review of background
                    documentation.
                  </p>
                </div>
              </div>
              <div className='flex'>
                <div className='flex flex-col items-center mr-4'>
                  <div className='w-4 h-4 rounded-full bg-primary'></div>
                  <div className='w-1 h-0 bg-primary/20'></div>
                </div>
                <div>
                  <h3 className='text-lg font-medium text-primary'>
                    April 2025 (Current)
                  </h3>
                  <p className='text-foreground/90 mt-1'>
                    Development of Community Engagement Plan. Seeking community
                    input to improve the active transportation plan.
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card> */}
      </section>
    </div>
  );
}
