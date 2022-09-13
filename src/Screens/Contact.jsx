import React from "react";
import styles from "../styles/contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.subtitle}>
          Box to leave a message, requesting a demo of a specific software or a
          more personal enquiry.
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
  );
}

export default Contact;
