import React, { useRef, useCallback, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import useApi from "../hooks/useApi";

Chart.register(CategoryScale);

function BarChart({ chartData, escola }) {
  let ref = useRef([]);

  // console.log(escola);
  console.log(chartData);

  const downloadImage = useCallback(() => {
    ref.current.map((item, key) => {
      const objB64 = item.toBase64Image();
      const dataObject = {
        data: objB64,
        filename: `${escola}grafico01_${key + 1}anos.png`,
      };
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

  const options = [];

  chartData.map((item, key) => {
    options[key] = {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: `${key + 1}º ANOS`,
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
          display: true,
        },
        datalabels: {
          color: "#000",
          formatter: function (value) {
            return value + "%";
          },
          font: {
            weight: "bold",
            size: 10,
          },
        },
      },
      scales: {
        y: {
          min: 0,
          max: 100,
          stepSize: 10,
        },
      },
    };
  });

  useEffect(() => {
    downloadImage();
  }, []);

  // return <Bar
  //   data={chartData}
  //   options={options}
  //   ref={ref}
  // />;

  return (
    <div>
      <button type="button" onClick={downloadImage}>
        Download
      </button>
      {chartData[0].datasets[0].data[0] && (
        <div
          class="chart-container"
          style={{ position: "relative", height: "360px", width: "800px" }}
        >
          <Bar
            ref={(el) => (ref.current[0] = el)}
            data={chartData[0]}
            options={options[0]}
            plugins={[ChartDataLabels]}
          />
        </div>
      )}
      {chartData[1].datasets[0].data[0] && (
        <div
          class="chart-container"
          style={{ position: "relative", height: "360px", width: "800px" }}
        >
          <Bar
            ref={(el) => (ref.current[1] = el)}
            data={chartData[1]}
            options={options[1]}
            plugins={[ChartDataLabels]}
          />
        </div>
      )}
      {chartData[2].datasets[0].data[0] && (
        <div
          class="chart-container"
          style={{ position: "relative", height: "360px", width: "800px" }}
        >
          <Bar
            ref={(el) => (ref.current[2] = el)}
            data={chartData[2]}
            options={options[2]}
            plugins={[ChartDataLabels]}
          />
        </div>
      )}
      {chartData[3].datasets[0].data[0] && (
        <div
          class="chart-container"
          style={{ position: "relative", height: "360px", width: "800px" }}
        >
          <Bar
            ref={(el) => (ref.current[3] = el)}
            data={chartData[3]}
            options={options[3]}
            plugins={[ChartDataLabels]}
          />
        </div>
      )}
      {chartData[4].datasets[0].data[0] && (
        <div
          class="chart-container"
          style={{ position: "relative", height: "360px", width: "800px" }}
        >
          <Bar
            ref={(el) => (ref.current[4] = el)}
            data={chartData[4]}
            options={options[4]}
            plugins={[ChartDataLabels]}
          />
        </div>
      )}
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
