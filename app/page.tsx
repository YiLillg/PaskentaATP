'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import background from '@/public/LandingPage.jpg';
import badge from '@/public/badge.jpg';
import leftArrow from '@/public/left-arrow.jpg';
import rightArrow from '@/public/right-arrow.jpg';

export default function Home() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className='flex flex-col items-center text-foreground'>
      {/* Hero Section - Improved with better overlay and spacing */}
      <section className='relative w-full min-h-screen flex flex-col items-center justify-center text-center'>
        {/* Background Image with Enhanced Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 z-0' />
        <Image
          src={background}
          alt='Paskenta tribal lands background'
          priority
          fill
          className='object-cover z-0'
          style={{ opacity: 0.25 }}
        />

        {/* Content with Improved Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='z-10 px-6 sm:px-10 max-w-5xl'
        >
          <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-lg mb-6'>
            Paskenta Band of Nomlaki Indians Comprehensive Safety Action Plan
          </h1>
          <p className='font-medium text-base sm:text-lg md:text-xl text-white mt-4 leading-relaxed max-w-3xl mx-auto'>
            Our goal is to prevent roadway fatalities and serious injuries by
            identifying high-risk areas and prioritizing investments in safety
            throughout Tribal lands.
          </p>

          {/* Added call-to-action button */}
          <motion.button
            className='mt-8 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => (window.location.href = '/get-involved')}
          >
            Take the Survey
          </motion.button>
        </motion.div>
      </section>

      {/* Badge Image - Optimized size and spacing */}
      <div className='flex items-center justify-center'>
        <Image src={badge} alt='badge in landing page' className='z-0' />
      </div>

      {/* NEW SECTION: What is a Comprehensive Safety Action Plan */}
      <section className='w-full py-16 bg-gradient-to-r from-primary/5 to-primary/10'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='max-w-7xl mx-auto px-4 sm:px-10'
        >
          <div className='flex flex-row items-center justify-center mb-10'>
            <Image
              src={leftArrow}
              alt='Decorative left arrow'
              className='w-8 h-8 mr-4'
            />
            <h2 className='font-extrabold text-3xl md:text-4xl text-primary'>
              What is a Comprehensive Safety Action Plan?
            </h2>
            <Image
              src={rightArrow}
              alt='Decorative right arrow'
              className='w-8 h-8 ml-4'
            />
          </div>

          <div className='bg-white rounded-lg shadow-xl p-8 md:p-12'>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className='text-lg leading-relaxed text-center max-w-4xl mx-auto font-barlow'
            >
              A part of the Safe Roads for All (SS4A) program, a Comprehensive
              Safety Action Plan (CSAP) is a plan developed to identify,
              analyze, and prioritize safety related improvements within the
              Tribal transportation system. The plan will apply a systemic
              safety approach to identify high-risk locations, engage
              stakeholders to understand the needs of the Tribal community and
              its visitors, develop strategies to implement safe designs that
              are effective and equitable to all road users, and aid in the
              process to secure funding for implementing safety improvements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className='flex justify-center mt-10'
            >
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl'>
                <div className='bg-primary/10 p-6 rounded-lg text-center'>
                  <div className='w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z'
                      />
                    </svg>
                  </div>
                  <h3 className='font-bold text-lg mb-2 text-primary'>
                    Identify
                  </h3>
                  <p className='text-sm'>
                    Analyze high-risk areas and prioritize safety improvements
                  </p>
                </div>

                <div className='bg-primary/10 p-6 rounded-lg text-center'>
                  <div className='w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z'
                      />
                    </svg>
                  </div>
                  <h3 className='font-bold text-lg mb-2 text-primary'>
                    Engage
                  </h3>
                  <p className='text-sm'>
                    Collaborate with stakeholders to understand community needs
                  </p>
                </div>

                <div className='bg-primary/10 p-6 rounded-lg text-center'>
                  <div className='w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
                      />
                    </svg>
                  </div>
                  <h3 className='font-bold text-lg mb-2 text-primary'>
                    Implement
                  </h3>
                  <p className='text-sm'>
                    Develop and fund effective, equitable safety improvements
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission Section - Improved layout and typography */}
      <section className='flex flex-col items-center justify-center py-16 px-4 max-w-7xl mx-auto'>
        <div className='flex flex-row items-center justify-center mb-10'>
          <Image
            src={leftArrow}
            alt='Decorative left arrow'
            className='w-8 h-8 mr-4'
          />
          <h2 className='font-extrabold text-3xl md:text-4xl text-primary'>
            Mission
          </h2>
          <Image
            src={rightArrow}
            alt='Decorative right arrow'
            className='w-8 h-8 ml-4'
          />
        </div>

        <div className='px-4 sm:px-10 md:px-16 lg:px-24'>
          {/* Mission statement with improved typography */}
          <p className='text-foreground text-lg leading-relaxed mb-8'>
            The Paskenta Band of Nomlaki Indians is committed to fostering a
            safe, sustainable, and connected community through an equitable
            active transportation plan. By prioritizing the health, well-being,
            and mobility of our tribal members and neighbors, we aim to create
            accessible pathways, promote walking and cycling, and honor our
            ancestral lands while reducing our environmental impact. Together,
            we will build a future where every journey reflects our values of
            stewardship, unity, and resilience.
          </p>

          {/* Objectives section with motion animations */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className='mt-10'
          >
            <h3 className='text-xl md:text-2xl font-bold text-primary mb-6'>
              Our Five Objectives:
            </h3>

            <ul className='space-y-6'>
              {[
                {
                  title: 'Enhance Transportation Safety and Equity',
                  description:
                    'Identify high-risk areas for crashes using crash history and transportation data while ensuring a safe, sustainable, integrated, and efficient system for all users, particularly disadvantaged Tribal communities.',
                },
                {
                  title: 'Target Key Emphasis Areas for Safety Interventions',
                  description:
                    'Use crash analysis, tribal objectives, and tribal community insights to prioritize areas for safety improvements and transportation equity.',
                },
                {
                  title: 'Develop a Comprehensive Safety Strategy',
                  description:
                    'Establish a structured safety program and toolbox that aligns with best practices, supports systemic safety improvements, and fosters opportunities for future initiatives.',
                },
                {
                  title: 'Plan and Prioritize Safety Improvements',
                  description:
                    'Define short-, mid-, and long-term safety enhancements with funding considerations.',
                },
                {
                  title:
                    'Recommend Implementation and Fund Sources for Countermeasures',
                  description:
                    'Develop, propose countermeasure projects and recommend funding programs, considering cost, effort, and timeline to maximize impact.',
                },
              ].map((objective, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className='flex gap-4 items-start'
                >
                  <div className='flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold'>
                    {index + 1}
                  </div>
                  <div>
                    <h4 className='font-bold text-lg text-primary'>
                      {objective.title}
                    </h4>
                    <p className='mt-1 text-foreground'>
                      {objective.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
