/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "./views/Index.js";
import AboutUs from "./views/IndexSections/AboutUs";
import AboutProduct from "./views/IndexSections/AboutProduct";
import Contact from "./views/IndexSections/Contact";
import DemoNavbar from "./components/Navbars/DemoNavbar";
import CardsFooter from "./components/Footers/CardsFooter";
import Hero from "./views/IndexSections/Hero";
import ProductCard from "./views/IndexSections/ProductCard";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/aboutus">
        <DemoNavbar />
        <Hero />
        <AboutUs />
        <CardsFooter />
      </Route>
      <Route path="/aboutproduct">
        <DemoNavbar />
        <Hero />
        {/* <AboutProduct /> */}
        <ProductCard />
        <CardsFooter />
      </Route>
      <Route path="/contact">
        <DemoNavbar />
        <Hero />
        <Contact />
        <CardsFooter />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
