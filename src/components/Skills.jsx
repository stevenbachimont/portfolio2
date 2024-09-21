import React, { useEffect, useRef } from "react";
import bg from "../assets/images/banner-bg.png";
import "../styles.css";

const skills = [
  {
    header: "DEPLOIEMENT",
    captions: ["CLOUD", "DOCKER", "DOCKER-SWARM", "DOCKER-COMPOSE", "GITHUB-ACTION"],
    values: [0.30, 0.70, 0.40, 0.60, 0.40],
  },
  {
    header: "LANGUAGES",
    captions: ["nodeJS", "JavaScript", "MySQL", "EXPRESS", "DOCKER"],
    values: [0.50, 0.85, 0.90, 0.70, 0.90],
  },
  {
    header: "WORKTOOLS",
    captions: ["MAC", "Git", "WEBSTORM", "FIGMA", "Linux"],
    values: [0.85, 0.85, 0.75, 0.60, 0.60],
  },
];

const sides = 5;
const theta = (2 * Math.PI) / sides;
const radOffset = Math.PI / 2;

function getXY(i, radius, width, height) {
  return {
    x: Math.cos(radOffset + theta * i) * radius * width + width / 2,
    y: Math.sin(radOffset + theta * i) * radius * height + height / 2,
  };
}

function Skills() {
  const canvasRefs = useRef([]);

  useEffect(() => {
    skills.forEach((skill, pentagonIndex) => {
      const canvas = canvasRefs.current[pentagonIndex];
      const ctx = canvas.getContext("2d");

      const width = canvas.width;
      const height = canvas.height;
      let valueIndex = 0;
      const hue = (25 + pentagonIndex * 255 / skills.length) % 255;

      for (let i = 0; i < sides; i++) {
        ctx.beginPath();
        let xy = getXY(i, 0.3, width, height);
        const colorJitter = 25 + theta * i * 2;
        const color = `hsl(${hue}, 100%, ${colorJitter}%)`;

        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.moveTo(0.5 * width, 0.5 * height);
        ctx.lineTo(xy.x, xy.y);

        xy = getXY(i + 1, 0.3, width, height);
        ctx.lineTo(xy.x, xy.y);

        xy = getXY(i, 0.37, width, height);
        ctx.fillText(skill.captions[valueIndex], xy.x -20, xy.y + 5);
        valueIndex++;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      valueIndex = 0;
      ctx.beginPath();
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
      ctx.lineWidth = 5;

      let value = skill.values[valueIndex];
      let xy = getXY(0, value * 0.3, width, height);
      ctx.moveTo(xy.x, xy.y);

      for (let i = 0; i < sides; i++) {
        value = skill.values[valueIndex];
        xy = getXY(i, value * 0.3, width, height);
        ctx.lineTo(xy.x, xy.y);
        valueIndex++;
      }

      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    });
  }, []);

  return (
      <div
          id="skills"
          className="wrapper h-full bg-no-repeat bg-center bg-cover p-8 lg:p-16"
          style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="skills-wrapper text-center text-white bg-[#171717] bg-opacity-0 p-10 lg:p-6 rounded-[20px] lg:rounded-[50px]">
          <h1 className="text-2xl lg:text-4xl">Skills</h1>
          <p className="text-base lg:text-lg py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-6 lg:space-x-20 my-6">
            {skills.map((skill, index) => (
                <div key={index} className="pentagon">
                  <canvas
                      ref={(el) => (canvasRefs.current[index] = el)}
                      width={400}
                      height={400}
                      className="mx-auto sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]"
                  ></canvas>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Skills;
