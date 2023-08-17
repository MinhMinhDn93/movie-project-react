import clsx from "clsx";
import Header from "../header";
import NavBar from "../navbar";
import styles from "./defaultlayout.module.css";
import Content from "../content";
// import Getdata from "../../Getdata/GetMovie";
import PopularFilm from "../../PopularFilm";

function DefaultLayout() {
  return (
    <>
      <div className="wrapper">
        <div className={clsx(styles.header)}>
          <Header />
        </div>
        <div className={clsx(styles.aside)}>
          <div className={clsx(styles.navbar)}>
            <NavBar />
          </div>
          <div className={clsx(styles.content)}>
            <Content>
              {/* <Getdata />
               */}
              <PopularFilm />
            </Content>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
