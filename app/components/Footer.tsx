import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className='h-24 w-full flex flex-row items-center px-12 justify-between bg-primary text-white z-10'>
      <p>© Paskenta Band of Nomlaki Indians Copyright 2025.</p>

      <div className='flex flex-row items-center'>
        <p>Connect with Us:</p>
        <a
          href='https://www.facebook.com/paskentabandofnomlakiindians/'
          target='_blank'
          rel='noopener noreferrer'
          className='mx-1'
        >
          <FaFacebook className='size-6' />
        </a>
        <a
          href='https://www.linkedin.com/company/paskenta-band-of-nomlaki-indians/'
          target='_blank'
          rel='noopener noreferrer'
          className='mx-1'
        >
          <FaLinkedin className='size-6' />
        </a>
        <a
          href='https://twitter.com/paskentaband'
          target='_blank'
          rel='noopener noreferrer'
          className='mx-1'
        >
          <FaXTwitter className='size-6' />
        </a>
      </div>
    </footer>
  );
}
