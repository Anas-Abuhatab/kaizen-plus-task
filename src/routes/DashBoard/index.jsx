import "@/styles/pages/dashBoard.scss";
import ToolsPanel from "@/components/ToolsPanel";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

import { Grid, Typography, Box } from "@mui/material";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
  BarElement,
} from "chart.js";
import BaseCard from "@/components/BaseCard";

import {
  lineData,
  lineOptions,
  threeLineData,
  threeLineOptions,
  doughnutData,
  doughnutOptions,
  textCenter,
  barData1,
  barData2,
  barData3,
  barData4,
  barOption,
} from "@/mockDB";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const DashBoard = (props) => {
  return (
    <div className="d-flex justify-content-start align-items-start w-100">
      <ToolsPanel />
      <div className="dashboard-content-container">
        <h1 className="dashboard-main-title">Realtime Dashboard</h1>
        <Box className="d-flex flex-wrap" sx={{ p: 2 }}>
          <Grid container spacing={2}>
            {/* Header Section */}
            <Grid item xs={12} md={4} minHeight={324}>
              <div className="dashboard-info-card">
                <div className="dashboard-info-card__text">
                  <Typography className="dashboard-info-card__text__title">
                    ABCD Site
                  </Typography>
                  <Typography className="dashboard-info-card__text__info">
                    RR1 Area
                  </Typography>
                  <div className="dashboard-info-card__text__description">
                    <div>
                      <p>1,148</p>
                      <p>Active People</p>
                    </div>
                    <div>
                      <p>924</p>
                      <p>Active Devices</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4} minHeight={324}>
              <BaseCard
                title={"Live events"}
                subTitle={"Current statistics for the events"}
                downArrow
                info={"info"}
                body={
                  <div className="d-flex flex-column justify-content-center align-items-center w-100 mt-5">
                    <div className="base-card__circle-container">
                      <div className="d-flex flex-column align-items-center justify-content-center gap-4">
                        <div className="base-card__circle base-card__circle--blue"></div>
                        <div className="mt-3">
                          <p className="d-flex justify-content-center align-items-center text-success">
                            <span className="text-light fs-3 fw-bold"> 13</span>
                            <span
                              className="mx-2 p-1 rounded"
                              style={{
                                background: "#37393D",
                                color: "#66C088",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <ArrowUpwardIcon />
                              15.2%
                            </span>
                          </p>
                          <p className="fs-6" style={{ color: "#B2BAC9" }}>
                            Total Info
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-center justify-content-center gap-4">
                        <div className="base-card__circle base-card__circle--orange"></div>
                        <div className="mt-3">
                          <p className="d-flex justify-content-center align-items-center text-success">
                            <span className="text-light fs-3 fw-bold"> 5</span>
                            <span
                              className="mx-2 p-1 rounded"
                              style={{
                                background: "#37393D",
                                color: "#66C088",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <ArrowUpwardIcon />
                              15.2%
                            </span>
                          </p>
                          <p className="fs-6" style={{ color: "#B2BAC9" }}>
                            Total Alerts
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-center justify-content-center gap-4">
                        <div className="base-card__circle base-card__circle--red"></div>
                        <div className="mt-3">
                          <p className="d-flex justify-content-center align-items-center text-success">
                            <span className="text-light fs-3 fw-bold"> 1</span>
                            <span
                              className="mx-2 p-1 rounded"
                              style={{
                                background: "#37393D",
                                color: "#66C088",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <ArrowUpwardIcon />
                              15.2%
                            </span>
                          </p>
                          <p className="fs-6" style={{ color: "#B2BAC9" }}>
                            Total Alarms
                          </p>
                        </div>
                      </div>
                    </div>
                    <Line data={lineData} options={lineOptions} />
                  </div>
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="d-flex flex-column justify-content-start align-items-center gap-3 h-100 w-100">
                <div className="h-50 w-100">
                  <BaseCard
                    title={"Devices Status Distribution"}
                    downArrow
                    info={"info"}
                    body={
                      <div className="d-flex justify-content-evenly align-items-center gap-3 h-100 w-100 mt-5">
                        <img
                          width={52}
                          height={52}
                          src="/assets/icon1.png"
                          alt="img"
                        />
                        <div className="d-flex flex-column justify-content-start align-items-center gap-1 text-light">
                          <div
                            className="dashboard-card-circle"
                            style={{ "--circle-color": "#5A91DD" }}
                          ></div>
                          <p className="fs-3">724</p>
                          <p style={{ color: "#B2BAC9" }}>Assigned</p>
                        </div>
                        <div className="d-flex flex-column justify-content-start align-items-center gap-1 text-light">
                          <div
                            className="dashboard-card-circle"
                            style={{ "--circle-color": "#66C088" }}
                          ></div>
                          <p className="fs-3">120</p>
                          <p style={{ color: "#B2BAC9" }}>Idle</p>
                        </div>
                        <div className="d-flex flex-column justify-content-start align-items-center gap-1 text-light">
                          <div
                            className="dashboard-card-circle"
                            style={{ "--circle-color": "#DA9D00" }}
                          ></div>
                          <p className="fs-3">80</p>
                          <p style={{ color: "#B2BAC9" }}>Others</p>
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className="h-50 w-100">
                  <BaseCard
                    body={
                      <div
                        className="d-flex justify-content-evenly align-items-center gap-1 h-100 w-100 mt-3"
                        style={{ color: "#C8C8C8" }}
                      >
                        <div>
                          <img
                            width={88}
                            height={88}
                            src="/assets/icon2.png"
                            alt="img"
                          />
                          <span className="fs-2 fw-bold mx-3">32°C</span>
                          <p className="fs-3 fw-bold">Amman, Jordan</p>
                        </div>
                        <div className=" d-flex flex-column justify-content-center align-items-center ">
                          <p className="fs-4">2 PM</p>
                          <img
                            width={57}
                            height={57}
                            src="/assets/icon2.png"
                            alt="img"
                          />
                          <p className="text-light fs-3 fw-bold">30</p>
                        </div>
                        <div className=" d-flex flex-column justify-content-center align-items-center">
                          <p className="fs-4">3 PM</p>
                          <img
                            width={57}
                            height={57}
                            src="/assets/icon2.png"
                            alt="img"
                          />
                          <p className="text-light fs-3 fw-bold">28</p>
                        </div>
                        <KeyboardArrowRightIcon
                          className="text-light"
                          fontSize="large"
                        />
                      </div>
                    }
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <BaseCard
                title={"Live Workers Trend per Zone"}
                subTitle={"People Activity Trend for the last 12 hours"}
                downArrow
                info={"info"}
                body={<Line data={threeLineData} options={threeLineOptions} />}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <BaseCard
                title={"People Hazardous Zone / Critical Mission"}
                subTitle={"Updated since last 5 minutes"}
                downArrow
                info={"info"}
                body={
                  <div className="d-flex flex-column justify-content-start align-items-between mt-3 cross-line">
                    <div className="d-flex justify-content-between align-items-center my-3">
                      <img
                        width={49}
                        height={49}
                        className="rounded-circle z-1"
                        src="/assets/person1.png"
                        alt="person-img"
                      />
                      <div className="me-auto ms-3">
                        <p className="fw-bold" style={{ color: "#D9D9D9" }}>
                          Mohammad Yousef Ali{" "}
                        </p>
                        <p style={{ color: "#B2BAC9" }}>HSE Manager</p>
                      </div>

                      <p
                        className="rounded px-2 align-self-end mb-1"
                        style={{ background: "#414858", color: "#B2BAC9" }}
                      >
                        01:44
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-3">
                      <img
                        width={49}
                        height={49}
                        className="rounded-circle z-1"
                        src="/assets/person3.png"
                        alt="person-img"
                      />
                      <div className="me-auto ms-3">
                        <p className="fw-bold" style={{ color: "#D9D9D9" }}>
                          Saleem Mohammad Sami{" "}
                        </p>
                        <p style={{ color: "#B2BAC9" }}>Safety Supervision</p>
                      </div>

                      <p
                        className="rounded px-2 align-self-end mb-1"
                        style={{ background: "#414858", color: "#B2BAC9" }}
                      >
                        01:20
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-3">
                      <img
                        width={49}
                        height={49}
                        className="rounded-circle z-1"
                        src="/assets/person4.png"
                        alt="person-img"
                      />
                      <div className="me-auto ms-3">
                        <p className="fw-bold" style={{ color: "#D9D9D9" }}>
                          Sami Hamad Ali{" "}
                        </p>
                        <p style={{ color: "#B2BAC9" }}>Operator</p>
                      </div>

                      <p
                        className="rounded px-2 align-self-end mb-1"
                        style={{ background: "#414858", color: "#B2BAC9" }}
                      >
                        00.45
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-3">
                      <img
                        width={49}
                        height={49}
                        className="rounded-circle z-1"
                        src="/assets/person2.png"
                        alt="person-img"
                      />
                      <div className="me-auto ms-3">
                        <p className="fw-bold" style={{ color: "#D9D9D9" }}>
                          Osama Omar Ibrahem{" "}
                        </p>
                        <p style={{ color: "#B2BAC9" }}>Maintenance Engineer</p>
                      </div>

                      <p
                        className="rounded px-2 align-self-end mb-1"
                        style={{ background: "#414858", color: "#B2BAC9" }}
                      >
                        00:35
                      </p>
                    </div>
                  </div>
                }
              />
            </Grid>

            <Grid className="mt-3" item xs={12}>
              <BaseCard
                body={
                  <div>
                    <p className="text-end" style={{ color: "#B2BAC9" }}>
                      Last updated time 2:23 pm, Sunday{" "}
                    </p>
                    <div className="d-flex justify-content-center align-items-start gap-3 h-100 w-100 mt-3 flex-wrap">
                      <Grid className="mt-3" item xs={12} md={5}>
                        <div className="d-flex flex-wrap">
                          <div className="flex-grow-1">
                            <div className="d-flex align-items-center gap-3">
                              <p className="text-light">Live Events</p>
                              <div
                                className="rounded"
                                style={{
                                  backgroundColor: "#3C4352",
                                  padding: "1px",
                                  color: "#66C088",
                                }}
                              >
                                <ArrowUpwardIcon
                                  color="inherit"
                                  fontSize="small"
                                />
                              </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start align-items-start gap-2 mt-3">
                              <div style={{ color: "yellow" }}>
                                <InfoOutlinedIcon
                                  style={{ width: "41px", height: "41px" }}
                                  fontSize="large"
                                  color="inherit"
                                />
                              </div>

                              <p className="fs-6" style={{ color: "#B2BAC9" }}>
                                Total Alerts
                              </p>

                              <p className="d-flex justify-content-center align-items-center text-success">
                                <span className="text-light fs-3 fw-bold">
                                  487
                                </span>
                                <span
                                  className="mx-3 p-1 rounded"
                                  style={{
                                    background: "#37393D",
                                    color: "#66C088",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  <ArrowUpwardIcon />
                                  15.2%
                                </span>
                              </p>
                            </div>
                            <div className="d-flex flex-column justify-content-start align-items-start gap-2 mt-4">
                              <div style={{ color: "red" }}>
                                <ReportProblemOutlinedIcon
                                  style={{ width: "41px", height: "41px" }}
                                  fontSize="large"
                                  color="inherit"
                                />
                              </div>

                              <p className="fs-6" style={{ color: "#B2BAC9" }}>
                                Total Alarms
                              </p>

                              <p className="d-flex justify-content-center align-items-center text-success">
                                <span className="text-light fs-3 fw-bold">
                                  600
                                </span>
                                <span
                                  className="mx-3 p-1 rounded"
                                  style={{
                                    background: "#37393D",
                                    color: "#66C088",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  <ArrowUpwardIcon />
                                  15.2%
                                </span>
                              </p>
                            </div>
                            <div className="d-flex flex-column justify-content-start align-items-start gap-2 mt-4">
                              <p className="fs-6" style={{ color: "#B2BAC9" }}>
                                Previous Year Total
                              </p>

                              <p className="d-flex justify-content-center align-items-center text-success">
                                <span className="text-light fs-3 fw-bold">
                                  1187
                                </span>
                                <span
                                  className="mx-3 p-1 rounded"
                                  style={{
                                    background: "#37393D",
                                    color: "#66C088",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  <ArrowUpwardIcon />
                                  15.2%
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <BaseCard
                              info={"info"}
                              body={
                                <Doughnut
                                  data={doughnutData}
                                  options={doughnutOptions}
                                  plugins={[textCenter]}
                                />
                              }
                            />
                          </div>
                        </div>
                      </Grid>
                      <Grid className="mt-3 flex-grow-1" item xs={12} md={6}>
                        <div className="d-flex flex-wrap justify-content-start align-items-start w-100">
                          <Grid item xs={12} md={6}>
                            <BaseCard
                              title={"Site 1"}
                              info={"info"}
                              body={
                                <div
                                  className="d-flex flex-wrap justify-content-start align-items-center gap-1 mt-3"
                                  style={{ color: "#B2BAC9" }}
                                >
                                  <div className="d-flex flex-column gap-3">
                                    <p>Total Events</p>
                                    <p className="text-light fw-bold fs-4">
                                      0.7%
                                    </p>
                                    <p className="text-nowrap">
                                      <span>Prev. Yr.</span>{" "}
                                      <span className="text-light">4%</span>{" "}
                                      <span
                                        className="rounded p-2 align-self-end mb-1"
                                        style={{
                                          background: "#414858",
                                          color: "#B2BAC9",
                                        }}
                                      >
                                        <ArrowDownwardIcon /> 14.2%
                                      </span>
                                    </p>
                                    <p className="text-nowrap">
                                      <span>Grp. Avg </span>{" "}
                                      <span className="text-light">5%</span>{" "}
                                      <span
                                        className="rounded p-2 align-self-end mb-1"
                                        style={{
                                          background: "#414858",
                                          color: "#B2BAC9",
                                        }}
                                      >
                                        <ArrowDownwardIcon /> 20%
                                      </span>
                                    </p>
                                  </div>
                                  <div>
                                    <Bar data={barData1} options={barOption} />
                                  </div>
                                </div>
                              }
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <BaseCard
                              title={"Site 2"}
                              info={"info"}
                              body={
                                <div
                                  className="d-flex flex-wrap justify-content-start align-items-center gap-1 mt-3"
                                  style={{ color: "#B2BAC9" }}
                                >
                                  <div className="d-flex flex-column gap-3">
                                    <p>Total Events</p>
                                    <p className="text-light fw-bold fs-4">
                                      6%
                                    </p>
                                    <p className="text-nowrap">
                                      <span>Prev. Yr.</span>{" "}
                                      <span className="text-light">4%</span>{" "}
                                      <span
                                        className="rounded p-2 align-self-end mb-1"
                                        style={{
                                          background: "#414858",
                                          color: "#B2BAC9",
                                        }}
                                      >
                                        <ArrowDownwardIcon /> 14.2%
                                      </span>
                                    </p>
                                    <p className="text-nowrap">
                                      <span>Grp. Avg </span>{" "}
                                      <span className="text-light">5%</span>{" "}
                                      <span
                                        className="rounded p-2 align-self-end mb-1"
                                        style={{
                                          background: "#414858",
                                          color: "#B2BAC9",
                                        }}
                                      >
                                        <ArrowDownwardIcon /> 20%
                                      </span>
                                    </p>
                                  </div>
                                  <div>
                                    <Bar data={barData2} options={barOption} />
                                  </div>
                                </div>
                              }
                            />
                          </Grid>
                          <Grid className="mt-3" item xs={12} md={6}>
                            <BaseCard
                              title={"Site 3"}
                              downArrow
                              info={"info"}
                              body={
                                <div
                                  className="d-flex flex-wrap justify-content-start align-items-center gap-1 mt-3"
                                  style={{ color: "#B2BAC9" }}
                                >
                                  <div className="d-flex flex-column gap-3">
                                    <p>Total Events</p>
                                    <p className="text-light fw-bold fs-4">
                                      6.4%
                                    </p>
                                    <p className="text-nowrap">
                                      <span>Prev. Yr.</span>{" "}
                                      <span className="text-light">4%</span>{" "}
                                      <span
                                        className="rounded p-2 align-self-end mb-1"
                                        style={{
                                          background: "#414858",
                                          color: "#F26666",
                                        }}
                                      >
                                        <ArrowDownwardIcon /> 28.5%
                                      </span>
                                    </p>
                                    <p className="text-nowrap">
                                      <span>Grp. Avg </span>{" "}
                                      <span className="text-light">5%</span>{" "}
                                      <span
                                        className="rounded p-2 align-self-end mb-1"
                                        style={{
                                          background: "#414858",
                                          color: "#F26666",
                                        }}
                                      >
                                        <ArrowDownwardIcon /> 50%
                                      </span>
                                    </p>
                                  </div>
                                  <div>
                                    <Bar data={barData3} options={barOption} />
                                  </div>
                                </div>
                              }
                            />
                          </Grid>
                          <Grid className="mt-3" item xs={12} md={6}>
                            <BaseCard
                              title={"Site 4"}
                              info={"info"}
                              body={
                                <div
                                  className="d-flex flex-wrap justify-content-start align-items-center gap-1 mt-3"
                                  style={{ color: "#B2BAC9" }}
                                >
                                  <div className="d-flex flex-column gap-3">
                                    <p>Total Events</p>
                                    <p className="text-light fw-bold fs-4">
                                      22.32%
                                    </p>
                                    <p className="text-nowrap">
                                      <span>Prev. Yr.</span>{" "}
                                      <span className="text-light">4%</span>{" "}
                                      <span
                                        className="rounded p-2 align-self-end mb-1"
                                        style={{
                                          background: "#414858",
                                          color: "#B2BAC9",
                                        }}
                                      >
                                        <ArrowDownwardIcon /> 14.2%
                                      </span>
                                    </p>
                                    <p className="text-nowrap">
                                      <span>Grp. Avg </span>{" "}
                                      <span className="text-light">5%</span>{" "}
                                      <span
                                        className="rounded p-2 align-self-end mb-1"
                                        style={{
                                          background: "#414858",
                                          color: "#B2BAC9",
                                        }}
                                      >
                                        <ArrowDownwardIcon /> 20%
                                      </span>
                                    </p>
                                  </div>
                                  <div>
                                    <Bar data={barData4} options={barOption} />
                                  </div>
                                </div>
                              }
                            />
                          </Grid>
                        </div>
                      </Grid>
                    </div>
                  </div>
                }
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default DashBoard;
