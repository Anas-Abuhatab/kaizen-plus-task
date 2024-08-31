import "@/styles/components/toolsPanel.scss";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const ToolsPanel = (props) => {
  const [show, setShow] = useState(true);
  const [showEvent, setShowEvent] = useState(true);
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(url);
  };
  const handleShowDetails = () => {
    setShowEvent(!showEvent);
  };
  return (
    <div className="position-relative">
      <aside className={`tools-panel ${props.class}`}>
        <img
          onClick={() => {
            setShow(!show);
          }}
          src="/assets/logo.png"
          alt="logo-img"
          width={52}
          height={78}
        />
        {show && (
          <>
            <div className="d-flex flex-column align-items-center gap-2 mt-4">
              <Button
                onClick={() => handleNavigate("/")}
                variant="text"
                className="d-flex flex-column align-items-center tools-panel__btn"
              >
                <img src="/assets/home.png" alt="home.png" width={25} />
                <p className="mt-2">Home</p>
              </Button>
              <Button
                onClick={() => handleNavigate("/map")}
                variant="text"
                className="d-flex flex-column align-items-center tools-panel__btn"
              >
                <img src="/assets/realtime.png" alt="home.png" width={25} />
                <p className="mt-2">Realtime</p>
              </Button>
              <Button
                onClick={() => {
                  handleNavigate("/map");
                  handleShowDetails();
                }}
                variant="text"
                className="d-flex flex-column align-items-center tools-panel__btn"
              >
                <img src="/assets/events.png" alt="home.png" width={25} />
                <p className="mt-2">Events</p>
              </Button>
              <Button
                onClick={() => handleNavigate("/map")}
                variant="text"
                className="d-flex flex-column align-items-center tools-panel__btn"
              >
                <img src="/assets/devices.png" alt="home.png" width={25} />
                <p className="mt-2">Devices</p>
              </Button>
              <Button
                onClick={() => handleNavigate("/map")}
                variant="text"
                className="d-flex flex-column align-items-center tools-panel__btn"
              >
                <img src="/assets/Domain.png" alt="home.png" width={25} />
                <p className="mt-2">Domain</p>
              </Button>
              <Button
                onClick={() => handleNavigate("/map")}
                variant="text"
                className="d-flex flex-column align-items-center tools-panel__btn"
              >
                <img src="/assets/Settings.png" alt="home.png" width={25} />
                <p className="mt-2">Settings</p>
              </Button>
            </div>
            <Button
              onClick={() => handleNavigate("/map")}
              variant="text"
              className="d-flex flex-column align-items-center tools-panel__btn mt-5"
            >
              <img src="/assets/last-one.png" alt="home.png" width={25} />
            </Button>
          </>
        )}
      </aside>

      {show && showEvent && (
        <div className="details-popup">
          <div>
            <InfoOutlinedIcon
              style={{ cursor: "help", marginLeft: "auto" }}
              titleAccess={props.info}
              color="inherit"
            />
            <p>Emergency Details</p>
          </div>
          <div>
            <TextField
              placeholder="Refining - RR1"
              id="emergency_domain"
              name="emergency_domain"
              type="text"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolsPanel;
