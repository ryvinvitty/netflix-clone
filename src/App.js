import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import{originals, action, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries}from './urls'

function App() {
  return (
    <div>
     <NavBar/>
     <Banner/>
     <RowPost title='Netflix Originals' url={originals} />
     <RowPost title='Action ' isSmall  url={action}/>
     <RowPost title='Comedy ' isSmall  url={ComedyMovies}/>
     <RowPost title='Horror ' isSmall  url={HorrorMovies}/>
     <RowPost title='Romance' isSmall  url={RomanceMovies}/>
     <RowPost title='Documentaries' isSmall  url={Documentaries}/>
    </div>
  );
}

export default App;
