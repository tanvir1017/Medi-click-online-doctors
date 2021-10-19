import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthProvider from "../../Context/AuthProvider";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/Contactus/ContactUs";
import FAQ from "../Pages/FAQ/FAQ";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../Pages/Private/PrivateRoute";

const Home = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/home_page">
              <HomePage></HomePage>
            </Route>
            <PrivateRoute path="/about-us">
              <AboutUs></AboutUs>
            </PrivateRoute>
            <Route path="/contact_us">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/faq">
              <FAQ></FAQ>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default Home;
