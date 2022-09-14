import styles from "../styles/func.module.css";
import cardImg1 from "../assets/img1-functions.svg";
import cardImg2 from "../assets/img2-functions.svg";
import cardImg3 from "../assets/img3-functions.svg";
import { motion } from "framer-motion";
function Func() {
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
            <h1 className={styles.title}>Functions</h1>
            <p className={styles.subtitle}>
              My software is designed to serve for all daily tasks related to
              finance. From to know how the market is performing right now and
              its metric to rebalance a portfolio under a specific criteria.
            </p>
            <p className={styles.subtitle}>
              It adds value as it helps you to take a decision with more
              information.
            </p>
          </div>
          <div className={styles.boxImages}>
            <div className={styles.containerCard}>
              <div className="nes-container is-rounded">
                <img src={cardImg1} alt="img 1" className={styles.imgCard} />
                <h1 className={styles.titleCard}>QUANVAS</h1>
                <p className={styles.subtitleCard}>
                  Prepare portfolios according financial needs, track them and
                  update base on your taste
                </p>
                <a href="mailto:lreyes@udesa.edu.ar?subject=Request%20Demo%20QUANVAS%20">
                  <button type="button" className={styles.btnCard}>
                    Request Demo
                  </button>
                </a>
              </div>
            </div>
            <div className={styles.containerCard}>
              <div className="nes-container is-rounded">
                <img src={cardImg2} alt="img 2" className={styles.imgCard} />
                <h1 className={styles.titleCard}>TRADING BOTS BINANCE</h1>
                <p className={styles.subtitleCard}>
                  Or even check how your trading bots Binance are performing
                </p>
                <a href="mailto:lreyes@udesa.edu.ar?subject=Request%20Demo%20TRADING%20BOTS%20BINANCE%20">
                  <button type="button" className={styles.btnCard}>
                    Request Demo
                  </button>
                </a>
              </div>
            </div>
            <div className={styles.containerCard}>
              <div className="nes-container is-rounded">
                <img src={cardImg3} alt="img 3" className={styles.imgCard} />
                <h1 className={styles.titleCard}>ARG. FOREX WATCH</h1>
                <p className={styles.subtitleCard}>
                  You can start your day, run Argentina Forex Watch to
                  acknowledge about the market
                </p>
                <a href="mailto:lreyes@udesa.edu.ar?subject=Request%20Demo%20ARG.%20FOREX%20WATCH%20">
                  <button type="button" className={styles.btnCard}>
                    Request Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.boxFooter}>
              <div className="nes-container is-rounded">
                <p>
                  I give you what you need, the decision is up to you of what
                  you want to do...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Func;
