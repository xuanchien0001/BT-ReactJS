import React, { Component } from "react";
import "../image/Pony.ttf";
import ControlGame from "./ControlGame";
import TaiXiu from "./TaiXiu";

import "./xucXac.scss";

export default class XucXacContainer extends Component {
  render() {
    return (
      <div className="XucXacContainer pt-3">
        <div className="container">
          <h1 className="text-center">GAME ĐỔ XÚC XẮC</h1>
          <TaiXiu />
          <ControlGame />
        </div>
      </div>
    );
  }
}
