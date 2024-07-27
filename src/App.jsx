import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./customer/components/Navigate/Navigation";
import Homepage from "./customer/pages/HomePage/Homepage";
import Footer from "./customer/components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navigation />

        <div>
          <Homepage />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
