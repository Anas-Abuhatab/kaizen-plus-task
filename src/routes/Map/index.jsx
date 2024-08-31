import "@/styles/pages/map.scss";
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import ToolsPanel from "../../components/ToolsPanel";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const TheMap = (props) => {
  const [map, setMap] = useState(null); // State to store the map instance
  const [showList, setShowList] = useState(null);
  const [mapLayout, setMapLayout] = useState(null);
  const drawingManagerRef = useRef(null);
  const [markers, setMarkers] = useState([]); // Store markers

  const mapRef = useRef(null);

  const addMarker =async (location) => {

    const { Marker } = await window.google.maps.importLibrary("marker");

    const marker = new Marker({
      position: location,
      map: map,
      draggable: true, // Allow the marker to be dragged
    });
    // Store the marker in state
    setMarkers((prevMarkers) => [...prevMarkers, marker]);

    // Handle marker drag event
    marker.addListener("dragend", (event) => {
      const newPosition = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
    });
  };

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyDEjGbNU2as8Rs0uMqngzYUYnxZLCqTL7s",
      version: "weekly",
      libraries: ["places", "drawing"],
    });
    loader.load().then(async () => {
      if (mapRef.current) {
        const { Map, DrawingManager } = await window.google.maps.importLibrary(
          "maps"
        );

        const mapInstance = new Map(mapRef.current, {
          mapId: "ddddd" + Math.random(),
          center: {
            lat: 31.9544,
            lng: 35.9106,
          },
          zoom: 12, // Initial zoom level
          streetViewControl: false, // Disable Street View (Pegman)
        });

        setMap(mapInstance); // Store the map instance in state

        // Should be AdvancedMarkerElement
        const { Marker } = await window.google.maps.importLibrary("marker");

        const marker = new Marker({
          position: {
            lat: 31.9544,
            lng: 35.9106,
          },
          map: mapInstance,
          draggable: true, // Allow the marker to be dragged
        });

        
          marker?.addListener("dragend", (event) => {
            const newLat = event.latLng.lat();
            const newLng = event.latLng.lng();

            // Smoothly pan the map to the new marker position
            mapInstance.panTo({ lat: newLat, lng: newLng });
          });

          // Add an event listener for clicks on the map
          mapInstance?.addListener("click", (event) => {
            const newLat = event.latLng.lat();
            const newLng = event.latLng.lng();

            addMarker({ lat: newLat, lng: newLng })
            // Move the marker to the new position
            // marker.setPosition({ lat: newLat, lng: newLng });

            // Smoothly pan the map to the new marker position
            mapInstance.panTo({ lat: newLat, lng: newLng });

          });
        
        const drawingManager = await new window.google.maps.drawing.DrawingManager({
          drawingMode: null, // No mode by default; you can activate one by default if needed
          drawingControl: true, // Show drawing controls
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ["rectangle", "circle", "polygon"], // Shapes you want to allow
          },
          rectangleOptions: {
            fillColor: "#ff0000",
            fillOpacity: 0.2,
            strokeWeight: 2,
            clickable: false,
            editable: true,
            zIndex: 1,
          },
          circleOptions: {
            fillColor: "#ff0000",
            fillOpacity: 0.2,
            strokeWeight: 2,
            clickable: false,
            editable: true,
            zIndex: 1,
          },
          polygonOptions: {
            fillColor: "#ff0000",
            fillOpacity: 0.2,
            strokeWeight: 2,
            clickable: false,
            editable: true,
            zIndex: 1,
          },
        });
        drawingManager.setMap(mapInstance);
        drawingManagerRef.current = drawingManager;

        window.google.maps.event.addListener(
          drawingManager,
          "overlaycomplete",
          (event) => {
            const shape = event.overlay;
            shape.type = event.type;

            if (shape.type === "rectangle") {
              const bounds = shape.getBounds();
              const ne = bounds.getNorthEast();
              const sw = bounds.getSouthWest();

              let result = {
                type: "rectangle",
                coordinates: {
                  northEast: { lat: ne.lat(), lng: ne.lng() },
                  southWest: { lat: sw.lat(), lng: sw.lng() },
                },
              }
              // console.log(result);
              
            } else if (shape.type === "circle") {
              const center = shape.getCenter();
              const radius = shape.getRadius();

              let result = {
                type: "circle",
                coordinates: {
                  center: { lat: center.lat(), lng: center.lng() },
                  radius,
                },
              }
              // console.log(result);
            } else if (shape.type === "polygon") {
              const path = shape.getPath();
              const coordinates = [];
              path.forEach((point) => {
                coordinates.push({ lat: point.lat(), lng: point.lng() });
              });

              let result = {
                type: "polygon",
                coordinates,
              }
              // console.log(result);
            }
          }
        );
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

  const handleSetMapLayout = (layout) => {
    setMapLayout(layout);
  };

  const handleDrawRectangle = (mode) => {
    if (drawingManagerRef.current) {
      drawingManagerRef.current.setDrawingMode(window.google.maps.drawing.OverlayType[`${mode}`]);
    }
  };
  useEffect(() => {
    handleDrawRectangle(mapLayout)
  }, [mapLayout]);

  return (
    <>
      <div className="the-map">
        <ToolsPanel
          class="position-absolute z-2"
          setMapLayout={handleSetMapLayout}
        />
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
                <li
                  onClick={() => {
                    handleSelect("Assembly Point");
                  }}
                  className="d-flex justify-content-start align-items-center w-100 cursor-pointer p-2 m-1 text-center"
                >
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
                <li
                  onClick={() => {
                    handleSelect("Fire Extinguisher");
                  }}
                  className="d-flex justify-content-start align-items-center w-100 cursor-pointer p-2 m-1 text-center"
                >
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
                <li
                  onClick={() => {
                    handleSelect("Safety Exit");
                  }}
                  className="d-flex justify-content-start align-items-center w-100 cursor-pointer p-2 m-1 text-center"
                >
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
                <li
                  onClick={() => {
                    handleSelect("First Aid");
                  }}
                  className="d-flex justify-content-start align-items-center w-100 cursor-pointer p-2 m-1 text-center"
                >
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
                <li
                  onClick={() => {
                    handleSelect("Shower");
                  }}
                  className="d-flex justify-content-start align-items-center w-100 cursor-pointer p-2 m-1 text-center"
                >
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
                <li
                  onClick={() => {
                    handleSelect("Life Boat");
                  }}
                  className="d-flex justify-content-start align-items-center w-100 cursor-pointer p-2 m-1 text-center"
                >
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
    </>
  );
};

export default TheMap;
