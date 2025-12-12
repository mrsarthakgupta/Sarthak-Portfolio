import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SARTHAK GUPTA</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
           I love transforming ideas into meaningful digital experiences and building
            products that actually help people. Creating clean, functional, and efficient
            applications is what drives me as a developer. <br /><br />

            I am fluent in <b>C++</b> and comfortable with <b>Python</b>.  
            I actively build full-stack projects using the <b>MERN</b> stack and enjoy exploring 
            new technologies. <br /><br />

            Currently, I am learning and planning to dive deeper into  
            <b> Next.js</b>, <b>TypeScript</b>, and <b>Three.js</b> to level up my development skillset. <br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home