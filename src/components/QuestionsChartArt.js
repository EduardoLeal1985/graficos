import React, { useRef, useCallback, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import useApi from "../hooks/useApi";

const filename = [];

Chart.register(CategoryScale);

function QuestionsChartArte({ chartData, turmas, escola }) {
  let refArt = useRef([]);

  const [dadosGrafico, setDadosGrafico] = useState(chartData);

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

  const downloadImage = useCallback(() => {
    refArt.current.map((item, key)=>{
      const objB64 = item.toBase64Image();
      const dataObject = {
        data: objB64,
        filename: filename[key],
      }
      enviaGrafico({
        data: dataObject,
      });
    });
    
  }, []);

  dadosGrafico?.map((obj,k)=>{
  filename[k] = `${escola}grafico03_${turmas[k]}_arte_1.png`;
  options[k] = { 
    maintainAspectRatio: false,
     
    plugins: {
      title: {
        display: true,
        text: `${String(turmas[k]).charAt(0)}º ANO ${String(turmas[k]).charAt(1)} x Desempenho da Rede - ARTE`,
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
});


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
      <button type="button" onClick={downloadImage}>Download</button>
        {dadosGrafico?.map((obj,k)=>{
          return (
            <div>
              <div class="chart-container" style={{"position": "relative", "height":"240px", "width":"360px"}}>
                <Bar key={k} ref={el => (refArt.current[k] = el)} data={dadosGrafico[k]} options={options[k]} plugins={[ChartDataLabels]} />
              </div>              
            </div>
          );
        })}
            {/* <Bar ref={el => (ref.current[0] = el)} data={dadosGrafico[0]} options={options} plugins={[ChartDataLabels]} />           
            <Bar ref={el => (ref.current[1] = el)} data={dadosGrafico[1]} options={options} plugins={[ChartDataLabels]} />            */}

    </div>
  );
}

// const QuestionsChartArte = ({ chartData }) => {
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

export default QuestionsChartArte;