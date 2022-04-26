import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [movie, setMovie] = useState([]);
  const [input, setInput] = useState("");

  const fetchMovie = (e) => {
    e.preventDefault();
    console.log(input);
    axios.get(`https://www.omdbapi.com/?s=${input}&apikey=43033444`)
      .then((response) => {
        console.log(response);
        setMovie(response.data.Search)
        console.log(movie);
      })
  }


  return (
    <>
      <form className="form" onSubmit={fetchMovie}>
        <input id="searchbar" value={input} onInput={e => setInput(e.target.value)} type="text" placeholder="Search Movie.."></input>
        <button id="btn" onClick={fetchMovie}>Search</button>
      </form>


      <div className='row'>
        {

          movie.map((value, index) => {

            return (
              <>
                <div class="column" key={index}>
                  <img src={value.Poster} alt={value.Title} style={{ width: "100%" }} />
                  {value.Title} {value.Year}
                </div>                                    
              </>
            );
          })  

        }
      </div>
    </>
  )
}

export default App;