import styles from "./Cart.module.css";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { ProductDetails } from "../store/ProductDetails";
import { useContext } from "react";

function Cart() {
  let shipping = 0;

  function inc() {
    setQuantity(quantity + 1);
  }

  function dec() {
    if (quantity > 1) setQuantity(quantity - 1);
  }
  const {cartItems}=useContext(ProductDetails)
  const [quantity, setQuantity] = useState(1);
  let prices = 0;
  for (let i = 0; i < cartItems.length; i++) {
    prices = prices + cartItems[i].price;
  }
  let subtotal = quantity * prices;

  let tax = (subtotal / 100) * 8;
  if (subtotal > 0) {
    shipping = 99;
  }
  if (subtotal > 10000) {
    shipping = 59;
  }
  const estimatedTotal = (shipping + tax + subtotal).toFixed(2);

  const [promo, setPromo] = useState(false);

  const promoDiscount = () => {
    setPromo(true);
  };

  const {setCartItems}=useContext(ProductDetails)
  
  function removeItem(items){
    let newArr=cartItems.filter((i)=>i!==items)
    setCartItems(newArr)
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
                {cartItems.map((items) => (
                  <div key={items.item} className={styles.productItems}>
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
                    <div className={styles.productRemove} onClick={()=>removeItem(items)}>
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
                <div className={styles.summaryInfoContainer}>
                  <div className={styles.summaryInfo}>TOTAL </div>
                  <div className={styles.summaryInfoNumber}>
                    <LiaRupeeSignSolid />
                    {estimatedTotal}
                  </div>
                </div>
              </div>
              <div className={styles.promoContainer}>
                <input
                  className={styles.promoInput}
                  type="text"
                  disabled={promo == true && "disabled"}
                  placeholder="PROMO CODE"
                />
                <div className={styles.promoButton} onClick={promoDiscount}>
                  APPLY
                </div>
              </div>
              <div className={styles.summaryEstimatedTotal}>
                <div className={styles.summaryInfo}>Got a Discount of</div>
                <div className={styles.summaryInfoNumber}>
                  <LiaRupeeSignSolid />
                  {promo == true
                    ? (-((estimatedTotal / 100) * 15)).toFixed(2)
                    : "0.00"}
                </div>
              </div>
              <div className={styles.summaryEstimatedTotal}>
                <div className={styles.summaryInfo}>ESTIMATED TOTAL</div>
                <div className={styles.summaryInfoNumber}>
                  <LiaRupeeSignSolid />
                  {promo == true
                    ? (estimatedTotal - (estimatedTotal / 100) * 20).toFixed(2)
                    : estimatedTotal}
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
