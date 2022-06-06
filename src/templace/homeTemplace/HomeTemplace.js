import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

export default function HomeTemplace() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
