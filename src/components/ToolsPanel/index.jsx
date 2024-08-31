import "@/styles/components/toolsPanel.scss";
import { Button } from "@mui/material";
import { useState } from "react";

const ToolsPanel = (props) => {
  const [show, setShow] = useState(true);
  return (
    <aside className="tools-panel">
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
              variant="text"
              className="d-flex flex-column align-items-center tools-panel__btn"
            >
              <img src="/assets/home.png" alt="home.png" width={25} />
              <p className="mt-2">Home</p>
            </Button>
            <Button
              variant="text"
              className="d-flex flex-column align-items-center tools-panel__btn"
            >
              <img src="/assets/realtime.png" alt="home.png" width={25} />
              <p className="mt-2">Realtime</p>
            </Button>
            <Button
              variant="text"
              className="d-flex flex-column align-items-center tools-panel__btn"
            >
              <img src="/assets/events.png" alt="home.png" width={25} />
              <p className="mt-2">Events</p>
            </Button>
            <Button
              variant="text"
              className="d-flex flex-column align-items-center tools-panel__btn"
            >
              <img src="/assets/devices.png" alt="home.png" width={25} />
              <p className="mt-2">Devices</p>
            </Button>
            <Button
              variant="text"
              className="d-flex flex-column align-items-center tools-panel__btn"
            >
              <img src="/assets/Domain.png" alt="home.png" width={25} />
              <p className="mt-2">Domain</p>
            </Button>
            <Button
              variant="text"
              className="d-flex flex-column align-items-center tools-panel__btn"
            >
              <img src="/assets/Settings.png" alt="home.png" width={25} />
              <p className="mt-2">Settings</p>
            </Button>
          </div>
          <Button
            variant="text"
            className="d-flex flex-column align-items-center tools-panel__btn mt-5"
          >
            <img src="/assets/last-one.png" alt="home.png" width={25} />
          </Button>
        </>
      )}
    </aside>
  );
};

export default ToolsPanel;
