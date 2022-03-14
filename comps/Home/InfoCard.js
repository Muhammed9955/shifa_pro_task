import { Paper } from "@mui/material";
import styles from "../../styles/comp/InfoCard.module.css";

const InfoCard = ({ icon, title, text, bg, elevation = 3 }) => {
  return (
    <Paper
      elevation={elevation}
      className={styles.InfoCard}
      style={{ background: bg ? bg : "white", color: bg ? "white" : "black" }}
    >
      <div
        className={styles.InfoCard_Icon}
        style={{ background: bg ? "white" : "lightgrey" }}
      >
        {icon}
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </Paper>
  );
};

export default InfoCard;
