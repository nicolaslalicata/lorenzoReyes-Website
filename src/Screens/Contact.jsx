import React from "react";
import styles from "../styles/contact.module.css";
import { motion } from "framer-motion";

function Contact() {
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
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.subtitle}>
            Box to leave a message, requesting a demo of a specific software or
            a more personal enquiry.
          </p>
          <div className={styles.form}>
            <div>
              <input
                placeholder="Name"
                type="text"
                id="name_field"
                className="nes-input"
              />
            </div>
            <div>
              <input
                placeholder="E-mail"
                type="text"
                id="name_field"
                className="nes-input"
              />
            </div>
            <div className={styles.textArea}>
              <textarea
                placeholder="Message"
                id="textarea_field"
                className="nes-textarea test"
              ></textarea>
            </div>

            <button type="button" className={styles.btnCard}>
              Consult
            </button>
          </div>
          <div className={styles.footer}>
            <h3 className={styles.titleFooter}>
              Consult here or you can send me an email
            </h3>
            <p className={styles.subtitleFooter}>
              <bold>lreyes@udesa.edu.ar</bold>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
