import axios from "axios";
import {React, useEffect, useState} from "react";
import {
  About,
  Comptes,
  Contact,
  Home,
  Loading,
  Navbar,
  Projects,
} from "./constants/pages";

function App() {

  const [loaded, setloaded] = useState(false);
  const [SocialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    async function fetch(){
      await axios.get('/src/constants/data.json')
      .then((res)=> {
        setSocialMedia(res.data.SocialMedia)
      })
    }

    fetch()

    setTimeout(() => {
      window.addEventListener("load", setloaded(true));
    }, 2000);

    return () => {
      setTimeout(() => {
        window.removeEventListener("load", setloaded(true));
      }, 2000);
    };

  }, []);

  if (!loaded) return <Loading active={loaded} />;

  
  return (
    <>
      <Navbar />
      <Comptes SocialMedia={SocialMedia} />
      <div className="scroll-bar">
        
      <Home />
      <About loaded={loaded} />
      <Projects />
      <Contact SocialMedia={SocialMedia} />
      </div>
    </>
  );
}

export default App;
