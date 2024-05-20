import React from 'react';
import Image from 'next/image';
import calender from '../../../../public/images/Blogs/calender.png';
import Link from 'next/link';

interface BlogCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, title, description }) => {
  const removeSpecialChars = (str: string): string => {
    return str.replace(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, '-');
  };

  const cleanedTitle: string = removeSpecialChars(title);

  return (
    <div className="lg:11/12 md:w-11/12 xs:w-full md:h-[470px] xs:[370px] rounded-[20px] shadow-md overflow-hidden relative p-5 bg-blogcard mb-5">
      <Image src={imageUrl} alt="Blog" className="w-full rounded-[19.79px]" width={300} height={300} />
      <div className="text">
        <span className="flex mt-3 text-xs text-gray-500"><Image className='mr-3' src={calender} alt="calender" /> Mar 25, 2024</span>
        <h2 className="text-xl my-4">{title}</h2>
        <Link href='/'>
          <span className="absolute bottom-0 px-0 mx-auto w-max py-2"><span className="text-colortag">Read More...</span></span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
