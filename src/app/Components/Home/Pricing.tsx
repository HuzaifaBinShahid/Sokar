import React from 'react'
import PricingCard from '@/app/common_views/PricingCard/PricingCard'
import pricingpoint from '../../../../public/images/Home/pricingpoint.svg'
import pricingpointfade from '../../../../public/images/Home/pricingpointfade.svg'
import { StaticImageData } from 'next/image';


interface Point {
    id: number;
    text: string;
    imageSrc: StaticImageData;
    alt: string;
    price: string;
    className?: string;
}

const Pricing = () => {

    // Points Data

    const dynamicPointsData: Point[] = [
        {
            id: 1,
            text: "Real time glucose tracking",
            imageSrc: pricingpoint,
            alt: "list-icon",
            price: '20$'
        },
        {
            id: 2,
            text: "Get notified on every step",
            imageSrc: pricingpoint,
            alt: "list-icon",
            price: '20$'
        },
        {
            id: 3,
            text: "Add your medication reminder",
            imageSrc: pricingpoint,
            alt: "list-icon",
            price: '20$'
        },
        {
            id: 4,
            text: "Track glucose history",
            imageSrc: pricingpoint,
            alt: "list-icon",
            price: '20$'
        },
        {
            id: 5,
            text: "Track Heart rate summary",
            imageSrc: pricingpointfade,
            alt: "list-icon",
            price: '20$',
            className: 'text-paragraph'
        },
        {
            id: 6,
            text: "Able to add parent & child",
            imageSrc: pricingpointfade,
            alt: "list-icon",
            price: '20$',
            className: 'text-paragraph'
        },
        {
            id: 7,
            text: "Can add and track insulin summary",
            imageSrc: pricingpointfade,
            alt: "list-icon",
            price: '20$',
            className: 'text-paragraph'
        }
    ]

    const dynamicPointsData2: Point[] = [
        {
            id: 1,
            text: "Real time glucose tracking",
            imageSrc: pricingpoint,
            alt: "list-icon",
            price: '20$'
        },
        {
            id: 2,
            text: "Get notified on every step",
            imageSrc: pricingpoint,
            alt: "list-icon",
            price: '20$'
        },
        {
            id: 3,
            text: "Add your medication reminder",
            imageSrc: pricingpoint,
            alt: "list-icon",
            price: '20$'
        },
        {
            id: 4,
            text: "Track glucose history",
            imageSrc: pricingpoint,
            alt: "list-icon",
            price: '20$'
        },
        {
            id: 5,
            text: "Track Heart rate summary",
            imageSrc: pricingpoint,
            alt: "list-icon",
            price: '20$'
        },
        {
            id: 6,
            text: "Able to add parent & child",
            imageSrc: pricingpoint,
            alt: "list-icon",
            price: '20$'
        },
        {
            id: 7,
            text: "Can add and track insulin summary",
            imageSrc: pricingpoint,
            alt: "list-icon",
            price: '20$'
        },

    ];
    return (
        <section id="pricing">
            <div className="container pricing-content m-auto">
                <div className="text-center">
                    <p className='text-colortag my-6 font-normal md:text-4xl xs:text-2xl'>Pricing</p>
                    <h2 className='md:text-6xl md:my-6 font-semibold xs:text-2xl xs:my-2'>
                        Subscription Plans
                    </h2>
                    <p className='text-paragraph md:text-2xl md:my-12 font-normal xs:text-lg xs:my-12'>
                        Plaese have a look at our subscription plans you can subscribe any of those to use the app according to your set subscription plan
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-0 relative">

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center transform -translate-x-2/2 -translate-y-[45%]">
                            <p className='text-black bg-colortag py-5 px-10 rounded-full font-semibold text-2xl'>Best To Start</p>
                        </div>
                        <PricingCard
                            title="Basic"
                            description="Enjoy all these features in Basic Plan"
                            points={dynamicPointsData}
                            price='$14.99'
                        />
                    </div>

                    <div>
                        <PricingCard
                            title="Premium"
                            description="Enjoy all these features in Basic Plan "
                            points={dynamicPointsData2}
                            price='$47.10'
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Pricing