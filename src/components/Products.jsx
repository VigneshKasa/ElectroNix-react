import styles from "./Products.module.css";

function Products(){
    return(
        <>
        <div className={styles.ProductsContainer}>
            <div className={styles.ProductsText}>
              <b> BEST PRODUCTS </b>
            </div>
            <div className={styles.ProductsCaption}>
              <p>
                These are the <b>Top picked</b> products by customers{" "}
              </p>
            </div>
            <div className={styles.productBox}>
              <div className={styles.products}></div>
              <div className={styles.products}></div>
              <div className={styles.products}></div>
              <div className={styles.products}></div>
              <div className={styles.products}></div>
              <div className={styles.products}></div>
              <div className={styles.products}></div>
              <div className={styles.products}></div>
            </div>
          </div>
        </>
    )
}
export default Products;