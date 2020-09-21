import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernm: "",
    };
  }

  render() {
    return (
      <header id="header">
        <span className="avatar">
          <img src={require("../../images/avatar.jpg")} alt="" />
        </span>
        <h1>
          This is <strong>Visualize</strong>, a responsive site template
          designed by <Link to="http://templated.co">TEMPLATED</Link>
          <br />
          and released for free under the Creative Commons License.
        </h1>
        <ul className="icons">
          <li>
            <Link to="#" className="icon style2 fa-twitter">
              <span className="label">Twitter</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="icon style2 fa-facebook">
              <span className="label">Facebook</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="icon style2 fa-instagram">
              <span className="label">Instagram</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="icon style2 fa-500px">
              <span className="label">500px</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="icon style2 fa-envelope-o">
              <span className="label">Email</span>
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
