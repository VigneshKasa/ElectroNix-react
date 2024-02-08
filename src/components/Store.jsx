import styles from "./Store.module.css";
import HalfBanner from "./HalfBanner";
import Products from "./Products";
import Companies from "./Companies";
import { ImFire } from "react-icons/im";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuMonitor } from "react-icons/lu";
import { IoCameraOutline } from "react-icons/io5";
import {  useState } from "react";

function Store() {
  const [product,setProduct]=useState("best Products")
  return (
    <>
      <div className={styles.mainbox}>
        <div className={styles.nav}>
          <ul>
          <li>
              <div className={product==="best Products"?styles.active:styles.navIcon}onClick={()=>(setProduct("best Products"))}>
                <ImFire  />
              </div>
            </li>
            <li>
              <div className={product==="mobiles"?styles.active:styles.navIcon}onClick={()=>(setProduct("mobiles"))}>
                <HiOutlineDevicePhoneMobile  />
              </div>
            </li>
            <li>
              <div className={product==="laptops"?styles.active:styles.navIcon} onClick={()=>(setProduct("laptops"))}>
                <BsLaptop />
              </div>
            </li>
            <li>
              <div className={product==="tv"?styles.active:styles.navIcon}onClick={()=>(setProduct("tv"))}>
                <LuMonitor />
              </div>
            </li>
            <li>
              <div className={product==="earphones"?styles.active:styles.navIcon}onClick={()=>(setProduct("earphones"))}>
                <FiHeadphones />
              </div>
            </li>
            <li>
              <div className={product==="gaming"?styles.active:styles.navIcon}onClick={()=>(setProduct("gaming"))}>
                <IoGameControllerOutline />
              </div>
            </li>
            <li>
              <div className={product==="cameras"?styles.active:styles.navIcon}onClick={()=>(setProduct("cameras"))}>
                <IoCameraOutline />
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.store}>STORE</div>
        <div className={styles.title}>Recommended Electronics and Gadgets</div>
        <div className={styles.homeContainer}>
          <Products product={product}>
          </Products>
          <HalfBanner />
          <Companies></Companies>
        </div>
      </div>
    </>
  );
}
export default Store;
