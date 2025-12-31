import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Sarthak Gupta</b> and I am from <b>Uttar Pradesh, India</b>.
            I'm a <b>Full Stack Web Developer</b> and a <b>3rd year CSE student at IIIT Bhopal</b> with a CGPA of <b>8.76</b>. <br/><br/>

            I’ve built projects like <b>Imagify</b>, a <b>background remover</b>, a <b>real-time chat app</b>, the <b>Green Cart grocery app</b>, 
            and <b>Tic-Tac-Toe with AI modes</b>. I enjoy building clean and user-friendly applications.<br/><br/>

            I’m <b>open</b> to collaborations, internships, and freelance work.  
            Feel free to connect — links are in the footer.<br/><br/>

            Outside coding, I love exploring tech and doing photography — 
            see my shots on <a href="https://www.instagram.com/mr.sarthakgupta/" target='_blank'>Instagram.</a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className="skillsGrid">
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='Javascript' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='C++' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='TailwindCSS' />
        <Skills skill='Socket.io' />
        <Skills skill='TypeScript' />
        <Skills skill='AWS' />
        <Skills skill='Next.js' />
        <Skills skill='Npm' />
      </div>
    </>
  )
}

export default About
