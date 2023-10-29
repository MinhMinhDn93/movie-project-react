
import { useState } from "react";
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";
import axios from 'axios';
import styles from './GetFilm.module.css'
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

const GetFilm = ({listmovie,url}:{listmovie:string,url:string}) => {
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
  }, []);

  

  return (
    <div>
      <div className={styles.title_film}>{listmovie}</div>
      {isLoading && <div>Loading.....</div> }
      <div className={styles.wrapper}>
        <Swiper
         
          modules={[Navigation, Pagination,Scrollbar]}
          navigation
          pagination={{ clickable: true, bulletActiveClass:'hidden' }}
          
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            // Thiết lập breakpoint cho màn hình nhỏ hơn 640px
            376: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // Thiết lập breakpoint cho màn hình nhỏ hơn 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            // Thiết lập breakpoint cho màn hình nhỏ hơn 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 17
            },
          }}
        >
          {movies.map(movie => (
            <SwiperSlide key={movie.id}>
              {/* <div className={styles.movie_box}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <p>Vote Average: {movie.vote_average}</p>
              </div> */}
              <MovieBox poster_path={movie.poster_path} title={movie.title}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
}

export default GetFilm;

