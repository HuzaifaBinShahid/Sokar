import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Point {
  id: number;
  text: string;
  imageSrc: StaticImageData;
  alt: string;
  price:string;
  className?: string;
}

interface Props {
  title: string;
  description: string;
  points: Point[];
  price:string;
}

const PricingCard: React.FC<Props> = ({ title, description, points ,price}) => {
  return (
    <div className=" mx-auto bg-blogcard rounded-xl shadow-md overflow-hidden w-11/12  my-10">
      <div className=" text-center">
        <h3 className="text-4xl font-semibold mb-2 px-10 pt-16">{title}</h3>
        <p className="text-gray-500 mb-4 text-2xl px-10 py-5">{description}</p>
        <div className="space-y-6 my-10">
          {points.map(point => (
            <li key={point.id} className="flex items-center space-x-2 px-10">
              <Image src={point.imageSrc} alt={point.alt} className="w-8 h-8" />
              <p className={`${point.className} text-xl`}>{point.text}</p>
            </li>
          ))}
        </div>

        <hr className="border-colortag border-t-1 w-full" />

        <div className="price p-10">
            <span className='text-colortag text-4xl font-semibold'>{price}</span> <span className='text-paragraph'>/Month</span>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
