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
    <div>
      <Image src={logo} alt='Tribe Icon' width={300} className='mt-24' />
    </div>
  );
};

export default function App() {
  return (
    <Navbar className='h-24 w-full flex p-4 font-bold bg-primary text-white text-xl justify-between'>
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
          <Link color='foreground' href='/publicout-reach' className='mx-2'>
            Public Outreach
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current='page' href='/project-status' className='mx-2'>
            Project Status
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='/documentation-and-reference'
            className='mx-2'
          >
            Documentations & Resources
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/contact-us' className='mx-2'>
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
