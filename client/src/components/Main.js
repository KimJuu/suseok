import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <section id="main">
        <section className="thumbnails">
          <div>
            <Link to={require("../images/suseok/suseok4.jpg")}>
              <img src={require("../images/suseok/suseok4.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("../images/suseok/suseok1.jpg")}>
              <img src={require("../images/suseok/suseok1.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("../images/suseok/suseok2.jpg")}>
              <img src={require("../images/suseok/suseok2.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
          </div>
          <div>
            <Link to={require("../images/suseok/suseok3.jpg")}>
              <img src={require("../images/suseok/suseok3.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("../images/suseok/suseok5.jpg")}>
              <img src={require("../images/suseok/suseok5.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("../images/suseok/suseok3.jpg")}>
              <img src={require("../images/suseok/suseok3.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("../images/suseok/suseok3.jpg")}>
              <img src={require("../images/suseok/suseok3.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
          </div>
          <div>
            <Link to={require("../images/suseok/suseok4.jpg")}>
              <img src={require("../images/suseok/suseok4.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("../images/suseok/suseok1.jpg")}>
              <img src={require("../images/suseok/suseok1.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
            <Link to={require("../images/suseok/suseok2.jpg")}>
              <img src={require("../images/suseok/suseok2.jpg")} alt="" />
              <h3>Lorem ipsum dolor sit amet</h3>
            </Link>
          </div>
        </section>
        <section>
          <form action="#" className="alt" method="POST">
            <div className="row uniform">
              <div className="6u 12u$(xsmall)">
                <input name="name" placeholder="Name" type="text" />
              </div>
              <div className="6u$ 12u$(xsmall)">
                <input name="email" placeholder="Email" type="email" />
              </div>
              <div className="12u$">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input className="alt" value="문의하기" type="submit" />
              </li>
            </ul>
          </form>
        </section>
      </section>
    );
  }
}

export default Main;
