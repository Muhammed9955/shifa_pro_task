import InfoCard from "./InfoCard";
import { RiStethoscopeLine } from "react-icons/ri";
import { colors } from "../../utils/data";
import Grid from "@mui/material/Grid";

const Specialties = () => {
  return (
    <Grid container spacing={8}>
      <Grid item md={6} xs={12}>
        <div>
          <h1 style={{ fontSize: "2rem" }}>التخصصات</h1>
          <p> نص تفصي لينص تفصيلي نص تفصيلي </p>
          <div
            style={{
              width: "100%",
              height: "80vh",
              background: "#C4C4C4",
              borderRadius: "2rem",
              marginTop: "1rem",
            }}
          ></div>
        </div>{" "}
      </Grid>
      <Grid item md={6} xs={12}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <InfoCard
            icon={<RiStethoscopeLine />}
            text="أبدا الرحلة الكشف مع طبيبك"
            title=" حجز الطبيب "
            bg={colors.green}
          />
          <div style={{ marginTop: "2rem" }}>
            <InfoCard
              icon={<RiStethoscopeLine />}
              text="أبدا الرحلة الكشف مع طبيبك"
              title=" حجز الطبيب "
              //   bg={colors.green}
            />
          </div>
          <div style={{ marginTop: "-2rem" }}>
            <InfoCard
              icon={<RiStethoscopeLine />}
              text="أبدا الرحلة الكشف مع طبيبك"
              title=" حجز الطبيب "
              //   bg={colors.green}
            />
          </div>

          <InfoCard
            icon={<RiStethoscopeLine />}
            text="أبدا الرحلة الكشف مع طبيبك"
            title=" حجز الطبيب "
            // bg={colors.green}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Specialties;
