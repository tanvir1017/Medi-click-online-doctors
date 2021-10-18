import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Pages/Header/Header";
import HomePage from "../Pages/HomePage/HomePage";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Header></Header>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
        <HomePage></HomePage>
      </BrowserRouter>
    </div>
  );
};

export default Home;
