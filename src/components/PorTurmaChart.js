import React, { useRef, useCallback, useState } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import useApi from "../hooks/useApi";

Chart.register(CategoryScale);

function PorTurmaChart({ chartData, chartData2, chartData3, chartData4, chartData5, escola }) {
  let ref = useRef([]);

console.log(chartData);

  const downloadImage = useCallback(() => {
    ref.current.map((item, key)=>{
      const objB64 = item.toBase64Image();
      const dataObject = {
        data: objB64,
        filename: `${escola}grafico02_${key+1}anos.png`,
      }
      enviaGrafico({
        data: dataObject,
      });
    });
    
  }, []);


  const [enviaGrafico, enviaGraficoInfo] = useApi({
    debounceDelay: 0,
    url: "/api_gabarito/temp/graficos/",
    method: "post",
    onCompleted: (response) => {
      if (!response.error) {
        console.log(response.data);
      }
    },
  });

  // const options = [];

  // chartData.map((item,key)=>{
  //   options[key] = {    
  //     maintainAspectRatio: false,
  //     plugins: {
  //       title: {
  //         display: true,
  //         text: `${key+1}º ANOS`,
  //         padding: {
  //             top: 10,
  //             bottom: 15
  //         },
  //         font: {
  //           weight: 'bold',
  //           size: 16,
  //         }
  //     },
  //       legend: {
  //         display: true,
  //       },
  //       datalabels: {
  //         color: '#000',
  //         formatter: function (value) {
  //           return value + '%';
  //         },
  //         font: {
  //           weight: 'bold',
  //           size: 10,
  //         }
  //       }
  //     },
  //     scales: {
  //       y:
  //       {
  //         min: 0,
  //         max: 100,
  //         stepSize: 10,
  //       },
  //     }
  //   };
  
  // });
  
  // return <Bar 
  //   data={chartData}
  //   options={options}
  //   ref={ref}
  // />;
  const vetorpadrao = [0,1,2,3,4];
  const options = [];

  vetorpadrao.map((item, key) => {
    options[key] = {    
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: `${key+1}º ANOS`,
          padding: {
              top: 10,
              bottom: 15
          },
          font: {
            weight: 'bold',
            size: 16,
          }
      },
        legend: {
          display: true,
        },
        datalabels: {
          color: '#000',
          formatter: function (value) {
            return value + '%';
          },
          font: {
            weight: 'bold',
            size: 10,
          }
        }
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
  });
  

      // const objPorTurma = {
      //   labels: ['REDE', '1A', '1B', '1C'],
      //   datasets: [
      //     {
      //       label: 'LINGUAGENS',
      //       data: [59.2,61, 65, 60],
      //       backgroundColor: ['#7F7F7F', '#5B9BD5', '#ED7D31', '#E763D7'],
      //       borderColor: "black",
      //       borderWidth: 1,
      //       datalabels: {
      //         color: "black",
      //         anchor: "end",
      //         align: "top"
      //       }
      //     }
      //   ]
      // };

      const objPorTurma = {
        labels: ['LINGUAGENS', 'MATEMÁTICA'],
        datasets: chartData,
      };
      const objPorTurma2 = {
        labels: ['LINGUAGENS', 'MATEMÁTICA'],
        datasets: chartData2,
      };
      const objPorTurma3 = {
        labels: ['LINGUAGENS', 'MATEMÁTICA'],
        datasets: chartData3,
      };
      const objPorTurma4 = {
        labels: ['LINGUAGENS', 'MATEMÁTICA'],
        datasets: chartData4,
      };
      const objPorTurma5 = {
        labels: ['LINGUAGENS', 'MATEMÁTICA'],
        datasets: chartData5,
      };

  return (
    <div>
      <button type="button" onClick={downloadImage}>Download</button>
      <div class="chart-container" style={{"position": "relative", "height":"360px", "width":"800px"}}>
        <Bar ref={el => (ref.current[0] = el)} data={objPorTurma} options={options[0]} plugins={[ChartDataLabels]} />
        <Bar ref={el => (ref.current[1] = el)} data={objPorTurma2} options={options[1]} plugins={[ChartDataLabels]} />
        <Bar ref={el => (ref.current[2] = el)} data={objPorTurma3} options={options[2]} plugins={[ChartDataLabels]} />
        <Bar ref={el => (ref.current[3] = el)} data={objPorTurma4} options={options[3]} plugins={[ChartDataLabels]} /> 
        <Bar ref={el => (ref.current[4] = el)} data={objPorTurma5} options={options[4]} plugins={[ChartDataLabels]} />
      </div>
    </div>
  );
}

// const PorTurmaChart = ({ chartData }) => {
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

export default PorTurmaChart;