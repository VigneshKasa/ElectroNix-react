import styles from "./Cart.module.css";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

function Cart() {
  let shipping = 0;

  function inc() {
    setQuantity(quantity + 1);
  }

  function dec() {
    if (quantity > 0) setQuantity(quantity - 1);
  }

  const [quantity, setQuantity] = useState(1);

  const bestProductsArray = [
    {
      img: "/images/bestProducts/macbook.jpg",
      type: "laptop",
      brand: "Apple",
      item: "Macbook air M1",
      rating: 4.8,
      customers: 1218,
      price: 89999,
    },
    {
      img: "/images/bestProducts/airpods.png",
      type: "earphones",
      brand: "Apple",
      item: "Airpods Pro 2 Gen",
      rating: 4,
      customers: 1422,
      price: 24900,
    },
    {
      img: "/images/bestProducts/iphone15.jpg",
      type: "mobile",
      brand: "Apple",
      item: "Iphone 15 pro",
      rating: 4.9,
      customers: 1597,
      price: 130999,
    },

    {
      img: "/images/bestProducts/redmitv.jpg",
      type: "tv",
      brand: "redmi",
      item: "Redmi Fire TV",
      rating: 4.7,
      customers: 5029,
      price: 28999,
    },
    {
      img: "/images/bestProducts/bose1.png",
      type: "earphones",
      brand: "Bose",
      item: "Earphones Buds II",
      rating: 4,
      customers: 1205,
      price: 20499,
    },
    {
      img: "/images/bestProducts/samsungs24s.png",
      type: "mobile",
      brand: "Samsung",
      item: "Samsung S24 Ultra",
      rating: 4.9,
      customers: 1597,
      price: 136999,
    },

    {
      img: "/images/bestProducts/sonycamera.png",
      type: "tv",
      brand: "Sony",
      item: "Sony EOS 700",
      rating: 4.3,
      customers: 2322,
      price: 59422,
    },
    {
      img: "/images/bestProducts/xbox series.jpg",
      type: "gaming",
      brand: "xbox",
      item: "Xbox Series S",
      rating: 4,
      customers: 1042,
      price: 24999,
    },
    {
      img: "/images/bestProducts/ipad.png",
      type: "mobile",
      brand: "Apple",
      item: "Ipad",
      rating: 4.8,
      customers: 1218,
      price: 89999,
    },
    {
      img: "/images/bestProducts/lenovoideapad1.jpg",
      type: "laptop",
      brand: "Lenovo",
      item: "Lenovo ideapad 1",
      rating: 4,
      customers: 1422,
      price: 24900,
    },
    {
      img: "/images/bestProducts/iphone14.jpg",
      type: "mobile",
      brand: "Apple",
      item: "Iphone 14 pro",
      rating: 4.2,
      customers: 7089,
      price: 90999,
    },
    {
      img: "/images/bestProducts/xiamipad.jpg",
      type: "mobile",
      brand: "Xiami",
      item: "Xiami Pad 5",
      rating: 4,
      customers: 5710,
      price: 24999,
    },

    {
      img: "/images/bestProducts/canoncamera.png",
      type: "camera",
      brand: "Canon",
      item: "Canon EOS R10",
      rating:4,
      customers: 1286,
      price: 81499,
    },
    {
      img: "/images/bestProducts/nintendoswitch.jpg",
      type: "gaming",
      brand: "Nintendo",
      item: "Nintendo Switch OLED",
      rating: 4.2,
      customers: 1022,
      price: 29999,
    },
    {
      img: "/images/bestProducts/sonybravia.webp",
      type: "tv",
      brand: "Sony",
      item: "Sony Bravia X",
      rating: 4.3,
      customers: 2322,
      price: 59422,
    },
    {
      img: "/images/bestProducts/miearphones.png",
      type: "earphones",
      brand: "xiaomi",
      item: "Earphones Basic",
      rating: 4.7,
      customers: 7717,
      price: 499,
    },
  ];

let prices=0
for(let i=0;i<bestProductsArray.length;i++){
prices=prices + bestProductsArray[i].price
}
console.log(prices)
  let subtotal = quantity * prices;

  let tax = (subtotal / 100) * 8;
  if (subtotal > 0) {
    shipping = 99;
  }
  if (subtotal > 10000) {
    shipping = 59;
  }

  return (
    <>
      <div className={styles.mainbox}>
        <div className={styles.holder}>
          <div className={styles.itemListContainer}>
            <div className={styles.itemListTitle}>MY TECH CART</div>
            <div className={styles.productItemContainer}>
              <div className={styles.productsHeader}>
                <div className={styles.productList}>Products</div>
                <div className={styles.productList}>Description</div>
                <div className={styles.productList}>Quantity</div>
                <div className={styles.productList}>Price</div>
                <div className={styles.productList}>Remove</div>
              </div>
              <div className={styles.productContainer}>
                {bestProductsArray.map((items) => (
                  <div className={styles.productItems}>
                    <div className={styles.productImage}>
                      <img src={items.img} alt="" />
                    </div>
                    <div className={styles.productInfo}>
                      <div className={styles.productType}>{items.type}</div>
                      <div className={styles.productBrand}>{items.brand}</div>
                      <div className={styles.productName}>{items.item}</div>
                    </div>
                    <div className={styles.productQuantityConainer}>
                      <div className={styles.quantButtons} onClick={dec}>
                        -
                      </div>
                      <div className={styles.display}>{quantity}</div>
                      <div className={styles.quantButtons} onClick={inc}>
                        +
                      </div>
                    </div>
                    <div className={styles.productPrice}>
                      <LiaRupeeSignSolid />
                      {items.price}
                    </div>
                    <div className={styles.productRemove}>
                      <MdDeleteForever />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.proceedContainer}>
            <div className={styles.summaryContainer}>
              <div className={styles.summaryTitle}>Summary</div>
              <div className={styles.calculationContainer}>
                <div className={styles.summaryInfoContainer}>
                  <div className={styles.summaryInfo}>SUBTOTAL</div>
                  <div className={styles.summaryInfoNumber}>
                    <LiaRupeeSignSolid />
                    {subtotal}
                  </div>
                </div>
                <div className={styles.summaryInfoContainer}>
                  <div className={styles.summaryInfo}>SHIPPING COST</div>
                  <div className={styles.summaryInfoNumber}>
                    <LiaRupeeSignSolid />
                    {shipping}
                  </div>
                </div>
                <div className={styles.summaryInfoContainer}>
                  <div className={styles.summaryInfo}>TAX & GST %</div>
                  <div className={styles.summaryInfoNumber}>
                    <LiaRupeeSignSolid />
                    {tax}
                  </div>
                </div>
              </div>
              <div className={styles.promoContainer}>
                <input
                  className={styles.promoInput}
                  type="text"
                  placeholder="PROMO CODE"
                />
                <div className={styles.promoButton}>APPLY</div>
              </div>
              <div className={styles.summaryEstimatedTotal}>
                <div className={styles.summaryInfo}>ESTIMATED TOTAL</div>
                <div className={styles.summaryInfoNumber}>
                  <LiaRupeeSignSolid />
                  {shipping + tax + subtotal}
                </div>
              </div>
              <div className={styles.checkoutButtonContainer}>
                <div className={styles.checkoutButton}>CHECKOUT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
