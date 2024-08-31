const lineData = {
    labels: ["12:20", "12:21", "12:22", "12:23", "12:24", "12:25", "12:26"],
    datasets: [
      {
        label: "SOS Raised",
        data: [12, 13, 12.4, 13, 14, 14, 12, 15],
        borderColor: "#F26666",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(242, 102, 102, 1)");
          gradient.addColorStop(1, "rgba(242, 102, 102, 0)");
          return gradient;
        },
        fill: true,
        pointBackgroundColor: "#FF5252",
        pointRadius: 1.5,
        pointHoverRadius: 12,
        borderWidth: 2,
        tension: 0.3, // Smooth the line
      },
    ],
  };
  
  const lineOptions = {
    scales: {
      x: {
        display: false, // Hide X axis
      },
      y: {
        display: false, // Hide Y axis
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
        mode: "index",
      },
    },
  };
  
  const threeLineData = {
    labels: [
      "6:00 AM",
      "7:00 AM",
      "8:00 AM",
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
    ],
    datasets: [
      {
        label: "Green Zone",
        data: [90, 90, 90, 85, 80, 75, 90, 90, 90, 90, 90, 80],
        borderColor: "#66C088",
        backgroundColor: "#66C088",
        fill: false,
        pointBackgroundColor: "#66C088",
        pointRadius: 1,
        pointHoverRadius: 7,
        borderWidth: 2,
      },
      {
        label: "Amber Zone",
        data: [30, 20, 20, 25, 35, 50, 60, 60, 60, 60, 60, 60],
        borderColor: "#DA7739",
        backgroundColor: "#DA7739",
        fill: false,
        pointBackgroundColor: "#DA7739",
        pointRadius: 1,
        pointHoverRadius: 7,
        borderWidth: 2,
        borderDash: [5, 5],
      },
      {
        label: "Red Zone",
        data: [40, 45, 50, 49, 45, 47, 48, 47, 35, 40, 45, 50],
        borderColor: "#BC4C34",
        backgroundColor: "#BC4C34",
        fill: false,
        pointBackgroundColor: "#BC4C34",
        pointRadius: 1,
        pointHoverRadius: 7,
        borderWidth: 2,
      },
    ],
  };
  
  const threeLineOptions = {
    scales: {
      x: {
        display: true,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: "#B2BAC9",
        },
      },
      y: {
        display: true,
        suggestedMin: 10,
        suggestedMax: 100,
        border: { dash: [4, 4] },
        grid: {
          drawOnChartArea: true,
          color: "#525A6B",
        },
        ticks: {
          color: "#B2BAC9",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
        mode: "index",
      },
    },
  };
  
  const doughnutData = {
    labels: ["Alerts", "Info", "Alarm"],
    datasets: [
      {
        data: [150, 724, 200],
        backgroundColor: ["#DA7739", "#5A91E2", "#BC4C34"],
      },
    ],
  };
  
  const doughnutOptions = {
    responsive: true, // Ensures the chart is responsive
    plugins: {
      legend: {
        position: "top",
      },
      doughnutText: {
        text: "75%",
      },
    },
    cutout: 120 + window.innerWidth / 100,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };
  
  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      const sum = data.datasets[0].data.reduce(
        (partialSum, a) => partialSum + a,
        0
      );
      ctx.save();
      ctx.font = "22px sans-serif";
      ctx.fillStyle = "#B2BAC9";
      ctx.textAlign = "center";
      ctx.fillText(
        `Total Events ${sum}`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };
  
  const barData1 = {
    labels: ["Site 1"],
    datasets: [
      {
        label: "Total Events",
        data: [48],
        backgroundColor: "#DA7739",
        borderRadius: {
          topLeft: 0,
          topRight: 0,
          bottomLeft: 4,
          bottomRight: 4,
        },
        borderSkipped: false,
        barThickness: 32,
      },
      {
        label: "Total Events",
        data: [13],
        backgroundColor: "#BC4C34",
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
        barThickness: 32,
      },
    ],
  };
  const barData2 = {
    labels: ["Site 2"],
    datasets: [
      {
        label: "Total Events",
        data: [48],
        backgroundColor: "#5A91E2",
        borderRadius: {
          topLeft: 0,
          topRight: 0,
          bottomLeft: 4,
          bottomRight: 4,
        },
        borderSkipped: false,
        barThickness: 32,
      },
      {
        label: "Total Events",
        data: [48],
        backgroundColor: "#DA7739",
        borderRadius: {
          topLeft: 0,
          topRight: 0,
          bottomLeft: 4,
          bottomRight: 4,
        },
        borderSkipped: false,
        barThickness: 32,
      },
      {
        label: "Total Events",
        data: [13],
        backgroundColor: "#BC4C34",
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
        barThickness: 32,
      },
    ],
  };
  
  const barData3 = {
    labels: ["Site 3"],
    datasets: [
      {
        label: "Total Events",
        data: [54],
        backgroundColor: "#DA7739",
        borderRadius: {
          topLeft: 0,
          topRight: 0,
          bottomLeft: 4,
          bottomRight: 4,
        },
        borderSkipped: false,
        barThickness: 32,
      },
      {
        label: "Total Events",
        data: [18],
        backgroundColor: "#BC4C34",
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
        barThickness: 32,
      },
    ],
  };
  
  const barData4 = {
    labels: ["Site 4"],
    datasets: [
      {
        label: "Total Events",
        data: [32],
        backgroundColor: "#DA7739",
        borderRadius: {
          topLeft: 0,
          topRight: 0,
          bottomLeft: 4,
          bottomRight: 4,
        },
        borderSkipped: false,
        barThickness: 32,
      },
      {
        label: "Total Events",
        data: [24],
        backgroundColor: "#BC4C34",
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
        barThickness: 32,
      },
    ],
  };
  
  const barOption = {
    plugins: {
      responsive: true,
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
        mode: "index",
      },
    },
    scales: {
      x: {
        display: false,
        stacked: true,
      },
      y: {
        display: false,
        stacked: true,
      },
    },
  };

  export {
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
    barOption
  }