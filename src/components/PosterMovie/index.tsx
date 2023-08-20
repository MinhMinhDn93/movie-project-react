import styles from './PosterMovie.module.css'
import { BiRightArrow } from 'react-icons/bi';


type MovieBoxType ={
    title: string,
    desc: string,
    img : string,
};
function PosterMovie ({title,desc,img}: MovieBoxType) {
  return (
    <div className={styles.poster_movie}>
                <img src={img} alt={title} />
                <p className={styles.title_movie}>{title}</p>
                <p className={styles.desc}>{desc}</p>
                <span className={styles.movie_type}><a href="" className={styles.play_btn}>{<BiRightArrow/>}</a>Watch the trailer</span>
              </div>
  )
}
export default PosterMovie