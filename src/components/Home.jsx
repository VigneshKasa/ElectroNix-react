import styles from "./Home.module.css";
import Banner from "./Banner";
import BannerBox1 from "./BannerBox1";
import BannerBox2 from "./BannerBox2";
import Service from "./Service";
import HalfBanner from "./HalfBanner";
import Companies from "./Companies";

function Home() {
  
  return (
    <>
      <div className={styles.mainbox}>
        <div className={styles.homeContainer}>
          <div className={styles.empty}></div>
          <Banner></Banner>
          <BannerBox1></BannerBox1>
          <BannerBox2></BannerBox2>
          <HalfBanner />
          <Service></Service>
          <Companies></Companies>
        </div>
      </div>
    </>
  );
}
export default Home;
