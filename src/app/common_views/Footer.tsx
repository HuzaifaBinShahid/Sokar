import React from 'react';
import Image from 'next/image';
import footerlogo from '../../../public/images/Footer/footerlogo.svg';
import linkedin from '../../../public/images/Footer/linkedin.svg';
import instagram from '../../../public/images/Footer/instagram.svg';
import facebook from '../../../public/images/Footer/facebook.svg';
import youtube from '../../../public/images/Footer/youtube.svg';
import mail from '../../../public/images/Footer/mail.svg';
import phone from '../../../public/images/Footer/phone.svg';
import location from '../../../public/images/Footer/location.svg';

const Footer = () => {
    return (
        <section id="footer" className='bg-footer'>
            <div className="footer-content  md:p-6">
                <div className="container m-auto flex">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:my-12 xs:my-6">
                        <div className='section1 flex flex-col m-auto w-full '>
                            <Image
                                src={footerlogo}
                                alt='sokarlogo'
                                className='md:mb-5 md:m-0 xs:m-auto'
                            />
                       
                            <p className='text-paragraph text-2xl my-5 md:text-left xs:text-center font-light'>
                                The sokar app, powered by cutting edge AI Technology and real time glucose monitoring to transform your health journey
                            </p>
                           
                            <h6 className='text-4xl font-semibold my-5 md:text-left xs:text-center '>
                                Follow Us On
                            </h6>
                            <div className="socialmedia-links flex md:justify-start xs:justify-center">
                                <Image
                                    src={linkedin}
                                    alt='linkedin'
                                    className='mr-3'
                                />
                                <Image
                                    src={instagram}
                                    alt='instagram'
                                    className='mr-3'
                                />
                                <Image
                                    src={facebook}
                                    alt='facebook'
                                    className='mr-3'
                                />
                                <Image
                                    src={youtube}
                                    alt='youtube'
                                    className='mr-3'
                                />
                            </div>
                        </div>
                        <div className="section2 my-12 flex justify-center xs:my-2">
                            <div className="md:text-left xs:text-center">
                                <h3 className='text-2xl font-semibold'>Important Links</h3>
                                <ul>
                                    <li className='text-paragraph my-5'>About</li>
                                    <li className='text-paragraph my-5'>Features</li>
                                    <li className='text-paragraph my-5'>Pricing</li>
                                    <li className='text-paragraph my-5'>Blogs</li>
                                    <li className='text-paragraph my-5'>Contact</li>
                                </ul>
                            </div>
                        </div>

                        <div className="section3 my-12 flex md:justify-start xs:justify-center xs:my-2">
                            <div className="md:text-left xs:text-center">
                            <h3 className='text-2xl font-semibold'>Contact Us</h3>
                            <ul>
                                <li className='text-paragraph my-5 flex md:justify-start xs:justify-center'>
                                    <Image src={mail} alt='mail' />
                                    <span className='ml-2'>info@sokarapp.com</span>
                                </li>
                                <li className='text-paragraph my-5 flex md:justify-start xs:justify-center'>
                                    <Image src={phone} alt='phone' />
                                    <span className='ml-2'>+92 3456789001</span>
                                </li>
                                <li className='text-paragraph my-5 flex md:justify-start xs:justify-center'>
                                    <Image src={location} alt='location' />
                                    <span className='ml-2'>House no 452, j3 block Johar</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
