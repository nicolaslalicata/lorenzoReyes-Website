import React from "react";
import styles from "../styles/whoami.module.css";
import card1 from "../assets/1.png";
import card2 from "../assets/2.png";
import card3 from "../assets/3.png";
import card4 from "../assets/4.png";
import { motion } from "framer-motion";
function WhoAmI() {
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
        <div>
          <div>
            <h1 className={styles.title}>Who am I ?</h1>
            <p className={styles.subtitle}>
              Hi my name is Lorenzo and I am a quant. After studying Law and
              Finance at Argentina, I found out in programming my passion to
              bring into a reality my imagination. End up being a developer that
              grabs a necessity and see it as a opportunity to solve it.
            </p>
            <p className={styles.subtitle}>
              When I design my code I keep in mind some standards:
            </p>
          </div>
          <div className={styles.boxImages}>
            <img src={card1} alt="" />
            <img src={card2} alt="" />
            <img src={card3} alt="" />
            <img src={card4} alt="" />
          </div>
          <p className={styles.footer}>
            These standards do not only define the quality of my code, but also
            define me as a programmer.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default WhoAmI;
