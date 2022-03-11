import styles from "../../styles/Footer.module.css";

const StoreButton = ({ text, icon }) => {
  return (
    <div className={styles.StoreButton}>
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default StoreButton;
