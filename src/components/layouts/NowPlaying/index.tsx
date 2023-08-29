import clsx from "clsx";
import Header from "../header";
import NavBar from "../navbar";
import styles from "./NowPlaying.module.css";
import Content from "../content";
import Footer from "../footer";
import GetDetailFilm from "../../GetDetailFilm";
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PosterMovie from "../../PosterMovie";
function NowPlaying() {
  const location = useLocation();
  const [params] = useSearchParams();

  const pages = params.get('page');
  const int_page = pages ? parseInt(pages) : 1;

  console.log('location',location);

  const [count, setCount] = useState(1);

  const handleUp = () => {
    setCount(count + 1);
    console.log('handleUp',count);
  };

  const handleDown = () => {
    setCount(count - 1);
    console.log('handleDown',count);
  };

  const paginatePage = useNavigate();

  useEffect(() => {
    paginatePage(`/now_playing?page=${count}`);
  }, [count]);

  return (
    <>
      <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.header)}>
          <Header />
        </div>
        <div className={clsx(styles.aside)}>
          <div className={clsx(styles.navbar)}>
            <NavBar />
          </div>
          <div className={clsx(styles.content)}>
            <div className={styles.main_content}>
              <Content>
              <PosterMovie title="Hitman's Wife's Bodyguard" img="./image/home-background.png" desc="Releasing 23 july" />
                <GetDetailFilm url={`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${int_page}`} listmovie='Now Playing' 
                 className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5"/>
                {count === 1 ? (
                  <div className={styles.button_wrapper}>
                    <button onClick={handleUp} className={styles.button_up}>Next Page</button>
                  </div>
                ) : (
                  <div className={styles.button_wrapper}>
                    <button onClick={handleDown} className={styles.button_down}>Previous Page</button>
                    <button onClick={handleUp} className={styles.button_up}>Next Page</button>
                  </div>
                )}
              </Content>
            </div>
          </div>
        </div>
        <div className={clsx(styles.footer)}>
          <Footer desc="© MovieVennie All Right Reserved" />
        </div>
      </div>
    </>
  );
}

export default NowPlaying;
