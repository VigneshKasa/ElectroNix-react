import styles from "./ContactUs.module.css";
import Service from "./Service";
import Companies from "./Companies";
import map from "/images/map.png";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
function ContactUs() {
  return (
    <>
      <div className={styles.mainbox}>
        <div className={styles.contact}>Contact Us</div>
        <div className={styles.homeContainer}>
          <div className={styles.contactContainer}>
            <div className={styles.contactFormContainer}>
              <div className={styles.contactTitle}>
                <b>Let us know</b>
              </div>
              <div className={styles.contactCaption}>Convey Your Thoughts</div>
              <div className={styles.nameInput}>
                <input type="text" placeholder="Enter you name" id="name" />
              </div>
              <div className={styles.emailInput}>
                <input
                  type="email"
                  placeholder="Enter you email id"
                  id="email"
                />
              </div>
              <div className={styles.messageInput}>
                <textarea
                  name=""
                  id="message"
                  placeholder="Write your message"
                  cols="10"
                  rows="5"
                ></textarea>
              </div>
              <div
                className={styles.submitButton}
                onClick={() => {
                  const name=(document.getElementById("name").value).toUpperCase();
                  document.getElementById("message").value =
                    "Message sent. Thank You "+ name;
                  document.getElementById("name").value = "";
                  document.getElementById("email").value = "";
                }}
              >
                Submit
              </div>
            </div>
            <div className={styles.contactCoverImage}>
              <img src={map} alt="" />
            </div>
          </div>
          <div className={styles.contactBox}>
            <div className={styles.contactBoxContainer}>
              <div className={styles.contactIcon}>
                <TfiEmail />
              </div>
              <div className={styles.contactName}>electronix@electronix.in</div>
            </div>
            <div className={styles.contactBoxContainer}>
              <div className={styles.contactIcon}>
                <FaPhoneAlt />
              </div>
              <div className={styles.contactName}>+91- 9xxxxx7777</div>
            </div>
            <div className={styles.contactBoxContainer}>
              <div className={styles.contactIcon}>
                <FaInstagram />
              </div>
              <div className={styles.contactName}>ElectroNixOfficial</div>
            </div>
            <div className={styles.contactBoxContainer}>
              <div className={styles.contactIcon}>
                <FaXTwitter />
              </div>
              <div className={styles.contactName}>ElectroNixOfficial</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
