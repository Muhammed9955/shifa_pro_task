import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiTimerLine } from "react-icons/ri";
import { WiTime7 } from "react-icons/wi";
import { BsCreditCard } from "react-icons/bs";
import { RiStethoscopeLine } from "react-icons/ri";
import { RiUmbrellaFill } from "react-icons/ri";
import HomeStyles from "../styles/Home.module.css";
import MenuStyle from "../styles/comp/Menu.module.css";

export const colors = {
  green: "#4ab9b1",
  lightgreen:"#F1FAF9"
};
export const footerData = [
  {
    title: "الكادر الطبي",
    titleListItems: [
      { titleListItem: "انضم كطبيب" },
      { titleListItem: "انضم كممرض" },
      { titleListItem: "انضم كمركز طبي" },
      { titleListItem: "انضم كصيدلي" },
      ,
    ],
  },
  {
    title: "أحجز عن طريق",
    titleListItems: [
      { titleListItem: "التخصص" },
      { titleListItem: "المنطقة" },
      { titleListItem: "المستشفي" },
      { titleListItem: "المراكز الطبية والعيادات" },
      ,
    ],
  },
  {
    title: "لينكات سريعة",
    titleListItems: [
      {
        titleListItem: "شروط الأستخدام",
      },

      { titleListItem: "سياسية الخصوصية" },
      { titleListItem: "من نحن" },
      { titleListItem: "اتصل بنا" },
    ],
  },
];

export const doctorInfo = [
  {
    icon: <HiOutlineLocationMarker className={HomeStyles.ListItem_icon} />,
    subtitle: "",
    text: "شارع الحر-عمرات الحي-طربلس-تركيا",
  },
  {
    icon: <RiTimerLine className={HomeStyles.ListItem_icon} />,
    subtitle: "مواعيد العمل",
    text: " (10:00am-5:00pm)  السبت-الخميس ",
  },
  {
    icon: <WiTime7 className={HomeStyles.ListItem_icon} />,
    subtitle: "مدة الانتظر ",
    text: "30:00 دقيقة",
  },
  {
    icon: <BsCreditCard className={HomeStyles.ListItem_icon} />,
    subtitle: "سعر الكشف",
    text: "100 ليرا",
  },
];

export const menuData = [
  {
    text: "تخصص الاسنان",
    options: ["تخصص الاسنان", "عيون", "باطنة"],
    icon: <RiStethoscopeLine className={MenuStyle.MenuIcon} />,
  },
  {
    text: "أختار المحافظة",
    options: ["اسطنبول", "انقرة", "ترابزون"],
    icon: <HiOutlineLocationMarker className={MenuStyle.MenuIcon} />,
  },
  {
    text: "أختار المنطقة",
    options: ["افجيلار", "الفاتخ", "اسنيورت"],
    icon: <HiOutlineLocationMarker className={MenuStyle.MenuIcon} />,
  },
  {
    text: "أختار التأمين",
    options: ["شامل", "مدفوع"],
    icon: <RiUmbrellaFill className={MenuStyle.MenuIcon} />,
  },
];
