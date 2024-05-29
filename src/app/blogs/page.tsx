'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import blogmain from '../../../public/images/Blogs/blogmainimg.png';
import calender from '../../../public/images/Blogs/calender.svg';
import BlogCard from '../common_views/BlogCards/BlogCrad';
import blogsData from '../Data/BlogsData.json';

interface Blog {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    category: string;
}

const Blogsmain = () => {
    const blogsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string>();
    const [searchTerm, setSearchTerm] = useState('');

    // Convert blog data
    const convertBlogData = (blogsData: any): Blog[] => {
        return Object.values(blogsData).flat().map((blog: any) => ({
            ...blog,
            imageUrl: typeof blog.imageUrl === 'string' ? blog.imageUrl : ''
        }));
    };

    const allBlogs = convertBlogData(blogsData);

    // Filter blogs based on selected category and search term
    const filteredBlogs = selectedCategory
        ? allBlogs.filter(blog => blog.category === selectedCategory && blog.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : allBlogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()));

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <>
            <section id='blogsmain'>
                <div className="blogs-content my-32 w-4/6 m-auto">
                    <div className="container mx-auto flex items-center justify-center">
                        <div className="text-center">
                            <h6 className='text-colortag my-6 font-normal animate-slideDown'>Blogs & Articles</h6>
                            <h1 className='md:text-6xl md:my-6 font-semibold xs:text-2xl xs:my-2 animate-slideDown'>
                                Stay Updated With Our Latest Glucose Management Blogs
                            </h1>
                            <p className='text-paragraph md:text-2xl md:my-12 font-normal xs:text-lg xs:my-12 animate-slideDown'>
                                Through blogs and articles you will be connected with the latest trending news. We are here to help you out with glucose management updates.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container image relative flex justify-center max-w-50 max-h-auto m-auto overflow-hidden md:py-12 xs:py-2">
                    <div className="relative lg:w-full md:w-[95%] xs:w-full h-96 overflow-hidden">
                        <Image
                            src={blogmain}
                            alt='blogmain'
                            layout="fill"
                            objectFit="cover"
                            className="rounded-3xl"
                        />
                        <div className="absolute bottom-0 transform-translate-x-1/2 text-left z-10 bg-gradient-to-t from-[#222A2E] to-[#00000000] p-4 rounded-lg w-full">
                            <span className="text-white text-2xl flex my-5">
                                <Image src={calender} alt='calender' />
                                <span className='mx-5'>Apr 12, 2024</span>
                            </span>
                            <p className="text-white text-2xl my-5">Insulin Injection Techniques: Tips for Safe and Effective Administration</p>
                            <p className="text-colortag text-2xl">Read More..</p>
                        </div>
                    </div>
                </div>



                <div className="container m-auto blogcards flex flex-col justify-content-center align-items-center">
                    <div className="md:my-32 xs:my-5">
                        <div className="flex flex-wrap justify-center">
                            {currentBlogs.map((blog, index) => (
                                <div key={index} className="xs:w-full md:w-1/2 lg:w-1/3 flex justify-center">
                                    <BlogCard
                                        imageUrl={blog.imageUrl}
                                        title={blog.title}
                                        description={blog.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Pagination */}
                    {filteredBlogs.length > 0 && (
                        <nav>
                            <ul className="pagination text-center m-2">
                                {Array.from({ length: Math.ceil(filteredBlogs.length / blogsPerPage) }, (_, i) => (
                                    <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
                                        <button className="bg-colortag py-1 px-3 my-6 rounded" style={{ color: 'black' }} onClick={() => paginate(i + 1)}>{i + 1}</button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </section>
        </>
    );
};

export default Blogsmain;
