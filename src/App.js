import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import PizzaTypes from "./components/PizzaTypes";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <About />
        <PizzaTypes />
        <Footer />
      </div>
    );
  }
}

export default App;
