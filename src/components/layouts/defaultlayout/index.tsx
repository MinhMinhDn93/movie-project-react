import clsx from "clsx";
import Header from "../header";
import NavBar from "../navbar";
import styles from "./defaultlayout.module.css";
import Content from "../content";
// import Getdata from "../../Getdata/GetMovie";
import GetFilm from "../../GetFilm";
import PosterMovie from "../../PosterMovie";
import Footer from "../footer";

function DefaultLayout() {
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
                <GetFilm url="https://api.themoviedb.org/3/movie/popular" listmovie='Popular Film' />
                <GetFilm url="https://api.themoviedb.org/3/movie/now_playing" listmovie='Now Playing' />
              </Content>
            </div>
          </div>
        </div>
        <div className={clsx(styles.footer)}>
            <Footer namebutton="Next Page" desc="© MovieVennie All Right Reserved" />
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
