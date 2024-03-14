import styles from "./Header.module.css";
import logo from "/images/logos/ElectroNix1.png";
import { FaHome } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaStoreAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdContactPage } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import {Link,NavLink} from "react-router-dom"


function Header() {
  
  return (
    <>
      <div className={styles.navbar }>
        <Link to="/">
        <div className={styles.logo}>
          <img src={logo} alt="electronix"/>
        </div>
        </Link>
        <div className={styles.navlist}>
          <ul>
          <li>
            <NavLink to="/" className={({isActive}) => (isActive ? styles.active : styles.notActive)}>
            <div className={styles.navItemContainer} >
            <div className={styles.navItemIcon}><FaHome /></div>
              <div className={styles.navItemName}>Home</div>
            </div>
            </NavLink>
            </li>
            <li>
            <NavLink to="/Store" className={({isActive}) => (isActive ? styles.active : styles.notActive)}>
            <div className={styles.navItemContainer} >
            <div className={styles.navItemIcon}><FaStoreAlt/></div>
              <div className={styles.navItemName}>Store</div>
            </div>
            </NavLink>
            </li>
            <li>
            <NavLink to="/About" className={({isActive}) => (isActive ? styles.active : styles.notActive)}>
            <div className={styles.navItemContainer} >
            <div className={styles.navItemIcon}><IoIosPeople/></div>
              <div className={styles.navItemName} >About Us</div>
            </div>
            </NavLink>
            </li>
            <li>
            <NavLink to="/Contact" className={({isActive}) => (isActive ? styles.active : styles.notActive)}>
            <div className={styles.navItemContainer} >
            <div className={styles.navItemIcon}><MdContactPage/></div>
              <div className={styles.navItemName} >Contact Us</div>
            </div>
            </NavLink> 
            </li>
          </ul>
        </div>
        <div className={styles.cart}>
        <NavLink to="/Login" className={({isActive}) => (isActive ? styles.active : styles.notActive)}> 
        <div className={styles.navItemContainer} >
            <div className={styles.navItemIcon}><IoLogIn/></div>
          <div className={styles.login}>Login</div>
          </div>
          </NavLink>
          <Link to="/Cart" className={({isActive}) => (isActive ? styles.active : styles.notActive)}> 
          <div className={styles.navItemContainer} >
          <div className={styles.carticon}><div className={styles.cartValue} >7</div><RiShoppingCart2Line /></div>
        </div>
        </Link> 
        </div>
      </div>
    </>
  );
}
export default Header;
