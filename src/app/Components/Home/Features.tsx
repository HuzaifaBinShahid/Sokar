import React from 'react'
//importing assets
import glucose from '../../../../public/images/Home/glucose.png'
import medication from '../../../../public/images/Home/medication.png'
import heart from '../../../../public/images/Home/heart.png'
import insulin from '../../../../public/images/Home/insulin.png'
import share from '../../../../public/images/Home/share.png'
import glucosedetail from '../../../../public/images/Home/glucose-box.png'
import medicationdetail from '../../../../public/images/Home/medication-box.png'
import heartdetail from '../../../../public/images/Home/heart-box.png'
import insulindetail from '../../../../public/images/Home/insulin-box.png'
import sharedetail from '../../../../public/images/Home/share-box.png'
//importing Components
import Image from 'next/image'
import FeatureCard from '../../common_views/FeaturesCard/FeaturesCard'

const Features = () => {
    return (
        <section id="features ">
            <div className="container mx-auto items-center justify-center my-20">
                <div className="feature-content text-center">
                    <p className='text-colortag md:text-4xl xs:text-2xl'>Features</p>
                    <h2 className=' md:text-6xl xs:text-xl font-semibold my-5'>What Sokar Offers?</h2>
                </div>

                <div className="boxes grid md:grid-cols-2 my-20">

                    <FeatureCard
                        icon={glucose}
                        iconAlt="Glucose Icon"
                        head='Glucose'
                        title="Glucose Tracking"
                        description="Now you can manage your glucose with real-time stats and notifications."
                        detailImage={glucosedetail}
                        detailImageAlt="Glucose Detail"
                        detailImageClassName="w-11/12 p-10"
                    />

                    <FeatureCard
                        icon={medication}
                        iconAlt="Medication Icon"
                        head='Medication'
                        title="Medication Reminders"
                        description="Add your medication reminder with timing so that you can get notification."
                        detailImage={medicationdetail}
                        detailImageAlt="Medication Detail"
                        detailImageClassName="w-11/12 p-10"
                    />


                </div>

                <div className="boxes grid md:grid-cols-12 gap-0 my-20">
                    <div className="md:col-span-7">
                        <FeatureCard
                            icon={heart}
                            iconAlt="Heart Icon"
                            head='Heart Rate'
                            title="Track Heart Rate"
                            description="Now you can track your heart rate whenever you want and you can access your heart rate history"
                            detailImage={heartdetail}
                            detailImageAlt="Heart Detail"
                            detailImageClassName="w-full p-10"
                        />
                    </div>

                    <div className="md:col-span-5 ">
                        <FeatureCard
                            icon={insulin}
                            iconAlt="Insulin Icon"
                            head='Insulin'
                            title="View & Add Insulin"
                            description="Add your insulin units when you find your glucose level down and you can track your preview insulin activity."
                            detailImage={insulindetail}
                            detailImageAlt="Insulin Detail"
                            detailImageClassName="w-11/12"
                        />
                    </div>
                </div>


                <div className="share-box bg-blogcard rounded-3xl w-[97%]">

                    <div className="card-content lg:flex md:block xs:block">
                        <div className="left lg:w-5/6 px-10 xs:m-auto xs:w-full">
                            <div className="logo flex mb-12">
                                <span>
                                    <Image src={share} alt='share-icon' />
                                </span>
                                <p className="flex items-center mx-5 text-2xl">Share Glucose</p>
                            </div>



                            <h3 className="text-4xl font-semibold my-3">Parent & Child Sharing</h3>
                            <p className="text-paragraph text-2xl leading-8 my-3">
                                Share your diabetic management journey with your added parent or child so that they can track your real time glucose level and help you in this journey
                            </p>

                        </div>

                        <div className="right md:pt-10 xs:px-10">

                            <Image src={sharedetail} alt="Share Detail" className="w-full" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features