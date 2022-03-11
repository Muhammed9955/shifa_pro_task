import styles from "../../styles/WorkSpaceItem.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

const WorkSpaceItem = ({ title, address, phone }) => {
  return (
    <div className={styles.WorkSpaceItem}>
      <h4>{title}</h4>
      <p>
        <HiOutlineLocationMarker className={styles.WorkSpaceItem_icon} />
        {address}
      </p>
      {phone && (
        <p>
          <AiOutlinePhone className={styles.WorkSpaceItem_icon} />
          {phone}
        </p>
      )}
    </div>
  );
};

export default WorkSpaceItem;
