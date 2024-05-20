'use client'
import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link';
import navlogo from '../../../public/images/logo.svg';
import Image from 'next/image';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="navbar">
            <div className="navbar-container text-center my-12 flex justify-around items-center ">
                <div className="logo-container">
                    <Image
                        src={navlogo}
                        alt='sokar'
                    />
                </div>
                <div className="nav-links hidden lg:flex">
                    <ul className='flex flex-row space-x-6'>
                        <li className='inline hover:text-colortag'>
                            <Link href='/'>Home</Link>
                        </li>

                        <li className='inline hover:text-colortag'>
                            <Link href='/about'>About</Link>
                        </li>

                        <li className='inline hover:text-colortag'>
                            <Link href='/features'>Features</Link>
                        </li>

                        <li className='inline hover:text-colortag'>
                            <Link href='/pricing'>Pricing</Link>
                        </li>

                        <li className='inline hover:text-colortag'>
                            <Link href='/contact'>Contact</Link>
                        </li>

                        <li className='inline hover:text-colortag'>
                            <Link href='/blogs'>Blogs</Link>
                        </li>
                    </ul>

                  
                </div>

                <div className="started hidden lg:flex">
                        <li className='inline'>
                            <Link href='/blogs'><button className='bg-colortag text-black py-2 px-2 rounded-full'>Get Started</button></Link>
                        </li>
                    </div>
                <div className="lg:hidden">
                    <Menu>
                        <MenuButton>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </MenuButton>
                        <MenuItems className='flex flex-col'>
                            <MenuItem>
                                <Link href='/' className='hover:text-colortag my-2'>Home</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href='/about' className='hover:text-colortag my-2'>About</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href='/features' className='hover:text-colortag my-2'>Features</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href='/pricing' className='hover:text-colortag my-2'>Pricing</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href='/contact' className='hover:text-colortag my-2'>Contact</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href='/blogs' className='hover:text-colortag my-2'>Blogs</Link>
                            </MenuItem>
                            <MenuItem>
                            <Link href='/'><button className='bg-colortag text-black py-2 px-2 my-2 rounded-full'>Get Started</button></Link>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>

            </div>
        </section>
    );
}

export default Navbar;
