import React from "react";
import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from 'chart.js';

function BarChart({ chartData }) {
  const options = {    
      plugins: {
        legend: {
          display: false,
        }
    }
  };

  return <Bar 
    data={chartData}
    options={options}
  />;
}

// const BarChart = ({ chartData }) => {
//   let ctx;
//   let myChart = new Chart(ctx, {
//     type: 'bar',
//     data: chartData,
//     options: {
//        legend: {
//           display: false //This will do the task
//        }
//     }
//  });
//  return myChart;
// }

export default BarChart;