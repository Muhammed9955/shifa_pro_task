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
import OurServices from "../comps/Home/OurServices";
import Specialties from "../comps/Home/Specialties";
import InfoStrip from "../comps/Home/InfoStrip";
import MainButton from "../comps/Mainbutton";
import Divider from "../comps/Divider";
import Team from "../comps/Home/Team";
import Reviews from "../comps/Home/Reviews";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShifaPro | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      {/* <img src={homeHeader} className={styles.homeHeaderImg} /> */}

      <div className={`${styles.homeHeaderImg}`}>
        <div className={styles.homeHeaderCon}>
          <h2 className={styles.homeHeader}>
            أحصل علي صحة أفضل من أجل حياة أفضل{" "}
          </h2>
          <p className="">
            ﺖﻨﻛ اذإﺎﻳاﺰﻤﻟا ﻞﻀﻓأ ﻰﻠﻋ ﻞﺼﺣاو ،ﻚﺒﻴﺒﻃ ﻊﻣ جﺎﻠﻌﻟاو ﻒﺸﻜﻟا ﺔﻠﺣر أﺪﺑا
            ،نﺎﻟاﺎﻬﻴﻠﻋ لﻮﺼﺤﻟا ﻚﻧﺎﻜﻣﺈﺒﻓ تﺎﻣﺪﺨﻟا ﻦﻣ ﺮﺒﻛأ دﺪﻋ ﻰﻟإ جﺎﺘﺤﺗ .ﻞﻀﻔﻤﻟا
            كﺪﻋﻮﻣو ﻚﺒﻴﺒﻃ رﺎﻴﺘﺧا :ﻮﻫ ﻚﻴﻠﻋ ﺎﻣ ﻞﻛ
          </p>
        </div>
        <div className={styles.headerBtns}>
          <div style={{ marginLeft: "2rem" }}>
            <MainButton text="ابدأ الان " width="15rem" />
          </div>
          <MainButton text="اتصل بنا" outline width="15rem" />
        </div>
      </div>

      <div className={styles.homeContianer}>
        <div className={styles.search}>
          <Search />
        </div>
        <OurServices />
        <Divider />
        <Specialties />
        <Divider />
      </div>
      <Divider />
      <InfoStrip />
      <Divider />
      <Team />
      <Divider />
      <Reviews />

      {/* old home  */}
      {/* <Grid container spacing={8}>
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
        </Grid> */}
    </>
  );
}
