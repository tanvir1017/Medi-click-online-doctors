import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FAQ from "../Pages/FAQ/FAQ";
import Header from "../Pages/Header/Header";
import HomePage from "../Pages/HomePage/HomePage";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/home_page">
            <HomePage></HomePage>
          </Route>
          <Route path="/faq">
            <FAQ></FAQ>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Home;
