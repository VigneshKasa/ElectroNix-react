import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Store from "./components/Store";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [SelectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <Header SelectedTab={SelectedTab} setSelectedTab={setSelectedTab} />
      {SelectedTab === "Home" && <Home />}
      {SelectedTab === "Store" && <Store />}
      {SelectedTab === "About Us" && <AboutUs />}
      {SelectedTab === "Contact Us" && <ContactUs />}
      {SelectedTab === "Login" && <Login />}
      <Footer />
    </>
  );
}

export default App;
