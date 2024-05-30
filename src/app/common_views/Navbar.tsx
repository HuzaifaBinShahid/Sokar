'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import Link from 'next/link';
import navlogo from '../../../public/images/logo.svg';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path: string): string => pathname === path ? 'text-colortag' : '';

    return (
        <section id="navbar">
            <div className="navbar-container text-center my-12 flex justify-around items-center">
                <div className="logo-container">
                    <Image src={navlogo} alt='sokar' />
                </div>
                <div className="nav-links hidden lg:flex">
                    <ul className='flex flex-row space-x-6'>
                        <li className={`inline hover:text-colortag ${isActive('/')}`}>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className={`inline hover:text-colortag ${isActive('/about')}`}>
                            <Link href='/about'>About</Link>
                        </li>
                        <li className={`inline hover:text-colortag ${isActive('/features')}`}>
                            <Link href='/features'>Features</Link>
                        </li>
                        <li className={`inline hover:text-colortag ${isActive('/pricing')}`}>
                            <Link href='/pricing'>Pricing</Link>
                        </li>
                        <li className={`inline hover:text-colortag ${isActive('/contact')}`}>
                            <Link href='/contact'>Contact</Link>
                        </li>
                        <li className={`inline hover:text-colortag ${isActive('/blogs')}`}>
                            <Link href='/blogs'>Blogs</Link>
                        </li>
                    </ul>
                </div>
                <div className="started hidden lg:flex">
                    <li className='inline'>
                        <Link href='/blogs'><button className='bg-colortag text-black py-2 px-2 rounded-full'>Get Started</button></Link>
                    </li>
                </div>
                <div className="lg:hidden relative">
                    <button onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    <div className={`fixed top-0 right-0 h-full w-full transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
                        <div className='flex flex-col bg-black h-full w-full justify-center'>
                            <Link href='/' className={`hover:text-colortag my-5 ${isActive('/')}`} onClick={toggleMenu}>Home</Link>
                            <Link href='/about' className={`hover:text-colortag my-5 ${isActive('/about')}`} onClick={toggleMenu}>About</Link>
                            <Link href='/features' className={`hover:text-colortag my-5 ${isActive('/features')}`} onClick={toggleMenu}>Features</Link>
                            <Link href='/pricing' className={`hover:text-colortag my-5 ${isActive('/pricing')}`} onClick={toggleMenu}>Pricing</Link>
                            <Link href='/contact' className={`hover:text-colortag my-5 ${isActive('/contact')}`} onClick={toggleMenu}>Contact</Link>
                            <Link href='/blogs' className={`hover:text-colortag my-5 ${isActive('/blogs')}`} onClick={toggleMenu}>Blogs</Link>
                            <Link href='/' onClick={toggleMenu}><button className='bg-colortag text-black py-2 px-2 my-5 rounded-full'>Get Started</button></Link>
                            <button onClick={toggleMenu} className="absolute top-4 right-20"><CancelSharpIcon className='text-colortag'/></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
