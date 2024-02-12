import styles from "./Header.module.css";
import logo from "/images/logos/ElectroNix1.png";
import { FaHome } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaStoreAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdContactPage } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";



function Header({SelectedTab,setSelectedTab}) {
  
  return (
    <>
      <div className={styles.navbar }>
        <div className={styles.logo}>
          <img src={logo} alt="electronix" onClick={()=>setSelectedTab("Home")}/>
        </div>
        <div className={styles.navlist}>
          <ul>
          <li>
            <div className={SelectedTab==="Home"?styles.active:styles.navItemContainer} onClick={()=>setSelectedTab("Home")} >
            <div className={styles.navItemIcon}><FaHome /></div>
              <div className={styles.navItemName}>Home</div>
            </div>
            </li>
            <li>
            <div className={SelectedTab==="Store"?styles.active:styles.navItemContainer} onClick={()=>setSelectedTab("Store")} >
            <div className={styles.navItemIcon}><FaStoreAlt/></div>
              <div className={styles.navItemName}>Store</div>
            </div>
            </li>
            <li>
            <div className={SelectedTab==="About Us"?styles.active:styles.navItemContainer}onClick={()=>setSelectedTab("About Us")} >
            <div className={styles.navItemIcon}><IoIosPeople/></div>
              <div className={styles.navItemName} >About Us</div>
            </div>
            </li>
            <li>
            <div className={SelectedTab==="Contact Us"?styles.active:styles.navItemContainer}onClick={()=>setSelectedTab("Contact Us")} >
            <div className={styles.navItemIcon}><MdContactPage/></div>
              <div className={styles.navItemName} >Contact Us</div>
            </div>
            </li>
          </ul>
        </div>
        <div className={styles.cart}>
          <div className={SelectedTab==="Login"?styles.active:styles.navItemContainer} onClick={()=>setSelectedTab("Login")} >
            <div className={styles.navItemIcon}><IoLogIn/></div>
          <div className={styles.login}>Login</div>
          </div>
          <div className={SelectedTab==="Login"?styles.active:styles.navItemContainer} onClick={()=>setSelectedTab("Cart")} >
          <div className={styles.carticon}><div className={styles.cartValue} >7</div><RiShoppingCart2Line /></div>
        </div>
        </div>
      </div>
    </>
  );
}
export default Header;
