import React from "react";
import { motion } from "framer-motion";

import html from "../assets/htmltrans.png";
import css from "../assets/css trans.png";
import js from "../assets/jstrans.webp";
import react from "../assets/reacttrans.png";

import nodejs from "../assets/nodetrans.png";
import express from "../assets/expresstrans.png";
import mongo from "../assets/mongotrans.png";
import mysql from "../assets/mysqltrans.png";

import python from "../assets/pythontrans.jpg";
import cpp from "../assets/cpptrans.png";
import c from "../assets/ctrans.png";
import java from "../assets/javatrans.webp";




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
              delay: 0.2,
            }}
          >
            <h2>Front-End Devlopement</h2>
            <p>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={react} alt="" />
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
