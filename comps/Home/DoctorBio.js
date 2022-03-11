import Paper from "@mui/material/Paper";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ListTitle from "./ListTitle";
import styles from "../../styles/Home.module.css";

const DoctorBio = () => {
  return (
    <Paper elevation={1} className={styles.paper}>
      <ListTitle
        icon={<AiOutlineInfoCircle className={styles.ListTitle_icon} />}
        title="معلموات عن الطبيب"
      />
      <p>
        هتابس رىمر س نسمسي م نسةسةمنس نمسى سمن ن مسيىة نمسبى نسمىة سمى خمسن
        هتابس رىمر س نسمسي م نسةسةمنس نمسى سمن ن مسيىة نمسبى نسمىة سمى خمسن
      </p>
    </Paper>
  );
};

export default DoctorBio;
