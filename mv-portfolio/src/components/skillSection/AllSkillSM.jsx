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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
