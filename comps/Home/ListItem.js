import styles from "../../styles/Home.module.css";

const ListItem = ({ icon, text, subtitle }) => {
  return (
    <div className={styles.ListItem}>
      {icon}
      <span>{subtitle && subtitle}</span>
      <p>
        {subtitle && ":"} {text}
      </p>
    </div>
  );
};

export default ListItem;
