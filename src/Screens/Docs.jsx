import React from "react";
import styles from "../styles/docs.module.css";
import github from "../assets/github.png";
import mesa from "../assets/mesa.png";

function Docs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Docs</h1>
      <p className={styles.subtitle}>
        See my Github Profile. You can have an idea of how I work and you are
        more than welcome to collab for FOSS projects.
      </p>
      <a
        href="https://github.com/lorenzoreyes"
        target="_blank"
        rel='noreferrer'
        className={styles.btnCard}
      >
        <img src={github} alt="" />
        <p className={styles.textBtn}>GitHub</p>
      </a>
      <img src={mesa} alt="" />
    </div>
  );
}

export default Docs;
