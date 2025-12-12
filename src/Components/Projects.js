import React from 'react';
import ProjectBox from './ProjectBox';

// Import your project images here
import ImagifyImage from '../images/Imagify.png';
import BgRemovalImage from '../images/BgRemoval.png';
import GreenCartImage from '../images/GreenCart.png';
import SynchronousImage from '../images/Synchronous.png';
import TicTacToeImage from '../images/TicTacToe.png';
import AIMediAssistImage from '../images/AIMediAssist.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>

      <div className='project'>
        <ProjectBox projectPhoto={ImagifyImage} projectName="Imagify" />
        <ProjectBox projectPhoto={BgRemovalImage} projectName="BgRemoval" />
        <ProjectBox projectPhoto={GreenCartImage} projectName="GreenCart" />
        <ProjectBox projectPhoto={SynchronousImage} projectName="Synchronous" />
        <ProjectBox projectPhoto={TicTacToeImage} projectName="TicTacToe" />
        <ProjectBox projectPhoto={AIMediAssistImage} projectName="AIMediAssist" />
      </div>
    </div>
  )
}

export default Projects;
