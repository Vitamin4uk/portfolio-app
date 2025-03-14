import React from "react";
import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { LuFigma } from "react-icons/lu";
import { FaWindows } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  {
    skill: "Windows 11",
    icon: FaWindows,
  },
  {
    skill: "Figma",
    icon: LuFigma,
  },
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "Java Script",
    icon: IoLogoJavascript,
  },
  {
    skill: "React JS",
    icon: RiReactjsFill,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
