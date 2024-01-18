import React from 'react'
import FB from "../../Assets/fb.png";
import Insta from "../../Assets/insta.png";
import Twitter from "../../Assets/Group.png";
import Linkedin from "../../Assets/Linkedin.png";

export default function Footer() {
  return (
    <footer className="p-[60px] mt-[40px] flex flex-col items-center gap-[26px]">
    <div className="flex gap-[35px]">
      <img src={FB} alt="links" />
      <img src={Insta} alt="links" />
      <img src={Twitter} alt="links" />
      <img src={Linkedin} alt="links" />
    </div>
    <p className="text-[#21243D] text-[14px]">Copyright ©2020 All rights reserved </p>
  </footer>
  )
}
