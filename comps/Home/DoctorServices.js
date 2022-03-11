import Paper from "@mui/material/Paper";
import { RiStethoscopeLine } from "react-icons/ri";
import ListTitle from "./ListTitle";
import styles from "../../styles/Home.module.css";
import style from "../../styles/DoctorServices.module.css";

const DoctorServices = () => {
  return (
    <Paper elevation={1} className={styles.paper}>
      <ListTitle
        icon={<RiStethoscopeLine className={styles.ListTitle_icon} />}
        title="خدمات الطبيب"
      />
      <div className={style.DoctorServicesList}>
        <div className={style.chip}>حشو الاسنان</div>
        <div className={style.chip}>حشو الاسنان</div>
        <div className={style.chip}>حشو الاسنان</div>
        <div className={style.chip}>حشو الاسنان</div>
        <div className={style.chip}>حشو الاسنان</div>
        <div className={style.chip}>حشو الاسنان</div>
        <div className={style.chip}>حشو الاسنان</div>
      </div>
    </Paper>
  );
};

export default DoctorServices;
