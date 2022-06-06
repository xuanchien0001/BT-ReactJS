import {
  CHON_KEO_BUA_BAO,
  COMPUTER_CHOICE,
  RESET_GAME,
  SO_BAN_THANG,
} from "../action/ActionXucXac/name";

const initialState = {
  dsChon: [
    { hinhAnh: "./hinhAnh/keo.png", name: "keo", value: 1 },
    { hinhAnh: "./hinhAnh/bua.png", name: "bua", value: 2 },
    { hinhAnh: "./hinhAnh/bao.png", name: "bao", value: 3 },
  ],
  palyerDangChon: { hinhAnh: "./hinhAnh/removebg-preview.png" },
  computerDangChon: "./hinhAnh/removebg-preview.png",
  soBanThang: 0,
  soBanChoi: 0,
  readyPlayGame: false,
};

const xucXacReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHON_KEO_BUA_BAO: {
      state.palyerDangChon = payload.palyerDangChon;
      state.readyPlayGame = payload.readyPlay;
      return { ...state };
    }

    case COMPUTER_CHOICE: {
      state.soBanChoi += 1;
      state.computerDangChon = payload.hinhAnh;
      return { ...state };
    }

    case SO_BAN_THANG: {
      state.soBanThang += payload;
      state.readyPlayGame = false;
      return { ...state };
    }
    case RESET_GAME: {
      state.palyerDangChon = { hinhAnh: "./hinhAnh/removebg-preview.png" };
      state.computerDangChon = "./hinhAnh/removebg-preview.png";
      return { ...state };
    }

    default:
      return state;
  }
};

export default xucXacReducer;
