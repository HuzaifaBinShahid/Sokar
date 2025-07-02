"use client";
import React from "react";
import Image from "next/image";

import shareimage from "../../../public/images/Home/share.png";
import sharebox from "../../../public/images/Home/share-box.png";
import medicationbox from "../../../public/images/Home/medication-box.png";
import insulinbox from "../../../public/images/Home/insulin-box.png";
import glucosebox from "../../../public/images/Home/glucose-box.png";
import heartbox from "../../../public/images/Home/heart-box.png";
import getimage from "../../../public/images/Home/getimage.png";
import homemain from "../../../public/images/Home/homemain.png";
import glucoseimage from "../../../public/images/Home/glucose.png";
import heartimage from "../../../public/images/Home/heart.png";
import medicationimage from "../../../public/images/Home/medication.png";
import insulinimage from "../../../public/images/Home/insulin.png";
import designimage from "../../../public/images/Home/design.svg";
import emailimage from "../../../public/images/Home/email.svg";
import personimage from "../../../public/images/Home/person.svg";
import ContactUs from "../common_views/ContactUs";
import { motion, AnimatePresence } from "framer-motion";
import { InView } from "react-intersection-observer";

const ContactPage = () => {
  return (
    <section id="contact">
      <div className="container mx-auto items-center justify-center">
        <div className="contact-content">
          <AnimatePresence>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.5 },
                },
              }}
              className="text-center"
            >
              <motion.h6
                className="text-colortag my-6 font-normal"
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Get In Touch
              </motion.h6>
              <motion.h1
                className="headline md:text-6xl md:my-6 font-semibold xs:text-2xl xs:my-2"
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                We&apos;re Here to Help
              </motion.h1>
              <motion.p
                className="description text-paragraph md:text-2xl md:my-12 font-normal xs:text-lg xs:my-12"
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Have questions about Sokar? Need support? We&apos;d love to hear
                from you and help you on your health journey
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="main-image w-full my-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="main-image w-full my-20"
          >
            <Image src={shareimage} alt="contact-image" className="m-auto" />
          </motion.div>
        </div>

        <InView>
          {({ inView, ref }) => (
            <div
              className="support-options grid md:grid-cols-2 xs:grid-cols-1 md:p-4"
              ref={ref}
            >
              <div className="support-text flex flex-col justify-center align-middle lg:text-left xs:text-center p-5">
                <motion.p
                  className="text-colortag lg:text-4xl md:text-2xl xs:text-xl my-3"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 1 }}
                >
                  24/7 Support
                </motion.p>
                <motion.h2
                  className="lg:text-6xl md:text-4xl xs:text-2xl font-semibold my-5"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Always Available
                </motion.h2>
                <motion.p
                  className="text-paragraph lg:text-2xl md:text-xl xs:text-lg my-5 leading-10 lg:w-5/6 xs:w-full"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Our dedicated support team is available around the clock to
                  assist you with any questions, technical issues, or guidance
                  you need with your health monitoring journey.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: inView ? 1 : 0,
                      scale: inView ? 1 : 0.8,
                    }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <Image
                      src={heartbox}
                      alt="24-7-monitoring"
                      className="rounded-lg"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: inView ? 1 : 0,
                      scale: inView ? 1 : 0.8,
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <Image
                      src={medicationbox}
                      alt="support-assistance"
                      className="rounded-lg"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: inView ? 1 : 0,
                      scale: inView ? 1 : 0.8,
                    }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    <Image
                      src={glucosebox}
                      alt="technical-help"
                      className="rounded-lg"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: inView ? 1 : 0,
                      scale: inView ? 1 : 0.8,
                    }}
                    transition={{ duration: 1, delay: 0.9 }}
                  >
                    <Image
                      src={insulinbox}
                      alt="expert-guidance"
                      className="rounded-lg"
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <div className="text-center">
                    <div className="bg-colortag text-black py-3 px-6 rounded-full font-semibold text-lg">
                      Always Here for You
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div
              className="contact-methods grid md:grid-cols-2 xs:grid-cols-1 md:p-4 my-20"
              ref={ref}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <Image
                    src={getimage}
                    alt="main-contact-image"
                    className="rounded-lg"
                  />
                </motion.div>

                <motion.div
                  className="absolute top-4 right-4 bg-footer rounded-lg p-4 backdrop-blur-sm border border-colortag"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <Image src={emailimage} alt="email" className="w-6 h-6" />
                    <span className="text-colortag font-medium">Email</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 bg-footer rounded-lg p-4 backdrop-blur-sm border border-colortag"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <div className="flex items-center space-x-2">
                    <Image src={personimage} alt="phone" className="w-6 h-6" />
                    <span className="text-colortag font-medium">Phone</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-footer rounded-lg p-4 backdrop-blur-sm border border-colortag"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  <div className="flex items-center space-x-2">
                    <Image src={designimage} alt="chat" className="w-6 h-6" />
                    <span className="text-colortag font-medium">Chat</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 left-8 transform -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  <div className="flex flex-col space-y-2">
                    <Image
                      src={shareimage}
                      alt="social"
                      className="w-8 h-8 opacity-80"
                    />
                    <Image
                      src={heartimage}
                      alt="support"
                      className="w-8 h-8 opacity-80"
                    />
                    <Image
                      src={glucoseimage}
                      alt="health"
                      className="w-8 h-8 opacity-80"
                    />
                  </div>
                </motion.div>
              </motion.div>

              <div className="methods-text flex flex-col justify-center align-middle lg:text-left xs:text-center p-5">
                <motion.p
                  className="text-colortag lg:text-4xl md:text-2xl xs:text-xl my-3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                  transition={{ duration: 1 }}
                >
                  Multiple Ways
                </motion.p>
                <motion.h2
                  className="lg:text-6xl md:text-4xl xs:text-2xl font-semibold my-5"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Reach Out to Us
                </motion.h2>
                <motion.p
                  className="text-paragraph lg:text-2xl md:text-xl xs:text-lg my-5 leading-10 lg:w-5/6 xs:w-full"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Whether you prefer email, phone, live chat, or social media,
                  we offer multiple convenient ways to get in touch with our
                  team and get the help you need.
                </motion.p>
              </div>
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div className="contact-info my-32" ref={ref}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 1 }}
                className="text-center mb-16"
              >
                <motion.h2
                  className="lg:text-6xl md:text-4xl xs:text-2xl font-semibold my-5"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Contact Information
                </motion.h2>
              </motion.div>

              <div className="contact-grid grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-8 p-4">
                <motion.div
                  className="contact-card bg-footer rounded-lg p-8 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <Image
                    src={emailimage}
                    alt="email"
                    className="w-12 h-12 mx-auto mb-4"
                  />
                  <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-4">
                    Email Us
                  </h3>
                  <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7 mb-2">
                    support@sokar.com
                  </p>
                  <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                    We respond within 24 hours
                  </p>
                </motion.div>

                <motion.div
                  className="contact-card bg-footer rounded-lg p-8 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <Image
                    src={personimage}
                    alt="phone"
                    className="w-12 h-12 mx-auto mb-4"
                  />
                  <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-4">
                    Call Us
                  </h3>
                  <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7 mb-2">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                    Available 24/7
                  </p>
                </motion.div>

                <motion.div
                  className="contact-card bg-footer rounded-lg p-8 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <Image
                    src={designimage}
                    alt="live-chat"
                    className="w-12 h-12 mx-auto mb-4"
                  />
                  <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-4">
                    Live Chat
                  </h3>
                  <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7 mb-2">
                    Chat with our team
                  </p>
                  <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                    Instant responses
                  </p>
                </motion.div>
              </div>
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div className="help-topics my-32" ref={ref}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 1 }}
                className="text-center mb-16"
              >
                <motion.h2
                  className="lg:text-6xl md:text-4xl xs:text-2xl font-semibold my-5"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  How Can We Help?
                </motion.h2>
              </motion.div>

              <div className="help-grid grid lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 gap-8 p-4">
                <motion.div
                  className="help-card bg-footer rounded-lg p-8 flex items-center space-x-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <Image
                    src={glucoseimage}
                    alt="technical-support"
                    className="w-16 h-16"
                  />
                  <div>
                    <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-2">
                      Technical Support
                    </h3>
                    <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                      Having trouble with the app? Our technical team is ready
                      to help with any issues or questions.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="help-card bg-footer rounded-lg p-8 flex items-center space-x-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <Image
                    src={heartimage}
                    alt="health-guidance"
                    className="w-16 h-16"
                  />
                  <div>
                    <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-2">
                      Health Guidance
                    </h3>
                    <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                      Need help understanding your data? Our health experts can
                      guide you through your results.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="help-card bg-footer rounded-lg p-8 flex items-center space-x-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <Image
                    src={medicationimage}
                    alt="account-billing"
                    className="w-16 h-16"
                  />
                  <div>
                    <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-2">
                      Account & Billing
                    </h3>
                    <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                      Questions about your subscription, billing, or account
                      settings? We&apos;re here to help.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="help-card bg-footer rounded-lg p-8 flex items-center space-x-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <Image
                    src={insulinimage}
                    alt="general-inquiries"
                    className="w-16 h-16"
                  />
                  <div>
                    <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-2">
                      General Inquiries
                    </h3>
                    <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                      Have other questions about Sokar, partnerships, or
                      features? We&apos;d love to hear from you.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div className="response-time my-32" ref={ref}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <motion.p
                  className="text-colortag lg:text-4xl md:text-2xl xs:text-xl my-3"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1 }}
                >
                  Quick Response
                </motion.p>
                <motion.h2
                  className="lg:text-6xl md:text-4xl xs:text-2xl font-semibold my-5"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Fast Support When You Need It
                </motion.h2>
                <motion.p
                  className="text-paragraph lg:text-2xl md:text-xl xs:text-lg my-5 leading-10 mx-auto lg:w-3/4 xs:w-full px-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  We understand that when it comes to your health, time matters.
                  That&apos;s why we&apos;re committed to providing fast,
                  reliable support whenever you need assistance. Our average
                  response time is under 2 hours, and urgent health-related
                  inquiries are prioritized for immediate attention.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="mt-8"
                >
                  <button className="bg-colortag text-black py-4 px-8 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-all duration-300">
                    Contact Us Now
                  </button>
                </motion.div>
              </motion.div>
            </div>
          )}
        </InView>
      </div>

      <ContactUs />
    </section>
  );
};

export default ContactPage;
