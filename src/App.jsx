import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import News from "./Pages/News";
import Dlc from "./Pages/Dlc";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <News />
      <Dlc />
      <Footer />
    </div>
  );
}

export default App;
