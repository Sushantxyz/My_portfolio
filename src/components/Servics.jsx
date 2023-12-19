import React from "react";
import { motion } from "framer-motion";

import html from "../assets/htmltrans.png";
import css from "../assets/css trans.png";
import js from "../assets/jstrans.webp";
import react from "../assets/reacttrans.png";

import express from "../assets/expresstrans.png";
import mongo from "../assets/mongof.svg";
import mysql from "../assets/mysqlf.svg";

import python from "../assets/pythonf.svg";
import cpp from "../assets/cppf.svg";
import c from "../assets/cf.svg";
// import java from "../assets/javatrans.webp";

import java from "../assets/javaf.svg"
import nodejs from "../assets/nodel.svg"


export const Servics = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      y: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "100%",
    },

    four: {
      opacity: 0,
      y: "100%",
    },
  };

  return (
    <>
      <div id="service-outer">
        <div id="services">
          <motion.div
            className="Box-1"
            whileInView={animations.whileInView}
            initial={animations.one}
            transition={{
              delay: 0.3,
            }}
          >
            <h2>Front-End Devlopement</h2>
            <p>
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={js} alt="js" />
                <img src={react} alt="react" />
            </p>
          </motion.div>
          <motion.div
            className="Box-2"
            whileInView={animations.whileInView}
            initial={animations.twoAndThree}
            transition={{
              delay: 0.3,
            }}
          >
            <h2>Backend Development</h2>
            <p>
              <img src={nodejs} alt="" />
              <img src={express} alt="" />
            </p>
          </motion.div>
          <motion.div
            className="Box-3"
            whileInView={animations.whileInView}
            initial={animations.twoAndThree}
            transition={{
              delay: 0.4,
            }}
          >
            <h2>Database</h2>
            <p>
                <img src={mysql} alt="" />
                <img src={mongo} alt="" />
                {/* <img src={c} alt="" /> */}
                {/* <img src={java} alt="" /> */}
            </p>
          </motion.div>

          <motion.div
            className="Box-4"
            whileInView={animations.whileInView}
            initial={animations.four}
            transition={{
              delay: 0.3,
            }}
          >
            <h2>Languages</h2>
            <p>
                <img src={python} alt="" />
                <img src={cpp} alt="" />
                <img src={c} alt="" />
                <img src={java} alt="" />
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
