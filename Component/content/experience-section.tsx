"use client";
import { motion } from "motion/react";
import ExperienceCard from "../card/experience-card";
import ScrollText from "../text/scroll-text";
import { useRef } from "react";
import Scene from "../3d/model";

const events = [
  {
    date: "2024",
    title: "Fullstack Web Developer",
    company: "Nexus Nova",
  },
  {
    date: "2024",
    title: "AI & Backend Engineer",
    company: "AskVox AI",
  },
  {
    date: "2024",
    title: "Project Manager & Web Developer",
    company: "E-commerce Car Website",
  },
  {
    date: "2024",
    title: "Unity Game Developer",
    company: "After The Fall",
  },
  {
    date: "2021",
    title: "Fullstack Developer",
    company: "EPSA",
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  return (
    <section
      ref={sectionRef}
      className=" flex flex-col items-center justify-center w-full overflow-hidden gap-10 min-h-dvh bg-[var(--background)]"
    >
      <div className="w-full flex flex-col gap-4 justify-center items-center ">
        <h2 className="text-lg md:text-xl lg:text-6xl font-bold uppercase tracking-wider ">
          <ScrollText text="The journey" triggerRef={sectionRef} />
        </h2>
        <p className="max-w-2xl text-lg">
          {" "}
          A collection of roles where I’ve learned, built and having fun along
          the way.
        </p>
      </div>

      <div className="relative flex flex-col items-center w-full">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative flex items-center w-full"
          >
            <ExperienceCard
              event={event}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
