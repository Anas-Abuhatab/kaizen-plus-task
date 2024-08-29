import "@/styles/components/header.scss";
import { Box, Button, InputBase } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-bar">
      <Box className="header-actions header-actions--search-box">
        <SearchIcon />
        <InputBase
          placeholder={"Search..."}
          className="header-actions--search-box__input"
          inputProps={{ "aria-label": "search" }}
        />
      </Box>
      <Button
        variant="contained"
        className="header-actions header-actions--note"
      >
        <NotificationsNoneIcon />
      </Button>
      <Button
        variant="contained"
        className="header-actions header-actions--modules"
        startIcon={<img src="/assets/modules.png" width={20} height={20} />}
      >
        Modules
      </Button>
      </div>
      <img
        src="/assets/profile-img.png"
        width={46}
        height={46}
        alt="profile-img"
      />
    </div>
  );
};

export default Header;
