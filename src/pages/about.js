import AnimateText from "@/components/AnimateText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ProfilePicture from "@/../public/images/profile/profilepic.jpg";

const About = () => {
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
              className="col-span-3 h-max relative rounded-2xl border-2 border-solid border-dark
        bg-light p-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={ProfilePicture}
                alt="my-image "
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
