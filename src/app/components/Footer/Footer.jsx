import React from 'react';
import {
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaReddit,
  FaFacebook,
} from 'react-icons/fa';

function Footer(props) {
  return (
    <div className="py-[2.5%]">
      <p className="text-semibold">Invest at the best ReFi projects </p>
      <div className='flex justify-between'>
        <a className="text-[36px] text-semibold" href="#">
          Home
        </a>
        <a className="text-[36px] text-semibold" href="#">
          Projects
        </a>
        <a className="text-[36px] text-semibold" href="#">
          Donation Hub
        </a>
        <a className="text-[36px] text-semibold" href="#">
          Blog
        </a>
        <a className="text-[36px] text-semibold" href="#">
          About
        </a>
        <a className="text-[36px] text-semibold" href="#">
          FAQ
        </a>
        <a className="text-[36px] text-semibold" href="#">
          Contact
        </a>
      </div>
      <div className="pt-[2.5%] flex justify-between">
        <h3>2023 © ReFi Starter</h3>
        <div className="flex justify-between w-[50%]">
          <div className="flex justify-between items-center ">
            <FaDiscord className="text-2xl cursor-pointer pr-[10px]" />
            <h2 className="text-semibold">Discord</h2>
          </div>
          <div className="flex justify-between items-center ">
          <FaTwitter className="text-2xlcursor-pointer" />
            <h2 className="text-semibold">Twitter</h2>
          </div>
          <div className="flex justify-between items-center ">
          <FaInstagram className="text-2xl cursor-pointer" />
            <h2 className="text-semibold">Instagram</h2>
          </div>
          <div className="flex justify-between items-center ">
          <FaLinkedin className="text-2xl cursor-pointer" />
            <h2 className="text-semibold">LinkedIn</h2>
          </div>
          <div className="flex justify-between items-center ">
            <FaReddit className="text-2xl cursor-pointer pr-[10px]" />
            <h2 className="text-semibold">Reddit</h2>
          </div>
          <div className="flex justify-between items-center ">
            <FaFacebook className="text-2xl cursor-pointer pr-[10px]" />
            <h2 className="text-semibold">Facebook</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
