import styles from "./Login.module.css";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
function Login() {
  const [active, Setactive] = useState("Login");

  if (active === "Login") {
    return (
      <>
        <div className={styles.mainbox}>
          <div className={styles.FormContainer}>
            <div className={styles.formTitle}>
              <b>Login with us</b>
            </div>
            <div className={styles.formCaption}>
              Get the best products for you
            </div>
            <div className={styles.nameInput}>
              <input type="text" placeholder="Username" id="name" />
            </div>
            <div className={styles.passwordInput}>
              <input type="password" placeholder="Password" id="email" />
            </div>
            <div className={styles.message}>Forgot Password ?</div>

            <div className={styles.submitButton}>Login</div>
            <div className={styles.contactBox}>
              <div className={styles.contactBoxContainer}>
                <div className={styles.contactIcon}>
                  <FaGoogle />
                </div>
              </div>
              <div className={styles.contactBoxContainer}>
                <div className={styles.contactIcon}>
                  <FaApple />
                </div>
              </div>
              <div className={styles.contactBoxContainer}>
                <div className={styles.contactIcon}>
                  <FaFacebook />
                </div>
              </div>
            </div>
            <div className={styles.accountMessage}>
              <p>
                Don't have an account?{" "}
                <span onClick={() => Setactive("Sign Up")}>
                  Create an account.
                </span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (active === "Sign Up") {
    return (
      <>
        <div className={styles.mainbox}>
          <div className={styles.FormContainer}>
            <div className={styles.formTitle}>
              <b>Sign up</b>
            </div>
            <div className={styles.formCaption}>
              Create an account instantly.
            </div>
            <div className={styles.nameInput}>
              <input type="text" placeholder="Enter Username" id="name" />
            </div>
            <div className={styles.nameInput}>
              <input
                type="email"
                placeholder="Enter Email address"
                id="email"
              />
            </div>
            <div className={styles.passwordInput}>
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
              />
            </div>
            <div className={styles.passwordInput}>
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirm password"
              />
            </div>
            <div className={styles.message}>
              <input type="checkbox" id="message" />
              <p>Agree to terms and conditions</p>
            </div>

            <div className={styles.submitButton}>Sign Up</div>
            <div className={styles.accountMessage}>
              <p>
                Already have an account
                <span onClick={() => Setactive("Login")}> Login. </span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Login;
