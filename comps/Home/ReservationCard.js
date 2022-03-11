import React from "react";
import Paper from "@mui/material/Paper";
import styles from "../../styles/ReservationCard.module.css";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MainButton from "../Mainbutton";
import DropDownMUI from "../DropDownMUI";

function ReservationCard() {
  return (
    <Paper>
      <div className={styles.header}>
        <h2>حجز الطبيب</h2>
      </div>
      <div className={styles.ReservationType}>
        <h3>نوع الكشف</h3>
        <FormGroup className={styles.checkList}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="كشف اونلاين"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="كشف بالمنزل"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="كشف بالعيادة"
          />
        </FormGroup>
      </div>
      <div className={styles.ReservationTime}>
        <h3>ميعاد الكشف</h3>
        <DropDownMUI text="مارس 23" options={["مارس 24", "مارس 23"]} />
        <div className={styles.chipList}>
          {Array(5)
            .fill()
            .map((i, indx) => (
              <p key={indx} className={styles.ReservationTime_chip}>
                02:00 am
              </p>
            ))}{" "}
          {Array(2)
            .fill()
            .map((i, indx) => (
              <p key={indx} className={styles.ReservationTime_chip_disabled}>
                02:00 am
              </p>
            ))}{" "}
          {Array(5)
            .fill()
            .map((i, indx) => (
              <p key={indx} className={styles.ReservationTime_chip}>
                02:00 am
              </p>
            ))}{" "}
        </div>
        <MainButton text="حجز الطبيب" />
      </div>
    </Paper>
  );
}

export default ReservationCard;
