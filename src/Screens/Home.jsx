import styles from "../styles/home.module.css";
import React from "react";
import imgHome from "../assets/img-home.gif";

function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.flexBox}>
        <h1 className={styles.title}>{"<Lorenzo Reyes.dev/>"}</h1>
        <p className={styles.subtitle}>
          A system to control and execute market ideas in a single tool.
        </p>
        <img className={styles.imgHome} src={imgHome} alt="lorenzo reyes" />
      </div>
    </div>
  );
}

export default Home;
