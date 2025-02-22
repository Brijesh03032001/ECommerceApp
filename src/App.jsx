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
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/*" element={<CustomerRouters />}></Route>
        </Routes>
        

        <div>
       
        </div>
       
      </div>
    </>
  );
}

export default App;
