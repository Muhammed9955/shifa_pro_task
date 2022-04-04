import { Grid } from "@mui/material";
import styles from "../../styles/comp/Reviews.module.css";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  return (
    <div className={styles.Reviews}>
      <p className={styles.ReviewsTitle}> من تقيممات المرضي</p>
      <Grid container spacing={4}>
        <Grid item sm={6}>
          <ReviewItem
            text="دكتور شاطر جدا و محترم وسعدت بالتعامل معاه"
            username="رشا السيد "
          />
        </Grid>
        <Grid item sm={6}>
          <ReviewItem
            text="دكتور شاطر جدا و محترم وسعدت بالتعامل معاه"
            username="رشا السيد "
          />
        </Grid>
      </Grid>
      {/* <div className={styles.ReviewList}>
        <ReviewItem
          text=" ﻪﻌﻣ ﻞﻣﺎﻌﺘﻟﺎﺑ تﺪﻌﺳو مﺮﺘﺤﻣو اﺪﺟ ﺮﻃﺎﺷ رﻮﺘﻛد
        ﻪﺗﺎﻣﺪﺧو ﺮﻴﺘﻛ ﻪﻨﻣ تﺪﻔﺘﺳاو اﺪﺟ ﺪﻴﻔﻣ ﻖﻴﺒﻄﺘﻟاو
        ﻪﻣاﺪﺨﺘﺳﺎﺑ ﻞﻜﻟا ﺢﺼﻧأو ةزﺎﺘﻤﻣ"
          username="رشا السيد "
        />
        <ReviewItem
          text=" ﻪﻌﻣ ﻞﻣﺎﻌﺘﻟﺎﺑ تﺪﻌﺳو مﺮﺘﺤﻣو اﺪﺟ ﺮﻃﺎﺷ رﻮﺘﻛد
        ﻪﺗﺎﻣﺪﺧو ﺮﻴﺘﻛ ﻪﻨﻣ تﺪﻔﺘﺳاو اﺪﺟ ﺪﻴﻔﻣ ﻖﻴﺒﻄﺘﻟاو
        ﻪﻣاﺪﺨﺘﺳﺎﺑ ﻞﻜﻟا ﺢﺼﻧأو ةزﺎﺘﻤﻣ"
          username="رشا السيد "
        />
      </div> */}
      <p></p>
      <div class=""></div>
    </div>
  );
};

export default Reviews;
