import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <section id="main">
        <section className="thumbnails">
          <div>
            <Link to={require("../images/suseok/suseok1.jpg")}>
              <img src={require("../images/suseok/suseok1.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to="../images/suseok/suseok2.jpg">
              <img src={require("../images/suseok/suseok2.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
          </div>
          <div>
            <Link to="../images/suseok/suseok1.jpg">
              <img src={require("../images/suseok/suseok1.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to="../images/suseok/suseok1.jpg">
              <img src={require("../images/suseok/suseok1.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to="../images/suseok/suseok2.jpg">
              <img src={require("../images/suseok/suseok2.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
          </div>
          <div>
            <Link to="../images/suseok/suseok1.jpg">
              <img src={require("../images/suseok/suseok1.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to="../images/suseok/suseok2.jpg">
              <img src={require("../images/suseok/suseok2.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
          </div>
        </section>
      </section>
    );
  }
}

export default Main;
