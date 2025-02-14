'use client';

import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
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
        className='mt-24 object-fit: contain;'
      />
    </div>
  );
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar className='z-50 h-24 w-full flex p-4 font-bold bg-primary text-white text-xl justify-between fixed top-0 left-0'>
      <NavbarBrand className='hidden sm:block'>
        <Link href='/'>
          <Logo />
        </Link>
      </NavbarBrand>

      {/* Menu Icon - Only on Small Screens */}
      <Button
        className='sm:hidden absolute right-4'
        onPress={() => setMenuOpen(!menuOpen)}
        aria-label='Toggle menu'
      >
        <TbLayoutSidebarLeftCollapseFilled size={30} />
      </Button>

      <NavbarContent
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row gap-4 mx-8 px-4 absolute sm:relative top-full left-0 w-full sm:w-auto bg-primary sm:bg-transparent text-center sm:text-left`}
        justify='center'
      >
        <NavbarItem>
          <Link
            color='foreground'
            href='/public-outreach'
            className='mx-2 text-white'
          >
            Public Outreach
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            aria-current='page'
            href='/project-status'
            className='mx-2 text-white'
          >
            Project Status
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='/documentations'
            className='mx-2 text-white'
          >
            Documentations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='/contact-us'
            className='mx-2 text-white'
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
