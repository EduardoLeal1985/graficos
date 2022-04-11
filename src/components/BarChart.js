import React, { useRef, useCallback } from "react";
import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function BarChart({ chartData }) {
  let ref = useRef(null);

  const downloadImage = useCallback(() => {
    const objB64 = ref.current.toBase64Image();
    const link = document.createElement("a");
    console.log(objB64);
    link.download = "chart.png";
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);

  const options = {    
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      xAxes: [{ticks: {mirror: true}}],
      yAxes: [{ticks: {mirror: true}}],
    },
  };

  // return <Bar 
  //   data={chartData}
  //   options={options}
  //   ref={ref}
  // />;

  return (
    <div>
      <button type="button" onClick={downloadImage}>Download</button>
      <div>
        <Bar ref={ref} data={chartData} options={options} />
      </div>
    </div>
  );
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