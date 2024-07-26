import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./customer/components/Navigate/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <div className="container"></div>
    </>
  );
}

export default App;
