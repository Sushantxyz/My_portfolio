import React from "react";
import { projectData } from "./data";


export const Projects = () => {
  // function details(item){}
  return (
    <div id="projects">
      <div className="pro1" >
        {projectData.map((item, index) => (
          <div key={index} className={item.cname}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.technology}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
