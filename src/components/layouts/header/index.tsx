import styles from '../header/Header.module.css'
import HeaderLogo from '../../HeaderLogo'
import SearchMovie from '../../HeaderSearch/SearchMovie';
import User from '../../User';

function Header() {
  return (<header className={styles.header}>
    <div className= {styles.container}>
      <div className={styles.header_wrapper}>
        <HeaderLogo />
        <SearchMovie/>
        <User/>
      </div>
    </div>
  </header>);
}

export default Header;
