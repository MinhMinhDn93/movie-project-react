import NavItem from '../../NavItems';
import styles from './navbar.module.css'
import { navsList } from './data';
import { HiOutlineHome } from 'react-icons/hi';
import { BiSolidHot,BiFilm } from 'react-icons/bi';
import { FaRegCompass,FaRegHeart } from 'react-icons/fa';

type NaviItemType = {
  id: number,
  label: string,
  url: string,
}
function NavBar() {
  return <>
  <div className={styles.navbar_wrapper}>
      <NavItem  icon={<HiOutlineHome/>} label='Home'/>
      <NavItem  icon={<BiSolidHot/>} label='Trending'/>
      <NavItem  icon={<FaRegCompass/>} label='Explore'/>
      <NavItem  icon={<BiFilm/>} label='Movies'/>
      <NavItem  icon={<FaRegHeart/>} label='Favorite'/>
  </div>
  </>;
}

export default NavBar;
