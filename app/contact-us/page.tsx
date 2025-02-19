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
      <section className='flex flex-col lg:flex-row gap-8 p-6 mx-4 md:mx-6 pb-24'>
        {/* Office Info Card */}
        <div className='lg:w-1/2 w-full flex mx-auto'>
          <Card className='bg-primary text-white p-6 rounded-xl shadow-lg flex-grow min-h-[350px] flex flex-col justify-between'>
            <CardHeader>
              <h2 className='text-lg md:text-xl font-semibold'>
                Let's Keep In Touch
              </h2>
            </CardHeader>
            <CardBody className='flex-grow'>
              <div className='space-y-2 text-gray-100'>
                <div className='mt-8 my-2 space-y-2'>
                  <h3 className='text-base font-semibold'>Our Office</h3>
                  <p>22580 Olivewood Rd</p>
                  <p>Corning, CA 96021</p>
                  <p>Tel: (530) 670 - 1750</p>
                  <p>
                    Email:{' '}
                    <a
                      href='mailto:info@deyiconsultants.com'
                      className='text-blue-300 hover:text-white transition'
                    >
                      office@paskenta.org
                    </a>
                  </p>
                </div>
                <div className='my-2 space-y-2 '>
                  <h3 className='text-base font-semibold mt-8'>Office Hours</h3>
                  <p>Mon - Thurs: 8 AM - 4 PM</p>
                  <p>Friday: 8 AM - 12 PM</p>
                  <p>Sat - Sun: Closed</p>
                </div>
                <p className='pt-4 leading-relaxed'>
                  We invite you to contact us with questions, inputs, and
                  suggestions. We look forward to hearing from you.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Contact Form */}
        <div className='lg:w-1/2 w-full flex mx-auto'>
          <Card className='p-6 rounded-xl shadow-lg flex-grow min-h-[350px] flex flex-col justify-between border border-gray-300'>
            <CardHeader>
              <h2 className='text-lg md:text-xl font-semibold text-primary pb-8'>
                Contact Us
              </h2>
            </CardHeader>
            <CardBody className='flex-grow'>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-base font-medium text-gray-700 mb-1'
                  >
                    Name
                  </label>
                  <Input
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='h-12 block w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-900 bg-transparent focus:ring focus:ring-white placeholder-gray-400'
                    placeholder='Enter your name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-base font-medium text-gray-700 mb-1'
                  >
                    Email
                  </label>
                  <Input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='h-12 block w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-900 bg-transparent focus:ring focus:ring-white placeholder-gray-400'
                    placeholder='Enter your email'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-base font-medium text-gray-700'
                  >
                    Message
                  </label>
                  <Textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='h-32 block w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-900 bg-transparent focus:ring focus:ring-white placeholder-gray-400'
                    rows={4}
                    placeholder='Send your message to us'
                  />
                </div>

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition'
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </Button>
              </form>
            </CardBody>
            {successMessage.message && (
              <CardFooter>
                <p
                  className={`text-sm mt-4 font-medium ${
                    successMessage.type === 'success'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {successMessage.message}
                </p>
              </CardFooter>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
}
