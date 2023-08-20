import styles from './footer.module.css'


function Footer({namebutton,desc}:{namebutton?:string,desc:string}) {
    return (<header className={styles.header}>
      <div className= {styles.container}>
        <div className={styles.footer_wrapper}>
            {/* <button className={styles.namebutton}>{namebutton}</button> */}
            <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </header>);
  }
  
  export default Footer;