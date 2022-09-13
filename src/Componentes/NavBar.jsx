import React, { useState } from "react";
import logo from "../assets/LOGO.png";
import github from "../assets/github.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import wsp from "../assets/wsp.png";
import telegram from "../assets/telegram.png";
import styles from "../styles/navbar.module.css";

const NavBar = ({ screen }) => {
  const [isShownHome, setIsShownHome] = useState(false);
  const [isShownWho, setIsShownWho] = useState(false);
  const [isShownFunc, setIsShownFunc] = useState(false);
  const [isShownDocs, setIsShownDocs] = useState(false);
  const [isShownContact, setIsShownContact] = useState(false);
  return (
    <div className={styles.navBar}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.menu}>
        <button
          type="button"
          onMouseEnter={() => setIsShownHome(true)}
          onMouseLeave={() => setIsShownHome(false)}
          className={isShownHome ? "nes-btn is-warning" : "nes-btn"}
          onClick={() => screen("home")}
        >
          Home
        </button>
        <button
          type="button"
          onMouseEnter={() => setIsShownWho(true)}
          onMouseLeave={() => setIsShownWho(false)}
          className={isShownWho ? "nes-btn is-warning" : "nes-btn"}
          onClick={() => screen("whoami")}
        >
          Who am I?
        </button>
        <button
          type="button"
          onMouseEnter={() => setIsShownFunc(true)}
          onMouseLeave={() => setIsShownFunc(false)}
          className={isShownFunc ? "nes-btn is-warning" : "nes-btn"}
          onClick={() => screen("functions")}
        >
          Functions
        </button>
        <button
          type="button"
          onMouseEnter={() => setIsShownDocs(true)}
          onMouseLeave={() => setIsShownDocs(false)}
          className={isShownDocs ? "nes-btn is-warning" : "nes-btn"}
          onClick={() => screen("docs")}
        >
          Docs
        </button>
        <button
          type="button"
          onMouseEnter={() => setIsShownContact(true)}
          onMouseLeave={() => setIsShownContact(false)}
          className={isShownContact ? "nes-btn is-warning" : "nes-btn"}
          onClick={() => screen("contact")}
        >
          Contact
        </button>
      </div>
      <div className={styles.imgContainer1}>
        <a href="facebook.com" target="_blank">
          <img className={styles.imagen} src={github} alt="" />
        </a>
        <a href="facebook.com" target="_blank">
          <img className={styles.imagen} src={email} alt="" />
        </a>
        <a href="facebook.com" target="_blank">
          <img className={styles.imagen} src={linkedin} alt="" />
        </a>
      </div>
      <div className={styles.imgContainer2}>
        <a href="facebook.com" target="_blank">
          <img className={styles.imagen} src={wsp} alt="" />
        </a>
        <a href="facebook.com" target="_blank">
          <img className={styles.imagen} src={telegram} alt="" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
