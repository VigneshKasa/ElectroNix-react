import "./Layout.css";
import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { ProductDetails } from "../store/ProductDetails";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from "react";
function Layout() {
  const allItems=[
    {
      img: '/images/mobiles/iphone13.jpg',
      type: 'mobile',
      brand: 'Apple',
      item: 'Iphone 13',
      rating: 4.5,
      customers: 1654,
      price: 52999,
      productId: 16,
      quantity: 1
    },
    {
      img: '/images/mobiles/iphone14.jpg',
      type: 'mobile',
      brand: 'Apple',
      item: 'Iphone 14',
      rating: 4,
      customers: 1489,
      price: 65500,
      productId: 17,
      quantity: 1
    },
    {
      img: '/images/mobiles/iphone15.jpg',
      type: 'mobile',
      brand: 'Apple',
      item: 'Iphone 15 pro',
      rating: 4.9,
      customers: 1597,
      price: 130999,
      productId: 18,
      quantity: 1
    },
    {
      img: '/images/mobiles/iphonese.png',
      type: 'mobile',
      brand: 'Apple',
      item: 'Iphone SE',
      rating: 4.3,
      customers: 1898,
      price: 53999,
      productId: 19,
      quantity: 1
    },
    {
      img: '/images/mobiles/mipad6.jpg',
      type: 'mobile',
      brand: 'Xiaomi',
      item: 'MI Pad 6',
      rating: 4.2,
      customers: 2205,
      price: 28499,
      productId: 20,
      quantity: 1
    },
    {
      img: '/images/mobiles/oneplusnordce3.jpeg',
      type: 'mobile',
      brand: 'Oneplus',
      item: 'Oneplus Nord CE 3',
      rating: 4.4,
      customers: 1205,
      price: 24499,
      productId: 21,
      quantity: 1
    },
    {
      img: '/images/mobiles/redmi13c.jpg',
      type: 'mobile',
      brand: 'xiaomi',
      item: 'Redmi 13 c',
      rating: 4,
      customers: 1097,
      price: 10999,
      productId: 22,
      quantity: 1
    },
    {
      img: '/images/mobiles/redminote12.jpg',
      type: 'mobile',
      brand: 'xiaomi',
      item: 'Redmi Note 12',
      rating: 4.3,
      customers: 1236,
      price: 15499,
      productId: 23,
      quantity: 1
    },
    {
      img: '/images/mobiles/redminote12pro.jpg',
      type: 'mobile',
      brand: 'xiaomi',
      item: 'Redmi Note 12 Pro',
      rating: 4,
      customers: 1042,
      price: 21999,
      productId: 24,
      quantity: 1
    },
    {
      img: '/images/mobiles/redminote13pro.jpg',
      type: 'mobile',
      brand: 'Xiaomi',
      item: 'Redmi Note 13 Pro',
      rating: 4.8,
      customers: 1218,
      price: 29999,
      productId: 25,
      quantity: 1
    },
    {
      img: '/images/mobiles/redmipad.webp',
      type: 'mobile',
      brand: 'xiaomi',
      item: 'Redmi Pad',
      rating: 4,
      customers: 1428,
      price: 16900,
      productId: 26,
      quantity: 1
    },
    {
      img: '/images/mobiles/samsungtab.png',
      type: 'mobile',
      brand: 'Samsung',
      item: 'Samsung Tab A9+',
      rating: 4.2,
      customers: 7089,
      price: 20999,
      productId: 27,
      quantity: 1
    },
    {
      img: '/images/mobiles/samsungm04.jpg',
      type: 'mobile',
      brand: 'samsung',
      item: 'Samsung M04',
      rating: 4,
      customers: 510,
      price: 7999,
      productId: 28,
      quantity: 1
    },
    {
      img: '/images/mobiles/samsungs14plus.png',
      type: 'mobile',
      brand: 'samsung',
      item: 'Samsung S14+',
      rating: 4.7,
      customers: 1000,
      price: 99499,
      productId: 29,
      quantity: 1
    },
    {
      img: '/images/mobiles/samsungs24.jpg',
      type: 'mobile',
      brand: 'samsung',
      item: 'Samsung S24',
      rating: 4.2,
      customers: 3574,
      price: 72999,
      productId: 30,
      quantity: 1
    },
    {
      img: '/images/mobiles/samsungs23.jpg',
      type: 'mobile',
      brand: 'Samsung',
      item: 'Samsung S23',
      rating: 4.3,
      customers: 3322,
      price: 64422,
      productId: 31,
      quantity: 1
    },
    {
      img: '/images/laptops/asusvivobook.jpg',
      type: 'laptop',
      brand: 'ASUS',
      item: 'Asus Vivobook 14',
      rating: 4.8,
      customers: 1218,
      price: 31999,
      productId: 32,
      quantity: 1
    },
    {
      img: '/images/laptops/lenovoideapad.jpg',
      type: 'laptop',
      brand: 'Lenovo',
      item: 'Lenovo Ideapad flex 5',
      rating: 4.5,
      customers: 1429,
      price: 59900,
      productId: 33,
      quantity: 1
    },
    {
      img: '/images/laptops/lenovoideapad1.jpg',
      type: 'laptop',
      brand: 'Lenovo',
      item: 'Lenovo Ideapad 1',
      rating: 4.8,
      customers: 1597,
      price: 35999,
      productId: 34,
      quantity: 1
    },
    {
      img: '/images/laptops/macbook.jpg',
      type: 'laptop',
      brand: 'Apple',
      item: 'Macbook air M1',
      rating: 4.7,
      customers: 2099,
      price: 89999,
      productId: 35,
      quantity: 1
    },
    {
      img: '/images/laptops/macbookprom2.jpeg',
      type: 'laptop',
      brand: 'Apple',
      item: 'Macbook Pro M2',
      rating: 4.4,
      customers: 1589,
      price: 129499,
      productId: 36,
      quantity: 1
    },
    {
      img: '/images/laptops/macbookm3.jpg',
      type: 'laptop',
      brand: 'Apple',
      item: 'Macbook Pro M3',
      rating: 4.9,
      customers: 1597,
      price: 186999,
      productId: 37,
      quantity: 1
    },
    {
      img: '/images/laptops/milaptop.png',
      type: 'laptop',
      brand: 'Xiaomi',
      item: 'Redmi Book Pro',
      rating: 4.3,
      customers: 2455,
      price: 45422,
      productId: 38,
      quantity: 1
    },
    {
      img: '/images/laptops/asusrog.jpg',
      type: 'laptop',
      brand: 'Asus',
      item: 'Asus ROG Strix G17',
      rating: 4.3,
      customers: 2322,
      price: 59422,
      productId: 39,
      quantity: 1
    },
    {
      img: '/images/tv/sonybraviaoled.webp',
      type: 'tv',
      brand: 'Sony',
      item: 'Sony Bravia XR OLED',
      rating: 4.8,
      customers: 128,
      price: 264999,
      productId: 40,
      quantity: 1
    },
    {
      img: '/images/tv/monitor.png',
      type: 'tv',
      brand: 'Apple',
      item: 'Apple Studio Display',
      rating: 4.3,
      customers: 122,
      price: 159422,
      productId: 41,
      quantity: 1
    },
    {
      img: '/images/tv/xiaomioledvision.jpg',
      type: 'tv',
      brand: 'Xiaomi',
      item: 'Xiaomi OLED vision 4K',
      rating: 4,
      customers: 1322,
      price: 99422,
      productId: 42,
      quantity: 1
    },
    {
      img: '/images/tv/xiaomixseries.jpg',
      type: 'tv',
      brand: 'Xiaomi',
      item: 'Xiaomi X Series 4K',
      rating: 4.3,
      customers: 1234,
      price: 25422,
      productId: 43,
      quantity: 1
    },
    {
      img: '/images/tv/xiaomixpro.jpg',
      type: 'tv',
      brand: 'Xiaomi',
      item: 'Xiaomi X Pro',
      rating: 4.5,
      customers: 222,
      price: 41422,
      productId: 44,
      quantity: 1
    },
    {
      img: '/images/tv/sonybraviaxr.webp',
      type: 'tv',
      brand: 'Sony',
      item: 'Sony Bravia XR',
      rating: 4.7,
      customers: 142,
      price: 163900,
      productId: 45,
      quantity: 1
    },
    {
      img: '/images/tv/sonytv.webp',
      type: 'tv',
      brand: 'Sony',
      item: 'Sony Bravia 4k Ultra',
      rating: 4.6,
      customers: 1597,
      price: 82000,
      productId: 46,
      quantity: 1
    },
    {
      img: '/images/tv/sonybravia3.jpg',
      type: 'tv',
      brand: 'Sony',
      item: 'Sony Bravia Ultra 65',
      rating: 4.7,
      customers: 5029,
      price: 101999,
      productId: 47,
      quantity: 1
    },
    {
      img: '/images/earphones/oneplusBullets.webp',
      type: 'earphones',
      brand: 'Oneplus',
      item: 'Oneplus bulltes Z2',
      rating: 4.8,
      customers: 1218,
      price: 1599,
      productId: 48,
      quantity: 1
    },
    {
      img: '/images/earphones/boultz40.webp',
      type: 'earphones',
      brand: 'Boult',
      item: 'Boult Audio Z40',
      rating: 4,
      customers: 1422,
      price: 1300,
      productId: 49,
      quantity: 1
    },
    {
      img: '/images/earphones/jblc100.webp',
      type: 'earphones',
      brand: 'JBL',
      item: 'JBL C100',
      rating: 4.2,
      customers: 1987,
      price: 599,
      productId: 50,
      quantity: 1
    },
    {
      img: '/images/earphones/boatbassheads.webp',
      type: 'earphones',
      brand: 'Boat',
      item: 'Boat Bass Heads',
      rating: 4.4,
      customers: 1129,
      price: 499,
      productId: 51,
      quantity: 1
    },
    {
      img: '/images/earphones/airpods.png',
      type: 'earphones',
      brand: 'Apple',
      item: 'Apple Airpods Pro',
      rating: 4.3,
      customers: 2322,
      price: 24900,
      productId: 52,
      quantity: 1
    },
    {
      img: '/images/earphones/airpods1.png',
      type: 'earphones',
      brand: 'Apple',
      item: 'Apple Airpods Max',
      rating: 4.3,
      customers: 2322,
      price: 59422,
      productId: 53,
      quantity: 1
    },
    {
      img: '/images/earphones/bose1.png',
      type: 'earphones',
      brand: 'Bose',
      item: 'QuiteComfort Buds 2',
      rating: 4.3,
      customers: 2310,
      price: 20499,
      productId: 54,
      quantity: 1
    },
    {
      img: '/images/earphones/miearphones.png',
      type: 'earphones',
      brand: 'Xiaomi',
      item: 'Earphones Basic',
      rating: 4.3,
      customers: 7717,
      price: 499,
      productId: 55,
      quantity: 1
    },
    {
      img: '/images/gaming/ps5pro.webp',
      type: 'gaming',
      brand: 'Sony',
      item: 'Sony Ps5 Pro',
      rating: 4.8,
      customers: 1523,
      price: 44999,
      productId: 56,
      quantity: 1
    },
    {
      img: '/images/gaming/ps4pro.jpeg',
      type: 'gaming',
      brand: 'Sony',
      item: 'Sony Ps4 pro',
      rating: 4,
      customers: 1622,
      price: 39900,
      productId: 57,
      quantity: 1
    },
    {
      img: '/images/gaming/ps4.webp',
      type: 'gaming',
      brand: 'Sony',
      item: 'Sony ps4 slim',
      rating: 4.9,
      customers: 1597,
      price: 30999,
      productId: 58,
      quantity: 1
    },
    {
      img: '/images/gaming/nintendooled.jpg',
      type: 'gaming',
      brand: 'Nintendo',
      item: 'Nintendo OLED',
      rating: 4.2,
      customers: 10212,
      price: 29999,
      productId: 59,
      quantity: 1
    },
    {
      img: '/images/gaming/xboxseriesx.jpg',
      type: 'gaming',
      brand: 'XBOX',
      item: 'Xbox Series X',
      rating: 4.3,
      customers: 2329,
      price: 45422,
      productId: 60,
      quantity: 1
    },
    {
      img: '/images/gaming/retroconsole.webp',
      type: 'gaming',
      brand: 'Gamecube',
      item: 'Gamecube New World',
      rating: 4.3,
      customers: 222,
      price: 719,
      productId: 61,
      quantity: 1
    },
    {
      img: '/images/gaming/ps5controller.webp',
      type: 'Gaming',
      brand: 'Sony',
      item: 'Sony Ps5 Controller',
      rating: 4,
      customers: 232,
      price: 6122,
      productId: 62,
      quantity: 1
    },
    {
      img: '/images/gaming/steamdeck.webp',
      type: 'gaming',
      brand: 'Steam',
      item: 'Steam Deck',
      rating: 4.6,
      customers: 1178,
      price: 46422,
      productId: 63,
      quantity: 1
    },
    {
      img: '/images/cameras/sonyalphailce.jpeg',
      type: 'camera',
      brand: 'Sony',
      item: 'Sony alpha ILCE-7M3',
      rating: 4.3,
      customers: 222,
      price: 127422,
      productId: 64,
      quantity: 1
    },
    {
      img: '/images/cameras/sonycamera.png',
      type: 'camera',
      brand: 'Canon',
      item: 'canon EOS 200d',
      rating: 4,
      customers: 222,
      price: 59422,
      productId: 65,
      quantity: 1
    },
    {
      img: '/images/cameras/instaxmini12.webp',
      type: 'camera',
      brand: 'FujiFilm',
      item: 'Insta mini 12',
      rating: 4.1,
      customers: 1125,
      price: 6422,
      productId: 66,
      quantity: 1
    },
    {
      img: '/images/cameras/canon1500d.jpg',
      type: 'camera',
      brand: 'Canon',
      item: 'Canon 1600 D',
      rating: 4.4,
      customers: 142,
      price: 44200,
      productId: 67,
      quantity: 1
    },
    {
      img: '/images/cameras/sonyalphafullframe.jpeg',
      type: 'camera',
      brand: 'Sony',
      item: 'Sony Alpha 7 II',
      rating: 4.7,
      customers: 128,
      price: 116999,
      productId: 68,
      quantity: 1
    },
    {
      img: '/images/cameras/canoncamera.png',
      type: 'camera',
      brand: 'Canon',
      item: 'Canon Eos r100',
      rating: 4.9,
      customers: 1597,
      price: 48249,
      productId: 69,
      quantity: 1
    }
  ]
  const [productId,setProductId]=useState(0);
let [cartItems,setCartItems]=useState([]);

  return (
    <>
    <ScrollToTop/>
<ProductDetails.Provider value={{ allItems ,productId,setProductId,cartItems,setCartItems}}>
<Header></Header>
<Outlet/>
<Footer></Footer>
</ProductDetails.Provider>
  </>
  )
}

export default Layout