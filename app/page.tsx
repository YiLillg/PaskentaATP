import Image from 'next/image';
import background from '@/public/LandingPage.jpg';
import badge from '@/public/badge.jpg';
import lefterrow from '@/public/left-arrow.jpg';
import righterror from '@/public/right-arrow.jpg';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-full h-screen flex flex-col items-center justify-center'>
        {/* Background Image */}
        <Image
          src={background}
          alt='Home page background image'
          fill
          className='z-0'
          style={{
            opacity: 0.15,
            objectFit: 'cover',
          }}
        />

        {/* Content */}
        <div className='z-10 flex flex-col items-center justify-center text-center px-24'>
          <h1 className='font-extrabold text-5xl'>
            Paskenta Active Transportation Plan
          </h1>
          <p className='font-semibold text-lg mt-4'>
            Our goal is to achieve a 50% reduction in pedestrian and cyclist
            fatalities and serious injuries by 2030 by prioritizing equitable
            infrastructure upgrades, traffic calming measures, and safety
            education, with a focus on high-risk corridors and underserved
            communities.
          </p>
        </div>
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
          <Image src={righterror} alt='right arrow' className='z-0' />
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
          <p className='my-2'>Key Elements:</p>
          <ul className='list-disc list-inside space-y-2'>
            <li>
              <span className='font-bold'>Cultural Respect: </span>Honors the
              tribe's heritage and connection to the land.{' '}
            </li>
            <li>
              <span className='font-bold'>Equity and Accessibility: </span>
              Ensures all community members, including elders and youth, have
              safe and accessible transportation options.
            </li>
            <li>
              <span className='font-bold'>Sustainability:</span> Reduces
              environmental impact and promotes healthy lifestyles.{' '}
            </li>
            <li>
              <span className='font-bold'>Community Focus: </span>Prioritizes
              the needs of tribal members and neighboring communities.{' '}
            </li>{' '}
            <li>
              <span className='font-bold'>Safety and Connectivity: </span>Builds
              infrastructure that connects people to key destinations safely.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
