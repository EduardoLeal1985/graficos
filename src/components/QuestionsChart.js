import React, { useRef, useCallback, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import useApi from "../hooks/useApi";

Chart.register(CategoryScale);

function QuestionsChart({ chartData }) {
  let ref = useRef([]);

  const [dadosGrafico, setDadosGrafico] = useState(chartData);

  // const downloadImage = useCallback(() => {
  //   const objB64 = ref.current.toBase64Image();
  //   const dataObject = {
  //     data: objB64,
  //   }
  //   enviaGrafico({
  //     data: dataObject,
  //   });
  // }, []);


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
    maintainAspectRatio: false,   
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#000',
        formatter: function (value) {
          return Math.round(value) + '%';
        },
        font: {
          weight: 'bold',
          size: 10,
        }
      }
    },
    xAxes: [{ticks: {mirror: true}}],
    scales: {
      y:
      {
        min: 0,
        max: 100,
        stepSize: 20,
      }
    }
  };

  useEffect(()=>{
    setDadosGrafico(chartData);
    console.log(dadosGrafico);
  },[chartData]);

  // return <Bar 
  //   data={chartData}
  //   options={options}
  //   ref={ref}
  // />;

  return (
    <div>
      {/* <button type="button" onClick={downloadImage}>Download</button> */}
      <div class="chart-container" style={{"position": "relative", "height":"360px", "width":"800px"}}>
        {dadosGrafico?.map((obj,k)=>{
          return (
            <Bar key={k} ref={el => (ref.current[k] = el)} data={dadosGrafico[k]} options={options} plugins={[ChartDataLabels]} />
          );
        })}
            {/* <Bar ref={el => (ref.current[0] = el)} data={dadosGrafico[0]} options={options} plugins={[ChartDataLabels]} />           
            <Bar ref={el => (ref.current[1] = el)} data={dadosGrafico[1]} options={options} plugins={[ChartDataLabels]} />            */}

      </div>
    </div>
  );
}

// const QuestionsChart = ({ chartData }) => {
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

export default QuestionsChart;