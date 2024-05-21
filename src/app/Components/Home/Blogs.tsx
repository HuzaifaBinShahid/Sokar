import React from 'react';
import Image from 'next/image';
import blogImage from '../../../../public/images/Blogs/blog1.png'
import calender from '../../../../public/images/Blogs/calender.png'
import getimage from '../../../../public/images/Home/getimage.png'

const Blogs = () => {
    return (
        <section id="blogs">
            <div className="container  m-auto  ">
                <div className="blogs-content flex justify-between">
                    <div className="text-left p-10">
                        <p className='text-colortag my-6 font-normal md:text-4xl xs:text-2xl'>Blogs & Articles</p>
                        <h2 className='md:text-6xl md:my-6 font-semibold xs:text-2xl xs:my-2'>
                            Our Latest Blogs
                        </h2>
                    </div>

                    <div className="view p-10">
                        <p className='text-colortag text-2xl underline my-6'>View All</p>
                    </div>

                </div>


                <div className="grid lg:grid-cols-2 md:grid-cols-1  p-10">
                    <div className="left-blog bg-blogcard p-7 rounded-2xl w-11/12 md:my-5 xs:my-5">
                        <Image
                            src={blogImage}
                            alt='blog-image'
                            className='rounded-2xl'
                        />

                        <div className="date flex my-3">
                            <span><Image src={calender} alt='calender' /></span><span className='text-paragraph mx-3'>Apr 12, 2024</span>
                        </div>

                        <h3 className='text-4xl leading-normal font-semibold'>The Role of Technology in Diabetes Care: Wearable Devices and Mobile Apps</h3>
                        <p className='text-colortag mt-12'>Read More...</p>
                    </div>

                    <div className="right-blog rounded-2xl w-11/12 flex flex-col justify-between">
                        <div className="frist-blog flex bg-blogcard rounded-2xl w-full md:my-5 xs:my-5">
                            <Image
                                src={blogImage}
                                alt='blog-image'
                                className='rounded-2xl w-3/6 p-5'
                            />

                            <div className="content flex-col py-10">
                                <div className="date flex my-3">
                                    <span><Image src={calender} alt='calender' /></span><span className='text-paragraph mx-3'>Apr 12, 2024</span>
                                </div>

                                <h3 className='text-xl leading-normal font-semibold'>The Role of Technology in Diabetes Care: Wearable Devices and Mobile Apps</h3>
                                <p className='text-colortag mt-12'>Read More...</p>
                            </div>
                        </div>

                        <div className="second-blog flex bg-blogcard rounded-2xl md:my-5 xs:my-5">
                            <Image
                                src={blogImage}
                                alt='blog-image'
                                className='rounded-2xl w-3/6 p-5 '
                            />

                            <div className="content flex-col py-10">
                                <div className="date flex my-3">
                                    <span><Image src={calender} alt='calender' /></span><span className='text-paragraph mx-3'>Apr 12, 2024</span>
                                </div>

                                <h3 className='text-xl leading-normal font-semibold'>The Role of Technology in Diabetes Care: Wearable Devices and Mobile Apps</h3>
                                <p className='text-colortag mt-12'>Read More...</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="get w-10/12 m-auto flex bg-colortag rounded-2xl border-solid border-4 border-border my-10">
                 <div className="text w-3/6 p-10">
                    <h3 className='text-4xl my-5 font-semibold leading-normal text-black'>Get Sokar App Now and enjoy its personalized glucose management features now!!</h3>
                    <button className='bg-button text-white py-3 px-5 rounded-xl'>Get It Now</button>
                 </div>

                 <div className="get-image">
                    <Image  src={getimage} alt='getimage'/>
                 </div>
                </div>
            </div>


        </section >
    )
}

export default Blogs