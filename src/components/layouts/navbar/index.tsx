import NavItem from '../../NavItems';
import styles from './navbar.module.css'
import { HiOutlineHome } from 'react-icons/hi';
import { BiSolidHot,BiFilm } from 'react-icons/bi';
import { FaRegCompass,FaRegHeart } from 'react-icons/fa';


function NavBar() {
  return <>
  <div className={styles.navbar_wrapper}>
      <NavItem  icon={<HiOutlineHome/>} label='Home' url='/'/>
      <NavItem  icon={<BiSolidHot/>} label='PopularMovie' url='/popular'/>
      <NavItem  icon={<FaRegCompass/>} label='Now Playing' url='/now_playing'/>
      <NavItem  icon={<BiFilm/>} label='Upcoming' url='/upcoming'/>
      <NavItem  icon={<FaRegHeart/>} label='Top Rated' url='/toprated'/>
  </div>
  </>;
}

export default NavBar;
