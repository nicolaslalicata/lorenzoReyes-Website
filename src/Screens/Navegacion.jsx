import React, { useState } from "react";
import Home from "./Home";
import WhoAmI from "./WhoAmI";
import Func from "./Func";
import Docs from "./Docs";
import Contact from "./Contact";
import NavBar from "../Componentes/NavBar";
import styles from "../styles/screens.module.css";

function Screens() {
  const [screen, setScreen] = useState("home");

  if (screen === "home")
    return (
      <div className={styles.viewHome}>
        <NavBar screen={setScreen} />
        <Home />
      </div>
    );
  if (screen === "whoami")
    return (
      <div className={styles.viewWhoAmI}>
        <NavBar screen={setScreen} />
        <WhoAmI />
      </div>
    );
  if (screen === "functions")
    return (
      <div className={styles.viewFunction}>
        <NavBar screen={setScreen} />
        <Func />
      </div>
    );
  if (screen === "docs")
    return (
      <div className={styles.viewDocs}>
        <NavBar screen={setScreen} />
        <Docs />
      </div>
    );
  if (screen === "contact")
    return (
      <div className={styles.viewContact}>
        <NavBar screen={setScreen} />
        <Contact />
      </div>
    );
}

export default Screens;
