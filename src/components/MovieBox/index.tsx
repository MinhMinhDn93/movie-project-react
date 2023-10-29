import Icon from '../Icon';
import styles from './MovieBox.module.css'

type MovieBoxType ={
    poster_path : string,
    title: string,
    overview?: string,
    vote_average?:number,
};
function MovieBox ({poster_path,title}: MovieBoxType) {
  return (
    <div className={styles.movie_box}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                <h3 className={styles.title_movie}>{title}</h3>
                <span className={styles.movie_type}>action</span>
                <a href="" className={styles.play_btn}>{<Icon/>}</a>
              </div>
  )
}
export default MovieBox;
