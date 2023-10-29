
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Detail.module.css";
import clsx from "clsx";
import CircleMark from "../CircleMark";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  AiOutlineUnorderedList,
  AiFillHeart,
  AiTwotoneAppstore,
  AiFillStar,
} from "react-icons/ai";
import Icon from "../Icon";
import Modal from "antd/es/modal/Modal";
import video from '../../../public/video/Download.mp4'
import CommentBox from "../CommentBox";
import IconGreen from "../IconGreen";
interface Genres {
  id: number;
  name: string;
}

interface dataType {
  id: number;
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
interface Cast {
  original_name: string;
  profile_path: string;
  character: string;
  id: number;
}

interface Character {
  id: number;
  cast: Cast[];
}

type TrailerType = {
  load: () => void;
  pause: () => void;
};

const Detail = () => {
  const [data, setData] = useState<dataType>();
  const [character, setCharacter] = useState<Character>();
  const { id } = useParams(); // Lấy tham số "id" từ đường dẫn
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);



  const handleLoginRequired = () => {
    setLoginModalVisible(true);
  };
  const showModal = () => {
    const trailer: TrailerType | null = document.getElementById("trailer") as TrailerType | null;
    setIsModalOpen(true);
    trailer?.load();
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    const trailer: TrailerType | null = document.getElementById("trailer") as TrailerType | null;
    setIsModalOpen(false);
    trailer?.pause();
  };

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
        },
      })
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  return (
    <div className={clsx(styles.wrapper)}>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={"40%"} footer={false} closeIcon={false}>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <video src={video} width={1000} autoPlay={true} id="trailer" onEnded={handleCancel}></video>
        </div>
      </Modal>
      <Modal
        open={loginModalVisible}
        onOk={() => setLoginModalVisible(false)}
        onCancel={() => setLoginModalVisible(false)}
        closeIcon={false}
        footer={null}
        width={"40%"}
      >
        <div className={styles.box_notice}>
          <p>You need to log in to watch movies !</p>
        </div>
      </Modal>
      {data && (
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.content_img)}>
            <img
              className={clsx(styles.img)}
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`}
              alt=""
            />
          </div>

          <div className={clsx(styles.content_text)}>
            <h2>
              {data.original_title} ({data.release_date.slice(0, 4)})
            </h2>
            <ul className={clsx(styles.space)}>
              <li>Date Release: {data.release_date} </li>
              <li className={clsx(styles.ul)}>
                Genres:
                <ul className={clsx(styles.ul)}>
                  {data.genres.map((genre, i) => (
                    <li key={i}>
                      {i < data.genres.length - 1
                        ? `${genre.name},`
                        : `${genre.name}`}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <ul className={clsx(styles.ul, styles.action)}>
                  <li className={clsx("flex", "items-center")}>
                    <CircleMark degree={data.vote_average} />
                    <span className={clsx("pl-1")}>User Score</span>
                  </li>
                  <li>
                    <AiOutlineUnorderedList />{" "}
                  </li>
                  <li>
                    <AiFillHeart />
                  </li>
                  <li>
                    <AiTwotoneAppstore />
                  </li>
                  <li>
                    <AiFillStar />
                  </li>
                  <li className={clsx("flex", "items-center")} onClick={handleLoginRequired}>
                    <Icon />
                    <span className={clsx("pl-1")}> Play now</span>
                  </li>
                  <li className={clsx("flex", "items-center")} onClick={showModal}>
                    <IconGreen />
                    <span className={clsx("pl-1")} >Watch Trailer</span>
                  </li>
                </ul>
              </li>
              <li>
                Run Time:
                {` ${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`}
              </li>
              <li>
                Over View:
                <br></br>
                {data.overview}
              </li>
            </ul>
          </div>
        </div>
      )}
      {character && (
        <div>
          <h4> Top Billed Cast:</h4>
          <div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              navigation
              // scrollbar={{ draggable: true, dragSize: 100 }}
              spaceBetween={15}
              slidesPerView={7}
            >
              {character.cast.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={clsx(styles.character_info)}>
                    <img
                      className={clsx(styles.img_character)}
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.profile_path}`}
                      alt={item.profile_path}
                    />
                    <div className={clsx(styles.character_actor)}>
                      {item.character}
                    </div>
                    <div className={clsx(styles.character_name_origin)}>
                      {item.original_name}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <CommentBox />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
