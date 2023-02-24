import React, { Component } from "react";
import {
  Link,
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Simple SPA</h1>
            <p><a href="https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm" target='_blank'>Creating a Single-Page App in React using React Router</a></p>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Stuff</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stuff" element={<Stuff />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
          </div>
        </HashRouter>
      );
    }
  }

export default Main;