import styles from "./ProductPreview.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Service from "./Service";
import { IoStar } from "react-icons/io5";
import { useContext } from "react";
import { ProductDetails } from "../store/ProductDetails";
import ScrollToTop from "./ScrollToTop";
function ProductPreview({ setProductPreview }) {
  let { allItems } = useContext(ProductDetails);
  let { cartItems } = useContext(ProductDetails);
  let { setCartItems } = useContext(ProductDetails);
  const { productId } = useContext(ProductDetails);
  let obj = {};
  for (let i = 0; i < allItems.length; i++) {
    if (allItems[i].productId == productId) {
      obj = allItems[i];
      break;
    }
  }

  function addToCart(obj) {
    setCartItems([obj, ...cartItems]);
    console.log(cartItems);
  }

  return (
    <>
      <ScrollToTop />
      <div className={styles.mainContainer}>
        <div className={styles.mainbox}>
          <div className={styles.imageContainer}>
            <img src={obj.img} alt="img" />
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.titleBar}>
              <div className={styles.productBrandContainer}>
                <div className={styles.productBrand}>
                  {obj.brand.toUpperCase()}
                </div>
                <div className={styles.productType}>{obj.type}</div>
              </div>
              <div
                className={styles.closebtn}
                onClick={() => setProductPreview("hide")}
              >
                <IoCloseSharp />
              </div>
            </div>
            <div className={styles.productName}>{obj.item}</div>
            <div className={styles.productDetails}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              totam ratione fugit sed expedita excepturi ut facere nesciunt
              vitae porro asperiores id tempore inventore, corporis quia,
              eligendi odit in fuga?
            </div>
            <div className={styles.productName}>
              {obj.rating}
              <IoStar /> rating by {obj.customers} customers
            </div>
            <div className={styles.productBuy}>
              <div className={styles.discountedPrice}>
                <LiaRupeeSignSolid />
                {obj.price + (obj.price / 100) * 20}{" "}
              </div>
              <p>
                <LiaRupeeSignSolid />
                {obj.price}{" "}
                <span className={styles.offerPercentage}> 20% OFF</span>
              </p>
              {(cartItems.includes(obj)) && <div className={styles.AddedButton}>Already added</div>}
              <div
                className={styles.addButton}
                onClick={() => addToCart(obj)}
              >
                Add to Cart
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service />
    </>
  );
}
export default ProductPreview;
