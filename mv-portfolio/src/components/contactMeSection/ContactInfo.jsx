import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="spdmostovyi@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+380 68 358 00 01" Image={FiPhone} />
      <SingleInfo text="Ternopil, Ukraine" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
