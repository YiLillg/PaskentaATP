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
import logo from '@/public/logo.png';
import { TbLayoutSidebarLeftCollapseFilled } from 'react-icons/tb';

const Logo = () => (
  <div className='flex items-center mt-24 z-50 sm:block'>
    <Image
      src={logo}
      alt='Tribe Icon'
      width={150}
      height={150}
      className='object-contain'
      unoptimized
    />
  </div>
);

// Rest of your code remains the same
const menuItems = [
  { key: 'home', label: 'Home', href: '/' },
  {
    key: 'get-involved',
    label: 'Get Involved',
    href: '/get-involved',
  },
  { key: 'project-status', label: 'Project Status', href: '/project-status' },
  { key: 'documentation', label: 'Documentation', href: '/documentation' },
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
      {/* Logo on the left */}
      <NavbarBrand className='hidden sm:flex items-center relative'>
        <Link href='/' className='flex items-center'>
          <Logo />
        </Link>
      </NavbarBrand>

      {/* Mobile Menu Button */}
      <div className='sm:hidden'>
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

      {/* Desktop Menu Items on the right */}
      <NavbarContent className='hidden sm:flex gap-6 justify-end'>
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
