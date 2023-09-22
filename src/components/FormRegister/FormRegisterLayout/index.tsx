import clsx from "clsx";
import styles from "./FormRegisterLayout.module.css";
import Content from "../../layouts/content";
import FormLogin from "..";
import Footer from "../../layouts/footer";
import HeaderLogo from "../../HeaderLogo";

function FormRegisterLayout() {

  return (
    <>
      <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.header)}>
          <HeaderLogo />
        </div>
        <div className={clsx(styles.aside)}>
          <div className={clsx(styles.content)}>
            <div className={styles.main_content}>
              <Content>
              <FormLogin/>
              </Content>
            </div>
          </div>
        </div>
        <div className={clsx(styles.footer)}>
          <Footer desc="© MovieVennie All Right Reserved" />
        </div>
      </div>
    </>
  );
}

export default FormRegisterLayout;
