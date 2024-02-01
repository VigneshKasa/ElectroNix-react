import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <>
      <div className={styles.mainbox}>
        <div className={styles.footerContainer}>
          <div className={styles.footerList}>
            <h2> Privacy policy</h2>
            <ul>
              <li>Returns & Exchange</li>
              <li>Payments Terms</li>
              <li>Delivery Terms</li>
              <li>Payment & Pricing</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className={styles.footerList}>
            <h2> Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>Store</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className={styles.footerList}>
            <h2> Customer Support</h2>
            <ul>
              <li>electronixcustomersupport@electronix.in</li>
              <li>+91- 9xxxxxxxx9</li>
              <li>Queries & Feedback</li>
              <li>www.Electronix.in</li>
            </ul>
          </div>
        </div>
        <div className={styles.contacts}>
         <div className={styles.contactIcons}><FaInstagram/></div>
         <div className={styles.contactIcons}><FaFacebook/></div>
         <div className={styles.contactIcons}><FaXTwitter/></div>
         <div className={styles.contactIcons}><FaYoutube/></div>
         <div className={styles.contactIcons}><FaLinkedinIn/></div>
        </div>
        <div className={styles.copyright}>
          <p>
            © 2024 <b>ElectroNix.. </b>A Electronics and Gadgets Store. All
            rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
export default Footer;
