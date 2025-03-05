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
            Paskenta Safety Action Plan
          </h1>
          <p className='font-medium text-base sm:text-lg md:text-xl text-white mt-4 leading-relaxed max-w-3xl mx-auto'>
            Our goal is to achieve a 50% reduction in pedestrian and cyclist
            fatalities and serious injuries by 2030 by prioritizing equitable
            infrastructure upgrades, traffic calming measures, and safety
            education, with a focus on high-risk corridors and underserved
            communities.
          </p>

          {/* Added call-to-action button */}
          <motion.button
            className='mt-8 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => (window.location.href = '/public-outreach')}
          >
            Take the Survey
          </motion.button>
        </motion.div>
      </section>

      {/* Badge Image - Optimized size and spacing */}
      <div className='flex items-center justify-center'>
        <Image src={badge} alt='badge in landing page' className='z-0' />
      </div>

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
            safe, sustainable, and connected community through an equitable and
            culturally respectful active transportation plan. By prioritizing
            the health, well-being, and mobility of our tribal members and
            neighbors, we aim to create accessible pathways, promote walking and
            cycling, and honor our ancestral lands while reducing our
            environmental impact. Together, we will build a future where every
            journey reflects our values of stewardship, unity, and resilience.
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
                    'Use crash analysis, tribal objectives, and Tribal community insights to prioritize areas for safety improvements and transportation equity.',
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
