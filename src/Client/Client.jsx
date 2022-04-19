import React , {useState} from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Client() {
  const [show, setShow] = useState(false);

  const open = () => {
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };
  return (
    <>
      <Sidebar closeSide={close} isOpen={show}/>
      <Header showSide={open}/>
      <Body />
    </>
  );
}
