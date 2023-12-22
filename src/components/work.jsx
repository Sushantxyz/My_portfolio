import React from "react";
import { Carousel } from "react-responsive-carousel";
import cryptomation from "../assets/Crptomationpic.jpg";
import videohub from "../assets/videohub.jpg";
import ecart from "../assets/e-cartpic.jpg";
import blogapp from "../assets/blogapp.jpg";
import portfolio from "../assets/portfoliopic.jpg";

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
            interval={3000}
            infiniteLoop={true}
            autoPlay={true}
          >
            <div className="workitems">
              <img src={blogapp} alt=""></img>
              <section>
                <h2>Blog-App(MERN STACK)</h2>

                <div>
                  <ul>
                    <li>
                      Full Stack Applications enabling users to create update
                      and delete the Posts.
                    </li>
                    <li>
                      Used optimization techniques, Code splitting, Image Lazy
                      Loading.
                    </li>
                    <li>Jwt tokens for user security</li>
                    <li>Implimented Cloudinary as Media store.</li>
                  </ul>
                </div>
                <a href="https://blogapp-frontend-psi.vercel.app/">
                  <button>View project</button>
                </a>
              </section>
            </div>

            <div className="workitems">
              <img src={cryptomation} alt="" />
              <section>
                <h2>CryptoMation</h2>
                <div>
                  <ul>
                    <li>Fetching data from Api and Displaying data.</li>
                    <li>React Single Page WebApp</li>
                    <li>
                      Utilized Chart.js for creating data visualization with
                      real time data.
                    </li>
                    <li>Responsive Design.</li>
                  </ul>
                </div>
                <a href="https://cryptomation-psi.vercel.app">
                  <button>View project</button>
                </a>
              </section>
            </div>

            <div className="workitems">
              <img src={ecart} alt="" />
              <section>
                <h2>E-cart</h2>
                <div>
                  <ul>
                    <li>React Single Page WebApp.</li>
                    <li>
                      Utilizing Redux for creating E-cart, with real time data
                      updation.
                    </li>
                    <li>Responsive Design.</li>
                  </ul>
                </div>
                <a href="https://e-cart-tawny.vercel.app">
                  <button>View project</button>
                </a>
              </section>
            </div>

            <div className="workitems">
              <img src={videohub} alt="" />
              <section>
                <h2>Video Hub</h2>
                <div>
                  <ul>
                    <li>
                      React Single Page WebApp for sharing and viewing videos.
                    </li>
                    <li>
                      Utilizing Chakra-UI for creating beautiful and responsive
                      website.
                    </li>
                    <li>Dual theme with beautiful Carousel.</li>
                  </ul>
                </div>
                <a href="https://videohub-beryl.vercel.app">
                  <button>View project</button>
                </a>
              </section>
            </div>

            <div className="workitems">
              <img src={portfolio} alt="" />
              <section>
                <h2>PortFolio</h2>
                <div>
                  <ul>
                    <li>
                      Utlizing React's powerful libraries to produce beautiful
                      animations.
                    </li>
                    <li>Website showcasing my work</li>
                    <li>Firebased powered Contact form.</li>
                  </ul>
                </div>
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
