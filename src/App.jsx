import axios from "axios";
import {React, useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {
  About,
  Comptes,
  Contact,
  Home,
  Loading,
  Navbar,
  Projects,
} from "./constants/pages";
import { MainApp } from "./MainApp";

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
    <BrowserRouter>
      <Routes>
        <Route path="/My-Portfolio/" exact element={<MainApp loaded={loaded} SocialMedia={SocialMedia}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
