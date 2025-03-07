'use client';

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { useState } from 'react';
import Image from 'next/image';
import badge from '@/public/badge.jpg';
import groupPhoto from '@/public/Group-Photo-Edit.jpg';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState({
    message: '',
    type: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    setIsSubmitting(false);

    if (response.ok) {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSuccessMessage({
        message: 'Your message has been sent successfully!',
        type: 'success',
      });
    } else {
      setSuccessMessage({
        message: 'There was an error sending your message. Please try again.',
        type: 'error',
      });
    }
  };

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
          <h1 className='text-4xl font-bold mx-2'>Contact Us</h1>
          <MdKeyboardDoubleArrowRight size={24} />
        </div>
      </div>

      {/* Badge Image */}
      <div className='flex items-center justify-center'>
        <Image src={badge} alt='badge in landing page' className='z-0' />
      </div>

      {/* Contact Section - Enhanced with card styling */}
      <section className='max-w-6xl mx-auto w-full p-6 pb-24'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100'>
          {/* Information Card */}
          <div className='lg:col-span-5 relative'>
            <div className='bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white h-full'>
              {/* Decorative elements */}
              <div className='absolute top-0 left-0 w-full h-full overflow-hidden opacity-10'>
                <div className='absolute -top-16 -left-16 w-64 h-64 bg-white/20 rounded-full'></div>
                <div className='absolute top-1/2 -right-32 w-96 h-96 bg-white/10 rounded-full'></div>
              </div>

              <div className='relative z-10 p-8 lg:p-10 flex flex-col justify-between h-full'>
                <div>
                  <div className='inline-block mb-8 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg'>
                    <h2 className='text-2xl font-bold text-white'>
                      Get In Touch
                    </h2>
                  </div>
                </div>

                {/* Testimonial message */}
                <div className='relative bg-white/15 backdrop-blur-sm p-7 rounded-lg border-l-4 border-secondary mt-auto transform hover:scale-[1.02] transition-transform duration-300'>
                  <svg
                    className='absolute text-white/20 top-3 left-3 h-8 w-8'
                    fill='currentColor'
                    viewBox='0 0 32 32'
                  >
                    <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                  </svg>
                  <p className='italic leading-relaxed text-lg relative z-10'>
                    We invite you to contact us with questions, inputs, and
                    suggestions. Our team is dedicated to serving the Paskenta
                    community and building a safer transportation future
                    together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Enhanced styling */}
          <div className='lg:col-span-7 p-8 lg:p-10'>
            <div className='mb-8'>
              <h2 className='text-3xl font-bold text-primary mb-4'>
                Send a Message
              </h2>
              <div className='w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-4'></div>
              <p className='text-gray-600'>
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Your Name <span className='text-red-500'>*</span>
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-gray-400'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='h-12 block w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-gray-900 bg-white hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors'
                      placeholder='John Doe'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Your Email <span className='text-red-500'>*</span>
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-gray-400'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                      </svg>
                    </div>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='h-12 block w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-gray-900 bg-white hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors'
                      placeholder='john@example.com'
                    />
                  </div>
                </div>
              </div>

              {/* New Phone Field */}
              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Your Phone Number{' '}
                  <span className='text-gray-500 text-xs font-normal'>
                    (Optional)
                  </span>
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 text-gray-400'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                    </svg>
                  </div>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='h-12 block w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-gray-900 bg-white hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors'
                    placeholder='(123) 456-7890'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Your Message <span className='text-red-500'>*</span>
                </label>
                <div className='relative'>
                  <div className='absolute top-3 left-3 flex items-start pointer-events-none'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 text-gray-400'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='block w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-gray-900 bg-white hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors min-h-[180px]'
                    rows={6}
                    placeholder='I would like to know more about...'
                  />
                </div>
              </div>

              <div className='pt-4'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-primary to-primary/90 text-white py-4 px-6 rounded-lg transition-all duration-300 font-medium text-base flex items-center justify-center shadow-lg disabled:opacity-50 hover:shadow-xl hover:translate-y-[-2px]'
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        ></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>

            {successMessage.message && (
              <div
                className={`mt-8 p-4 rounded-lg ${
                  successMessage.type === 'success'
                    ? 'bg-green-50 border-l-4 border-green-400'
                    : 'bg-red-50 border-l-4 border-red-400'
                } transition-all duration-300 animate-fade-in`}
              >
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    {successMessage.type === 'success' ? (
                      <svg
                        className='h-5 w-5 text-green-400'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        />
                      </svg>
                    ) : (
                      <svg
                        className='h-5 w-5 text-red-400'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                          clipRule='evenodd'
                        />
                      </svg>
                    )}
                  </div>
                  <div className='ml-3'>
                    <p
                      className={`text-sm font-medium ${
                        successMessage.type === 'success'
                          ? 'text-green-800'
                          : 'text-red-800'
                      }`}
                    >
                      {successMessage.message}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
