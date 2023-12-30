import { useState } from "react";
// import componenets

// import css
import "./App.css";
import Home from "./Pages/Home";
import Shows from "./Pages/Shows";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div id="app">
      <Navbar />

      <Shows />
    </div>
  );
}

export default App;
