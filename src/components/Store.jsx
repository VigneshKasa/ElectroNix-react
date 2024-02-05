import styles from "./Store.module.css";
import HalfBanner from "./HalfBanner";
import Products from "./Products";
import Companies from "./Companies";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuMonitor } from "react-icons/lu";
import { IoCameraOutline } from "react-icons/io5";

function Store() {
  return (
    <>
      <div className={styles.mainbox}>
        <div className={styles.nav}>
          <ul>
            <li>
              <div className={styles.navIcon} id="firstIcon">
                <HiOutlineDevicePhoneMobile />
              </div>
            </li>
            <li>
              <div className={styles.navIcon}>
                <BsLaptop />
              </div>
            </li>
            <li>
              <div className={styles.navIcon}>
                <LuMonitor />
              </div>
            </li>
            <li>
              <div className={styles.navIcon}>
                <FiHeadphones />
              </div>
            </li>
            <li>
              <div className={styles.navIcon}>
                <IoGameControllerOutline />
              </div>
            </li>
            <li>
              <div className={styles.navIcon}>
                <IoCameraOutline />
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.store}>STORE</div>
        <div className={styles.title}>Recommended Electronics and Gadgets</div>
        <div className={styles.homeContainer}>
          <Products></Products>
          <HalfBanner />
          <Companies></Companies>
        </div>
      </div>
    </>
  );
}
export default Store;
