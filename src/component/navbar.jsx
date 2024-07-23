import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const scroll = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const rwdnav = useRef(null);
  useEffect(() => {
    const scrollFunc = () => {
      let top = document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let widths = (top / height) * 100;
      if (scroll.current) {
        scroll.current.style.width = widths + "%";
      }
    };
    window.addEventListener("scroll", scrollFunc);
  }, []);
  useEffect(() => {
    !isOpen
      ? (rwdnav.current.style.transform = "translateX(-100%)")
      : (rwdnav.current.style.transform = "translateX(0)");
  }, [isOpen]);
  return (
    <>
      <div className="scroll">
        <div className="scroll-bar" ref={scroll} style={{ width: "0%" }}></div>
      </div>
      <div className="navbar">
        <div className="start">
          <NavLink to={"/"}>Oscar dev</NavLink>
        </div>

        <div className="back">
          <NavLink to={"/"}>About</NavLink>
          <NavLink to={"/projects"}>Projects</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
      </div>

      <div className="rwdback-btn">
        {isOpen ? (
          <button onClick={() => setIsOpen(false)}>
            <i class="fa-solid fa-x"></i>
          </button>
        ) : (
          <button onClick={() => setIsOpen(true)}>
            <i class="fa-solid fa-bars"></i>
          </button>
        )}
      </div>
      <div className="rwdback " ref={rwdnav}>
        <div className="rwdback-container ">
          <NavLink onClick={() => setIsOpen(false)} to={"/"}>
            About
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} to={"/projects"}>
            Projects
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} to={"/contact"}>
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
