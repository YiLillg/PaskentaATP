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

export const Logo = () => {
  return (
    <div className='z-50'>
      <Image src={logo} alt='Tribe Icon' width={300} className='mt-24' />
    </div>
  );
};

export default function App() {
  return (
    <Navbar className='z-50 h-24 w-full flex p-4 font-bold bg-primary text-white text-xl justify-between fixed top-0 left-0'>
      <NavbarBrand>
        <Link href='/'>
          <Logo />
        </Link>
      </NavbarBrand>
      <NavbarContent
        className='hidden sm:flex gap-4 mx-8 px-4'
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
            href='/documentation-and-reference'
            className='mx-2 text-white'
          >
            Documentations & Resources
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
