import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//Importing Assets
import blog1 from '../../../../public/images/Blogs/blog1.png'
import blog2 from '../../../../public/images/Blogs/blog2.png'
import blog3 from '../../../../public/images/Blogs/blog3.png'
import calender from '../../../../public/images/Blogs/calender.svg'
import getimage from '../../../../public/images/Home/getimage.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Blogs = () => {
    return (
        <section id="blogs">
            <div className="container m-auto  md:p-6">
                <div className="blogs-content flex justify-between">
                    <div className="text-left py-10">
                        <p className='text-colortag my-6 font-normal md:text-4xl xs:text-2xl animate-slideDown'>Blogs & Articles</p>
                        <h2 className='md:text-6xl md:my-6 font-semibold xs:text-2xl xs:my-2 animate-slideDown'>
                            Our Latest Blogs
                        </h2>
                    </div>

                    <div className="view">
                       <Link href = '/blogs'> <p className='text-colortag text-2xl xs:text-lg  underline pt-20 animate-slideDown'>View All <ArrowForwardIcon className='underline'/></p> </Link>
                    </div>

                </div>


                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
                    <div className="left-blog bg-blogcard p-7 rounded-2xl md:my-5 xs:my-5">
                        <Image
                            src={blog1}
                            alt='blog-image'
                            className='rounded-2xl'
                        />

                        <div className="date flex my-3">
                            <span><Image src={calender} alt='calender' /></span><span className='text-paragraph mx-3'>Apr 12, 2024</span>
                        </div>

                        <h3 className=' lg:text-4xl xs:text-xl leading-normal font-semibold'>The Role of Technology in Diabetes Care: Wearable Devices and Mobile Apps</h3>
                        <p className='text-colortag mt-12'>Read More...</p>
                    </div>

                    <div className="right-blog rounded-2xl md:flex flex-col justify-between xs:hidden ">
                        <div className="frist-blog flex bg-blogcard rounded-2xl w-full md:my-5 xs:my-5">
                            <Image
                                src={blog2}
                                alt='blog-image'
                                className='rounded-2xl xl:w-10/12 p-5'
                            />

                            <div className="content flex-col py-10 relative">
                                <div className="date flex my-3">
                                    <span><Image src={calender} alt='calender' /></span><span className='text-paragraph mx-3'>Apr 12, 2024</span>
                                </div>

                                <h3 className='2xl:text-4xl lg:text-2xl leading-normal font-semibold w-5/6'>Understanding Blood Sugar Spikes: Causes and Prevention.......</h3>
                                <p className='text-colortag mt-12 absolute bottom-7'>Read More...</p>
                            </div>
                        </div>

                        <div className="second-blog flex bg-blogcard rounded-2xl md:my-5 xs:my-5">
                            <Image
                                src={blog3}
                                alt='blog-image'
                                className='rounded-2xl  xl:w-10/12 p-5 '
                            />

                            <div className="content flex-col py-10 relative">
                                <div className="date flex my-3">
                                    <span><Image src={calender} alt='calender' /></span><span className='text-paragraph mx-3'>Apr 12, 2024</span>
                                </div>

                                <h3 className='2xl:text-4xl lg:text-2xl leading-normal font-semibold w-5/6'>Discover the benefits of regular exercise for individuals with diab</h3>
                                <p className='text-colortag mt-12 absolute bottom-7'>Read More...</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="get m-auto grid lg:grid-cols-2 xs:grid-cols-1 bg-colortag rounded-2xl border-solid border-4 border-border my-10">
                 <div className="text flex flex-col justify-center p-10">
                    <h3 className='lg:text-4xl lg:text-left lg:leading-relaxed my-5 font-semibold leading-normal text-black xs:text-2xl xs:text-center'>Get Sokar App Now and enjoy its personalized glucose management features now!!</h3>
                    <button className='bg-button text-white text-2xl py-3 px-5 rounded-xl xs:w-full lg:w-2/6 md:w-2/6 md:m-auto xs:m-auto lg:m-0'>Get It Now</button>
                 </div>

                 <div className="get-image">
                    <Image  src={getimage} alt='getimage' className='w-full'/>
                 </div>
                </div>
            </div>


        </section >
    )
}

export default Blogs