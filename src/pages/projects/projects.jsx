import axios from 'axios'
import {React, useEffect, useState} from 'react'
import { Project } from '../../assets/projects'
import './projects.scss'
export const Projects = () => {

  const [projects, setprojects] = useState([])

  useEffect(() => {
    async function fetch(){
      await axios.get('/src/constants/data.json')
      .then((res)=> {
        setprojects(res.data.projects)
      })
    }

    fetch()
  }, [])

  return (
    <section id="Projects" style={{height : projects?.length <= 4 ? "100vh" : "100%"}} className='py-5'>
      <div className='container container-sm container-lg container-xl container-xxl'>
        <main className='d-flex flex-column justify-content-md-center align-items-center'>
          <h1 className='col-12 text-center'>My Projects</h1>
          <div className='projects row col-12 d-flex flex-wrap justify-content-center justify-content-md-start'>
            {
              projects?.map((item)=>(

                <div className='col-10  col-md-6 col-lg-4 col-xl-3 main-project'>

                  <div className='project shadow p-3'>

                    <div className='image rounded'>
                      <img style={{height : '100%', width : '100%', position : 'absolute'}} src={item.image} />
                      <div className="icons">
                        <a target="_blank" href={item.links.github}>
                          <i className='fa-brands fa-github'></i>
                        </a>
                        <a target="_blank" href={item.links.livePreview}>
                        <i class="fa-solid fa-eye"></i>
                        </a>
                      </div>
                    </div>

                    <div className='content'>
                      <h6 className='mb-0 mt-3 text-center'>{item.name}</h6>
                    </div>
                    
                  </div>

                </div>
              ))
            }
          </div>
        </main>
      </div>
    </section>
  )
}
