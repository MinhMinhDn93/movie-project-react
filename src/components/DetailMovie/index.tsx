import clsx from "clsx";
import styles from "./DetailMovie.module.css";
import Header from "../layouts/header";
import NavBar from "../layouts/navbar";
import Content from "../layouts/content";
import PosterMovie from "../PosterMovie";
import Footer from "../layouts/footer";
import Detail from "../Detail";

function DetailMovie() {
  
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
                <PosterMovie title="Hitman's Wife's Bodyguard" img="https://movie-site-delta.vercel.app/img/home-background.png?fbclid=IwAR3K6c5iQaAN9Wo54Quv5qXwRVM3Y8x5gv14ohqzInzwS4wOYms5QqNf34w" desc="Releasing 23 july"/>
                <Detail/>
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

export default DetailMovie;
