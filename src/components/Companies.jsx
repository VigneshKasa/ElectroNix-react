import styles from "./Companies.module.css";
import apple from "/images/logos/applelogo.png";
import bose from "/images/logos/boselogo.png";
import ps5 from "/images/logos/ps5logo.png";
import samsung from "/images/logos/samsunglogo.png";
import dell from "/images/logos/delllogo.png";
import intel from "/images/logos/intellogo.png";
import lg from "/images/logos/lglogo.png";
import canon from "/images/logos/canonlogo.png";

function Companies() {
  return (
    <>
      <div className={styles.companyBanner}>
        <div className={styles.companyContainer}>
          <img src={apple} alt="apple" />
        </div>
        <div className={styles.companyContainer}>
          <img src={bose} alt="bose" />
        </div>
        <div className={styles.companyContainer}>
          <img src={ps5} alt="ps5" />
        </div>
        <div className={styles.companyContainer}>
          <img src={samsung} alt="samsung" />
        </div>
        <div className={styles.companyContainer}>
          <img src={intel} alt="intel" />
        </div>
        <div className={styles.companyContainer}>
          <img src={dell} alt="dell" />
        </div>
         <div className={styles.companyContainer}>
          <img src={canon} alt="cannon" />
        </div>
        {/* <div className={styles.companyContainer}>
          <img src={lg} alt="LG" />
        </div> */}
       
      </div>
    </>
  );
}
export default Companies;
