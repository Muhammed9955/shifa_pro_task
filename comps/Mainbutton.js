import styles from "../styles/comp/MainButton.module.css";

const MainButton = ({ icon, text, width = "auto", bgColor, height }) => {
  return (
    <div
      className={styles.MainButton}
      style={{ width, background: bgColor, height }}
    >
      {icon && icon}
      <p> {text}</p>
    </div>
  );
};

export default MainButton;
