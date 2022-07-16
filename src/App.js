import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./composants/About";
import Home from "./composants/Home";
import NotFound from "./composants/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/a-propos" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
