import React from "react";
import "./App.css";
import NavigationBar from "./components/NavBar/NavigationBar";
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
import Footer from "./components/Footer/Footer";
import Karriere from "./pages/karriere";
import Impressum from "./pages/impressum";
import AnfrageFormProdukt from "./components/Forms/AnfrageFormProdukt";
import AnfrageFormAllgemein from "./components/Forms/AnfrageFormAllgemein";
import Bewerbung from "./components/Forms/Bewerbung";

function App() {
  return (
      <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/home" exact element={<Home/>} />
            <Route path="/unternehmen" element={<Unternehmen/>} />
            <Route path="/produkte" element={<Produkte/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/kontakt" element={<Kontakt/>} />
            <Route path="/karriere" element={<Karriere/>} />
            <Route path="/impressum" element={<Impressum/>} />
            <Route path="/anfrage/produkt" element={<AnfrageFormProdukt/>} />
            <Route path="/anfrage/allgemein" element={<AnfrageFormAllgemein/>} />
            <Route path="/karriere/bewerbung" element={<Bewerbung/>} />
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
