import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./navbar.scss";
export const Navbar = () => {
  const [GoToTop, setGoToTop] = useState(false);
  const [currentIndex, setcurrentIndex] = useState(0);
  const hundelScroll = ()=>{
    const {pageYOffset} = window;
    const MoyenMins = 380;
    let HomeTop = document.querySelector('#Home').offsetTop
    let AboutTop = document.querySelector('#About').offsetTop - MoyenMins
    let ContactTop = document.querySelector('#Contact').offsetTop - MoyenMins
    let ProjectsTop = document.querySelector('#Projects').offsetTop - MoyenMins

    if (pageYOffset >= 0 && pageYOffset < AboutTop) {
      setcurrentIndex(0)
      setGoToTop(false)
    }

    if (pageYOffset >= AboutTop && pageYOffset < ProjectsTop) {
      setcurrentIndex(1)
      setGoToTop(true)
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
    return () => {
      window.removeEventListener('scroll', hundelScroll)
    }
  }, [])
  return (
    <ul className="nav-links">
      {["Home", "About", "Projects", "Contact", "To Top"]?.map((item, index) => (
          <li key={index} style={{display : item === "To Top" && GoToTop && 'flex'}} className={`nav-link ${item === "To Top" ? "go-to-top" : ""} ${currentIndex === index ? "active" : ""}`}>
            <a href={item === "To Top" ? '#Home'  : `#${item}`}>
              <span className="me-3">{`${item}`}</span>
            </a>
          </li>
      ))}
    </ul>
  );
};
