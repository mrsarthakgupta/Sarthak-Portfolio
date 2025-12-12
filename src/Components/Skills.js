// src/Components/Skills.js
import React from 'react';
import './Skills.css'; // -> create the CSS file below

// Icons
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiTypescript, SiNextdotjs, SiTailwindcss, SiSocketdotio, SiMysql, SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiNetlify, SiRender, SiVultr, SiRedux, SiReactrouter, SiReactquery, SiNpm, SiGithubactions, SiSupabase, SiNotion, SiCanva } from "react-icons/si";
import { SiNodemon, SiNginx } from "react-icons/si"; // extra small icons

const Skills = ({ skill }) => {

  const icon = {
    'HTML': <FaHtml5 />,
    'CSS': <FaCss3Alt />,
    'Javascript': <DiJavascript1 />,
    'Typescript': <SiTypescript />,
    'C++': <CgCPlusPlus />,
    'Python': <FaPython />,

    'React': <FaReact />,
    'Next.js': <SiNextdotjs />,
    'Vue.js': <SiNextdotjs />, // fallback
    'Redux': <SiRedux />,
    'React Router': <SiReactrouter />,
    'React Query': <SiReactquery />,
    'React Hook Form': <SiReactquery />, // no direct icon, reuse React Query icon
    'TailwindCSS': <SiTailwindcss />,
    'Vite': <SiVercel />,

    'Node': <DiNodejs />,
    'Express': <SiExpress />,
    'Socket.io': <SiSocketdotio/>,
    'JWT': <SiNpm />,     // no JWT icon -> use npm as tiny fallback
    'Nodemon': <SiNodemon/>,
    'Nginx': <SiNginx/>,

    'MongoDb': <SiMongodb />,
    'MySQL': <SiMysql />,
    'Supabase': <SiSupabase />,

    'AWS': <SiAmazonaws />,
    'Azure': <SiMicrosoftazure />,
    'Google Cloud': <SiGooglecloud />,
    'Netlify': <SiNetlify />,
    'Vercel': <SiVercel />,
    'Render': <SiRender />,
    'Vultr': <SiVultr />,

    'Git': <FaGitAlt />,
    'Github': <FaGithub />,
    'GitHub Actions': <SiGithubactions />,

    'Postman': <SiPostman />,
    'Npm': <FaNpm />,
    'Figma': <FaFigma />,
    'Canva': <SiCanva />,
    'Notion': <SiNotion />,
  };

  // fallback icon if skill not in mapping
  const fallback = <div className="skillFallback">{skill && skill[0]}</div>;

  return (
    <div className="SkillBox" aria-label={skill} title={skill}>
      <div className="skillIcon" aria-hidden="true">
        {icon[skill] || fallback}
      </div>

      {/* Hover label that appears when user hovers or focuses the card */}
      <div className="skillLabel" aria-hidden="true">
        {skill}
      </div>
    </div>
  );
};

export default Skills;
