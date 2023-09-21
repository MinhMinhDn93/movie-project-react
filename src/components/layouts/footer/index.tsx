import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoTwitter, BiSolidInfoCircle } from 'react-icons/bi';
import HeaderLogo from '../../HeaderLogo';
import styles from './footer.module.css'
import { FaYoutube } from 'react-icons/fa';
import clsx from "clsx";

function Footer({ namebutton, desc }: { namebutton?: string, desc: string }) {
  return (<header className={styles.header}>
    <div className={styles.container}>
      <div className={clsx(styles.footer_top, "grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3")}>
        <div >
          <div>
            <HeaderLogo />
          </div>
          <div className="text-white">
            <p>3298 Grant Street Longview, TX United Kingdom 75601</p>
            <p>1-202-555-0106</p>
            <div className={styles.list_icon}>
              <BiLogoFacebookCircle />
              <BiLogoTwitter />
              <FaYoutube />
              <BiLogoInstagramAlt />
              <BiSolidInfoCircle />
            </div>
          </div>
        </div>
        <div className={styles.footer_item}>
          <h4>SUPPORT</h4>
          <div className="text-white">
            <p><a href="">Contact Us</a></p>
            <p><a href="">About Page</a></p>
            <p><a href="">Privacy</a></p>
          </div>
        </div>
        <div className={styles.footer_item}>
          <h4>COMPANY</h4>
          <div className="text-white">
            <p><a href="">About</a></p>
            <p><a href="">Blog</a></p>
            <p><a href="">Affiliate</a></p>
            <p><a href="">Login</a></p>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  </header>);
}

export default Footer;