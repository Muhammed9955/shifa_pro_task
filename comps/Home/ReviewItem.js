import styles from "../../styles/comp/Reviews.module.css";
import { FaStar } from "react-icons/fa";
import { Paper } from "@mui/material";

const ReviewItem = ({ text, rate, username }) => {
  return (
    <div className={styles.ReviewItem}>
      <Paper className={styles.ReviewItem_userImg}></Paper>
      <Paper className={styles.ReviewItem_centent}>
        <p>{text}</p>

        <div className={styles.Reviews_icons}>
          <FaStar className={styles.Reviews_icon} />
          <FaStar className={styles.Reviews_icon} />
          <FaStar className={styles.Reviews_icon} />
          <FaStar className={styles.Reviews_icon} />
          <FaStar className={styles.Reviews_icon} />
        </div>
        <p style={{ fontWeight: "bold" }}>{username}</p>
      </Paper>
    </div>
  );
};

export default ReviewItem;
