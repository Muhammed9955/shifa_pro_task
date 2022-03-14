import styles from "../../styles/comp/InfoStripItem.module.css";

const InfoStripItem = ({ icon, title, text }) => {
  return (
    <div className={styles.InfoStripItem}>
      <div className={styles.InfoStripItem_Icon}>{icon} </div>
      <h2>{title} </h2>
      <p>{text} </p>
    </div>
  );
};

export default InfoStripItem;
