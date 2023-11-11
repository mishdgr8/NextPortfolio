import AnimateText from "@/components/AnimateText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProfilePicture from "@/../public/images/profile/profilepic.jpg";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  const variants = {
    hidden: {
      x: 100, // Move the element 100 pixels to the right (adjust as needed)
      opacity: 0, // Make it initially invisible
    },
    visible: {
      x: 0, // Move the element back to its original position
      opacity: 1, // Make it visible
      transition: {
        duration: 1, // Adjust the animation duration as needed
      },
    },
  };
  return (
    <>
      <Head>
        <title>About Me | My Work</title>
        <meta name="Description" content="description" />
      </Head>
      <main>
        <Layout>
          <AnimateText text="Passion Fuels Productivity" className="mb-8" />

          <div className="grid w-full grid-cols-8 gap-16 mb-8 px-10">
            <div className="col-span-3 flex-col flex items-start justify-start">
              <h2 className="font-bold text-3xl uppercase text-dark/75 mb-4 ">
                Biography
              </h2>
              <p className=" font-medium">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="  font-medium my-2">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className=" font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div
              className="col-span-3 mt-[1rem] h-max relative  rounded-2xl border-2 border-solid border-dark
        bg-dark p-8 "
            >
              <div
                className=" absolute
               z-2 bottom-2 -left-4 z-[0]  w-[102%] h-[103%] rounded-2xl  bg-light border-dark border-2"
              />
              <Image
                src={ProfilePicture}
                alt="my-image "
                className="relative  w-full h-auto rounded-2xl pr-4 pb-4"
              />
            </div>

            <motion.div
              className=" col-span-2 flex flex-col items-end justify-between"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <div className="flex flex-col items-end justify-center ">
                <span className=" inline-block text-8xl font-extrabold ">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className=" font-medium text-lg capitalize text-dark/75">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center ">
                <span className="text-8xl font-extrabold ">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className=" font-medium text-lg capitalize text-dark/75">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-start justify-center ">
                <span className="text-8xl font-extrabold ">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className=" font-medium text-lg text-dark/75 capitalize">
                  years of experience
                </h2>
              </div>
            </motion.div>
          </div>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default About;
