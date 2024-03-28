import styles from "./BannerBox1.module.css";
import {Link} from "react-router-dom";

function BannerBox1() {
  return (
    <>
      <div className={styles.bannerBox}>
        <div className={styles.squareBanner1}>
          <div className={styles.sqrbannerTitle1}>Mi Laptop</div>
          <div className={styles.sqrbannerDescription1}>NOTEBOOK</div>
          <div className={styles.sqrbannerImg1}>
            <img src="/images/milaptop.png" alt="" />
          </div>
          <Link to="/Store"><div className={styles.sqrbannerButoon1}>Explore</div></Link>
        </div>
        <div className={styles.squareBanner2}>
          <div className={styles.sqrbannerTitle2}> Tablet</div>
          <div className={styles.sqrbannerDescription2}>GALAXY TAB S9</div>
          <div className={styles.sqrbannerImg2}>
            <img src="/images/samsungtab.png" alt="" />
          </div>
          <Link to="/Store" ><div className={styles.sqrbannerButoon2}>Explore</div></Link> 
        </div>
        <div className={styles.rectBanner}>
          <div className={styles.rectInfo}>
            <div className={styles.rectbannerDescription}>MOBILE</div>
            <div className={styles.rectbannerTitle}>IPHONE 15 PRO</div>
            <Link to="/Store" ><div className={styles.rectbannerButoon}>Explore</div></Link>
          </div>
          <div className={styles.rectbannerImg}>
            <img src="/images/iphone15pro.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default BannerBox1;
