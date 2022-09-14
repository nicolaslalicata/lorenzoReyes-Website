import styles from "../styles/home.module.css";
import React from "react";
import imgHome from "../assets/img-home.gif";
import { motion } from "framer-motion";

function Home() {
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
        <div className={styles.flexBox}>
          <h1 className={styles.title}>
            {" "}
            &lt;LORENZO REYES.DEV/&gt;.<span>&#160;</span>
          </h1>
          <p className={styles.subtitle}>
            &#160;&#160;&#160;A system to control and execute market ideas in a
            single tool.
          </p>
          <img className={styles.imgHome} src={imgHome} alt="lorenzo reyes" />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
