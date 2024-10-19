import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);
  const [projects, setProjects] = useState({
    personal: [],
    group: [],
    professional: []
  });

  useEffect(() => {
    axios.get("https://api.stevenbachimont.com/api/projects")
        .then(response => {
          const categorizedProjects = {
            personal: [],
            group: [],
            professional: []
          };

          response.data.forEach(project => {
            if (project.category === "personal projects") {
              categorizedProjects.personal.push(project);
            } else if (project.category === "group projects") {
              categorizedProjects.group.push(project);
            } else if (project.category === "professional projects") {
              categorizedProjects.professional.push(project);
            }
          });

          setProjects(categorizedProjects);
        })
        .catch(error => {
          console.error("Error fetching projects:", error);
        });
  }, []);

  const getCurrentProjects = () => {
    if (durum === 1) return projects.personal;
    if (durum === 2) return projects.group;
    if (durum === 3) return projects.professional;
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
