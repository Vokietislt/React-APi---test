import FetchMoviesComponent from './FetchMoviesComponent';
import { useEffect, useState } from 'react';
import FilmoKoretele from './FilmoKortele';

function App() {
const [q,setq]= useState("");
const [movies,setMovies] = useState([]);
const [filmuSarasas,setFilmuSarasas]=useState([])
const [pamegti,setPamegti] = useState(false);
useEffect(()=>{
  console.log("App.js useEffect");
  localStorage.getItem("Filmai") ? setFilmuSarasas(JSON.parse(localStorage.getItem("Filmai"))) : setFilmuSarasas([]);
},[])

function hangleInputChange(e) {
  setq(e.target.value)
}
function handleLikedFilms(e){
            setFilmuSarasas([...filmuSarasas, e]);
            if(!filmuSarasas.some(film => film.pavadinimas === e.pavadinimas)){
                localStorage.setItem("Filmai", JSON.stringify([...filmuSarasas, e]));
            } else {
                const updatedFilms = filmuSarasas.filter(film => film.pavadinimas !== e.pavadinimas);
                setFilmuSarasas(updatedFilms);
                localStorage.setItem("Filmai", JSON.stringify(updatedFilms));
            }
  }
  return (
    <div className="App"> 
      <input type="text" onChange={hangleInputChange}/>
      <FetchMoviesComponent
      setMovies ={setMovies}
      query={q}
      />
      <div className='Filmai'>
        <button onClick={()=>{setPamegti(false)}}>Ieskomi Filmai</button>
        <button onClick={()=>{setPamegti(true)}}>Pamegti Filmai</button>
        {pamegti && filmuSarasas.length>0? filmuSarasas.map((movie,index) => (
          <FilmoKoretele
                filmuSarasas={filmuSarasas}
                handleLikedFilms = {handleLikedFilms}
                key={'lieked-'+index}
                pavadinimas={movie.pavadinimas}
                aprašymas={movie.overview}
                data={movie.release_date}
                balsai={movie.vote_average}
                paveikslėlis={movie.paveikslėlis}
              />
        )): !pamegti&&movies.length>0?movies.map((movie) => (
              <FilmoKoretele
                filmuSarasas={filmuSarasas}
                handleLikedFilms = {handleLikedFilms}
                key={movie.id}
                pavadinimas={movie.title}
                aprašymas={movie.overview}
                data={movie.release_date}
                balsai={movie.vote_average}
                paveikslėlis={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            )):pamegti&&filmuSarasas.length==0?"Nėra pamegėtų filmų":'Nerasta filmų'} 
        </div>
    </div>
  );
}

export default App;
