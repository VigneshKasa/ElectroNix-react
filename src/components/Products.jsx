import styles from "./Products.module.css";

function Products() {
  const arr = [
    {
      img: "/images/macbook.jpg",
      type: "laptop",
      brand: "Apple",
      item: "Macbook air M1",
      rating: "4.8",
      customers: "1218",
      price: "89999",
    },
    {
      img: "/images/airpods.png",
      type: "earphones",
      brand: "Apple",
      item: "Airpods Pro 2 Gen",
      rating: "4",
      customers: "1422",
      price: "24900",
    },
    {
      img: "/images/iphone15.jpg",
      type: "mobile",
      brand: "Apple",
      item: "Iphone 15 pro",
      rating: "4.9",
      customers: "1597",
      price: "130999",
    },
    
    {
      img: "/images/redmitv.jpg",
      type: "tv",
      brand: "redmi",
      item: "Redmi Fire TV",
      rating: "4.7",
      customers: "5029",
      price: "28999",
    },
    {
      img: "/images/bose1.png",
      type: "earphones",
      brand: "Bose",
      item: "Earphones Buds II",
      rating: "4",
      customers: "1205",
      price: "20499",
    },
    {
      img: "/images/samsungs24.png",
      type: "mobile",
      brand: "Samsung",
      item: "Samsung S24 Ultra",
      rating: "4.9",
      customers: "1597",
      price: "136999",
    },
    
    {
      img: "/images/sonycamera.png",
      type: "tv",
      brand: "Sony",
      item: "Sony EOS 700",
      rating: "4.3",
      customers: "2322",
      price: "59422",
    },
    {
      img: "/images/xbox series.jpg",
      type: "gaming",
      brand: "xbox",
      item: "Xbox Series S",
      rating: "4",
      customers: "1042",
      price: "24999",
    },

// flag

    {
      img: "/images/ipad.png",
      type: "mobile",
      brand: "Apple",
      item: "Ipad",
      rating: "4.8",
      customers: "1218",
      price: "89999",
    },
    {
      img: "/images/lenovoideapad1.jpg",
      type: "laptop",
      brand: "Lenovo",
      item: "Lenovo ideapad 1",
      rating: "4",
      customers: "1422",
      price: "24900",
    },
    {
      img: "/images/iphone14.jpg",
      type: "mobile",
      brand: "Apple",
      item: "Iphone 14 pro",
      rating: "4.2",
      customers: "7089",
      price: "90999",
    },
    {
      img: "/images/xiamipad.jpg",
      type: "mobile",
      brand: "Xiami",
      item: "Xiami Pad 5",
      rating: "4",
      customers: "5710",
      price: "24999",
    },
    
    {
      img: "/images/canoncamera.png",
      type: "camera",
      brand: "Canon",
      item: "Canon EOS R10",
      rating: "4",
      customers: "1286",
      price: "81499",
    },
    {
      img: "/images/nintendoswitch.jpg",
      type: "gaming",
      brand: "Nintendo",
      item: "Nintendo Switch OLED",
      rating: "4.2",
      customers: "1022",
      price: "29999",
    },
    {
      img: "/images/sonybravia.webp",
      type: "tv",
      brand: "Sony",
      item: "Sony Bravia X",
      rating: "4.3",
      customers: "2322",
      price: "59422",
    },
    {
      img: "/images/miearphones.png",
      type: "earphones",
      brand: "Mi",
      item: "Earphones Basic",
      rating: "4.7",
      customers: "7717",
      price: "499",
    },
  ];

  return (
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
          {arr.map((items) => (
            <div className={styles.products}>
              <div className={styles.productImg}>
                <img src={items.img} alt="" />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.productBrandInfo}>
                  <div>
                    <div className={styles.productBrand}>{items.brand}</div>
                    <div className={styles.productItem}>{items.item}</div>
                  </div>
                  <div>
                    <div className={styles.productReview}>
                      {`${items.rating} / 5 rated by ${items.customers}`}
                    </div>
                  </div>
                </div>
                <div className={styles.addButtonContainer}>
                  <div className={styles.productPrice}>Rs {items.price}</div>
                  <div className={styles.addButton}>Add to cart</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Products;
