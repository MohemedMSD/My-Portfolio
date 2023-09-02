import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./navbar.scss";
export const Navbar = () => {
  const [active, setactive] = useState(0);
  const [currentIndex, setcurrentIndex] = useState(0);
  const hundelScroll = ()=>{
    const {pageYOffset} = window;
    const MoyenMins = 300
    let HomeTop = document.querySelector('#Home').offsetTop
    let AboutTop = document.querySelector('#About').offsetTop - MoyenMins
    let ContactTop = document.querySelector('#Contact').offsetTop - MoyenMins
    let ProjectsTop = document.querySelector('#Projects').offsetTop - MoyenMins
    if (pageYOffset >= 0 && pageYOffset < AboutTop - 100) {
      setcurrentIndex(0)
    }

    if (pageYOffset >= AboutTop - 100 && pageYOffset < ProjectsTop) {
      setcurrentIndex(1)
    }

    if (pageYOffset >= ProjectsTop && pageYOffset < ContactTop) {
      setcurrentIndex(2)
    }

    if (pageYOffset >= ContactTop) {
      setcurrentIndex(3)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', hundelScroll)
    // console.log(document.querySelector('#root'));
    return () => {
      window.removeEventListener('scroll', hundelScroll)
    }
  }, [])
  return (
    <ul className="nav-links">
      {/* <span className="bg-moved" style={{
        top : currentIndex > 0 
              ? `calc(-176% + 120% * ${currentIndex})`
              : "-176%"
      }}/> */}
      {["Home", "About", "Projects", "Contact", "To Top"]?.map((item, index) => (
        <>
          <li className={`nav-link ${item === "To Top" ? "go-to-top" : ""} ${currentIndex === index ? "active" : ""}`}>
            <a href={`#${item}`}>
              <span className="me-3">{`${item}`}</span>
            </a>
          </li>
        </>
      ))}
    </ul>
  );
};
