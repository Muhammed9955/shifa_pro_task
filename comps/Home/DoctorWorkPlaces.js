import Paper from "@mui/material/Paper";
import { BiFirstAid } from "react-icons/bi";
import ListTitle from "./ListTitle";
import styles from "../../styles/Home.module.css";
import WorkSpaceItem from "./WorkSpaceItem";
import Grid from "@mui/material/Grid";

const DoctorWorkPlaces = () => {
  return (
    <Paper elevation={1} className={styles.paper}>
      <ListTitle
        icon={<BiFirstAid className={styles.ListTitle_icon} />}
        title="أماكن العمل"
      />
      <Grid container spacing={2}>
        <Grid item md={6} xs={6}>
          <WorkSpaceItem
            title="مراكز اسنان كلينيك للاسنان"
            address="شارع الحر-عمرات الحي-طربلس-تركيا"
            phone="0110022666"
          />
        </Grid>
        <Grid item md={6} xs={6}>
          <WorkSpaceItem
            title="مراكز اسنان كلينيك للاسنان"
            address="شارع الحر-عمرات الحي-طربلس-تركيا"
          />
        </Grid>
        <Grid item md={6} xs={6}>
          <WorkSpaceItem
            title="مراكز اسنان كلينيك للاسنان"
            address="شارع الحر-عمرات الحي-طربلس-تركيا"
          />
        </Grid>
        <Grid item md={6} xs={6}>
          <WorkSpaceItem
            title="مراكز اسنان كلينيك للاسنان"
            address="شارع الحر-عمرات الحي-طربلس-تركيا"
            phone="0110022666"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DoctorWorkPlaces;
