import React, { Component } from "react";
import { connect } from "react-redux";
import { PAY_GAME } from "../../../redux/action/ActionTaiXiu/name";

class ControlGame extends Component {
  hanlePlaygame = () => {
    let arrNumber = [];
    for (let i = 0; i < 3; i++) {
      arrNumber.push(Math.floor(Math.random() * 6));
    }
    this.props.dispatch({ type: PAY_GAME, payload: arrNumber });
  };
  render() {
    const { banDangChon, tongSoBanChoi, soBanThang, isReadyPlay } = this.props;
    return (
      <div className="text-center mt-4">
        <h3>
          <span>BẠN CHỌN: </span>
          <span className="text-danger">{banDangChon}</span>
        </h3>
        <h4>
          <span>Số bàn thắng: </span>
          <span className="text-success">{soBanThang}</span>
        </h4>
        <h4>
          Tổng số bàn chơi: <span className="text-primary">{tongSoBanChoi}</span>
        </h4>
        <div>
          <button disabled={!isReadyPlay} className="btn btn-success" onClick={this.hanlePlaygame}>
            Play game
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  banDangChon: state.taiXiuReducer.banDangChon,
  soBanThang: state.taiXiuReducer.soBanThang,
  tongSoBanChoi: state.taiXiuReducer.tongSoBanChoi,
  isReadyPlay: state.taiXiuReducer.isReadyPlay,
});

export default connect(mapStateToProps, null)(ControlGame);
