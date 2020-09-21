import React, { Component } from "react";
import { Route, Switch } from "react-router";

// css
import "../assets/css/main.css";

// header
import Header from "./Header/Header";
// footer
import Footer from "./Footer/Footer";
// Main
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
