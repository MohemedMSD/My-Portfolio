import React from 'react'

import {
    About,
    Comptes,
    Contact,
    Home,
    Loading,
    Navbar,
    Projects,
  } from "./constants/pages";
export const MainApp = ({SocialMedia , loaded}) => {
  return (
    <div>
    <Navbar />
    <Comptes SocialMedia={SocialMedia} />
    <div className="scroll-bar">
    <Home />
    <About loaded={loaded} />
    <Projects />
    <Contact SocialMedia={SocialMedia} />
    </div>
  </div>
  )
}
