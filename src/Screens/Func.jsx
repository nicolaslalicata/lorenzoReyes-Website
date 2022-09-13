import React, { useState } from "react";
import "../styles/navbar.css";
import "../styles/func.css";
import logo from "../assets/LOGO.png";
import github from "../assets/github.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import wsp from "../assets/wsp.png";
import telegram from "../assets/telegram.png";
import cardImg from "../assets/cards-functions.svg";
import cardImg1 from "../assets/img1-functions.svg";
import cardImg2 from "../assets/img2-functions.svg";
import cardImg3 from "../assets/img3-functions.svg";
function Func() {
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
      <div className="containerPrincipal">
        <div>
          <h1 className="h1Docs">Functions</h1>
          <p className="pDocs">
            My software is designed to serve for all daily tasks related to
            finance. From to know how the market is performing right now and its
            metric to rebalance a portfolio under a specific criteria.
          </p>
          <p className="pDocs">
            It adds value as it helps you to take a decision with more
            information.
          </p>
        </div>
        <div cardContent className="imagenes">
          <div className="cardFunction">
            <img src={cardImg} alt="card img" />
            <img src={cardImg1} alt="img 1" className="img1" />
            <h1 className="cardTitulo1">QUANVAS</h1>
            <p className="cardParrafo1">
              Prepare portfolios according financial needs, track them and
              update base on your taste
            </p>
            {/* <Link to={"/contact"} className="cardLink1">
            Request Demo
          </Link> */}
          </div>
          <div className="cardFunction">
            <img src={cardImg} alt="card img" />
            <img src={cardImg2} alt="img 2" className="img1" />
            <h1 className="cardTitulo2">TRADING BOTS BINANCE</h1>
            <p className="cardParrafo1">
              Or even check how your trading bots Binance are performing
            </p>
            {/* <Link to={"/contact"} className="cardLink1">
            Request Demo
          </Link> */}
          </div>
          <div className="cardFunction">
            <img src={cardImg} alt="card img" />
            <img src={cardImg3} alt="img 3" className="img1" />
            <h1 className="cardTitulo3">ARG. FOREX WATCH</h1>
            <p className="cardParrafo1">
              You can start your day, run Argentina Forex Watch to acknowledge
              about the market
            </p>
            {/* <Link to={"/contact"} className="cardLink1">
            Request Demo
          </Link> */}
          </div>
        </div>
        <div>
          <div className="footerWho">
            <p className="subtitle-func2">
              I give you what you need, the decision is up to you of what you
              want to do...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Func;
