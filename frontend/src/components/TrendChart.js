import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const TrendChart = ({ userId }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      debugger;
      const { data } = await axios.get(
        `http://localhost:4200/api/logs/${userId}`
      );
      setLogs(data);
    };
    fetchLogs();
  }, [userId]);

  const data = {
    labels: logs.map((log) => log.created_at),
    scales: {
      x: {
        type: "category",
        labels: ["Mood Rating", "Anxiety Level", "Stress Level"],
      },
    },
    datasets: [
      {
        label: "Mood Rating",
        data: logs.map((log) => log.mood_rating),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
      {
        label: "Anxiety Level",
        data: logs.map((log) => log.anxiety_level),
        borderColor: "#742774",
        fill: false,
      },
      {
        label: "Stress Level",
        data: logs.map((log) => log.stress_level),
        borderColor: "#f39c12",
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default TrendChart;
