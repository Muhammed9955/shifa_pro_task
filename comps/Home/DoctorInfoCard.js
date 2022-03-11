import React from "react";
import styles from "../../styles/comp/DoctorInfoCard.module.css";
import { FaStar } from "react-icons/fa";
import ListItem from "./ListItem";
import { doctorInfo } from "../../utils/data";
import Paper from "@mui/material/Paper";

function DoctorInfoCard() {
  return (
    <Paper elevation={1} className={styles.DoctorInfoCard}>
      <img
        className={styles.DoctorInfoCard_Img}
        src="https://i.pinimg.com/736x/1a/ac/b7/1aacb718f4086c68ed9c47cd26a2b032.jpg"
      />

      <div className={styles.DoctorInfoCard_left}>
        <h2>د/ليلاس الشعراني</h2>
        <h3>أستشاري زراعةالأسنان والتركيبات وتقويم الاسنان بجامعة هارفرد</h3>
        <div className={styles.DoctorInfoCard_left_rating}>
          <FaStar className={styles.starIcon} />
          <FaStar className={styles.starIcon} />
          <FaStar className={styles.starIcon} />
          <FaStar className={styles.starIcon} />
          <FaStar className={styles.starIconGrey} />
          <p>تقييم 87</p>
        </div>
        <hr />
        {doctorInfo.map((i, indx) => (
          <ListItem subtitle={i.subtitle} text={i.text} icon={i.icon} />
        ))}
      </div>
    </Paper>
  );
}

export default DoctorInfoCard;
