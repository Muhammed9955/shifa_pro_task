import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import styles from "../styles/comp/DropDownMUI.module.css";
import { AiFillCaretDown } from "react-icons/ai";

export default function DropDownMUI({ icon, text, options }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.Menu}
      >
        <p className={styles.MenuText}>
          {icon}
          {text}
        </p>

        <AiFillCaretDown className={styles.downIcon} />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {options?.map((i, indx) => (
          <MenuItem key={indx} onClick={handleClose}>
            {i}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
