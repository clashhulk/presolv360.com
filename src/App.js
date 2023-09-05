import "./App.css";

import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ImageCarousel from "./components/carousels/ImageCarousel";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<ImageCarousel />} />
            {/* Add more routes here */}
          </Routes>
        </Main>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}

export default App;
