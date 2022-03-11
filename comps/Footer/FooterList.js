import styles from "../../styles/Footer.module.css";

const FooterList = ({ item }) => {
  return (
    <div className={styles.footerList}>
      <h3>{item.title} </h3>
      {item.titleListItems.map((i, indx) => (
        <p key={indx}>{i.titleListItem} </p>
      ))}
    </div>
  );
};

export default FooterList;
