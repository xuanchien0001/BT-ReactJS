import React, { Component } from "react";
import { connect } from "react-redux";

class PlayerComputer extends Component {
  render() {
    const { computerDangChon } = this.props;
    return (
      <div className="w-100">
        <div className="text-center mx-auto bg-info w-50 position-relative suynghi">
          <img src={require(`${computerDangChon}`)} alt="4" width={50} />
        </div>
        <div className="text-center mt-3">
          <img src={require("./hinhAnh/playerComputer.png")} alt="0" width={150} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  computerDangChon: state.xucXacReducer.computerDangChon,
});
export default connect(mapStateToProps, null)(PlayerComputer);
