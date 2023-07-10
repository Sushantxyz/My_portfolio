import React from "react";
import mypic from "../assets/mypic.jpg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
export const Footer = () => {
  return (
    <div id="footer">
      <div>
        <p>Thank You For Visiting!!! Have a Great Day.</p>
      </div>
      <div>
        <img src={mypic} alt="mYpROFILEpIC" />
        <p>Sushant Prakash Jadhav</p>
      </div>
      <div>
        <h3>Contact ME</h3>
        <div>
          <a href="https://www.linkedin.com/in/sushant-jadhav-135835204">Linkdin</a>
          <AiFillLinkedin />
        </div>
        <div>
          <a href="https://github.com/Sushantxyz">Github</a>
          <AiFillGithub />
        </div>
      </div>
    </div>
  );
};
