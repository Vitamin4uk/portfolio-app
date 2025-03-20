import React from "react";
import SingleSocialContact from "./SingleSocialContact";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleSocialContact link="#" Icon={FaLinkedinIn} />
      <SingleSocialContact link="#" Icon={FiGithub} />
      <SingleSocialContact link="#" Icon={FaInstagram} />
      <SingleSocialContact link="#" Icon={FaTelegramPlane} />
    </div>
  );
};

export default ContactSocial;
