import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = ({ menuopen, setmenuopen }) => {
  return (
    <>
      <nav id="mainnav">
        <h1>Sushant</h1>
        <div>
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#service-outer">Skills</a>
          <a href="#Contact">Contact Me</a>
        </div>
        <a href="mailto:sushantjadhav2620@gmail.com">
          <button>E-Mail</button>
        </a>
      </nav>
      <span id="burger">
        <button onClick={() => setmenuopen(!menuopen)}>
          <AiOutlineMenu />
        </button> 
      </span>
    </>
  );
};


export const Headerphone = ({ menuopen,setmenuopen }) => {
  return (
    // <div className={`hpheader hpheadercomes`}>
    <div className={`hpheader ${ menuopen ? "hpheadercomes" : ""}`}>
      <nav>
        <h1>Sushant</h1>
        <a href="#home" onClick={()=>setmenuopen(false)}>Home</a>
        <a href="#work" onClick={()=>setmenuopen(false)}>Work</a>
        <a href="#projects" onClick={()=>setmenuopen(false)}>Projects</a>
        <a href="#service-outer" onClick={()=>setmenuopen(false)}>Skills</a>
        <a href="#Contact" onClick={()=>setmenuopen(false)}>Contact Me</a>
        <a href="mailto:sushantjadhav2620@gmail.com" onClick={()=>setmenuopen(false)}>
          <button id="btn1">E-Mail</button>
        </a>
      </nav>
    </div>
  );
};
