import styles from "./BannerBox.module.css";

function BannerBox1(){
    return(
        <>
        <div className={styles.bannerBox}>
            <div className={styles.squareBanner}></div>
            <div className={styles.squareBanner}></div>
            <div className={styles.rectBanner}></div>
          </div>
        </>
    )
}
export default BannerBox1;