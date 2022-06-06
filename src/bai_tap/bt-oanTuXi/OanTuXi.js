import React, { Component } from "react";
import "./OanTuXi.scss";
import Player from "./Player";
import PlayerComputer from "./PlayerComputer";
import ResultGame from "./ResultGame";

export default class OanTuXi extends Component {
  render() {
    return (
      <div className="oantuxi p-3">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Player />
            </div>
            <div className="col-6">
              <ResultGame />
            </div>
            <div className="col-3">
              <PlayerComputer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
