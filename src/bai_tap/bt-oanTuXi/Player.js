import React, { Component } from "react";
import { connect } from "react-redux";
import { chonKeoBuaBaoAction } from "../../redux/action/ActionXucXac/action";
class Player extends Component {
  render() {
    const { dsChon, palyerDangChon, dispatch } = this.props;
    return (
      <div className="w-100">
        <div className="text-center mx-auto bg-info w-50 position-relative suynghi">
          <img src={require(`${palyerDangChon.hinhAnh}`)} alt="4" width={50} />
        </div>
        <div className="text-center mt-3">
          <img src={require("./hinhAnh/player.png")} alt="0" width={150} />
        </div>
        <div className="d-flex justify-content-around">
          {dsChon?.map((item, i) => (
            <button key={i} onClick={() => dispatch(chonKeoBuaBaoAction(item, true))}>
              <img src={require(`${item.hinhAnh}`)} alt="1" width={40} />
            </button>
          ))}
        </div>
        <div className="text-center mt-3">
          <button
            className="btn btn-danger"
            onClick={() =>
              dispatch(chonKeoBuaBaoAction({ hinhAnh: "./hinhAnh/removebg-preview.png" }))
            }
          >
            Hủy chọn
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dsChon: state.xucXacReducer.dsChon,
    palyerDangChon: state.xucXacReducer.palyerDangChon,
  };
};

export default connect(mapStateToProps, null)(Player);
