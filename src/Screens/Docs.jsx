import React from "react";
import styles from "../styles/docs.module.css";
import github from "../assets/github.png";
import mesa from "../assets/mesa.png";
import { motion } from "framer-motion";

function Docs() {
  const variants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "-100vw",
      scale: 1.2,
    },
  };

  const pageTransition = {
    duration: 0.5,
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      className="docs"
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Docs</h1>
        <p className={styles.subtitle}>
          See my Github Profile. You can have an idea of how I work and you are
          more than welcome to collab for FOSS projects.
        </p>
        <a
          href="https://github.com/lorenzoreyes"
          target="_blank"
          rel="noreferrer"
          className={styles.btnCard}
        >
          <img src={github} alt="" />
          <p className={styles.textBtn}>GitHub</p>
        </a>
        <img src={mesa} alt="" />
      </div>
    </motion.div>
  );
}

export default Docs;
