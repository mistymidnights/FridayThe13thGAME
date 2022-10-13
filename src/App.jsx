import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import News from "./Pages/News";

function App() {
  return (
    <div className="App">
      <Header />
      <News />
    </div>
  );
}

export default App;
