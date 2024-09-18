import React, { useState } from "react";
import img1 from "../assets/images/project1.jpg";
import img2 from "../assets/images/project2.jpg";
import img3 from "../assets/images/project3.jpg";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projectsperso = [
    {
      id: 1,
      title: "personal project 1",
      description: "Design & Development",
      img: img1,
    },
    {
      id: 2,
      title: "personal project 2",
      description: "Design & Development",
      img: img1,
    },
    {
      id: 3,
      title: "personal project 3",
      description: "Design & Development",
      img: img1,
    },
  ];

  const projectsgroup = [
    {
      id: 1,
      title: "Group project 1",
      description: "Design & Development",
      img: img2,
    },
    {
      id: 2,
      title: "Group project 2",
      description: "Design & Development",
      img: img2,
    },
    {
      id: 3,
      title: "Group project 3",
      description: "Design & Development",
      img: img2,
    },
  ];

  const projectspro = [
    {
      id: 1,
      title: "Professional project 1",
      description: "Design & Development",
      img: img3,
    },
    {
      id: 2,
      title: "Professional project 2",
      description: "Design & Development",
      img: img3,
    },
    {
      id: 3,
      title: "Professional project 3",
      description: "Design & Development",
      img: img3,
    },
  ];

  const getCurrentProjects = () => {
    if (durum === 1) return projectsperso;
    if (durum === 2) return projectsgroup;
    if (durum === 3) return projectspro;
  };

  return (
      <>
        <div id="projects" className="projects bg-[#171717] text-white py-10">
          <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
          <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
            lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            cupiditate! Molestiae placeat architecto nihil obcaecati illum minima
            incidunt dolores? Officia consectetur optio non totam cum eos soluta
            ipsa et quod.
          </p>
          <div className="flex justify-center items-center gap-4 mt-12 mb-2">
            <button
                onClick={() => setDurum(1)}
                className={`font-bold text-[19px] border-2 bg-[#171717] rounded-[6px] p-[4px] ${
                    durum === 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
                }`}
            >
              Personal Projects
            </button>
            <button
                onClick={() => setDurum(2)}
                className={`font-bold text-[19px] border-2 bg-[#171717] rounded-[6px] p-[4px] ${
                    durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
                }`}
            >
              Group Projects
            </button>
            <button
                onClick={() => setDurum(3)}
                className={`font-bold text-[19px] border-2 bg-[#171717] rounded-[6px] p-[4px] ${
                    durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
                }`}
            >
              Professional Projects
            </button>
          </div>
          <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1">
            {getCurrentProjects().map((item, i) => (
                <ProjectCard key={i} item={item} />
            ))}
          </div>
        </div>
      </>
  );
}

export default Projects;
