import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sarthak Gupta</h4>
      <h4>Copyright &copy; 2025 SG</h4>
      <div className='footerLinks'>
        <a href="https://github.com/mrsarthakgupta" target='_blank'rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sarthakgupta-iiitbhopal" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailto:sarthakgupta007brh@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
        <a href="https://leetcode.com/u/mrsarthak/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer
