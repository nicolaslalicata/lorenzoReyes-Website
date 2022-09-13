import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/LOGO.png";
import github from "../assets/github.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import wsp from "../assets/wsp.png";
import telegram from "../assets/telegram.png";
import card1 from "../assets/1.png";
import card2 from "../assets/2.png";
import card3 from "../assets/3.png";
import card4 from "../assets/4.png";
function WhoAmI() {
  const [isShownHome, setIsShownHome] = useState(false);
  const [isShownWho, setIsShownWho] = useState(false);
  const [isShownFunc, setIsShownFunc] = useState(false);
  const [isShownDocs, setIsShownDocs] = useState(false);
  const [isShownContact, setIsShownContact] = useState(false);
  return (
    <div className="container2">
      <div className="navBar">
        <img className="logo" src={logo} alt="logo" />
        <div className="menu">
          <button
            type="button"
            onMouseEnter={() => setIsShownHome(true)}
            onMouseLeave={() => setIsShownHome(false)}
            className={isShownHome ? "nes-btn is-warning" : "nes-btn"}
          >
            Home
          </button>
          <button
            type="button"
            onMouseEnter={() => setIsShownWho(true)}
            onMouseLeave={() => setIsShownWho(false)}
            className={isShownWho ? "nes-btn is-warning" : "nes-btn"}
          >
            Who am I?
          </button>
          <button
            type="button"
            onMouseEnter={() => setIsShownFunc(true)}
            onMouseLeave={() => setIsShownFunc(false)}
            className={isShownFunc ? "nes-btn is-warning" : "nes-btn"}
          >
            Functions
          </button>
          <button
            type="button"
            onMouseEnter={() => setIsShownDocs(true)}
            onMouseLeave={() => setIsShownDocs(false)}
            className={isShownDocs ? "nes-btn is-warning" : "nes-btn"}
          >
            Docs
          </button>
          <button
            type="button"
            onMouseEnter={() => setIsShownContact(true)}
            onMouseLeave={() => setIsShownContact(false)}
            className={isShownContact ? "nes-btn is-warning" : "nes-btn"}
          >
            Contact
          </button>
        </div>
        <div className="imgContainer1">
          <a href="facebook.com" target="_blank">
            <img className="imagen" src={github} alt="" />
          </a>
          <a href="facebook.com" target="_blank">
            <img className="imagen" src={email} alt="" />
          </a>
          <a href="facebook.com" target="_blank">
            <img className="imagen" src={linkedin} alt="" />
          </a>
        </div>
        <div className="imgContainer2">
          <a href="facebook.com" target="_blank">
            <img className="imagen" src={wsp} alt="" />
          </a>
          <a href="facebook.com" target="_blank">
            <img className="imagen" src={telegram} alt="" />
          </a>
        </div>
      </div>
      <div className="rigth-side">
        <div>
          <h1 className="title-who">Who am I ?</h1>
          <p className="subtitle-who">
            Hi my name is Lorenzo and I am a quant. After studying Law and
            Finance at Argentina, I found out in programming my passion to bring
            into a reality my imagination. End up being a developer that grabs a
            necessity and see it as a opportunity to solve it.
          </p>
          <p className="subtitle-who">
            When I design my code I keep in mind some standards:{" "}
          </p>
        </div>
        <div>
          <img src={card1} alt="" />
          <img src={card2} alt="" />
          <img src={card3} alt="" />
          <img src={card4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WhoAmI;
