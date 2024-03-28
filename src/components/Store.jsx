import styles from "./Store.module.css";
import HalfBanner from "./HalfBanner";
import Companies from "./Companies";
import { ImFire } from "react-icons/im";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuMonitor } from "react-icons/lu";
import { IoCameraOutline } from "react-icons/io5";
import { useState } from "react";
import style from "./Products.module.css";
import { LiaRupeeSignSolid } from "react-icons/lia";
import ProductPreview from "./ProductPreview";
import { useContext } from "react";
import { ProductDetails } from "../store/ProductDetails";

// function Store({bestProductsArray,mobileArray,laptopArray,tvArray,earphonesArray,gamingArray,cameraArray}) {
function Store() {
  const [productPreview, setProductPreview] = useState("hide");
  const [product, setProduct] = useState("best Products");
  const { setProductId } = useContext(ProductDetails);
  function productIdHolder(key) {
    setProductId(key);
  }

  const { allItems } = useContext(ProductDetails);
  let newArr = [];
  if (product === "best Products") {
    newArr = allItems.filter((n) => n.rating >= 4.5);
  }
  if (product === "mobiles") {
    newArr = allItems.filter((n) => n.type === "mobile");
  }
  if (product === "laptops") {
    newArr = allItems.filter((n) => n.type === "laptop");
  }
  if (product === "tv") {
    newArr = allItems.filter((n) => n.type === "tv");
  }
  if (product === "earphones") {
    newArr = allItems.filter((n) => n.type === "earphones");
  }
  if (product === "gaming") {
    newArr = allItems.filter((n) => n.type === "gaming");
  }
  if (product === "cameras") {
    newArr = allItems.filter((n) => n.type === "camera");
  }

  const { cartItems } = useContext(ProductDetails);
  const { setCartItems } = useContext(ProductDetails);

  function addToCart(obj) {
    setCartItems([obj, ...cartItems]);
  }

  return (
    <>
      <div className={styles.mainbox}>
        <div className={styles.nav}>
          <ul onClick={() => setProductPreview("hide")}>
            <li>
              <div
                className={
                  product === "best Products" ? styles.active : styles.navIcon
                }
                onClick={() => setProduct("best Products")}
              >
                <ImFire />
              </div>
            </li>
            <li>
              <div
                className={
                  product === "mobiles" ? styles.active : styles.navIcon
                }
                onClick={() => setProduct("mobiles")}
              >
                <HiOutlineDevicePhoneMobile />
              </div>
            </li>
            <li>
              <div
                className={
                  product === "laptops" ? styles.active : styles.navIcon
                }
                onClick={() => setProduct("laptops")}
              >
                <BsLaptop />
              </div>
            </li>
            <li>
              <div
                className={product === "tv" ? styles.active : styles.navIcon}
                onClick={() => setProduct("tv")}
              >
                <LuMonitor />
              </div>
            </li>
            <li>
              <div
                className={
                  product === "earphones" ? styles.active : styles.navIcon
                }
                onClick={() => setProduct("earphones")}
              >
                <FiHeadphones />
              </div>
            </li>
            <li>
              <div
                className={
                  product === "gaming" ? styles.active : styles.navIcon
                }
                onClick={() => setProduct("gaming")}
              >
                <IoGameControllerOutline />
              </div>
            </li>
            <li>
              <div
                className={
                  product === "cameras" ? styles.active : styles.navIcon
                }
                onClick={() => setProduct("cameras")}
              >
                <IoCameraOutline />
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.store}>STORE</div>
        <div className={styles.title}>Recommended Electronics and Gadgets</div>
        <div className={styles.homeContainer}>
          {productPreview === "hide" ? (
            <div className={style.ProductsContainer}>
              <div className={style.ProductsText}>
                <b>{product.toUpperCase()}</b>
              </div>
              <div className={style.ProductsCaption}>
                <p>
                  These are the <b>Top picked</b> products by customers{" "}
                </p>
              </div>
              <div className={style.productBox}>
                {newArr.map((items) => (
                  <div className={style.products} key={items.productId}>
                    <div
                      className={style.productImg}
                      onClick={() => {
                        {
                          setProductPreview("show"),
                            productIdHolder(items.productId);
                        }
                      }}
                    >
                      <img src={items.img} alt="" />
                    </div>
                    <div className={style.productInfo}>
                      <div className={style.productBrandInfo}>
                        <div>
                          <div className={style.productBrand}>
                            {items.brand.toUpperCase()}
                          </div>
                          <div className={style.productItem}>{items.item}</div>
                        </div>
                        <div>
                          <div className={style.productReview}>
                            {`${items.rating} / 5 rated by ${items.customers}`}
                          </div>
                        </div>
                      </div>
                      <div className={style.addButtonContainer}>
                        <div className={style.productPrice}>
                          <LiaRupeeSignSolid /> {items.price}
                        </div>

                        {cartItems.some(
                          (cartItem) => cartItem.productId === items.productId
                        ) ? (
                          <div className={style.added}>Item added</div>
                        ) : (
                          <div
                            className={style.addButton}
                            onClick={() => addToCart(items)}
                          >
                            Add to Cart
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <ProductPreview setProductPreview={setProductPreview} />
          )
          }
          <HalfBanner />
          <Companies></Companies>
        </div>
      </div>
    </>
  );
}
export default Store;
