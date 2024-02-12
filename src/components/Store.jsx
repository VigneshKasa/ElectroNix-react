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

function Store() {
  const [addToCart, setAddToCart] = useState("Add to cart");
  const [productPreview, setProductPreview] = useState("hide");
  const [product, setProduct] = useState("best Products");
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
      rating: 4,
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
  const mobileArray = [
    {
      img: "/images/mobiles/iphone13.jpg",
      type: "mobile",
      brand: "Apple",
      item: "Iphone 13",
      rating: 4.5,
      customers: 1654,
      price: 52999,
    },
    {
      img: "/images/mobiles/iphone14.jpg",
      type: "mobile",
      brand: "Apple",
      item: "Iphone 14",
      rating: 4,
      customers: 1489,
      price: 65500,
    },
    {
      img: "/images/mobiles/iphone15.jpg",
      type: "mobile",
      brand: "Apple",
      item: "Iphone 15 pro",
      rating: 4.9,
      customers: 1597,
      price: 130999,
    },

    {
      img: "/images/mobiles/iphonese.png",
      type: "mobile",
      brand: "Apple",
      item: "Iphone SE",
      rating: 4.3,
      customers: 1898,
      price: 53999,
    },
    {
      img: "/images/mobiles/mipad6.jpg",
      type: "mobile",
      brand: "Xiaomi",
      item: "MI Pad 6",
      rating: 4.2,
      customers: 2205,
      price: 28499,
    },
    {
      img: "/images/mobiles/oneplusnordce3.jpeg",
      type: "mobile",
      brand: "Oneplus",
      item: "Oneplus Nord CE 3",
      rating: 4.4,
      customers: 1205,
      price: 24499,
    },
    {
      img: "/images/mobiles/redmi13c.jpg",
      type: "mobile",
      brand: "xiaomi",
      item: "Redmi 13 c",
      rating: 4.0,
      customers: 1097,
      price: 10999,
    },

    {
      img: "/images/mobiles/redminote12.jpg",
      type: "mobile",
      brand: "xiaomi",
      item: "Redmi Note 12",
      rating: 4.3,
      customers: 1236,
      price: 15499,
    },
    {
      img: "/images/mobiles/redminote12pro.jpg",
      type: "mobile",
      brand: "xiaomi",
      item: "Redmi Note 12 Pro",
      rating: 4,
      customers: 1042,
      price: 21999,
    },
    {
      img: "/images/mobiles/redminote13pro.jpg",
      type: "mobile",
      brand: "Apple",
      item: "Ipad",
      rating: 4.8,
      customers: 1218,
      price: 89999,
    },
    {
      img: "/images/mobiles/redmipad.webp",
      type: "mobile",
      brand: "xiaomi",
      item: "Redmi Pad",
      rating: 4,
      customers: 1428,
      price: 16900,
    },
    {
      img: "/images/mobiles/samsungtab.png",
      type: "mobile",
      brand: "Samsung",
      item: "Samsung Tab A9+",
      rating: 4.2,
      customers: 7089,
      price: 20999,
    },
    {
      img: "/images/mobiles/samsungm04.jpg",
      type: "mobile",
      brand: "samsung",
      item: "Samsung M04",
      rating: 4,
      customers: 510,
      price: 7999,
    },

    {
      img: "/images/mobiles/samsungs14plus.png",
      type: "mobile",
      brand: "samsung",
      item: "Samsung S14+",
      rating: 4.7,
      customers: 1000,
      price: 99499,
    },
    {
      img: "/images/mobiles/samsungs24.jpg",
      type: "mobile",
      brand: "samsung",
      item: "Samsung S24",
      rating: 4.2,
      customers: 3574,
      price: 72999,
    },
    {
      img: "/images/mobiles/samsungs23.jpg",
      type: "mobile",
      brand: "Samsung",
      item: "Samsung S23",
      rating: 4.3,
      customers: 3322,
      price: 64422,
    },
  ];
  const laptopArray = [
    {
      img: "/images/laptops/asusvivobook.jpg",
      type: "laptop",
      brand: "ASUS",
      item: "Asus Vivobook 14",
      rating: 4.8,
      customers: 1218,
      price: 31999,
    },
    {
      img: "/images/laptops/lenovoideapad.jpg",
      type: "laptop",
      brand: "Lenovo",
      item: "Lenovo Ideapad flex 5",
      rating: 4.5,
      customers: 1429,
      price: 59900,
    },
    {
      img: "/images/laptops/lenovoideapad1.jpg",
      type: "laptop",
      brand: "Lenovo",
      item: "Lenovo Ideapad 1",
      rating: 4.8,
      customers: 1597,
      price: 35999,
    },

    {
      img: "/images/laptops/macbook.jpg",
      type: "laptop",
      brand: "Apple",
      item: "Macbook air M1",
      rating: 4.7,
      customers: 2099,
      price: 89999,
    },
    {
      img: "/images/laptops/macbookprom2.jpeg",
      type: "laptop",
      brand: "Apple",
      item: "Macbook Pro M2",
      rating: 4.4,
      customers: 1589,
      price: 129499,
    },
    {
      img: "/images/laptops/macbookm3.jpg",
      type: "mobile",
      brand: "Apple",
      item: "Macbook Pro M3",
      rating: 4.9,
      customers: 1597,
      price: 186999,
    },

    {
      img: "/images/laptops/milaptop.png",
      type: "laptop",
      brand: "Xiaomi",
      item: "Redmi Book Pro",
      rating: 4.3,
      customers: 2455,
      price: 45422,
    },
    {
      img: "/images/laptops/asusrog.jpg",
      type: "laptop",
      brand: "Asus",
      item: "Asus ROG Strix G17",
      rating: 4.3,
      customers: 2322,
      price: 59422,
    },
  ];
  const tvArray = [
    {
      img: "/images/tv/sonybraviaoled.webp",
      type: "tv",
      brand: "Sony",
      item: "Sony Bravia XR OLED",
      rating: 4.8,
      customers: 128,
      price: 264999,
    },

    {
      img: "/images/tv/monitor.png",
      type: "tv",
      brand: "Apple",
      item: "Apple Studio Display",
      rating: 4.3,
      customers: 122,
      price: 159422,
    },
    {
      img: "/images/tv/xiaomioledvision.jpg",
      type: "tv",
      brand: "Xiaomi",
      item: "Xiaomi OLED vision 4K",
      rating: 4.0,
      customers: 1322,
      price: 99422,
    },
    {
      img: "/images/tv/xiaomixseries.jpg",
      type: "tv",
      brand: "Xiaomi",
      item: "Xiaomi X Series 4K",
      rating: 4.3,
      customers: 1234,
      price: 25422,
    },
    {
      img: "/images/tv/xiaomixpro.jpg",
      type: "tv",
      brand: "Xiaomi",
      item: "Xiaomi X Pro",
      rating: 4.5,
      customers: 222,
      price: 41422,
    },
    {
      img: "/images/tv/sonybraviaxr.webp",
      type: "tv",
      brand: "Sony",
      item: "Sony Bravia XR",
      rating: 4.7,
      customers: 142,
      price: 163900,
    },
    {
      img: "/images/tv/sonytv.webp",
      type: "tv",
      brand: "Sony",
      item: "Sony Bravia 4k Ultra",
      rating: 4.6,
      customers: 1597,
      price: 82000,
    },

    {
      img: "/images/tv/sonybravia3.jpg",
      type: "tv",
      brand: "Sony",
      item: "Sony Bravia Ultra 65",
      rating: 4.7,
      customers: 5029,
      price: 101999,
    },
  ];
  const earphonesArray = [
    {
      img: "/images/earphones/oneplusBullets.webp",
      type: "earphones",
      brand: "Oneplus",
      item: "Oneplus bulltes Z2",
      rating: 4.8,
      customers: 1218,
      price: 1599,
    },
    {
      img: "/images/earphones/boultz40.webp",
      type: "earphones",
      brand: "Boult",
      item: "Boult Audio Z40",
      rating: 4,
      customers: 1422,
      price: 1300,
    },
    {
      img: "/images/earphones/jblc100.webp",
      type: "earphones",
      brand: "JBL",
      item: "JBL C100",
      rating: 4.2,
      customers: 1987,
      price: 599,
    },

    {
      img: "/images/earphones/boatbassheads.webp",
      type: "earphones",
      brand: "Boat",
      item: "Boat Bass Heads",
      rating: 4.4,
      customers: 1129,
      price: 499,
    },
    {
      img: "/images/earphones/airpods.png",
      type: "earphones",
      brand: "Apple",
      item: "Apple Airpods Pro",
      rating: 4.3,
      customers: 2322,
      price: 24900,
    },
    {
      img: "/images/earphones/airpods1.png",
      type: "earphones",
      brand: "Apple",
      item: "Apple Airpods Max",
      rating: 4.3,
      customers: 2322,
      price: 59422,
    },
    {
      img: "/images/earphones/bose1.png",
      type: "earphones",
      brand: "Bose",
      item: "QuiteComfort Buds 2",
      rating: 4.3,
      customers: 2310,
      price: 20499,
    },
    {
      img: "/images/earphones/miearphones.png",
      type: "earphones",
      brand: "Xiaomi",
      item: "Earphones Basic",
      rating: 4.3,
      customers: 7717,
      price: 499,
    },
  ];
  const gamingArray = [
    {
      img: "/images/gaming/ps5pro.webp",
      type: "gaming",
      brand: "Sony",
      item: "Sony Ps5 Pro",
      rating: 4.8,
      customers: 1523,
      price: 44999,
    },
    {
      img: "/images/gaming/ps4pro.jpeg",
      type: "gaming",
      brand: "Sony",
      item: "Sony Ps4 pro",
      rating: 4,
      customers: 1622,
      price: 39900,
    },
    {
      img: "/images/gaming/ps4.webp",
      type: "gaming",
      brand: "Sony",
      item: "Sony ps4 slim",
      rating: 4.9,
      customers: 1597,
      price: 30999,
    },

    {
      img: "/images/gaming/nintendooled.jpg",
      type: "gaming",
      brand: "Nintendo",
      item: "Nintendo OLED",
      rating: 4.2,
      customers: 10212,
      price: 29999,
    },
    {
      img: "/images/gaming/xboxseriesx.jpg",
      type: "tv",
      brand: "XBOX",
      item: "Xbox Series X",
      rating: 4.3,
      customers: 2329,
      price: 45422,
    },
    {
      img: "/images/gaming/retroconsole.webp",
      type: "gaming",
      brand: "Gamecube",
      item: "Gamecube New World",
      rating: 4.3,
      customers: 222,
      price: 719,
    },
    {
      img: "/images/gaming/ps5controller.webp",
      type: "Gaming",
      brand: "Sony",
      item: "Sony Ps5 Controller",
      rating: 4.0,
      customers: 232,
      price: 6122,
    },
    {
      img: "/images/gaming/steamdeck.webp",
      type: "gaming",
      brand: "Steam",
      item: "Steam Deck",
      rating: 4.6,
      customers: 1178,
      price: 46422,
    },
  ];
  const cameraArray = [
    {
      img: "/images/cameras/sonyalphailce.jpeg",
      type: "camera",
      brand: "Sony",
      item: "Sony alpha ILCE-7M3",
      rating: 4.3,
      customers: 222,
      price: 127422,
    },
    {
      img: "/images/cameras/sonycamera.png",
      type: "camera",
      brand: "Canon",
      item: "canon EOS 200d",
      rating: 4.0,
      customers: 222,
      price: 59422,
    },
    {
      img: "/images/cameras/instaxmini12.webp",
      type: "camera",
      brand: "FujiFilm",
      item: "Insta mini 12",
      rating: 4.1,
      customers: 1125,
      price: 6422,
    },
    {
      img: "/images/cameras/canon1500d.jpg",
      type: "camera",
      brand: "Canon",
      item: "Canon 1600 D",
      rating: 4.4,
      customers: 142,
      price: 44200,
    },
    {
      img: "/images/cameras/sonyalphafullframe.jpeg",
      type: "camera",
      brand: "Sony",
      item: "Sony Alpha 7 II",
      rating: 4.7,
      customers: 128,
      price: 116999,
    },
    {
      img: "/images/cameras/canoncamera.png",
      type: "camera",
      brand: "Canon",
      item: "Canon Eos r100",
      rating: 4.9,
      customers: 1597,
      price: 48249,
    },

    {
      img: "/images/cameras/canoneos.jpg",
      type: "camera",
      brand: "Canon",
      item: "Canon Eos R50",
      rating: 4.7,
      customers: 5029,
      price: 75299,
    },
    {
      img: "/images/cameras/canoneosr10.jpg",
      type: "camera",
      brand: "Canon",
      item: "Canon EOS r10",
      rating: 4.3,
      customers: 422,
      price: 92422,
    },
  ];
  let arr = bestProductsArray;

  if (product === "best Products") {
    arr = [...bestProductsArray];
  }
  if (product === "mobiles") {
    arr = [...mobileArray];
  }
  if (product === "laptops") {
    arr = [...laptopArray];
  }
  if (product === "tv") {
    arr = [...tvArray];
  }
  if (product === "earphones") {
    arr = [...earphonesArray];
  }
  if (product === "gaming") {
    arr = gamingArray;
  }
  if (product === "cameras") {
    arr = [...cameraArray];
  }

  return (
    <>
      <div className={styles.mainbox}>
        <div className={styles.nav}>
          <ul>
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
                {arr.map((items) => (
                  <div className={style.products}>
                    {console.log(items.item)}
                    <div
                      className={style.productImg}
                      onClick={() => setProductPreview("show")}
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
                        <div
                          key={items.item}
                          className={
                            addToCart === "Add to cart"
                              ? style.addButton
                              : style.added
                          }
                          onClick={() => setAddToCart("Added to cart")}
                        >
                          {addToCart}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <ProductPreview setProductPreview={setProductPreview} arr={arr} />
          )}
          <HalfBanner />
          <Companies></Companies>
        </div>
      </div>
    </>
  );
}
export default Store;
