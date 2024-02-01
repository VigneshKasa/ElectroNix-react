import styles from "./Service.module.css";
import { FaTruckFast } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
function Service(){
    return(
        <>
        <div className={styles.serviceBox}>
            <div className={styles.serviceContainer}>
              <div className={styles.serviceIcon}>
                <FaTruckFast />
              </div>
              <div className={styles.serviceName}>Fast Delivery</div>
            </div>

            <div className={styles.serviceContainer}>
              <div className={styles.serviceIcon}>
                <MdVerified />
              </div>
              <div className={styles.serviceName}>Money Back Guarantee</div>
            </div>

            <div className={styles.serviceContainer}>
              <div className={styles.serviceIcon}>
                <RiCustomerService2Fill />
              </div>
              <div className={styles.serviceName}>Online Support 24/7</div>
            </div>

            <div className={styles.serviceContainer}>
              <div className={styles.serviceIcon}>
                <FaMoneyCheckAlt />
              </div>
              <div className={styles.serviceName}>Secure Payment</div>
            </div>
          </div>
        </>

    )
}
export default Service;