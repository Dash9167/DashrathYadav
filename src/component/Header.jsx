import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { CgDarkMode } from "react-icons/cg";
import "../style/header.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeslice";

const Header = () => {
  const darkmode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const [open, setopen] = useState(true);
  // const [dark, setdark] = useState(true);

  const onclicked = async () => {
    setopen(!open);
  };

  return (
    <nav
      className={darkmode ? " dark" : "white"}
      style={{ borderBottom: darkmode ? "2px solid white" : "" }}
    >
      <div className="logo">
        <h1>Dashrath Yadav</h1>
      </div>
      <div
        className={
          open ? " menu" : `menu-open ${darkmode ? "dark-menu" : "light-menu"}`
        }
      >
        <ul className="desktop">
        <li >
            <a  href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="mobile">
        <li >
            <a onClick={onclicked} href="#home">Home</a>
          </li>
          <li>
            <a onClick={onclicked} href="#about">About</a>
          </li>
          <li>
            <a onClick={onclicked} href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a onClick={onclicked} href="#Experience">Experience</a>
          </li>
          <li>
            <a onClick={onclicked} href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div onClick={() => dispatch(toggleTheme())} className="mode">
        <CgDarkMode 
          className={!darkmode ? "dark-mode icon" : "light-mode icon"}
        />
        {!darkmode ? "Light" : "Dark"}
      </div>
      <div className="ham">
        {open ? (
          <RxHamburgerMenu onClick={onclicked} className="icon" />
        ) : (
          <RxCross1 onClick={onclicked} className="icon" />
        )}
      </div>
    </nav>
  );
};

export default Header;
