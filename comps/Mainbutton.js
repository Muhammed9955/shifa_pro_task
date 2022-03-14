import styles from "../styles/comp/MainButton.module.css";

const MainButton = ({
  icon,
  text,
  width = "auto",
  bgColor,
  height,
  outline,
}) => {
  return (
    <div
      className={styles.MainButton}
      style={{
        width,
        background: outline ? "transparent" : bgColor,
        height,
        border: outline ? "1px solid white" : "none",
      }}
    >
      {icon && icon}
      <p> {text}</p>
    </div>
  );
};

export default MainButton;
