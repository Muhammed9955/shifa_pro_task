import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Button from "@mui/material/Button";
import { MdOutlineShoppingCart } from "react-icons/md";
import MainButton from "./Mainbutton";
import CustomDropdown from "./CustomDropdown";
import DropDownMUI from "./DropDownMUI";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav_right}>
          <img
            src="https://www.shifapro.com/assets/website/image/logo-footer.svg"
            alt="logo"
          />
          <h3>الرئيسية</h3>
          <h3>من نحن</h3>
          <h3>الكادر الطبي</h3>
          <h3>اتصل بنا</h3>
        </div>

        <div className={styles.nav_left}>
          <MdOutlineShoppingCart className={styles.nav_left_logo} />
          {/* <Button className={styles.nav_left_btn} variant="contained">تسجيل الدخول</Button> */}
          <DropDownMUI
            text={
              <div className={styles.nav_lang_text}>
                <img
                  src="https://cdn.countryflags.com/thumbs/turkey/flag-400.png"
                  className={styles.nav_lang_Img}
                />
                تركيا
              </div>
            }
            options={[
              <div className={styles.nav_lang_text}>
                تركيا
                <img
                  src="https://cdn.countryflags.com/thumbs/turkey/flag-400.png"
                  className={styles.nav_lang_Img}
                />
              </div>,
              <div className={styles.nav_lang_text}>
                تركيا
                <img
                  src="https://cdn.countryflags.com/thumbs/turkey/flag-400.png"
                  className={styles.nav_lang_Img}
                />
              </div>,
            ]}
          />
          <MainButton text="تسجيل الدخول" />
        </div>

        {/* <Link href="/">
        <a>Home</a>
      </Link> */}
      </nav>
      <nav className={styles.nav_Respon}>
        <HiOutlineMenuAlt3
          className={styles.nav_mob__icon}
          onClick={() => setOpen(!open)}
        />
        <img
          src="https://www.shifapro.com/assets/website/image/logo-footer.svg"
          alt="logo"
        />
        {open && (
          // <div className={open ? "nav_mob__menu acitve" : "nav_mob__menu"}>
          <div className={styles.nav_mob__menu}>
            <p>الرئيسية</p>
            <p>من نحن</p>
            <p>الكادر الطبي</p>
            <p>اتصل بنا</p>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
