import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./customer/components/Navigate/Navigation";
import Homepage from "./customer/pages/HomePage/Homepage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";

function App() {
  return (
    <>
      <div>
        <Navigation />

        <div>
          {/* <Homepage /> */}
          {/* <Product /> */}
          {/* <ProductDetails /> */}
          {/* <Cart /> */}
          <Checkout />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
