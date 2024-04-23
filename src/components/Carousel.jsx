import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="pizza-images/lee.jpg"
              className="d-block w-100"
              alt="First-Image-Slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>The Sweet Moment Pizza</h5>
              <p>First time getting our pizza? Try our most demanded pizza.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="pizza-images/eco.jpg"
              className="d-block w-100"
              alt="Second-slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fantastic Cheese Pizza</h5>
              <p>Lover of cheese? Best for you</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="pizza-images/van.jpg"
              className="d-block w-100"
              alt="Third-slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Balad Pizza</h5>
              <p>Best almost-vege Pizza</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
        <br></br>
      </div>
    );
  }
}

export default Carousel;
