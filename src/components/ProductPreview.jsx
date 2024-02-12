import styles from "./ProductPreview.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Service from "./Service";
import { IoStar } from "react-icons/io5";


function ProductPreview({setProductPreview ,arr}) {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mainbox}>
          <div className={styles.imageContainer}>
            <img src={arr[0].img} alt="img" />
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.titleBar}>
              <div className={styles.productBrandContainer}>
                <div  className={styles.productBrand}>
                {arr[0].brand}
                </div>
                <div  className={styles.productType}>
                {arr[0].type}
                </div>
              </div>
              <div className={styles.closebtn} onClick={()=>(setProductPreview("hide"))}>
                <IoCloseSharp />
              </div>
            </div>
            <div className={styles.productName}>
              {arr[0].item}
            </div>
            <div className={styles.productDetails}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi totam ratione fugit sed expedita excepturi ut facere nesciunt vitae porro asperiores id tempore inventore, corporis quia, eligendi odit in fuga?
            </div>
            <div className={styles.productName}>
              {arr[0].rating}<IoStar/> rating by {arr[0].customers} customers
            </div>
            <div className={styles.productBuy}>
            <div className={styles.discountedPrice}><LiaRupeeSignSolid/>{arr[0].price + ((arr[0].price)/100)*20 } </div>
              <p ><LiaRupeeSignSolid/>{arr[0].price} <span className={styles.offerPercentage}> 20% OFF</span></p>
              <div className={styles.addButton}>Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
      <Service/>
    </>
  );
}
export default ProductPreview;
