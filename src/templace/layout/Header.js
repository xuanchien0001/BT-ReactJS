import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/oantuxi">
                Oẳn Tù Xì
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/xucxac">
                Xúc Xắc
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Bài tập
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/oantuxi">
                  Oẳn tù xì
                </NavLink>
                <a className="dropdown-item" href="#">
                  Xúc xắc
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
