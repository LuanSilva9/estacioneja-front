import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartFrequency = (props) => {
  const { dataChart } = props;

  const data = {
    labels: ["Vagas disponiveis", "Vagas reservadas"],
    datasets: [
      {
        label: "Frequencia de Vagas",
        data: dataChart,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.label}: ${tooltipItem.raw} vagas`,
        },
      },
    },
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ChartFrequency;
