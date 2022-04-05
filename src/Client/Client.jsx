import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Client() {
  return (
    <>
      <Sidebar />
      <Header />
      <Body />
    </>
  );
}
