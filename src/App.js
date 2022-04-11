import { useState, useRef } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import Button from './components/UI/Button';
import { Chart } from "chart.js";
// import { UserData } from "./Data";

const UserData = [
  {
    id: 1,
    turma: "1ºs anos",
    nota: 60,
  },
  {
    id: 2,
    turma: "2ºs anos",
    nota: 55,
  },
  {
    id: 3,
    turma: "3ºs anos",
    nota: 70,
  },
  {
    id: 4,
    turma: "4ºs anos",
    nota: 68,
  },
  {
    id: 5,
    turma: "5ºs anos",
    nota: 30,
  },
];

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((item) => item.turma),
    datasets: [
      {
        label: 'nota',
        data: UserData.map((data) => data.nota),
        backgroundColor: UserData.map((data) => {
          if (data.nota < 70) {
            if (data.nota < 50) {
              return "#e7402d";
            } else {
              return "#fdc719";
            }
          } else {
            return "#75b52b";
          }
        }),
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  const chartRef = useRef(null);

  const handleSaveChart = () => {
    // const options = {    
    //   plugins: {
    //     legend: {
    //       display: false,
    //     }
    //   },
    //   scales: {
    //     xAxes: [{ticks: {mirror: true}}],
    //     yAxes: [{ticks: {mirror: true}}],
    //   },
    // };
    // const base64Image = chartRef.current.chartInstance.toBase64Image();
    // const base64Image = chartRef.current.chartData.base64Image();
    console.log(chartRef);
    // const base64Image = chartRef.current.base64Image();
    // console.log(base64Image);

  }

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
        {/* <LineChart /> */}
      </div>
      {/* <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div> */}
    </div>
  );
}

export default App;