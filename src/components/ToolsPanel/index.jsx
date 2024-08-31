import "@/styles/components/toolsPanel.scss";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const ToolsPanel = (props) => {
  const [show, setShow] = useState(true);
  const [showEvent, setShowEvent] = useState(false);
  const [data, setData] = useState({
    currentLayout: null,
  });

  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(url);
  };
  const handleShowDetails = () => {
    setShowEvent(!showEvent);
  };
  const showLayoutSelector = (layout) => {
    data.currentLayout = layout;
    props.setMapLayout(layout);
    setData({ ...data });
    setShowEvent(false);
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
                className={`d-flex flex-column align-items-center tools-panel__btn ${!showEvent ? "tools-panel__btn--event-btn" : ""}`}
              >
                <img src="/assets/events.png" alt="home.png" width={25} />
                <p className="mt-2" style={{color : showEvent ? "#1186FA" :"var(--text)"}}>Events</p>
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
          <div className="d-flex justify-content-start align-items-center w-100 p-2">
            <InfoOutlinedIcon
              className="mx-2"
              style={{ cursor: "help" }}
              titleAccess={props.info}
              color="inherit"
            />
            <p className="fw-bold">Emergency Details</p>
          </div>
          <div className="my-3">
            <p className="my-2 fw-bold">Emergency Domain</p>
            <TextField
              className="w-100 rounded mb-3"
              style={{ background: "#2C2C2C" }}
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
          <Divider sx={{ borderWidth: "1px", borderColor: "#fff" }} />

          <div className="my-3">
            <p className="my-2 fw-bold">Emergency Area</p>
            <p className="my-2 fw-bold">Choose emergency area shape</p>
            <div className="d-flex justify-content-start align-items-center w-100 p-2 gap-2 overflow-auto">
              <Button
                onClick={() => {
                  showLayoutSelector("RECTANGLE");
                }}
                variant="text"
              >
                <img width={40} src="/assets/Frame1.png" alt="frame" />
              </Button>
              <Button
                onClick={() => {
                  showLayoutSelector("CIRCLE");
                }}
                variant="contained"
              >
                <img width={40} src="/assets/Frame2.png" alt="frame" />
              </Button>
              <Button
                onClick={() => {
                  showLayoutSelector("POLYGON");
                }}
                variant="contained"
              >
                <img width={40} src="/assets/Frame3.png" alt="frame" />
              </Button>
              <Button
                onClick={() => {
                  showLayoutSelector("POLYGON");
                }}
                variant="contained"
              >
                <img width={40} src="/assets/Frame4.png" alt="frame" />
              </Button>
            </div>
          </div>
          <Divider sx={{ borderWidth: "1px", borderColor: "#fff" }} />

          <div className="my-3">
            <p className="my-2 fw-bold">Emergency Name</p>
            <TextField
              className="w-100 rounded mb-3"
              style={{ background: "#2C2C2C" }}
              placeholder="Default Name"
              id="emergency_domain"
              name="emergency_domain"
              type="text"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <Divider sx={{ borderWidth: "1px", borderColor: "#fff" }} />

          <div className="my-3">
            <p className="my-2 fw-bold">Emergency Layers</p>
            <div className="d-flex flex-column justify-content-start align-items-start">
              <FormControlLabel
                className="mx-0"
                control={<Checkbox color="info" />}
                label={"Employees"}
              />
              <FormControlLabel
                className="mx-0"
                control={<Checkbox color="info" />}
                label={"Points of interest"}
              />
              <FormControlLabel
                className="mx-0"
                control={<Checkbox color="info" />}
                label={"HSE Zones"}
              />
              <FormControlLabel
                className="mx-0"
                control={<Checkbox color="info" />}
                label={"Events"}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center w-100 gap-2 flex-xs-column flex-md-row">
              <Button
                style={{ backgroundColor: "#404040" }}
                onClick={() => {
                  setShowEvent(false);
                }}
                variant="contained"
                color="inherit"
                className="rounded"
                sx={{ fontSize: ".7rem" }}
              >
                Save & Broadcast later
              </Button>
              <Button
                onClick={() => {
                  setShowEvent(false);
                }}
                variant="contained"
                color="info"
                className="rounded"
                sx={{ fontSize: ".7rem" }}
              >
                Save & Broadcast Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolsPanel;
