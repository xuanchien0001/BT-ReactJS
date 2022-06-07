import React, { Component } from "react";
import { connect } from "react-redux";
import { giaTriDaChonAction } from "../../../redux/action/ActionTaiXiu/action";

class TaiXiu extends Component {
  handleTaiXiu = (taiXiu) => {
    this.props.giaTriChon(taiXiu);
  };

  render() {
    const { xucXac } = this.props;
    return (
      <div className="row">
        <div className="col-3 w-100">
          <button className="btn btn_taiXiu canhgiua_x " onClick={() => this.handleTaiXiu("Tài")}>
            Tài
          </button>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <span className="mx-2 border py-2">
            <img className="rounded" src={require(`../${xucXac[0].img}`)} alt="1" width={60} />
          </span>
          <span className="mx-2 border py-2">
            <img className="rounded" src={require(`../${xucXac[1].img}`)} alt="1" width={60} />
          </span>
          <span className="mx-2 border py-2">
            <img className="rounded" src={require(`../${xucXac[2].img}`)} alt="1" width={60} />
          </span>
        </div>
        <div className="col-3">
          <button className="btn btn_taiXiu canhgiua_x  " onClick={() => this.handleTaiXiu("Xỉu")}>
            Xỉu
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  giaTriChon: (payload) => {
    dispatch(giaTriDaChonAction(payload));
  },
});

const mapStateToProps = (state) => ({
  xucXac: state.taiXiuReducer.xucXac,
});
export default connect(mapStateToProps, mapDispatchToProps)(TaiXiu);
