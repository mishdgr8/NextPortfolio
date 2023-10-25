import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  DribbbleIcon,
  SunIcon,
  PinterestIcon,
  MoonIcon,
} from "@/components/Icons";

import { motion } from "framer-motion";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        // This creates the hover line effect when you click on any of the
        // links in the navbar. It's a bit tricky to implement because it requires
        className={`h-1 inline-block bg-black absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8  font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="home" className="mr-4 " />
        <CustomLink href="/about" title="about" className="mx-4" />
        <CustomLink href="/projects" title="projects" className="mx-4" />
        <CustomLink href="/articles" title="articles" className="ml-4" />
      </nav>

      <nav className="flex items-center justify center flex-wrap">
        <motion.a
          href="https://x.com"
          target="_blank"
          className="w-6 mr-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://x.com"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <DribbbleIcon />
        </motion.a>
        <motion.a
          href="https://x.com"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <PinterestIcon />
        </motion.a>

        <motion.a
          href="https://x.com"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://x.com"
          target="_blank"
          className="w-6 ml-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};
export default NavBar;
