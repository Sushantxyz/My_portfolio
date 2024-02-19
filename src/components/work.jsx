import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { workData } from "./data.js";

export const Work = () => {
  return (
    <>
      <div id="work">
        <h1>Work</h1>
        <section id="worksection">
          <Carousel
            showArrows={false}
            showIndicators={true}
            showStatus={false}
            showThumbs={false}
            interval={3000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {workData.map((item, index) => (
              <div key={index} className="workitems">
                <img src={item.imgUrl} alt={item.projectName}></img>
                <section>
                  <h2>{item.projectName}</h2>

                  <div>
                    <ul>
                      {item.description.map((desc, ind) => (
                        <li key={ind}>{desc}</li>
                      ))}
                    </ul>
                  </div>

                  <a href={item.projectLink}>
                    <button>View project</button>
                  </a>
                </section>
              </div>
            ))}
          </Carousel>
        </section>
      </div>
    </>
  );
};
