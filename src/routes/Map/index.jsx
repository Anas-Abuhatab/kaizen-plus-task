import "@/styles/pages/map.scss";
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import ToolsPanel from "../../components/ToolsPanel";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const TheMap = (props) => {
  const [map, setMap] = useState(null); // State to store the map instance
  const [showList, setShowList] = useState(null);

  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyDEjGbNU2as8Rs0uMqngzYUYnxZLCqTL7s",
      version: "weekly",
      libraries: ["places"],
    });
    loader.load().then(async () => {
      if (mapRef.current) {
        const { Map } = await window.google.maps.importLibrary("maps");

        const mapInstance = new Map(mapRef.current, {
          mapId: "ddddd" + Math.random(),
          center: {
            lat: 24.718611,
            lng: 46.676044,
          },
          zoom: 12, // Initial zoom level
          streetViewControl: false, // Disable Street View (Pegman)
        });

        setMap(mapInstance); // Store the map instance in state

        // Should be AdvancedMarkerElement
        const { Marker } = await window.google.maps.importLibrary("marker");

        const marker = new Marker({
          position: {
            lat: 24.718611,
            lng: 46.676044,
          },
          map: mapInstance,
          draggable: props.EditMode, // Allow the marker to be dragged
        });

        if (props.EditMode) {
          marker?.addListener("dragend", (event) => {
            const newLat = event.latLng.lat();
            const newLng = event.latLng.lng();

            // Smoothly pan the map to the new marker position
            mapInstance.panTo({ lat: newLat, lng: newLng });

            props.getMapPosition({ lat: newLat, lng: newLng });
          });

          // Add an event listener for clicks on the map
          mapInstance?.addListener("click", (event) => {
            const newLat = event.latLng.lat();
            const newLng = event.latLng.lng();

            // Move the marker to the new position
            marker.setPosition({ lat: newLat, lng: newLng });

            // Smoothly pan the map to the new marker position
            mapInstance.panTo({ lat: newLat, lng: newLng });

            props.getMapPosition({ lat: newLat, lng: newLng });
          });
        }
      }
    });
  }, []);

  const handleShowAddList = () => {
    setShowList(!showList);
  };
  const handleSelect = (type) => {
    setShowList(false);
    switch (type) {
      case "Assembly Point":
        
        break;
    
      default:
        break;
    }
    setShowList(!showList);
  };

  return (
    <div className="the-map">
      <ToolsPanel class="position-absolute z-2" />
      <div ref={mapRef} style={{ width: "100%", height: "100vh" }} />
      <button onClick={handleShowAddList} className="map-add-btn">
        <AddCircleIcon fontSize="inherit" color="inherit" />
      </button>
      {showList && (
        <div className="map-add-list">
          <div>
            <p className="fs-6 fw-bold text-light p-3">
              Add Points of Interests
            </p>
            <ul className="map-add-list__list border-top p-3">
              <li onClick={()=>{handleSelect("Assembly Point")}} className="d-flex justify-content-start align-items-center w-100 cursor-pointer p-2 m-1 text-center">
                <span className="mx-2">
                  <img
                    src="/assets/icon8.png"
                    alt="map-icon"
                    width={20}
                    height={20}
                  />
                </span>
                <span className="text-light mx-2">Assembly Point</span>
              </li>
              <li onClick={()=>{handleSelect("Fire Extinguisher")}} className="d-flex justify-content-start align-items-center w-100 cursor-pointer p-2 m-1 text-center">
                <span className="mx-2">
                  <img
                    src="/assets/icon5.png"
                    alt="map-icon"
                    width={20}
                    height={20}
                  />
                </span>
                <span className="text-light mx-2">Fire Extinguisher</span>
              </li>
              <li onClick={()=>{handleSelect("Safety Exit")}} className="d-flex justify-content-start align-items-center w-100 cursor-pointer p-2 m-1 text-center">
                <span className="mx-2">
                  <img
                    src="/assets/icon7.png"
                    alt="map-icon"
                    width={20}
                    height={20}
                  />
                </span>
                <span className="text-light mx-2">Safety Exit</span>
              </li>
              <li onClick={()=>{handleSelect("First Aid")}} className="d-flex justify-content-start align-items-center w-100 cursor-pointer p-2 m-1 text-center">
                <span className="mx-2">
                  <img
                    src="/assets/icon6.png"
                    alt="map-icon"
                    width={20}
                    height={20}
                  />
                </span>
                <span className="text-light mx-2">First Aid</span>
              </li>
              <li onClick={()=>{handleSelect("Shower")}} className="d-flex justify-content-start align-items-center w-100 cursor-pointer p-2 m-1 text-center">
                <span className="mx-2">
                  <img
                    src="/assets/icon10.png"
                    alt="map-icon"
                    width={20}
                    height={20}
                  />
                </span>
                <span className="text-light mx-2">Shower</span>
              </li>
              <li onClick={()=>{handleSelect("Life Boat")}} className="d-flex justify-content-start align-items-center w-100 cursor-pointer p-2 m-1 text-center">
                <span className="mx-2">
                  <img
                    src="/assets/icon9.png"
                    alt="map-icon"
                    width={20}
                    height={20}
                  />
                </span>
                <span className="text-light mx-2">Life Boat</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheMap;
