import styles from "../styles/func.module.css";
import cardImg1 from "../assets/img1-functions.svg";
import cardImg2 from "../assets/img2-functions.svg";
import cardImg3 from "../assets/img3-functions.svg";
function Func() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h1 className={styles.title}>Functions</h1>
          <p className={styles.subtitle}>
            My software is designed to serve for all daily tasks related to
            finance. From to know how the market is performing right now and its
            metric to rebalance a portfolio under a specific criteria.
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
              <button type="button" className={styles.btnCard}>
                Request Demo
              </button>
            </div>
          </div>
          <div className={styles.containerCard}>
            <div className="nes-container is-rounded">
              <img src={cardImg2} alt="img 2" className={styles.imgCard} />
              <h1 className={styles.titleCard}>TRADING BOTS BINANCE</h1>
              <p className={styles.subtitleCard}>
                Or even check how your trading bots Binance are performing
              </p>
              <button type="button" className={styles.btnCard}>
                Request Demo
              </button>
            </div>
          </div>
          <div className={styles.containerCard}>
            <div className="nes-container is-rounded">
              <img src={cardImg3} alt="img 3" className={styles.imgCard} />
              <h1 className={styles.titleCard}>ARG. FOREX WATCH</h1>
              <p className={styles.subtitleCard}>
                You can start your day, run Argentina Forex Watch to acknowledge
                about the market
              </p>
              <button type="button" className={styles.btnCard}>
                Request Demo
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.boxFooter}>
            <div className="nes-container is-rounded">
              <p>
                I give you what you need, the decision is up to you of what you
                want to do...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Func;
