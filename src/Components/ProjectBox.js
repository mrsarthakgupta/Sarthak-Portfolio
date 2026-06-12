import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {

  const desc = {
    // ⭐ Imagify – AI Image Generator
    ImagifyDesc:
      "AI text-to-image generator using OpenAI and Cloudinary APIs with image download and management features.",
    ImagifyGithub: "https://github.com/mrsarthakgupta/Imagify",
    ImagifyWebsite: "https://imagify-blue-psi.vercel.app",

    // ⭐ Background Removal Tool
    BgRemovalDesc:
      "Background removal tool using ClipDrop API. Upload images and instantly download clean transparent outputs.",
    BgRemovalGithub: "https://github.com/mrsarthakgupta/BG-REMOVAL-PROJECT",
    BgRemovalWebsite: "https://bg-removal-project-kappa.vercel.app",

    // ⭐ Green Cart – Grocery App
    GreenCartDesc:
      "Full-stack MERN grocery shopping platform with authentication, cart management, and product filtering.",
    GreenCartGithub: "https://github.com/mrsarthakgupta/GreenCart-main",
    GreenCartWebsite: "https://green-cart-rust.vercel.app/",

    // ⭐ Synchronous – Real-Time Chat App
    SynchronousDesc:
      "Real-time chat application built with Socket.io featuring rooms, typing indicators, and secure messaging.",
    SynchronousGithub: "https://github.com/mrsarthakgupta/Synchronous_chatapp",
    SynchronousWebsite: "https://synchronous-chatapp.vercel.app",

    // ⭐ Tic Tac Toe with AI
    TicTacToeDesc:
      "Tic Tac Toe game with Minimax AI, multiple difficulty levels, and responsive UI.",
    TicTacToeGithub: "https://github.com/mrsarthakgupta/Tic-Tac-Toe",
    TicTacToeWebsite: "https://mrsarthakgupta.github.io/Tic-Tac-Toe/",

    // ⭐ AI-MediAssist – AI Medical Assistant
    AIMediAssistDesc:
      "AI medical assistant using LLM APIs for symptom analysis, health guidance, and real-time medical insights.",
    AIMediAssistGithub: "https://github.com/mrsarthakgupta/Ai-MediAssist",
    AIMediAssistWebsite: "https://ai-medi-assist-nu.vercel.app",

  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

return (
  <div className="projectBox">

    <img
      className="projectPhoto"
      src={projectPhoto}
      alt={projectName}
    />

    <div className="projectContent">

      <h3>{projectName}</h3>

      <div className="projectDesc">
        {desc[projectName + "Desc"]}
      </div>

      <div className="projectBtns">

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn">
            <FaGithub />
            Github
          </button>
        </a>

        <a
          href={desc[projectName + "Website"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn">
            <CgFileDocument />
            Demo
          </button>
        </a>

      </div>

    </div>

  </div>
);
};

export default ProjectBox;
