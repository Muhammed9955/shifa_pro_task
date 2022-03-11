import styles from "../../styles/Footer.module.css";
import FooterList from "./FooterList";
import StoreButton from "./StoreButton";
import { GrApple } from "react-icons/gr";
import { FaGooglePlay } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { footerData } from "../../utils/data";
import Image from "next/image";
// import Logo from "../../assets/logo-footer.svg";

const Footer = () => {
  console.log({ footerData });
  return (
    <footer className={styles.footer}>
      {/* footer Resonsive */}
      <div className={styles.footerContainerRespon}>
        <div className={styles.FooterListRespon}>
          {footerData.map((i, indx) => (
            <FooterList key={indx} item={i} />
          ))}
        </div>

        <div className={styles.footerLeft}>
          <h2>متوفر علي </h2>
          <StoreButton
            text="Google Play"
            icon={<FaGooglePlay className={styles.StoreButtonIcon} />}
          />
          <br />
          <StoreButton
            text="Apple Stroe"
            icon={<GrApple className={styles.StoreButtonIcon} />}
          />
        </div>

        <div className={styles.footerRight}>
          <img
            src="https://www.shifapro.com/assets/website/image/logo-footer.svg"
            alt="logo"
            className={styles.footerRight}
          />

          <div className={styles.footerRightSocial}>
            <BsInstagram className={styles.footerRightSocialIcon} />
            <GrTwitter className={styles.footerRightSocialIcon} />
            <FaFacebookF className={styles.footerRightSocialIcon} />
          </div>
        </div>
      </div>

      {/* footer  */}

      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <h2>متوفر علي </h2>
          <StoreButton
            text="Google Play"
            icon={<FaGooglePlay className={styles.StoreButtonIcon} />}
          />
          <br />
          <StoreButton
            text="Apple Stroe"
            icon={<GrApple className={styles.StoreButtonIcon} />}
          />
        </div>

        {footerData.map((i, indx) => (
          <FooterList key={indx} item={i} />
        ))}
        <div className={styles.footerRight}>
          <img
            src="https://www.shifapro.com/assets/website/image/logo-footer.svg"
            alt="logo"
            className={styles.footerRight}
          />

          <div className={styles.footerRightSocial}>
            <BsInstagram className={styles.footerRightSocialIcon} />
            <GrTwitter className={styles.footerRightSocialIcon} />
            <FaFacebookF className={styles.footerRightSocialIcon} />
          </div>
        </div>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;
