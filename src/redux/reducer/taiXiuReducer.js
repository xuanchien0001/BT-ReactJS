import { GIA_TRI_BAN_DA_CHON, PAY_GAME } from "../action/ActionTaiXiu/name";
const matXucXac = [
  { value: 1, img: "image/1.png" },
  { value: 2, img: "image/2.png" },
  { value: 3, img: "image/3.png" },
  { value: 4, img: "image/4.png" },
  { value: 5, img: "image/5.png" },
  { value: 6, img: "image/6.png" },
];
const initialState = {
  banDangChon: "???",
  soBanThang: 0,
  tongSoBanChoi: 0,
  xucXac: [
    { value: 0, img: "image/removebg-preview.png" },
    { value: 0, img: "image/removebg-preview.png" },
    { value: 0, img: "image/removebg-preview.png" },
  ],
  isReadyPlay: false,
};

const taiXiuReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GIA_TRI_BAN_DA_CHON:
      return { ...state, banDangChon: payload, isReadyPlay: true };

    case PAY_GAME: {
      let tongDiem = 3;
      state.xucXac = payload.map((item) => {
        tongDiem += item;
        return matXucXac[item];
      });
      if (state.banDangChon === "Tài" && tongDiem > 9) state.soBanThang += 1;
      if (state.banDangChon === "Xỉu" && tongDiem < 9) state.soBanThang += 1;
      state.tongSoBanChoi += 1;
      return { ...state };
    }
    default:
      return state;
  }
};
export default taiXiuReducer;
