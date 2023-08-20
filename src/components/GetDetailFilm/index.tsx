import { useState } from "react";
import { useEffect } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";
import axios from 'axios';
import styles from './GetDetailFilm.module.css'
import MovieBox from "../MovieBox";




interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

const GetDetailFilm = ({listmovie,url,className}:{listmovie:string,url:string,className:string}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(url, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8',
        },
      })
      .then((response) => {
        console.log('GetProfile', response)
          setMovies(response.data.results);
          setIsLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [url]);
  return (
    <div >
      <div className={styles.title_film}>{listmovie}</div>
      {isLoading && <div>Loading.....</div> }
      <div className={className}>
          {movies.map(movie => (
            <div key={movie.id}>
              <MovieBox poster_path={movie.poster_path} title={movie.title}/>
            </div>
          ))}   
      </div>

    </div>
  )
}

export default GetDetailFilm;

