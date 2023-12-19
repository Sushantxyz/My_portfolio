import React from "react";
import { Carousel } from "react-responsive-carousel";
import cryptomation from "../assets/Crptomationpic.jpg";
import videohub from "../assets/videohub.jpg";
import myimg4 from "../assets/e-cartpic.jpg";
import blogapp from "../assets/blogapp.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Work = () => {
  return (
    <>
      <div id="work">
        <h1>Work</h1>
        {/* <div id="mainwork1"> */}
        <section id="worksection">
          <Carousel
            showArrows={false}
            showIndicators={true}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            <div className="workitems">
              <img src={blogapp} alt=""></img>
              <section>
                <h2>Blog-App(MERN STACK)</h2>
                <p>
                  Description: Developed a full-stack blog application using the
                  MERN (MongoDB, Express.js, React, Node.js) stack for seamless
                  end-to-end functionality..
                </p>
                <a href="https://blogapp-frontend-psi.vercel.app/">
                  <button>View project</button>
                </a>
              </section>
            </div>

            <div className="workitems">
              <img src={cryptomation} alt="" />
              <section>
                <h2>CryptoMation</h2>
                <p>
                  Description: Fetching Cryto Api and displaying it on device.
                </p>
                <a href="https://cryptomation-psi.vercel.app">
                  <button>View project</button>
                </a>
              </section>
            </div>

            <div className="workitems">
              <img src={myimg4} alt="" />
              <section>
                <h2>E-cart</h2>
                <p>Description: E-cart Using redux to handel the operations</p>
                <a href="https://e-cart-tawny.vercel.app">
                  <button>View project</button>
                </a>
              </section>
            </div>

            <div className="workitems">
              <img src={videohub} alt="" />
              <section>
                <h2>Video Hub</h2>
                <p>
                  Description : Video uploading and viewing platform. Build
                  using Chakra UI.
                </p>
                <a href="https://videohub-beryl.vercel.app">
                  <button>View project</button>
                </a>
              </section>
            </div>

            <div className="workitems">
              <img src={myimg4} alt="" />
              <section>
                <h2>PortFolio</h2>
                <p>
                  Description: Prortfolio of myself ,my education,skills and
                  other detais including projects that I have mad are included
                  in the same.
                </p>
                <a href="https://my-portfolio-topaz-phi-91.vercel.app">
                  <button>View project</button>
                </a>
              </section>
            </div>
          </Carousel>
        </section>
      </div>
      {/* </div> */}
    </>
  );
};
