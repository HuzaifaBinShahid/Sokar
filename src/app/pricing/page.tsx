"use client";
import React from "react";
import Image from "next/image";

import contactusimage from "../../../public/images/Home/contactus.png";
import getimage from "../../../public/images/Home/getimage.png";
import glucosebox from "../../../public/images/Home/glucose-box.png";
import heartbox from "../../../public/images/Home/heart-box.png";
import insulinbox from "../../../public/images/Home/insulin-box.png";
import medicationbox from "../../../public/images/Home/medication-box.png";
import sharebox from "../../../public/images/Home/share-box.png";
import Pricing from "../Components/Home/Pricing";
import ContactUs from "../common_views/ContactUs";
import { motion, AnimatePresence } from "framer-motion";
import { InView } from "react-intersection-observer";

const PricingPage = () => {
  return (
    <section id="pricing">
      <div className="container mx-auto items-center justify-center">
        <div className="pricing-content">
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
                Pricing Plans
              </motion.h6>
              <motion.h1
                className="headline md:text-6xl md:my-6 font-semibold xs:text-2xl xs:my-2"
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Choose Your Health Journey
              </motion.h1>
              <motion.p
                className="description text-paragraph md:text-2xl md:my-12 font-normal xs:text-lg xs:my-12"
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Select the perfect plan that fits your lifestyle and health
                monitoring needs
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
            <Image
              src={contactusimage}
              alt="pricing-image"
              className="m-auto"
            />
          </motion.div>
        </div>

        <InView>
          {({ inView, ref }) => (
            <div
              className="value-proposition grid md:grid-cols-2 xs:grid-cols-1 md:p-4"
              ref={ref}
            >
              <div className="value-text flex flex-col justify-center align-middle lg:text-left xs:text-center p-5">
                <motion.p
                  className="text-colortag lg:text-4xl md:text-2xl xs:text-xl my-3"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 1 }}
                >
                  Value for Money
                </motion.p>
                <motion.h2
                  className="lg:text-6xl md:text-4xl xs:text-2xl font-semibold my-5"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Invest in Your Health
                </motion.h2>
                <motion.p
                  className="text-paragraph lg:text-2xl md:text-xl xs:text-lg my-5 leading-10 lg:w-5/6 xs:w-full"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Every plan is designed to provide maximum value for your
                  health investment. Get access to cutting-edge AI technology,
                  real-time monitoring, and personalized insights at prices that
                  make sense for your budget.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                transition={{ duration: 1 }}
              >
                <Image src={getimage} alt="value-image" />
              </motion.div>
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div
              className="features-comparison grid md:grid-cols-2 xs:grid-cols-1 md:p-4 my-20"
              ref={ref}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                transition={{ duration: 1 }}
              >
                <Image src={glucosebox} alt="features-image" />
              </motion.div>

              <div className="features-text flex flex-col justify-center align-middle lg:text-left xs:text-center p-5">
                <motion.p
                  className="text-colortag lg:text-4xl md:text-2xl xs:text-xl my-3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                  transition={{ duration: 1 }}
                >
                  Complete Features
                </motion.p>
                <motion.h2
                  className="lg:text-6xl md:text-4xl xs:text-2xl font-semibold my-5"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Everything You Need
                </motion.h2>
                <motion.p
                  className="text-paragraph lg:text-2xl md:text-xl xs:text-lg my-5 leading-10 lg:w-5/6 xs:w-full"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  From basic glucose monitoring to advanced AI-powered
                  analytics, our plans include comprehensive features to support
                  your health journey at every level.
                </motion.p>
              </div>
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div className="pricing-cards my-32" ref={ref}>
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
                  Choose Your Plan
                </motion.h2>
              </motion.div>

              <Pricing />
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div className="benefits my-32" ref={ref}>
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
                  Why Choose Sokar
                </motion.h2>
              </motion.div>

              <div className="benefits-grid grid lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 gap-8 p-4">
                <motion.div
                  className="benefit-card bg-footer rounded-lg p-8 flex items-center space-x-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <Image
                    src={heartbox}
                    alt="health-monitoring"
                    className="w-16 h-16"
                  />
                  <div>
                    <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-2">
                      24/7 Health Monitoring
                    </h3>
                    <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                      Continuous glucose monitoring with real-time alerts and
                      personalized insights.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="benefit-card bg-footer rounded-lg p-8 flex items-center space-x-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <Image
                    src={insulinbox}
                    alt="ai-insights"
                    className="w-16 h-16"
                  />
                  <div>
                    <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-2">
                      AI-Powered Insights
                    </h3>
                    <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                      Advanced machine learning algorithms provide personalized
                      health recommendations.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="benefit-card bg-footer rounded-lg p-8 flex items-center space-x-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <Image
                    src={medicationbox}
                    alt="medication-tracking"
                    className="w-16 h-16"
                  />
                  <div>
                    <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-2">
                      Medication Tracking
                    </h3>
                    <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                      Smart reminders and dosage tracking to keep your
                      medication schedule on track.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="benefit-card bg-footer rounded-lg p-8 flex items-center space-x-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <Image
                    src={sharebox}
                    alt="data-sharing"
                    className="w-16 h-16"
                  />
                  <div>
                    <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-2">
                      Seamless Data Sharing
                    </h3>
                    <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                      Easily share your health data with healthcare providers
                      and family members.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div className="guarantee my-32" ref={ref}>
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
                  30-Day Guarantee
                </motion.p>
                <motion.h2
                  className="lg:text-6xl md:text-4xl xs:text-2xl font-semibold my-5"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Risk-Free Trial
                </motion.h2>
                <motion.p
                  className="text-paragraph lg:text-2xl md:text-xl xs:text-lg my-5 leading-10 mx-auto lg:w-3/4 xs:w-full px-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Try Sokar completely risk-free for 30 days. If you&apos;re not
                  completely satisfied with your health monitoring experience,
                  we&apos;ll refund your money, no questions asked. Your health
                  journey starts here, with complete confidence.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="mt-8"
                >
                  <button className="bg-colortag text-black py-4 px-8 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-all duration-300">
                    Start Your Free Trial
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

export default PricingPage;
