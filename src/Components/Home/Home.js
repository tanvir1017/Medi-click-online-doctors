import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "../Pages/AboutUs/AboutUs";
import FAQ from "../Pages/FAQ/FAQ";
import Footer from "../Pages/Footer/Footer";
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
          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/faq">
            <FAQ></FAQ>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default Home;
