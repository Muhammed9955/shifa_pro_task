import Head from "next/head";
import Link from "next/link";
import DoctorInfoCard from "../comps/Home/DoctorInfoCard";
import styles from "../styles/Home.module.css";
import Grid from "@mui/material/Grid";
import DoctorBio from "../comps/Home/DoctorBio";
import DoctorWorkPlaces from "../comps/Home/DoctorWorkPlaces";
import DoctorCertificates from "../comps/Home/DoctorCertificates";
import DoctorServices from "../comps/Home/DoctorServices";
import PatientsInstroctions from "../comps/Home/PatientsInstroctions";
import ReservationCard from "../comps/Home/ReservationCard";
import Search from "../comps/Home/Search";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShifaPro | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <img
        src="https://ak.picdn.net/shutterstock/videos/21048625/thumb/1.jpg"
        className={styles.homeHeaderImg}
      />
      <div className={styles.homeContianer}>
        <div className={styles.search}>
          <Search />
        </div>

        <Grid container spacing={8}>
          <Grid item md={7} xs={12}>
            <DoctorInfoCard />
            <DoctorBio />
            <DoctorWorkPlaces />
            <DoctorServices />
            <DoctorCertificates />
            <PatientsInstroctions />
          </Grid>
          <Grid item md={5} xs={12}>
            <ReservationCard />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
