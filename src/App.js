import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Adoption from "./pages/Adoption";
import FindHome from "./pages/FindHome";
import Care from "./pages/Care";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FindCare from "./components/FindCare";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="opieka" element={<Care />} />
        <Route path="znajdz-dom" element={<FindHome />} />
        <Route path="adoptuj" element={<Adoption />} />
        <Route path="/opieka/znajdz-opieke" element={<FindCare />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
