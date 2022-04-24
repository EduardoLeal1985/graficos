import React, { useRef, useCallback, useState } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import useApi from "../hooks/useApi";

Chart.register(CategoryScale);

function PorTurmaChart({ chartData, escola }) {
  let ref = useRef([]);

  // console.log(escola);
  console.log(chartData);

  const downloadImage = useCallback(() => {
    ref.current.map((item, key)=>{
      const objB64 = item.toBase64Image();
      const dataObject = {
        data: objB64,
        filename: `grafico01_${key+1}anos.png`,
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

  const options = {    
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: `1º ANOS - LINGUAGENS`,
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

      // const objPorTurma = {
      //   labels: ['LINGUAGENS', 'MATEMÁTICA'],
      //   datasets: [
      //     {
      //       label: 'REDE',
      //       data: [59.2,50.9],
      //       backgroundColor: ['#7F7F7F', '#7F7F7F'],
      //       borderColor: "black",
      //       borderWidth: 1,
      //       datalabels: {
      //         color: "black",
      //         anchor: "end",
      //         align: "top"
      //       }
      //     },
      //     {
      //       label: '1º A',
      //       data: [60.9,56.5],
      //       backgroundColor: ['#5B9BD5', '#5B9BD5'],
      //       borderColor: "black",
      //       borderWidth: 1,
      //       datalabels: {
      //         color: "black",
      //         anchor: "end",
      //         align: "top"
      //       }
      //     },
      //     {
      //       label: '1º B',
      //       data: [65,60.1],
      //       backgroundColor: ['#ED7D31', '#ED7D31'],
      //       borderColor: "black",
      //       borderWidth: 1,
      //       datalabels: {
      //         color: "black",
      //         anchor: "end",
      //         align: "top"
      //       }
      //     },
      //     {
      //       label: '1º C',
      //       data: [59.1,53.8],
      //       backgroundColor: ['#E763D7', '#E763D7'],
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

  return (
    <div>
      <button type="button" onClick={downloadImage}>Download</button>
      <div class="chart-container" style={{"position": "relative", "height":"360px", "width":"800px"}}>
        <Bar ref={el => (ref.current[0] = el)} data={chartData[0]} options={options} plugins={[ChartDataLabels]} />
        <Bar ref={el => (ref.current[1] = el)} data={chartData[1]} options={options} plugins={[ChartDataLabels]} />
        <Bar ref={el => (ref.current[2] = el)} data={chartData[2]} options={options} plugins={[ChartDataLabels]} />
        <Bar ref={el => (ref.current[3] = el)} data={chartData[3]} options={options} plugins={[ChartDataLabels]} />
        <Bar ref={el => (ref.current[4] = el)} data={chartData[4]} options={options} plugins={[ChartDataLabels]} />
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