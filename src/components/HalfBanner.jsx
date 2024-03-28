import styles from "./HalfBanner.module.css";
import {Link} from "react-router-dom"
function HalfBanner() {
  return (
    <>
      <div className={styles.halfBanner}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerInfo}>
            <div className={styles.bannerTitle1}>Sony</div>
            <div className={styles.bannerTitle2}>Gaming console</div>
            <div className={styles.bannerDescription}>PS5 PRO</div>
            <Link to="/Store" ><div className={styles.bannerButoon}>Explore</div></Link>
          </div>
          <div className={styles.bannerImg}>
            <img src="/images/ps5console.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default HalfBanner;
