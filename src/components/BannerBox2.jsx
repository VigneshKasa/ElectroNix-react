import styles from "./BannerBox.module.css";
function BannerBox2(){
    return(
        <><div className={styles.bannerBox}>
            <div className={styles.rectBanner}></div>
            <div className={styles.squareBanner}></div>
            <div className={styles.squareBanner}></div>
          </div>
          </>
    )
}
export default BannerBox2;