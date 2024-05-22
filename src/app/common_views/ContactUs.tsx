import React from 'react';
import Image from 'next/image';

// importing assets
import contactusimage from '../../../public/images/Home/contactus.png';
import person from '../../../public/images/Home/person.svg'
import mail from '../../../public/images/Home/email.svg'

const ContactUs = () => {
    return (
        <section id="contactus" className='md:p-6'>
            <div className="container mx-auto lg:p-10 xs:p-5 my-20 bg-blogcard rounded-3xl ">
                <div className="contactus-content flex">
                    <div className="text">
                        <h3 className='text-4xl font-semibold my-5 '>Contact Us</h3>
                        <p className='text-2xl text-paragraph lg:w-3/6 xs:w-full'>We’d love to hear from you! if you have any question, suggestion or feedback, feel free to get in touch.</p>
                        <div className="inputs flex flex-col">
                            {/* Name Field */}
                            <div className="person-field relative">
                                <input type="text" className='bg-blogcard px-10 py-5 mt-5 rounded-xl w-10/12' placeholder='Name' />
                                <div className="person absolute top-9 left-2">
                                   <Image src={person} alt='person'/>
                                </div>
                            </div>
                            
                            {/* Email Field */}
                            <div className="email-field relative">
                            <input type="Email" className='bg-blogcard px-10 py-5 mt-5 rounded-xl w-10/12' placeholder='Email'  />
                            
                            <div className="email absolute top-9 left-2">
                            <Image src={mail} alt='mail'/>
                            </div>
                            
                            </div>


                            <textarea name="message" id="message" className='bg-blogcard pt-3 px-7 rounded-xl w-10/12 mt-5 resize-none' placeholder='Message' cols={30} rows={8}></textarea>
                            <button className='bg-colortag w-10/12 text-black lg:px-10 lg:py-5 xs:px-3 xs:py-5  my-10 rounded-2xl lg:text-2xl xs:text-xl font-semibold'>Send Message</button>
                        </div>
                    </div>

                    <div className="image 2xl:w-3/6 xl:w-full lg:w-full lg:block xs:hidden">
                        <Image src={contactusimage} alt='contact us image' className='w-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs