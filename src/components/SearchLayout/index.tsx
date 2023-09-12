import clsx from "clsx";
import styles from "./SearchLayout.module.css";
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from "../layouts/header";
import NavBar from "../layouts/navbar";
import Content from "../layouts/content";
import PosterMovie from "../PosterMovie";
import GetDetailFilm from "../GetDetailFilm";
import Footer from "../layouts/footer";
import SearchFilm from "../SearchFilm";

function SearchLayout() {
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
                <SearchFilm
                 className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 mt-7"/>
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

export default SearchLayout;
