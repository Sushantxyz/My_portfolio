import React from "react";
import { AiFillProfile } from "react-icons/ai";
import profile from "../assets/PROFILE.jpg";
export const Testomonial = () => {
  return (
    <div id="maint">
      <h1>Testomonial</h1>
      <div id="testomonial">
        <div>
          <img src={profile} alt="Username" />
          <h3>Akshay Anarthe</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
            corporis.
          </p>
        </div>
        <div>
          <img src={profile} alt="Username" />
          <h3>Lokesh Chaudhari</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            tempore!
          </p>
        </div>
        <div>
          <img src={profile} alt="Username" />
          <h3>Pratik Chaudhari</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            tempore!
          </p>
        </div>
      </div>
    </div>
  );
};
// (Data Engineer)(Software Engineer At Persistance)(Software Engineer At Wipro)
