import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import React, { Component } from "react";
import HomeTemplace from "./templace/homeTemplace/HomeTemplace";
import OanTuXi from "./bai_tap/bt-oanTuXi/OanTuXi";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeTemplace />}>
            <Route path="oantuxi" element={<OanTuXi />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
