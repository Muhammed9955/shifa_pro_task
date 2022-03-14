import styles from "../../styles/comp/Team.module.css";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className={styles.Team}>
      <h1 style={{ fontSize: "2rem" }}> فريق العمل</h1>
      <p style={{ width: "40%" }}>
        {" "}
        ﻲﻠﻴﺼﻔﺗ ﺺﻧ ﻲﻠﻴﺼﻔﺗ ﺺﻧ ﻲﻠﻴﺼﻔﺗ ﺺﻧ ﻲﻠﻴﺼﻔﺗ ﺺﻧ ﻲﻠﻴﺼﻔﺗ ﺺﻧ ﻲﻠﻴﺼﻔﺗ ﺺﻧ ﻲﻠﻴﺼﻔﺗ ﺺﻧ
        ﻲﻠﻴﺼﻔﺗ ﺺﻧ ﻲﻠﻴﺼﻔﺗ ﺺﻧ ﻲﻠﻴﺼﻔﺗ ﺺﻧ ﻲﻠﻴﺼﻔﺗ ﺺﻧ ﻲﻠﻴﺼﻔﺗ ﺺﻧ ﻲﻠﻴﺼﻔﺗ ﺺﻧ ﻲﻠﻴﺼﻔﺗ ﺺﻧ
        ﻲﻠﻴﺼﻔﺗ ﺺﻧ
      </p>

      <div className={styles.TeamCards}>
        <TeamCard
          title="فريق الاطباء"
          text="ﺎﻬﻠﻴﺼﺤﺗ ﻚﻨﻜﻤﻳ تﺎﻣﺪﺨﻟا ﻦﻣ ﺮﺒﻛأ دﺪﻋ ﻰﻟإ جﺎﺘﺤﺗ ﺖﻨﻛ اذإﺎﻳاﺰﻤﻟا ﻞﻀﻓأ ﻰﻠﻋ ﻞﺼﺣاو ﻚﺒﻴﺒﻃ ﻊﻣ جﺎﻠﻌﻟاو ﻒﺸﻜﻟا ﺔﻠﺣر أﺪﺑا"
          btnText="أحجز الطبيب"
        />
        <TeamCard
          title="فريق الاطباء"
          text="ﺎﻬﻠﻴﺼﺤﺗ ﻚﻨﻜﻤﻳ تﺎﻣﺪﺨﻟا ﻦﻣ ﺮﺒﻛأ دﺪﻋ ﻰﻟإ جﺎﺘﺤﺗ ﺖﻨﻛ اذإﺎﻳاﺰﻤﻟا ﻞﻀﻓأ ﻰﻠﻋ ﻞﺼﺣاو ﻚﺒﻴﺒﻃ ﻊﻣ جﺎﻠﻌﻟاو ﻒﺸﻜﻟا ﺔﻠﺣر أﺪﺑا"
          btnText="أحجز الطبيب"
        />
        <TeamCard
          title="فريق الاطباء"
          text="ﺎﻬﻠﻴﺼﺤﺗ ﻚﻨﻜﻤﻳ تﺎﻣﺪﺨﻟا ﻦﻣ ﺮﺒﻛأ دﺪﻋ ﻰﻟإ جﺎﺘﺤﺗ ﺖﻨﻛ اذإﺎﻳاﺰﻤﻟا ﻞﻀﻓأ ﻰﻠﻋ ﻞﺼﺣاو ﻚﺒﻴﺒﻃ ﻊﻣ جﺎﻠﻌﻟاو ﻒﺸﻜﻟا ﺔﻠﺣر أﺪﺑا"
          btnText="أحجز الطبيب"
        />
        <TeamCard
          title="فريق الاطباء"
          text="ﺎﻬﻠﻴﺼﺤﺗ ﻚﻨﻜﻤﻳ تﺎﻣﺪﺨﻟا ﻦﻣ ﺮﺒﻛأ دﺪﻋ ﻰﻟإ جﺎﺘﺤﺗ ﺖﻨﻛ اذإﺎﻳاﺰﻤﻟا ﻞﻀﻓأ ﻰﻠﻋ ﻞﺼﺣاو ﻚﺒﻴﺒﻃ ﻊﻣ جﺎﻠﻌﻟاو ﻒﺸﻜﻟا ﺔﻠﺣر أﺪﺑا"
          btnText="أحجز الطبيب"
        />
      </div>
    </div>
  );
};

export default Team;
