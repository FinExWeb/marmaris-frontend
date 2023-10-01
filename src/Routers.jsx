import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeaderRu from "./components/HeaderRu";
import HeaderEng from "./components/HeaderEng";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/uz" element={<Header />} />
        <Route path="/ru" element={<HeaderRu />} />
        <Route path="/eng" element={<HeaderEng />} />
      </Routes>
    </div>
  );
}

export default Routers;
