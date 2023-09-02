import React, { useEffect, useState } from "react";
import "./about.scss";
import {Button} from '../../constants/pages'
import axios from "axios";
export const About = () => {

  const [InformationPersonnal, setInformationPersonnal] = useState([])

  const [Experiences, setExperiences] = useState([])

  const [Skills, setSkills] = useState([])

  useEffect(() => {
    async function fetch(){
      await axios.get('/src/constants/data.json')
      .then((res)=> {
        setInformationPersonnal(res.data.InformationPersonnal)
        setExperiences(res.data.Experiences)
        setSkills(res.data.Skills)
      })
    }

    fetch()
  }, [])

  // for management the box for experience
  var half = 0
  if (Experiences?.length > 3) {
    half = Math.floor(Experiences.length / 2) + 1
  }


  return (
    <section id="About" className="py-5">
      <div className="container container-sm container-lg container-xl container-xxl">
        <h1 className="col-12 text-center">ABOUT ME</h1>
        <div className="content mt-5 d-flex flex-column align-items-center">
          <div className="col-12 d-flex flex-column flex-md-row">
            <div className="info-per col-12 col-md-7 col-lg-8 col-xl-7">
              <h2 className="text-center text-md-start">Personal Info</h2>

              <div className="info-per-content d-flex flex-wrap">
              {
                InformationPersonnal?.map((item)=>(
                  <div className="col-12 col-md-12 col-lg-6">
                    <div className="d-flex px-2">
                      <label>{item.key}:</label>
                      <p className="ms-3">{item.value}</p>
                    </div>
                  </div>
                ))
              }
              <div className="col-12 col-md-12 col-lg-8 col-xl-7 mt-0 mt-lg-4">
                <Button children={"Download CV"}/>
              </div>
              </div>

            </div>

            <div className="skills col-12 col-md-5 col-lg-4 col-xl-5">
              <h2 className="mb-4 text-center text-md-start">My Skills</h2>

              <div className="skills-content d-flex flex-wrap justify-content-center justify-content-md-start">
              {
                Skills?.map((item)=>(
                  <div className="skill d-flex align-items-center justify-content-center">
                    <img src={item.icon} className="img-skill" alt="" />
                  </div>
                ))
              }
              </div>

            </div>
          </div>

          <hr />

          <div className="experiences col-11 col-md-12">
            <h2 className="text-center">Experiences & Education</h2>
            <div className="experiences-content d-flex flex-column flex-lg-row align-items-center align-items-lg-start flex-wrap ">

                {/* the box  first box*/}
                <div className="col-12 col-md-8 col-lg-6">
                  {
                    Experiences?.map((item, index)=>{

                      if (half > 0) {

                        if (index <= half - 1) {
                          return <div className="row experience mx-lg-auto">
                            <div className="div-icon col-1">
                              <div className="icon mx-auto">

                              </div>
                            </div>
                            <div className="col-11 px-2 px-md-0">
                              <label className="badge">{item.anne}</label>
                              <h4>{item.etape}</h4>
                              <p>{item.lieu}</p>
                            </div>
                          </div>
                        }

                      }else{

                        return <div className="row experience">
                        <div className="div-icon col-1">
                          <div className="icon mx-auto">

                          </div>
                        </div>
                        <div className="col-11 px-2 px-md-0">
                          <label className="badge">{item.anne}</label>
                          <h4>{item.etape}</h4>
                          <p>{item.lieu}</p>
                        </div>
                      </div>

                      }
                    })
                  }
                </div>

                {/* the box second box*/}
                <div className="col-12 col-md-8 col-lg-6">
                  {
                    Experiences?.map((item, index)=>{
                      if (half > 0 && index > half - 1) {
                        return <div className="row experience">
                        <div className="div-icon col-1">
                          <div className="icon mx-auto">

                          </div>
                        </div>
                        <div className="col-11 px-2 px-md-0">
                          <label className="badge">{item.anne}</label>
                          <h4>{item.etape}</h4>
                          <p>{item.lieu}</p>
                        </div>
                      </div>
                      }
                    })
                  }
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
