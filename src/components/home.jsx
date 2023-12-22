import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import img1 from "../assets/waving1-removebg-preview (1).png";


import {
  AiFillMail,
  AiFillPhone,
  AiOutlineFundProjectionScreen,
  AiOutlineSmile,
} from "react-icons/ai";

import { BsArrowUpRight} from "react-icons/bs";

export const Home = () => {
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0",
        opacity: 1,
      },
    },
  };

  return (
    <>
      <div id="home">
        <section id="home1">

          <div id="div1">
            <motion.h1 {...animation.h1}>
              Hello I am,
              <AiOutlineSmile /> Sushant Jadhav !!
            </motion.h1>

            <Typewriter
              options={{
                strings: [
                  "A React Developer",
                  "A MERN STACK Developer",
                  "Intrested in Development Field",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "para",
                cursor: "",
              }}
            />
          </div>

          <div id="div2">
              <a href="mailto:sushantjadhav2620@gmail.com">
              Hire me <BsArrowUpRight/>
              </a>

              <a href="#work">
                20+ Projects <AiOutlineFundProjectionScreen/>
              </a>
          </div>

          <div id="div3">
            <p>Contact :</p>
            <p>
              <AiFillMail />{" "}
              sushantjadhav2620@gmail.com
            </p>
            <p>
              <AiFillPhone />{" "}
              +91-8453973820
            </p>
          </div>
        </section>

        <section id="home2">
          <img src={img1} alt="mypic" />
        </section>
      </div>
      {/* <div><BsFileArrowDown/></div> */}
    </>
  );
};
