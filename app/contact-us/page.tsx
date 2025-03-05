'use client';

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Textarea,
  Input,
  Button,
} from '@heroui/react';
import { useState } from 'react';
import Image from 'next/image';
import badge from '@/public/badge.jpg';
import groupPhoto from '@/public/Group-Photo-Edit.jpg';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      setFormData({ name: '', email: '', message: '' });
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
      {/* Header Section */}
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

      {/* Contact Section */}
      {/* Contact Section - Enhanced with better layout and styling */}
      <section className='max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8 p-6 pb-24'>
        {/* Office Info Card - Improved design and content organization */}
        <div className='lg:w-1/2 w-full'>
          <Card className='bg-primary text-white rounded-xl shadow-xl overflow-hidden h-full'>
            {/* Decorative top pattern */}
            <div className='h-3 w-full bg-gradient-to-r from-secondary to-thirdary'></div>

            <div className='p-8'>
              <CardHeader className='px-0 pt-0'>
                <div className='flex items-center space-x-2 mb-6'>
                  <div className='h-10 w-1 bg-white rounded-full'></div>
                  <h2 className='text-2xl font-bold'>
                    Let&apos;s Keep In Touch
                  </h2>
                </div>
              </CardHeader>

              <CardBody className='px-0 py-4'>
                <div className='space-y-8 text-white'>
                  {/* Office Information */}
                  <div className='space-y-4'>
                    <div className='flex items-start'>
                      <div className='mt-1 mr-4 bg-white/20 p-2 rounded-lg'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold mb-2'>
                          Our Office
                        </h3>
                        <address className='not-italic leading-relaxed'>
                          <p>22580 Olivewood Rd</p>
                          <p>Corning, CA 96021</p>
                        </address>
                      </div>
                    </div>

                    <div className='flex items-start'>
                      <div className='mt-1 mr-4 bg-white/20 p-2 rounded-lg'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                        </svg>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold mb-2'>Contact</h3>
                        <p>Tel: (530) 670 - 1750</p>
                        <p>
                          Email:{' '}
                          <a
                            href='mailto:office@paskenta.org'
                            className='text-secondary hover:underline transition-all'
                          >
                            office@paskenta.org
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start'>
                      <div className='mt-1 mr-4 bg-white/20 p-2 rounded-lg'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold mb-2'>
                          Office Hours
                        </h3>
                        <div className='leading-relaxed'>
                          <p>Monday - Thursday: 8 AM - 4 PM</p>
                          <p>Friday: 8 AM - 12 PM</p>
                          <p>Saturday - Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial-style message */}
                  <div className='bg-white/10 p-6 rounded-lg border-l-4 border-secondary mt-8'>
                    <p className='italic leading-relaxed'>
                      "We invite you to contact us with questions, inputs, and
                      suggestions. Our team is dedicated to serving the Paskenta
                      community and building a safer transportation future
                      together."
                    </p>
                  </div>
                </div>
              </CardBody>
            </div>
          </Card>
        </div>

        {/* Contact Form - Enhanced with better styling and animations */}
        <div className='lg:w-1/2 w-full'>
          <Card className='rounded-xl shadow-xl overflow-hidden h-full border border-gray-200'>
            {/* Decorative top pattern */}
            <div className='h-3 w-full bg-gradient-to-r from-primary to-secondary'></div>

            <div className='p-8'>
              <CardHeader className='px-0 pt-0'>
                <div className='flex items-center space-x-2 mb-6'>
                  <div className='h-10 w-1 bg-primary rounded-full'></div>
                  <h2 className='text-2xl font-bold text-primary'>
                    Send a Message
                  </h2>
                </div>
                <p className='text-foreground/70'>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </CardHeader>

              <CardBody className='px-0 py-4'>
                <form onSubmit={handleSubmit} className='space-y-5'>
                  <div className='space-y-1'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-foreground/80'
                    >
                      Your Name
                    </label>
                    <Input
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='h-12 block w-full border border-gray-300 rounded-lg px-4 py-3 text-foreground bg-background hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary transition-colors'
                      placeholder='John Doe'
                    />
                  </div>

                  <div className='space-y-1'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-foreground/80'
                    >
                      Your Email
                    </label>
                    <Input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='h-12 block w-full border border-gray-300 rounded-lg px-4 py-3 text-foreground bg-background hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary transition-colors'
                      placeholder='john@example.com'
                    />
                  </div>

                  <div className='space-y-1'>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-foreground/80'
                    >
                      Your Message
                    </label>
                    <Textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className='min-h-40 block w-full border border-gray-300 rounded-lg px-4 py-3 text-foreground bg-background hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary transition-colors'
                      rows={5}
                      placeholder='I would like to know more about...'
                    />
                  </div>

                  <div className='pt-4'>
                    <Button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-base flex items-center justify-center shadow-md'
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
                            className='h-5 w-5 ml-2'
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
                    </Button>
                  </div>
                </form>
              </CardBody>

              {successMessage.message && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    successMessage.type === 'success'
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                  }`}
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
          </Card>
        </div>
      </section>
    </div>
  );
}
