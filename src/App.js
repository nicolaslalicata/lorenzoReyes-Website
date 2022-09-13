import "./App.css";
import "nes.css/css/nes.min.css";
import Home from "./Screens/Home";
import WhoAmI from "./Screens/WhoAmI";
import Func from "./Screens/Func";

import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
      <WhoAmI />
      <Func />
    </div>
  );
}

export default App;
