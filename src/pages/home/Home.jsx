import axios from "axios";
import {React, useEffect, useState } from "react";
import { Button } from "../../constants/pages";

export const Home = () => {
  const [paragraphe, setparagraphe] = useState("")
  useEffect(() => {
    async function fetch(){
      await axios.get('/src/constants/data.json')
      .then((res)=> setparagraphe(res.data.paragraphe))
    }

    fetch()
  }, [])
  
  return (
    <section id="Home">
      <span />
      <div className="container container-sm container-md container-lg container-xl container-xxl">
        <div className="main row d-flex flex-column flex-md-row justify-content-center justify-content-md-between">
          <div className="div_image col-12 col-md-5 col-lg-5 d-flex justify-content-center justify-content-md-start align-items-center">
            <div className="image"></div>
          </div>
          <div className="div_info col-12 col-md-7 col-lg-7 d-flex flex-column justify-content-center">
            <h1>
              I <span>AM</span> MOHAMED <span>MESSOUD</span>
            </h1>
            <h2>
              I am a <span>Full Stack</span> Develepor
            </h2>
            <p>
              {paragraphe}
            </p>
            <a href='#About' className="btns col-11 col-md-12 col-lg-10 col-xl-6 d-flex flex-column flex-md-row justify-content-between align-items-center ">
              <Button children={"More About Me"} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
