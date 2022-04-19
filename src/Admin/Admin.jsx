import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
export default function Admin() {
  const [show, setShow] = useState(false);

  const open = () => {
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  return (
    <>
      <Header showSide={open} />
      <Sidebar closeSide={close} isOpen={show}  />
      <Body />
    </>
  );
}
