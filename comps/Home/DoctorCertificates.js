import Paper from "@mui/material/Paper";
import { BiFirstAid } from "react-icons/bi";
import ListTitle from "./ListTitle";
import styles from "../../styles/Home.module.css";
import style from "../../styles/DoctorCertificates.module.css";

const DoctorCertificates = () => {
  return (
    <Paper elevation={1} className={styles.paper}>
      <ListTitle
        icon={<BiFirstAid className={styles.ListTitle_icon} />}
        title="شهادات وصور خاصة بالطبيب"
      />

      <div className={style.DoctorCertificates_imgs}>
        <img
          //   src="https://anesthesiology.duke.edu/wp-content/uploads/2014/01/PADC-Certificate-of-Appreciation.jpg"
          src="https://assets.materialup.com/uploads/d6244c7f-b96c-4023-8555-a0412999dffe/preview.png"
          alt="certificate"
          className={style.img}
        />
        {Array(6).fill().map((i, indx) => (
          <img
            key={indx}
            //   src="https://anesthesiology.duke.edu/wp-content/uploads/2014/01/PADC-Certificate-of-Appreciation.jpg"
            src="https://assets.materialup.com/uploads/d6244c7f-b96c-4023-8555-a0412999dffe/preview.png"
            alt="certificate"
            className={style.img}
          />
        ))}
      </div>
    </Paper>
  );
};

export default DoctorCertificates;
