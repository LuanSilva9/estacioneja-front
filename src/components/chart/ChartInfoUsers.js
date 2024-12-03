import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, PolarAreaController, ArcElement, CategoryScale, LinearScale, RadialLinearScale } from 'chart.js';

ChartJS.register(
  Title, 
  Tooltip, 
  Legend, 
  PolarAreaController, 
  ArcElement, 
  CategoryScale, 
  LinearScale, 
  RadialLinearScale
);

const ChartInfoUsers = () => {
  const data = {
    labels: ['Usuarios prestes a Estacionar', 'Usuarios estacionados', 'Usuarios prestes a Sair'],
    datasets: [
      {
        label: 'Usuarios',
        data: [15, 25, 32], 
        backgroundColor: ['#FF6384', '#36A2EB', '#36b77b'],
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
    },
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 40,
      },
    },
  };

  return (
    <div>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default ChartInfoUsers;
