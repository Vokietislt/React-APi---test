import FetchMoviesComponent from './FetchMoviesComponent';
import { useState } from 'react';

function App() {
const [q,setq]= useState("");


function hangleInputChange(e) {
  setq(e.target.value)
}
  return (
    <div className="App"> 
    <input type="text" onChange={hangleInputChange}/>
    <FetchMoviesComponent
    query={q}
    />
    </div>
  );
}

export default App;
