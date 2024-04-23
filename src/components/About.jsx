import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h4 className="text-center">
          About
          <small className="text-muted">Pizza</small>
        </h4>
        <br></br>
        <div className="row">
          <div className="col-md-6">
            <img src="pizza-images/zag.jpg" className="img-fluid" />
          </div>

          <div className="col-md-6">
            <p className="lead">
              Even though it’s become the most popular Italian food abroad,
              pizza and Italy didn’t weren’t always synonymous. In fact, pizza
              wasn’t even invented until the 19th century, when it started out
              as a fast food on the streets of Naples. In the beginning (and,
              we’d argue, even today), the simpler the pizza, the better: The
              classic pizza napoletana was just dough with a tomato sauce of
              Marzano tomatoes, oregano or basil, a little garlic, salt, and
              olive oil. (for all you need to know about choosing the best olive
              oil, check out our post.)
            </p>
            <br />
            <p className="lead">
              It’s another pizza from Naples, though, that has the neatest
              pedigree. When Queen Margherita came to visit Naples in 1889, she
              was charmed by a local pizza baker who had made, in her honor, a
              pizza with the colors of the new flag of the just-unified
              Italy—red tomatoes, white mozzarella, and green basil. Yep, you
              guessed it. It’s now called the pizza margherita (or margarita, on
              some menus).
            </p>
            <br />
            <p className="lead">
              Of course, Italian food is very regional, and so are Italian
              pizzas. (Although any real Italian pizza should always be cooked
              in a wood-fired oven; in fact, a pizzeria without one can’t even,
              legally, call itself a pizzeria!). That world-famous pizza in
              Naples is known as “pizza alta” (thick crust), while pizza in Rome
              is traditionally thin-crust and crisp.
            </p>
            <br />
            <p className="lead">
              Like the rest of Italian food, Italian pizza is best – and most
              authentic – when it’s made with fresh, local ingredients,
              especially any that are DOP (You can read a full explanation of
              this wonderful little term in our blog about DOP foods). We’re not
              talking the microwaved dough and synthetic cheese that you see now
              both in Italy and abroad, but something completely different.
            </p>
            <p className="lead">
              The best way to try it, short of going to an authentic pizzeria
              with great ingredients and a wood-fired oven? Make it at home!
            </p>
            <br />
            Read more: The Only Italian Lasagna Recipe You’ll Ever Need
          </div>
        </div>
      </div>
    );
  }
}

export default About;
