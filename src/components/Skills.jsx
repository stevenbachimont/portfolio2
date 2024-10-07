import React, { useEffect, useState } from "react";
import axios from "axios";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import bg from "../assets/images/banner-bg.png";
import "../styles.css";

// Register the required components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("https://api.stevenbachimont.com/api/projects")
        .then(response => {
          const skillsData = response.data.filter(project => project.category === "skills");
          setSkills(skillsData);
        })
        .catch(error => {
          console.error("Error fetching skills:", error);
        });
  }, []);

  const data = {
    labels: skills.length > 0 ? skills.map(skill => skill.title) : [],
    datasets: [{
      label: 'Skill Ratings',
      data: skills.length > 0 ? skills.map(skill => skill.rating_rate) : [],
      backgroundColor: 'rgba(179, 181, 198, 0.2)',
      borderColor: 'rgb(163,16,202)',
      pointBackgroundColor: 'rgb(181,18,200)',
      pointBorderColor: '#c51ad1',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179, 181, 198, 1)',
    }]
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: {
          display: false,
          stepSize: 1,
          color: "rgb(216,174,15)",
            font: {
                size: 15
            }
        },
        angleLines: {
          color: "rgba(83,140,50,0.74)"
        },
        pointLabels: {
          color: "#ffcc00",
          font: {
            size: 15
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false, // Masque la légende "Skill Ratings"
      }
    },
    maintainAspectRatio: false,
  };


  return (
      <div
          id="skills"
          className="wrapper h-full bg-no-repeat bg-center bg-cover p-20 lg:p-16"
          style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="skills-wrapper text-center text-white bg-[#171717] bg-opacity-0 p-10 lg:p-6 rounded-[20px] lg:rounded-[50px]">
          <h1 className="text-2xl lg:text-4xl">Skills</h1>
          <p className="text-base lg:text-lg py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          {skills.length > 0 ? (
              <div className="flex justify-center items-center my-6" style={{ maxWidth: '800px',height: '400px', margin: '0 auto' }}>
                <Radar data={data} options={options} />
              </div>
          ) : (
              <p className="text-lg py-4">Loading skills...</p>
          )}
        </div>
      </div>
  );
}

export default Skills;
