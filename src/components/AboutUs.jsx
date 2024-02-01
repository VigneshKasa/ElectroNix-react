import styles from "./AboutUs.module.css";
import Service from "./Service";
import Companies from "./Companies";
import logo from "/images/ElectroNix3.png"
function AboutUs() {
  return (
    <>
      <div className={styles.mainbox}>
        <div className={styles.about}>About Us</div>
        <div className={styles.homeContainer}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutinfoContainer}>
              <div className={styles.aboutWelcome}><p>Welcome to ElectroNix</p></div>
              <div className={styles.aboutTitle}>Who am I ?</div>
              <div className={styles.aboutInfo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, nisi sequi, veniam recusandae, aperiam tempora inventore optio delectus libero distinctio cupiditate fugiat explicabo quaerat praesentium perferendis incidunt quas ab nemo.
              Distinctio, animi! Animi, totam cupiditate. Ratione expedita eaque, quidem est qui, eius quia deleniti velit, mollitia veniam quisquam fugit? Corporis nemo sequi repellendus officiis ab labore omnis itaque quis facere?</div>
            </div>
            <div className={styles.aboutCoverImage}>
                    <img src={logo} alt="" />
            </div>
          </div>

          <Companies></Companies>
          <Service></Service>
        </div>
      </div>
    </>
  );
}
export default AboutUs;