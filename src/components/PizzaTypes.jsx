import React, { Component } from "react";
import Items from "./Items";

class PizzaTypes extends Component {
  render() {
    return (
      <div>
        <br />
        <h4 class="text-center">
          Our Pizza
          <small class="text-muted">Types</small>
        </h4>
        <hr />

        <div class="row">
          <div class="col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="pizza-images/pag.jpg"
                class="card-img-top"
                alt="First"
              />
              <div class="card-body">
                <p class="card-text">
                  Our Sweet Moment Pizza. Will definitely remind you of Italy
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="pizza-images/sag.jpg"
                class="card-img-top"
                alt="Second"
              />
              <div class="card-body">
                <p class="card-text">
                  Balad Pizza. Where do you think? We are taking you straight to
                  Spain
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="pizza-images/lag.jpg"
                class="card-img-top"
                alt="Third"
              />
              <div class="card-body">
                <p class="card-text">
                  The Salamanca. Your guess is right. Straight from Mexico,
                  let's go
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="pizza-images/hag.jpg"
                class="card-img-top"
                alt="Fourth"
              />
              <div class="card-body">
                <p class="card-text">
                  Stann's Pizza. Our most recommended on the Menu. Just try.
                  That's all we can really say.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PizzaTypes;
