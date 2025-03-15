import React from "react";
import Homepage from "./pages/homepage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// For

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
