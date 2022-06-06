import { CHON_KEO_BUA_BAO, COMPUTER_CHOICE, SO_BAN_THANG } from "./name";

export const chonKeoBuaBaoAction = (palyerDangChon, readyPlay) => ({
  type: CHON_KEO_BUA_BAO,
  payload: { palyerDangChon, readyPlay },
});

export const playGameAction = (payload) => ({ type: COMPUTER_CHOICE, payload });

export const soBanThangAction = (payload) => ({ type: SO_BAN_THANG, payload });
