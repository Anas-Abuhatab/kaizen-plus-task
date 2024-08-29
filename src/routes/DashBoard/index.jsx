import "@/styles/pages/dashBoard.scss";
import ToolsPanel from "../../components/ToolsPanel";

import { Grid, Paper, Typography, Box } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
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
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const lineData = {
  labels: ["06:00 AM", "12:00 PM", "06:00 PM", "12:00 AM"],
  datasets: [
    {
      label: "Green Zone",
      data: [40, 30, 20, 27],
      borderColor: "#4caf50",
      backgroundColor: "#4caf50",
      fill: false,
    },
    {
      label: "Amber Zone",
      data: [24, 13, 98, 20],
      borderColor: "#ff9800",
      backgroundColor: "#ff9800",
      fill: false,
    },
    {
      label: "Red Zone",
      data: [10, 22, 22, 19],
      borderColor: "#f44336",
      backgroundColor: "#f44336",
      fill: false,
    },
  ],
};

const pieData = {
  labels: ["Assigned", "In Use", "Others"],
  datasets: [
    {
      data: [724, 120, 80],
      backgroundColor: ["#42a5f5", "#66bb6a", "#ffca28"],
    },
  ],
};

const barData = {
  labels: ["Site 1", "Site 2", "Site 3", "Site 4"],
  datasets: [
    {
      label: "Total Events",
      data: [487, 600, 270, 254],
      backgroundColor: ["#42a5f5", "#66bb6a", "#ffca28", "#f44336"],
    },
  ],
};

const DashBoard = (props) => {
  return (
    <div className="d-flex justify-content-start align-items-start w-100">
      <ToolsPanel />
      <div className="content-container">
        <h1 className="main-title">Realtime Dashboard</h1>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2}>
            {/* Header Section */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h5">ABCD Site</Typography>
                <Typography variant="h6">RR1 Area</Typography>
                <Typography variant="body1">
                  1,148 Active People | 924 Active Devices
                </Typography>
              </Paper>
            </Grid>

            {/* Live Events Section */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Live Events</Typography>
                <Line data={lineData} />
              </Paper>
            </Grid>

            {/* Devices Status Distribution */}
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">
                  Devices Status Distribution
                </Typography>
                <Pie data={pieData} />
              </Paper>
            </Grid>

            {/* People Hazardous Zone / Critical Mission */}
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">
                  People Hazardous Zone / Critical Mission
                </Typography>
                {/* Add a list of people here */}
              </Paper>
            </Grid>

            {/* Live Workers Trend per Zone */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">
                  Live Workers Trend per Zone
                </Typography>
                <Line data={lineData} />
              </Paper>
            </Grid>

            {/* Summary Events per Site */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Summary Events per Site</Typography>
                <Bar data={barData} />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default DashBoard;
