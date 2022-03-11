import styles from "../../styles/Home.module.css";

const ListTitle = ({ icon, title }) => {
  return (
    <div className={styles.ListTitle}>
        {icon}
        <h2> {title}</h2>
    </div>
  );
};

export default ListTitle;
