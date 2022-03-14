import { Paper } from "@mui/material";
import MainButton from "../Mainbutton";
import styles from "../../styles/comp/Team.module.css";

const TeamCard = ({ title, text, btnText }) => {
  return (
    <Paper className={styles.TeamCard}>
      <div className={styles.TeamCard_img} />
      <div className={styles.TeamCard_content}>
        <h2>{title} </h2>
        <p className={styles.TeamCard_text}>{text} </p>
        <MainButton text={btnText} width="10rem" />
      </div>
    </Paper>
  );
};

export default TeamCard;
