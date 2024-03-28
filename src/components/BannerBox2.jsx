import styles from "./BannerBox2.module.css";
import {Link} from "react-router-dom"

function BannerBox2(){
    return(
        <>
        <div className={styles.bannerBox}>
        <div className={styles.rectBanner}>
          <div className={styles.rectInfo}>
            <div className={styles.rectbannerDescription}>Mobile</div>
            <div className={styles.rectbannerTitle}>SAMSUNG S24 ULTRA</div>
             <Link to="/Store" ><div className={styles.rectbannerButoon}>Explore</div></Link>
          </div>
          <div className={styles.rectbannerImg}>
            <img src="/images/samsungs24.png" alt="" />
          </div>
        </div>
        <div className={styles.squareBanner1}>
          <div className={styles.sqrbannerTitle1}>Headphone</div>
          <div className={styles.sqrbannerDescription1}>BOSE EARBUDS 2</div>
          <div className={styles.sqrbannerImg1}>
            <img src="/images/bose1.png" alt="" />
          </div>
           <Link to="/Store" ><div className={styles.sqrbannerButoon1}>Explore</div></Link>
        </div>
        <div className={styles.squareBanner2}>
          <div className={styles.sqrbannerTitle2}> TV</div>
          <div className={styles.sqrbannerDescription2}> SONY BRAVIA XR</div>
          <div className={styles.sqrbannerImg2}>
            <img src="/images/tv.webp" alt="" />
          </div>
           <Link to="/Store" ><div className={styles.sqrbannerButoon2}>Explore</div></Link>
        </div>
        
      </div>
          </>
    )
}
export default BannerBox2;