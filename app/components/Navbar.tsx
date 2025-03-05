'use client';

import { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@heroui/react';
import Image from 'next/image';
import logo from '@/public/Logo.png';
import { TbLayoutSidebarLeftCollapseFilled } from 'react-icons/tb';

export const Logo = () => {
  return (
    <div className='z-50 hidden sm:block md:min-w-[300px] flex-shrink-0'>
      <Image
        src={logo}
        alt='Tribe Icon'
        width={300}
        height={300}
        className='mt-24 object-contain'
      />
    </div>
  );
};

const menuItems = [
  { key: 'home', label: 'Home', href: '/' },
  {
    key: 'get-involved',
    label: 'Get Involved',
    href: '/get-involved',
  },
  { key: 'project-status', label: 'Project Status', href: '/project-status' },
  { key: 'documentations', label: 'Documentations', href: '/documentations' },
  { key: 'contact-us', label: 'Contact Us', href: '/contact-us' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Navbar className='z-50 h-24 w-full flex p-4 font-bold bg-primary text-white text-xl justify-between fixed top-0 left-0'>
      <NavbarBrand className='hidden sm:block'>
        <Link href='/'>
          <Logo />
        </Link>
      </NavbarBrand>

      {/* Mobile Menu Button */}
      <div className='sm:hidden relative'>
        <Dropdown isOpen={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownTrigger>
            <Button
              variant='bordered'
              onPress={() => setMenuOpen(!menuOpen)}
              className='p-2 rounded-md bg-white text-primary shadow-md hover:bg-gray-200 transition-all'
              aria-label='Toggle menu'
            >
              <TbLayoutSidebarLeftCollapseFilled size={30} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label='Navigation Menu'
            className='right-4 w-48 mt-4 indent-4 bg-white text-primary rounded-md overflow-y-auto max-h-[calc(100vh-6rem)] z-50 py-2'
          >
            {menuItems.map((item) => (
              <DropdownItem
                key={item.key}
                as={Link}
                href={item.href}
                className='block px-4 py-2 hover:bg-gray-100 transition-all'
                onPress={() => setMenuOpen(false)} // Close menu on click
              >
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* Desktop Menu */}
      <NavbarContent
        className='hidden sm:flex gap-6 mx-8 px-4'
        justify='center'
      >
        {menuItems.map((item) => (
          <NavbarItem key={item.key}>
            <Link
              href={item.href}
              className='text-white hover:text-gray-300 transition-colors'
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
