import NavItem from '../../NavItems';
import styles from './navbar.module.css'
import { HiOutlineHome } from 'react-icons/hi';
import { BiSolidHot,BiFilm } from 'react-icons/bi';
import { FaRegCompass,FaRegHeart } from 'react-icons/fa';


function NavBar() {
  return <>
  <div className={styles.navbar_wrapper}>
      <NavItem  icon={<HiOutlineHome/>} label='Home' url='home'/>
      <NavItem  icon={<BiSolidHot/>} label='Trending' url='trending'/>
      <NavItem  icon={<FaRegCompass/>} label='Explore' url='explore'/>
      <NavItem  icon={<BiFilm/>} label='Movies' url='movies'/>
      <NavItem  icon={<FaRegHeart/>} label='Favorite' url='favorite'/>
  </div>
  </>;
}

export default NavBar;
