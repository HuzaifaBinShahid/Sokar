import React from 'react'
import Image from 'next/image'
import mainimage from '../../../public/images/Home/homemain.png'
import aboutimage from '../../../public/images/Home/about.png'
import Features from '../Components/Home/Features'

const page = () => {
    return (
        <section id='home'>
            <div className="container mx-auto items-center justify-center">
                <div className="home-content">
                  
                        <div className="text-center">
                            <h6 className='text-colortag my-6 font-normal'>Glucose Monitoring App</h6>
                            <h1 className='md:text-6xl md:my-6 font-semibold xs:text-2xl xs:my-2'>
                            Track Of Your Glucose
                            </h1>
                            <p className='text-paragraph md:text-2xl md:my-12 font-normal xs:text-lg xs:my-12'>
                            The sokar app, powered by cutting edge AI Technology and real time glucose monitoring to transform your health journey
                            </p>
                        </div>


                  
                </div>

                <div className="main-image w-full my-20">
                    <Image
                    src={mainimage}
                    alt='main-image'
                    />
                </div>

                <div className="about grid md:grid-cols-2 xs:grid-cols-1">
                    <div className="about-image">
                        <Image 
                        src={aboutimage}
                        alt='about-image'
                        />
                    </div>

                    <div className="about-text flex flex-col justify-center align-middle lg:text-left xs:text-center p-5">
                        <p className='text-colortag lg:text-4xl md:text-2xl xs:text-xl my-3'>About</p>
                        <h2 className='lg:text-6xl md:text-4xl xs:text-2xl font-semibold my-5'>What Is Sokar?</h2>
                        <p className='text-paragraph lg:text-2xl md:text-xl xs:text-lg my-5 leading-10'>The sokar app, powered by cutting edge AI Technology and real time glucose monitoring to transform your health journey. The sokar app, powered by cutting edge AI Technology and real time glucose monitoring to transform your health journey</p>
                    </div>
                </div>
            </div>

            <Features />
        </section>

    )
}

export default page