import React, { useState } from "react";
import vg from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [disablebtn, setdiablebtn] = useState(false);

  const submithandler = async (e) => {
    e.preventDefault();
    setdiablebtn(true);

    try {
      await addDoc(collection(db, "contact"), { name, email, message });
      toast.success("Message Sent");
      setemail("");
      setmessage("");
      setname("");
      setdiablebtn(false);
    } catch (error) {
      toast.error("Error");
      setdiablebtn(false);
    }
  };

  const animation = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0",
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-50%",
        opacity: 0,
      },
      whileInView: {
        y: "0",
        opacity: 1,
      },
    },
    transition: {
      delay: 0.5,
    },
  };

  return (
    <>
      <div id="Contact" onSubmit={submithandler}>
        <div id="d1">
          <p>Contact Me</p>
          <motion.form {...animation.form} action="/">
            <input
              type="text"
              required
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="email"
              required
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Write to Me"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
            <motion.button
              className={disablebtn ? "disablesbtn" : ""}
              disabled={disablebtn}
              {...animation.button}
              type="submit"
            >
              Send
            </motion.button>
          </motion.form>
        </div>
        <div id="d2">
          <img src={vg} alt="img" />
        </div>
      </div>
    </>
  );
};
