import React, { useEffect, useState } from 'react';
import FilmoKortele from './FilmoKortele.js';
const FetchMoviesComponent = (props)=> {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
     const url = props.query
      ? `https://api.themoviedb.org/3/search/movie?api_key=53c258bb52d305146e19a71e58aa2cc5&language=en-US&query=${props.query}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=53c258bb52d305146e19a71e58aa2cc5&language=en-US&page=1`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        props.setMovies(data.results);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [props.query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return "Loaded movies successfully";
}

export default FetchMoviesComponent;