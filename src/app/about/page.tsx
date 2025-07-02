"use client";
import React from "react";
import Image from "next/image";

import aboutimage from "../../../public/images/Home/about.png";
import mainimage from "../../../public/images/Home/homemain.png";
import Features from "../Components/Home/Features";
import ContactUs from "../common_views/ContactUs";
import { motion, AnimatePresence } from "framer-motion";
import { InView } from "react-intersection-observer";

const AboutPage = () => {
  return (
    <section id="about">
      <div className="container mx-auto items-center justify-center">
        <div className="about-content">
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
                About Sokar
              </motion.h6>
              <motion.h1
                className="headline md:text-6xl md:my-6 font-semibold xs:text-2xl xs:my-2"
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Revolutionizing Health Monitoring
              </motion.h1>
              <motion.p
                className="description text-paragraph md:text-2xl md:my-12 font-normal xs:text-lg xs:my-12"
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Discover how Sokar is transforming diabetes management through
                innovative AI technology and real-time glucose monitoring
                solutions
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
            <Image src={aboutimage} alt="about-image" className="m-auto" />
          </motion.div>
        </div>

        <InView>
          {({ inView, ref }) => (
            <div
              className="mission grid md:grid-cols-2 xs:grid-cols-1 md:p-4"
              ref={ref}
            >
              <div className="mission-text flex flex-col justify-center align-middle lg:text-left xs:text-center p-5">
                <motion.p
                  className="text-colortag lg:text-4xl md:text-2xl xs:text-xl my-3"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 1 }}
                >
                  Our Mission
                </motion.p>
                <motion.h2
                  className="lg:text-6xl md:text-4xl xs:text-2xl font-semibold my-5"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Empowering Health Decisions
                </motion.h2>
                <motion.p
                  className="text-paragraph lg:text-2xl md:text-xl xs:text-lg my-5 leading-10 lg:w-5/6 xs:w-full"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Our mission is to empower individuals with diabetes to take
                  control of their health through intelligent monitoring,
                  personalized insights, and seamless healthcare integration. We
                  believe that technology should make health management simpler,
                  not more complicated.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                transition={{ duration: 1 }}
              >
                <Image src={mainimage} alt="mission-image" />
              </motion.div>
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div
              className="vision grid md:grid-cols-2 xs:grid-cols-1 md:p-4 my-20"
              ref={ref}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                transition={{ duration: 1 }}
              >
                <Image src={aboutimage} alt="vision-image" />
              </motion.div>

              <div className="vision-text flex flex-col justify-center align-middle lg:text-left xs:text-center p-5">
                <motion.p
                  className="text-colortag lg:text-4xl md:text-2xl xs:text-xl my-3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                  transition={{ duration: 1 }}
                >
                  Our Vision
                </motion.p>
                <motion.h2
                  className="lg:text-6xl md:text-4xl xs:text-2xl font-semibold my-5"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Future of Healthcare
                </motion.h2>
                <motion.p
                  className="text-paragraph lg:text-2xl md:text-xl xs:text-lg my-5 leading-10 lg:w-5/6 xs:w-full"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  We envision a world where managing diabetes is as simple as
                  checking your phone. Through cutting-edge AI and seamless
                  integration with healthcare providers, Sokar aims to be the
                  bridge between patients and optimal health outcomes.
                </motion.p>
              </div>
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div className="story my-32" ref={ref}>
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
                  Our Story
                </motion.p>
                <motion.h2
                  className="lg:text-6xl md:text-4xl xs:text-2xl font-semibold my-5"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Born from Innovation
                </motion.h2>
                <motion.p
                  className="text-paragraph lg:text-2xl md:text-xl xs:text-lg my-5 leading-10 mx-auto lg:w-3/4 xs:w-full px-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Sokar was founded with a simple belief: that everyone deserves
                  access to advanced healthcare technology. Our team of
                  healthcare professionals, engineers, and designers came
                  together to create a solution that puts the power of health
                  monitoring directly in your hands. Through years of research
                  and development, we&apos;ve crafted an AI-powered platform
                  that learns from your unique patterns and provides
                  personalized insights to help you live your healthiest life.
                </motion.p>
              </motion.div>
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div className="values my-32" ref={ref}>
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
                  Our Values
                </motion.h2>
              </motion.div>

              <div className="values-grid grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-8 p-4">
                <motion.div
                  className="value-card bg-footer rounded-lg p-8 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-4">
                    Innovation
                  </h3>
                  <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                    We constantly push the boundaries of what&apos;s possible in
                    healthcare technology, ensuring our users always have access
                    to the latest advancements.
                  </p>
                </motion.div>

                <motion.div
                  className="value-card bg-footer rounded-lg p-8 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-4">
                    Privacy
                  </h3>
                  <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                    Your health data is sacred. We implement the highest
                    security standards to protect your personal information and
                    ensure complete privacy.
                  </p>
                </motion.div>

                <motion.div
                  className="value-card bg-footer rounded-lg p-8 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <h3 className="text-colortag lg:text-2xl md:text-xl xs:text-lg font-semibold mb-4">
                    Accessibility
                  </h3>
                  <p className="text-paragraph lg:text-lg md:text-base xs:text-sm leading-7">
                    Healthcare technology should be available to everyone. We
                    design our solutions to be intuitive, affordable, and
                    accessible to all users.
                  </p>
                </motion.div>
              </div>
            </div>
          )}
        </InView>
      </div>

      <ContactUs />
    </section>
  );
};

export default AboutPage;
