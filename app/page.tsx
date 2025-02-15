'use client';

import Image from 'next/image';
import background from '@/public/LandingPage.jpg';
import { motion } from 'framer-motion';
import badge from '@/public/badge.jpg';
import lefterrow from '@/public/left-arrow.jpg';
import righterror from '@/public/right-arrow.jpg';

export default function Home() {
  return (
    <div className='flex flex-col items-center text-gray-900'>
      {/* Hero Section */}
      <div className='relative w-full h-screen flex flex-col items-center justify-center text-center'>
        {/* Background Image with Overlay */}
        <div className='absolute inset-0 bg-black/80 z-0' />
        <Image
          src={background}
          alt='Home page background image'
          fill
          className='object-cover z-0'
          style={{ opacity: 0.2 }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='z-10 px-6 max-w-4xl'
        >
          <h1 className='font-extrabold text-5xl text-white drop-shadow-lg '>
            Paskenta Active Transportation Plan
          </h1>
          <p className='font-medium text-lg text-white mt-4 leading-relaxed'>
            Our goal is to achieve a 50% reduction in pedestrian and cyclist
            fatalities and serious injuries by 2030 by prioritizing equitable
            infrastructure upgrades, traffic calming measures, and safety
            education, with a focus on high-risk corridors and underserved
            communities.
          </p>
        </motion.div>
      </div>

      {/* Badge Image */}
      <div className='flex items-center justify-center'>
        <Image src={badge} alt='badge in landing page' className='z-0' />
      </div>

      {/* Mission Section */}
      <div className='flex flex-col items-center justify-center mt-12 mb-24'>
        <div className='flex flex-row size-16 items-center justify-center mb-8'>
          <Image src={lefterrow} alt='left arrow' className='z-0 mr-6' />
          <h1 className='font-extrabold text-3xl mx-6'>Mission</h1>
          <Image src={righterror} alt='right arrow' className='z-0 ml-6' />
        </div>
        <div className='px-24'>
          <p>
            The Paskenta Band of Nomlaki Indians is committed to fostering a
            safe, sustainable, and connected community through an equitable and
            culturally respectful active transportation plan. By prioritizing
            the health, well-being, and mobility of our tribal members and
            neighbors, we aim to create accessible pathways, promote walking and
            cycling, and honor our ancestral lands while reducing our
            environmental impact. Together, we will build a future where every
            journey reflects our values of stewardship, unity, and resilience.
          </p>
          <br className='size-6' />
          <p className='my-2'>Our five objectives:</p>
          <ul className='list-disc list-inside space-y-2'>
            <li>
              <span className='font-bold'>
                Enhance Transportation Safety and Equity:{' '}
              </span>{' '}
              Identify high-risk areas for crashes using crash history and
              transportation data while ensuring a safe, sustainable,
              integrated, and efficient system for all users, particularly
              disadvantaged Tribal communities.
            </li>
            <li>
              <span className='font-bold'>
                Develop a Comprehensive Safety Strategy:{' '}
              </span>
              Establish a structured safety program and toolbox that aligns with
              best practices, supports systemic safety improvements, and fosters
              opportunities for future initiatives.
            </li>
            <li>
              <span className='font-bold'>
                Target Key Emphasis Areas for Safety Interventions:{' '}
              </span>{' '}
              Use crash analysis, tribal objectives, and Tribal community
              insights to prioritize areas for safety improvements and
              transportation equity.
            </li>
            <li>
              <span className='font-bold'>
                Plan and Prioritize Safety Improvements:{' '}
              </span>{' '}
              Define short-, mid-, and long-term safety enhancements with
              funding considerations.
            </li>{' '}
            <li>
              <span className='font-bold'>
                Recommend Implementation and Fund Sources for Countermeasures:{' '}
              </span>{' '}
              Develop, propose countermeasure projects and recommend funding
              programs, considering cost, effort, and timeline to maximize
              impact.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
