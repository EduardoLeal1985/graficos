import React, { useRef, useCallback, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import useApi from "../hooks/useApi";

Chart.register(CategoryScale);

const filename = [];
// const filename2 = [];

function QuestionsChartMat({ chartData, chartData2, turmas, escola }) {
  let refMat = useRef([]);
  // let refMat2 = useRef([]);

  const [dadosGrafico, setDadosGrafico] = useState(chartData);
  // const [dadosGrafico2, setDadosGrafico2] = useState(chartData2);

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
    url: "/api_gabarito/temp/graficos/",
    method: "post",
    onCompleted: (response) => {
      if (!response.error) {
        console.log(response.data);
      }
    },
  });

  console.log(turmas);
  const options = [];
  // const options2 = [];

  const downloadImage = useCallback(() => {
    refMat.current.map((item, key) => {
      const objB64 = item.toBase64Image();
      const dataObject = {
        data: objB64,
        filename: filename[key],
      };
      enviaGrafico({
        data: dataObject,
      });
    });

    // refMat2.current.map((item, key) => {
    //   const objB64 = item.toBase64Image();
    //   const dataObject = {
    //     data: objB64,
    //     filename: filename2[key],
    //   };
    //   enviaGrafico({
    //     data: dataObject,
    //   });
    // });
  }, []);

  dadosGrafico?.map((obj, k) => {
    filename[k] = `${escola}grafico03_${turmas[k]}_matematica_1.png`;
    options[k] = {
      maintainAspectRatio: false,

      plugins: {
        title: {
          display: true,
          text: `${String(turmas[k]).charAt(0)}º TERMO ${String(turmas[k]).charAt(
            1
          )}${String(turmas[k]).charAt(2)} x Desempenho da Rede - MATEMÁTICA`,
          padding: {
            top: 10,
            bottom: 15,
          },
          font: {
            weight: "bold",
            size: 16,
          },
        },
        legend: {
          display: false,
        },
        datalabels: {
          color: "#000",
          formatter: function (value) {
            return Math.round(value) + "%";
          },
          font: {
            weight: "bold",
            size: 10,
          },
        },
      },
      xAxes: [{ ticks: { mirror: true } }],
      scales: {
        y: {
          min: 0,
          max: 100,
          stepSize: 20,
        },
      },
    };
  });

  // dadosGrafico2?.map((obj, k) => {
  //   filename2[k] = `grafico03_${turmas[k]}_matematica_2.png`;
  //   options2[k] = {
  //     maintainAspectRatio: false,
  //     plugins: {
  //       legend: {
  //         display: false,
  //       },
  //       datalabels: {
  //         color: "#000",
  //         formatter: function (value) {
  //           return Math.round(value) + "%";
  //         },
  //         font: {
  //           weight: "bold",
  //           size: 10,
  //         },
  //       },
  //     },
  //     xAxes: [{ ticks: { mirror: true } }],
  //     scales: {
  //       y: {
  //         min: 0,
  //         max: 100,
  //         stepSize: 20,
  //       },
  //     },
  //   };
  // });

  useEffect(() => {
    setDadosGrafico(chartData);
    // setDadosGrafico2(chartData2);
  }, [chartData, chartData2]);

  useEffect(() => {
    console.log(dadosGrafico);
    // console.log(dadosGrafico2);
    downloadImage();
  }, []);

  return (
    <div>
      <button type="button" onClick={downloadImage}>
        Download 04
      </button>
      {dadosGrafico?.map((obj, k) => {
        return (
          <div>
            <div
              class="chart-container"
              style={{ position: "relative", height: "240px", width: "800px" }}
            >
              <Bar
                key={k}
                ref={(el) => (refMat.current[k] = el)}
                data={dadosGrafico[k]}
                options={options[k]}
                plugins={[ChartDataLabels]}
              />
            </div>
            {/* <div
              class="chart-container"
              style={{ position: "relative", height: "210px", width: "800px" }}
            >
              <Bar
                key={k}
                ref={(el) => (refMat2.current[k] = el)}
                data={dadosGrafico2[k]}
                options={options2[k]}
                plugins={[ChartDataLabels]}
              />
            </div> */}
          </div>
        );
      })}
      {/* <Bar ref={el => (ref.current[0] = el)} data={dadosGrafico[0]} options={options} plugins={[ChartDataLabels]} />           
            <Bar ref={el => (ref.current[1] = el)} data={dadosGrafico[1]} options={options} plugins={[ChartDataLabels]} />            */}
    </div>
  );
}

// const QuestionsChartMat = ({ chartData }) => {
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

export default QuestionsChartMat;
