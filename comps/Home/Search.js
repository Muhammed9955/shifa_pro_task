import React from "react";
import CustomDropdown from "../CustomDropdown";
import MainButton from "../Mainbutton";
import { GoSearch } from "react-icons/go";
import styles from "../../styles/comp/Search.module.css";
import FadeMenu from "../MenuMUI";
import { menuData } from "../../utils/data";
function Search() {
  return (
    <div className={styles.search}>
      {/* <CustomDropdown /> */}

      {menuData?.map((i, indx) => (
        <FadeMenu key={indx} text={i.text} icon={i.icon} options={i.options} />
      ))}

      <MainButton
        text="أبحث"
        icon={<GoSearch className={styles.searchIcon} />}
        bgColor="#4AB9B1"
        width="8rem"
        height="3rem"
      />
    </div>
  );
}

export default Search;
