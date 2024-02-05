import styles from "./Header.module.css";
import logo from "/images/electronixlogo2.png";
import { RiShoppingCart2Line } from "react-icons/ri";

function Header({SelectedTab,setSelectedTab}) {
//  const [SelectedTab,setSelectedTab]=useState("home")
  return (
    <>
      <div className={styles.navbar }>
        <div className={styles.logo}>
          <img src={logo} alt="electronix" onClick={()=>setSelectedTab("Home")}/>
        </div>
        <div className={styles.navlist}>
          <ul>
            <li className={SelectedTab==="Home"&&styles.active} onClick={()=>setSelectedTab("Home")} >Home</li>
            <li className={SelectedTab==="Store"&&styles.active}  onClick={()=>setSelectedTab("Store")}>Store</li>
            <li className={SelectedTab==="About Us"&&styles.active} onClick={()=>setSelectedTab("About Us")} >About Us</li>
            <li className={SelectedTab==="Contact Us"&&styles.active}  onClick={()=>setSelectedTab("Contact Us")}>Contact Us</li>
          </ul>
        </div>
        <div className={styles.cart}>
          <div className={styles.login} onClick={()=>setSelectedTab("Login")} >Login</div>
          <div className={styles.carticon}><div className={styles.cartValue}>7</div><RiShoppingCart2Line /></div>
        </div>
      </div>
    </>
  );
}
export default Header;
