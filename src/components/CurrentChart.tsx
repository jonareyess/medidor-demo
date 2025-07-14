"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const MAX_POINTS = 20;

export default function CurrentChart() {
  const [labels, setLabels] = useState<string[]>([]);
  const [dataPoints, setDataPoints] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const timestamp = new Date().toLocaleTimeString('es-CL', { hour12: false });
        const res = await fetch("/api");
        const json = await res.json();
        const newValue = json.amperaje;

        setLabels((prev) =>
          prev.length >= MAX_POINTS
            ? [...prev.slice(1), timestamp]
            : [...prev, timestamp]
        );

        setDataPoints((prev) =>
          prev.length >= MAX_POINTS
            ? [...prev.slice(1), newValue]
            : [...prev, newValue]
        );
      } catch (error) {
        console.log("Error al obtener datos: " + error);
      }
    }, 1000); //actualizacion cada 1 segundo

    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Corriente (A)",
        data: dataPoints,
        borderColor: "rgb(34,197,94)",
        backgroundColor: "rgba(34,197,94,0.3)",
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monitoreo de Corriente en Tiempo Real",
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    animation: { duration: 0 }

  };

  return <Line data={chartData} options={options} />;
}
