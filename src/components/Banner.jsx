import styles from "./Banner.module.css";

function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerInfo}>
            <div className={styles.bannerTitle1}>Apple</div>
            <div className={styles.bannerTitle2}>wireless</div>
            <div className={styles.bannerDescription}>AIRPODS</div>
            <div className={styles.bannerButoon}>Buy Now</div>
          </div>
          <div className={styles.bannerImg}><img src="/images/airpods.png" alt="" /></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
