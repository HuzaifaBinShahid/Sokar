'use client'
import React from 'react';
import Image from 'next/image';

//importing assets
import mainimage from '../../../public/images/Home/homemain.png';
import aboutimage from '../../../public/images/Home/about.png';

// importing Components
import Features from '../Components/Home/Features';
import Pricing from '../Components/Home/Pricing';
import Blogs from '../Components/Home/Blogs';
import ContactUs from '../common_views/ContactUs';
import { motion, AnimatePresence } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const Page = () => {
    return (
        <section id='home'>
            <div className="container mx-auto items-center justify-center">
                <div className="home-content">
                    <AnimatePresence>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.5 }
                                }
                            }}
                            className="text-center"
                        >
                            <motion.h6
                                className='text-colortag my-6 font-normal'
                                variants={{
                                    hidden: { opacity: 0, y: -50 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                Glucose Monitoring App
                            </motion.h6>
                            <motion.h1
                                className='headline md:text-6xl md:my-6 font-semibold xs:text-2xl xs:my-2'
                                variants={{
                                    hidden: { opacity: 0, y: -50 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                Track Of Your Glucose
                            </motion.h1>
                            <motion.p
                                className='description text-paragraph md:text-2xl md:my-12 font-normal xs:text-lg xs:my-12'
                                variants={{
                                    hidden: { opacity: 0, y: -50 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                The Sokar app, powered by cutting edge AI Technology and real time glucose monitoring to transform your health journey
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>


                <div className="main-image w-full my-20">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="main-image w-full my-20"
                    >
                        <Image
                            src={mainimage}
                            alt='main-image'
                            className='m-auto'
                        />
                    </motion.div>
                </div>

                <InView>
                    {({ inView, ref }) => (
                        <div className="about grid md:grid-cols-2 xs:grid-cols-1 md:p-4" ref={ref}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                                transition={{ duration: 1 }}
                            >
                                <Image
                                    src={aboutimage}
                                    alt='about-image'
                                />
                            </motion.div>

                            <div className="about-text flex flex-col justify-center align-middle lg:text-left xs:text-center p-5">
                                <motion.p
                                    className='text-colortag lg:text-4xl md:text-2xl xs:text-xl my-3'
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                                    transition={{ duration: 1 }}
                                >
                                    About
                                </motion.p>
                                <motion.h2
                                    className='lg:text-6xl md:text-4xl xs:text-2xl font-semibold my-5'
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    What Is Sokar?
                                </motion.h2>
                                <motion.p
                                    className='text-paragraph lg:text-2xl md:text-xl xs:text-lg my-5 leading-10 lg:w-5/6 xs:w-full'
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                                    transition={{ duration: 1, delay: 1 }}
                                >
                                    The sokar app, powered by cutting edge AI Technology and real time glucose monitoring to transform your health journey. The sokar app, powered by cutting edge AI Technology and real time glucose monitoring to transform your health journey
                                </motion.p>
                            </div>
                        </div>
                    )}
                </InView>
            </div>

            <Features />
            <Pricing />
            <Blogs />
            <ContactUs />

        </section >
    )
}

export default Page;
