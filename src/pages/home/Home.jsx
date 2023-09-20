import {React, useEffect, useState } from "react";
import fetchData from "../../constants/fetchData";
import { Button } from "../../constants/pages";

export const Home = () => {
  const [paragraphe, setparagraphe] = useState("")
  console.log(import.meta.env.REACT_APP_PATH_LOCAL);
  useEffect(() => {
    fetchData().then((res)=> setparagraphe(res.data.paragraphe))
  }, [])
  
  return (
    <section id="Home">
      <span />
      <div className="container container-sm container-md container-lg container-xl">
        <div className="main row d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
          <div className="div_image col-12  col-lg-5 d-flex justify-content-center justify-content-lg-start align-items-center">
            <div className="image">
              <img src="https://i.ibb.co/RQ2wvDZ/profil.png" alt="Profil"/>
            </div>
          </div>
          <div className="div_info col-12 col-lg-7 d-flex flex-column justify-content-center">
            <h1>
              I <span>AM</span> MOHAMED <span>MESSOUD</span>
            </h1>
            <h2>
              I am a <span>Full Stack</span> Develepor
            </h2>
            <p>
              {paragraphe}
            </p>
            <a href='#About' className="btns col-11 col-md-12 col-lg-10 col-xl-6 d-flex flex-column flex-lg-row justify-content-between align-items-center ">
              <Button children={"More About Me"} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
