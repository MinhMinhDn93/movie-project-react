import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import GlobalStyles from "./components/globalstyles";
// import DefaultLayout from "./components/layouts/defaultlayout";
import Home from "./pages/Home";
import TopRatedPage from "./pages/TopRatedPage";
import PopularMoviePage from "./pages/PopularMoviePage";
import NowPlayingPage from "./pages/NowPlayingPage";
import UpComingPage from "./pages/UpComingPage";
import DetailMoviesPage from "./pages/DetailMoviesPage";
import NoPage from "./pages/NoPage";
import SearchMoviePage from "./pages/SearchMoviePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/popular" element={<PopularMoviePage />} />
            <Route path="/now_playing" element={<NowPlayingPage />} />
            <Route path="/upcoming" element={<UpComingPage />} />
            <Route path="/top_rated" element={<TopRatedPage />} />
            <Route path="/moviesdetail/:id" element={<DetailMoviesPage />} />
            <Route path="/search" element={<SearchMoviePage />} />
            <Route path="*" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
