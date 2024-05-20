import React from 'react';
import Image from 'next/image';
import blogdetail from '../../../../public/images/Blogs/blogdetail.png';
import blogdetail2 from '../../../../public/images/Blogs/blogdetail2.png';

const BlogDetail = () => {
  return (
    <section id="blog-detail" className="flex justify-center">
      <div className="blog-content">
        <div className="container mx-auto">
          <div className="image my-12 inline-block ">
            <Image src={blogdetail} alt="blogimage" />
          </div>
          <h1 className="text-6xl leading-relaxed font-semibold my-6 inline-block">
            Insulin Injection Techniques: Tips for Safe and Effective Administration
          </h1>

          <p className='text-2xl leading-10 text-paragraph my-5'>In the intricate world of web development, encountering memory leaks can be a tricky challenge. Memory-related problems are more likely to occur as web applications get more complicated. In this comprehensive guide, we will delve into effective strategies for identifying and resolving memory leaks in websites and web applications. Memory leaks in the shadows of web applications, waiting to devour performance and user experience. Identifying and fixing these elusive culprits is crucial for maintaining a smooth and responsive web presence. Whether you're a seasoned developer or just starting out, understanding memory leaks and knowing how to hunt them down is essential for web application success.</p>
       
          <h2 className = 'text-4xl my-10 font-medium'>What is Insulin?</h2>
          <p className='text-2xl leading-10 text-paragraph my-5'>Visualize the marketplace that is your online application.  Data, like customers and products, flows in and out. Ideally, unused data leaves when its job is done, freeing up space for fresh information. However, memory leaks act like sticky shoppers, clinging to data even after it's no longer needed</p>
       
          <h2 className = 'text-4xl my-10 font-medium'>Which role insulin play in diabetes?</h2>

          <div className="columns-2">
            <div className="text">
           <p className='text-2xl leading-10 text-paragraph my-5 w-4/5'>Visualize the marketplace that is your online application.  Data, like customers and products, flows in and out. Ideally, unused data leaves when its job is done, freeing up space for fresh information. However, memory leaks act like sticky shoppers, clinging to data even after it's no longer needed. Visualize the marketplace that is your online application.  Data, like customers and products, flows in and out.</p>
            </div>

            <div className="image">
               <Image 
               src={blogdetail2}
               alt='blogdetail 2'
               />
            </div>
          </div>

          <h2 className = 'text-4xl my-10 font-medium'>How to use insulin?</h2>
          <p className='text-2xl leading-10 text-paragraph my-5'>Visualize the marketplace that is your online application.  Data, like customers and products, flows in and out. Ideally, unused data leaves when its job is done, freeing up space for fresh information. However, memory leaks act like sticky shoppers, clinging to data even after it's no longer needed. Visualize the marketplace that is your online application.  Data, like customers and products, flows in and out. Ideally, unused data leaves when its job is done, freeing up space for fresh information. However, memory leaks act like sticky shoppers, clinging to data even after it's no longer needed</p>
       
        </div>
      </div>
    </section>
  );
}

export default BlogDetail;
