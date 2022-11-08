import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Unternehmen from "./pages/unternehmen";
import Produkte from "./pages/produkte";
import Service from "./pages/service";
import Kontakt from "./pages/kontakt";


function App() {
  return (
      <BrowserRouter>
        
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/home" exact element={<Home/>} />
            <Route path="/unternehmen" element={<Unternehmen/>} />
            <Route path="/produkte" element={<Produkte/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/kontakt" element={<Kontakt/>} />
          </Routes>
       
      </BrowserRouter>
  );
}

export default App;
