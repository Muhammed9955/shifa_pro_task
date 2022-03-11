import Paper from "@mui/material/Paper";
import { BsChatText } from "react-icons/bs";
import ListTitle from "./ListTitle";
import styles from "../../styles/Home.module.css";
import style from "../../styles/PatientsInstroctions.module.css";
import Grid from "@mui/material/Grid";

const PatientsInstroctions = () => {
  return (
    <Paper elevation={1} className={styles.paper}>
      <ListTitle
        icon={<BsChatText className={styles.ListTitle_icon} />}
        title="تعلميات للمرضي"
      />
      <Grid container spacing={2}>
        <Grid item md={4} xs={6}>
          <p>ضروروة الحضور بالكمامة</p>
          <p>الدخول للطبيب باسبقية الحضور</p>
        </Grid>
        <Grid item md={8} xs={6}>
          <p>عدم احضار اطفال</p>
          <p>اعضاء بينات المريض كاملة والحفاظ علي نظام المكان</p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PatientsInstroctions;
