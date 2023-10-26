import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className=" mt-32 w-full text-8xl font-bold text-center mb-12">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold
        bg-dark text-light p-8 shadow-dark cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
        >
          WEB
        </motion.div>
        <Skill name="HTML" x="17vw" y="0vw" />
        <Skill name="Javascript" x="-8vw" y="-10vw" />
        <Skill name="ReactJS" x="22vw" y="-14vw" />
        <Skill name="NextJS" x="-8vw" y="-10vw" />
        <Skill name="Tailwind CSS" x="-15vw" y="18vw" />
        <Skill name="UI/UX" x="-2vw" y="14vw" />

        <Skill name="CSS" x="8vw" y="10vw" />
        <Skill name="MongoDB" x="-17vw" y="-28vw" />
        <Skill name="Solidity" x="5vw" y="-12vw" />
        <Skill name="Web3" x="-13vw" y="-5vw" />

        <Skill name="Figma" x="-5vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
