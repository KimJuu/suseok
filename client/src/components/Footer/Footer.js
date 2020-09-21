import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <p>
          &copy; Untitled. All rights reserved. Design:{" "}
          <Link to="http://templated.co">TEMPLATED</Link>. Demo Images:{" "}
          <Link to="http://unsplash.com">Unsplash</Link>.
        </p>
      </footer>
    );
  }
}

export default Footer;
