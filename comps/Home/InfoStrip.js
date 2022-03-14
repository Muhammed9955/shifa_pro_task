import { colors } from "../../utils/data";
import InfoStripItem from "./InfoStripItem";
import { RiStethoscopeLine } from "react-icons/ri";
import styles from "../../styles/comp/InfoStrip.module.css";

const InfoStrip = () => {
  return (
    <div className={styles.InfoStrip}>
      <InfoStripItem
        title="خدماتك الطبية في متناول يدك"
        text="ﺎﻬﻠﻴﺼﺤﺗ ﻚﻨﻜﻤﻳ تﺎﻣﺪﺨﻟا ﻦﻣ ﺮﺒﻛأ دﺪﻋ ﻰﻟإ جﺎﺘﺤﺗ ﺖﻨﻛ اذإﺎﻳاﺰﻤﻟا ﻞﻀﻓأ ﻰﻠﻋ ﻞﺼﺣاو ﻚﺒﻴﺒﻃ ﻊﻣ جﺎﻠﻌﻟاو ﻒﺸﻜﻟا ﺔﻠﺣر أﺪﺑا"
        icon={<RiStethoscopeLine />}
      />
      <InfoStripItem
        title="خدماتك الطبية في متناول يدك"
        text="ﺎﻬﻠﻴﺼﺤﺗ ﻚﻨﻜﻤﻳ تﺎﻣﺪﺨﻟا ﻦﻣ ﺮﺒﻛأ دﺪﻋ ﻰﻟإ جﺎﺘﺤﺗ ﺖﻨﻛ اذإﺎﻳاﺰﻤﻟا ﻞﻀﻓأ ﻰﻠﻋ ﻞﺼﺣاو ﻚﺒﻴﺒﻃ ﻊﻣ جﺎﻠﻌﻟاو ﻒﺸﻜﻟا ﺔﻠﺣر أﺪﺑا"
        icon={<RiStethoscopeLine />}
      />
      <InfoStripItem
        title="خدماتك الطبية في متناول يدك"
        text="ﺎﻬﻠﻴﺼﺤﺗ ﻚﻨﻜﻤﻳ تﺎﻣﺪﺨﻟا ﻦﻣ ﺮﺒﻛأ دﺪﻋ ﻰﻟإ جﺎﺘﺤﺗ ﺖﻨﻛ اذإﺎﻳاﺰﻤﻟا ﻞﻀﻓأ ﻰﻠﻋ ﻞﺼﺣاو ﻚﺒﻴﺒﻃ ﻊﻣ جﺎﻠﻌﻟاو ﻒﺸﻜﻟا ﺔﻠﺣر أﺪﺑا"
        icon={<RiStethoscopeLine />}
      />
    </div>
  );
};

export default InfoStrip;
