import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  icon: StaticImageData;
  iconAlt: string;
  title: string;
  head: string;
  description: string;
  detailImage: StaticImageData;
  detailImageAlt: string;
  detailImageClassName?: string; 
}

const FeatureCard: React.FC<CardProps> = ({ icon, iconAlt, head, title, description, detailImage, detailImageAlt, detailImageClassName }) => {
  return (
    <div className="card bg-blogcard rounded-3xl w-11/12 overflow-hidden">
      <div className="card-content ">
        <div className="logo flex mb-12 p-10">
          <span>
            <Image src={icon} alt={iconAlt} />
          </span>
          <p className="flex items-center mx-5 text-2xl">{head}</p>
        </div>
        
        <h3 className="text-4xl font-semibold my-3 px-10">{title}</h3>
        <p className="text-paragraph text-2xl leading-8 my-3 px-10">
          {description}
        </p>

        <Image src={detailImage} alt={detailImageAlt} className={` ${detailImageClassName}`} />
      </div>
    </div>
  );
};

export default FeatureCard;
