import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {

  const desc = {
    // ⭐ Imagify – AI Image Generator
    ImagifyDesc:
      "An AI-powered text-to-image generator built using Cloudinary + OpenAI APIs. Users can generate, download, and manage images with a smooth and responsive UI.",
    ImagifyGithub: "https://github.com/mrsarthakgupta/Imagify",
    ImagifyWebsite: "https://imagify-blue-psi.vercel.app",

    // ⭐ Background Removal Tool
    BgRemovalDesc:
      "A real-time background removal tool using the ClipDrop API. Upload an image and download a clean, transparent output instantly. Built with React & Node.",
    BgRemovalGithub: "https://github.com/mrsarthakgupta/BG-REMOVAL-PROJECT",
    BgRemovalWebsite: "https://bg-removal-project-kappa.vercel.app",

    // ⭐ Green Cart – Grocery App
    GreenCartDesc:
      "A MERN stack grocery shopping app with product filtering, authentication, cart management, and smooth UX. Fully responsive and optimized.",
    GreenCartGithub: "https://github.com/mrsarthakgupta/GreenCart-main",
    GreenCartWebsite: "https://green-cart-rust.vercel.app/",

    // ⭐ Synchronous – Real-Time Chat App
    SynchronousDesc:
      "A synchronous real-time chat application built using Socket.io, enabling instant messaging, typing indicators, and room-based communication. Uses Node.js, Express, and React.",
    SynchronousGithub: "https://github.com/mrsarthakgupta/Synchronous_chatapp",
    SynchronousWebsite: "https://synchronous-chatapp.vercel.app",

    // ⭐ Tic Tac Toe with AI
    TicTacToeDesc:
      "A Tic Tac Toe game featuring multiple difficulty modes, including an unbeatable AI powered by the Minimax algorithm. Clean UI and smooth game logic.",
    TicTacToeGithub: "https://github.com/mrsarthakgupta/Tic-Tac-Toe",
    TicTacToeWebsite: "https://mrsarthakgupta.github.io/Tic-Tac-Toe/",

    // ⭐ AI-MediAssist – AI Medical Assistant
    AIMediAssistDesc:
      "An AI-powered medical assistance application that provides symptom-based analysis, health guidance, and quick medical insights. Built using advanced LLM APIs with a clean and intuitive UI. Designed to offer fast, reliable support while maintaining user privacy.",
    AIMediAssistGithub: "https://github.com/mrsarthakgupta/Ai-MediAssist",
    AIMediAssistWebsite: "https://ai-medi-assist-nu.vercel.app",

  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />

      <div>
        <br />
        <h3>{projectName}</h3>
        <br />

        {desc[projectName + 'Desc']}
        <br />

        {/* Github Button */}
        <a
          style={{ display: show }}
          href={desc[projectName + 'Github']}
          target='_blank'
          rel="noopener noreferrer"
        >
          <button className='projectbtn'>
            <FaGithub /> Github
          </button>
        </a>

        {/* Live Demo Button */}
        <a
          href={desc[projectName + 'Website']}
          target='_blank'
          rel="noopener noreferrer"
        >
          <button className='projectbtn'>
            <CgFileDocument /> DEMO
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
