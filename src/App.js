import {Header,Headerphone} from "./components/header";
import {Work} from "./components/work.jsx";
import {Projects} from "./components/Projects.jsx";
import {Servics} from "./components/Servics.jsx";
import {Contact} from "./components/Contact.jsx";
// import {Testomonial} from "./components/Testomonial.jsx";
import {Footer} from "./components/Footer.jsx";
import {Home} from "./components/home.jsx";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
// import "./styles/navphone.scss";

import "./styles/App.scss";



function App() {

  const [menuopen,setmenuopen]=useState(false);

  return (
    <>

      <Headerphone menuopen={menuopen} setmenuopen={setmenuopen}/>
      <Header menuopen={menuopen} setmenuopen={setmenuopen}/>
      <Home />
      <Work/>
      <Projects/>
      <Servics/>
      {/* <Testomonial/> */}
      <Contact/>
      <Footer/>
      <Toaster/>
    </>
  );
}

export default App;
