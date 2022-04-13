import React, { useRef, useCallback } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import useApi from "../hooks/useApi";

Chart.register(CategoryScale);

function BarChart({ chartData }) {
  let ref = useRef(null);

  const downloadImage = useCallback(() => {
    const objB64 = ref.current.toBase64Image();
    const dataObject = {
      data: objB64,
    }
    enviaGrafico({
      data: dataObject,
    });
  }, []);


  const [enviaGrafico, enviaGraficoInfo] = useApi({
    debounceDelay: 0,
    url: "/",
    method: "post",
    onCompleted: (response) => {
      if (!response.error) {
        console.log(response.data);
      }
    },
  });

  const options = {    
    plugins: {
      legend: {
        display: false,
      },
      text:"REDE",
    },
    scales: {
      y:
      {
        min: 0,
        max: 100,
        stepSize: 10,
      },
    }
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
        <Bar ref={ref} data={chartData} options={options} plugins={[ChartDataLabels]} />
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