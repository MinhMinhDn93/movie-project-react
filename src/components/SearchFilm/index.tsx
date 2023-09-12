import { useState } from "react";
import { useEffect } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";
import axios from 'axios';
import styles from './SearchFilm.module.css'
import MovieBox from "../MovieBox";
import { Link } from "react-router-dom"
import useSearch from "../../hooks/useSearch";

interface Genres {
  id: number;
  name: string;
}
interface dataType {
  id: number;
  title: string;
  backdrop_path: string;
  original_title: string;
  genres: Genres[];
  release_date: string;
  original_language: string;
  runtime: number;
  vote_average: number;
  overview: string;
  poster_path: string;
}
interface Data {
  page: number;
  results: dataType[];
}
const SearchFilm = ({className}:{className:string}) => {
  const [data, setData] = useState<Data>();
  const { search } = useSearch();
  useEffect(() => {
   
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
          },
        }
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);
  console.log("««««« data »»»»»", data);
  return (
    <>
      { data && (
        // <div className={styles.title_film}>{listmovie}</div>
        <div className={className}>
            {data.results.map((item, i) => (
              <Link key={i} to={`/detail/${item.id}`}>
                <MovieBox poster_path={item.poster_path} title={item.title}/>
              </Link>
            ))}   
        </div>
      )}
    </>
  )
}

export default SearchFilm;

