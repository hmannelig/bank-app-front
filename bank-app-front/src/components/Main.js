import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../pages/about/About";
import Signup from "../pages/Signup";

const Main = () => {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/about" component={About} />
        {/* <Route path="/contact" component={Contact} /> */}
      </Switch>
    </Switch>
  );
};

export default Main;
