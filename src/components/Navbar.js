import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();
  return (
    <div className="sticky top-0 h-20 flex justify-between mx-10 items-center">
      <h1 className="text-3xl font-extrabold">HIMANSHU</h1>
      <div className="flex gap-3 font-semibold">
        <Link
          href="/"
          className={`hover:text-blue-600 ${
            router.pathname == '/' ? ' text-red-600 underline' : 'text-black '
          }`}
        >
          HOME
        </Link>
        <Link
          href="/about"
          className={`hover:text-blue-600 ${
            router.pathname == '/about'
              ? ' text-red-600 underline'
              : 'text-black '
          }`}
        >
          ABOUT
        </Link>
        <Link
          href="/gallery"
          className={`hover:text-blue-600 ${
            router.pathname == '/gallery'
              ? ' text-red-600 underline'
              : 'text-black '
          }`}
        >
          GALLERY
        </Link>
        <Link
          href="/services"
          className={`hover:text-blue-600 ${
            router.pathname == '/services'
              ? ' text-red-600 underline'
              : 'text-black '
          }`}
        >
          SERVICES
        </Link>
        <Link
          href="/testimonials"
          className={`hover:text-blue-600 ${
            router.pathname == '/testimonials'
              ? ' text-red-600 underline'
              : 'text-black '
          }`}
        >
          TESTIMONALS
        </Link>
        <Link
          href="/clients"
          className={`hover:text-blue-600 ${
            router.pathname == '/clients'
              ? ' text-red-600 underline'
              : 'text-black '
          }`}
        >
          CLIENTS
        </Link>
        <Link
          href="/pricing"
          className={`hover:text-blue-600 ${
            router.pathname == '/pricing'
              ? ' text-red-600 underline '
              : 'text-black '
          }`}
        >
          PRICING
        </Link>
      </div>
      <div className="flex gap-3 text-2xl">
        <a className="hover:text-blue-600" href="#">
          <BsFacebook />
        </a>
        <a className="hover:text-red-600" href="#">
          <BiLogoGmail />
        </a>
        <a className="hover:text-blue-600" href="#">
          <AiFillTwitterCircle />
        </a>
        <a className=" hover:text-red-500" href="#">
          <AiFillInstagram />
        </a>
        <a className="hover:text-green-500" href="#">
          <IoLogoWhatsapp />
        </a>
        <a className="hover:text-red-600" href="#">
          <BsGithub />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
