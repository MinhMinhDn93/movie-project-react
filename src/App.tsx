import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./components/globalstyles";
import DefaultLayout from "./components/layouts/defaultlayout";
import Home from "./pages/Home";
import PopularMovie from "./pages/PopularMoviePage";
import NowPlaying from "./pages/NowPlayingPage";
import { TopRated } from "./pages/TopRated";
import UpComing from "./pages/UpComing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/popular" element={<PopularMovie />} />
            <Route path="/now_playing" element={<NowPlaying />} />
            <Route path="/upcoming" element={<UpComing />} />
            <Route path="/toprated" element={<TopRated />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
