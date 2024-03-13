import styles from "./Header.module.css";
import logo from "/images/logos/ElectroNix1.png";
import { FaHome } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaStoreAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdContactPage } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import {Link} from "react-router-dom"


function Header({SelectedTab,setSelectedTab}) {
  
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
            <Link to="/">
            <div className={styles.navItemContainer} >
            <div className={styles.navItemIcon}><FaHome /></div>
              <div className={styles.navItemName}>Home</div>
            </div>
            </Link>
            </li>
            <li>
              <Link to="/Store"> 
            <div className={styles.navItemContainer} >
            <div className={styles.navItemIcon}><FaStoreAlt/></div>
              <div className={styles.navItemName}>Store</div>
            </div>
            </Link>
            </li>
            <li>
            <Link to="/About"> 
            <div className={styles.navItemContainer} >
            <div className={styles.navItemIcon}><IoIosPeople/></div>
              <div className={styles.navItemName} >About Us</div>
            </div>
            </Link>
            </li>
            <li>
            <Link to="/Contact"> 
            <div className={styles.navItemContainer} >
            <div className={styles.navItemIcon}><MdContactPage/></div>
              <div className={styles.navItemName} >Contact Us</div>
            </div>
            </Link> 
            </li>
          </ul>
        </div>
        <div className={styles.cart}>
        <Link to="/Login"> 
        <div className={styles.navItemContainer} >
            <div className={styles.navItemIcon}><IoLogIn/></div>
          <div className={styles.login}>Login</div>
          </div>
          </Link>
          <Link to="/Cart"> 
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
