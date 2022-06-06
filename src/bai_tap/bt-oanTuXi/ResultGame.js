import React, { Component } from "react";
import { connect } from "react-redux";
import { playGameAction, soBanThangAction } from "../../redux/action/ActionXucXac/action";
import { RESET_GAME } from "../../redux/action/ActionXucXac/name";

class ResultGame extends Component {
  constructor(props) {
    super(props);
  }
  handlePlayGame = async () => {
    let number = Math.floor(Math.random() * 3);
    let ketqua = this.props.dsChon[number];
    await this.props.dispatch(playGameAction(ketqua));
    let soBanThang = 0;
    if (this.props.palyerDangChon.value > ketqua.value) soBanThang = 1;

    if (this.props.palyerDangChon.value === 3 && ketqua.value === 1) soBanThang = 0;

    if (this.props.palyerDangChon.value === 1 && ketqua.value === 3) soBanThang = 1;

    this.props.dispatch(soBanThangAction(soBanThang));
  };
  resetGame = () => {
    this.props.dispatch({ type: RESET_GAME });
  };
  render() {
    const { soBanThang, soBanChoi, readyPlayGame } = this.props;
    return (
      <div className="text-white text-center">
        <h1 className="text-warning">I'm iron man, i love you 3000!!</h1>
        <div className="h2">
          <span className="text-success ">Số bàn thắng:</span>
          <span className="text-warning ml-3">{soBanThang}</span>
        </div>
        <div className="h2">
          <span className="text-success ">Số bàn chơi:</span>
          <span className="text-warning ml-3">{soBanChoi}</span>
        </div>
        <div className="mt-4">
          <button
            disabled={!readyPlayGame}
            className="btn btn-success"
            onClick={this.handlePlayGame}
          >
            Play Game
          </button>
          <br />
          <button
            disabled={readyPlayGame}
            className="btn btn-primary mt-3"
            onClick={this.resetGame}
          >
            Next Play
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  soBanThang: state.xucXacReducer.soBanThang,
  soBanChoi: state.xucXacReducer.soBanChoi,
  dsChon: state.xucXacReducer.dsChon,
  readyPlayGame: state.xucXacReducer.readyPlayGame,
  palyerDangChon: state.xucXacReducer.palyerDangChon,
});
export default connect(mapStateToProps, null)(ResultGame);
