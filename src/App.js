import { useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import Button from './components/UI/Button';
import QuestionsChart from "./components/QuestionsChart";
import { Chart } from "chart.js";
// import { UserData } from "./Data";

const UserData = [
  {
    id: 1,
    turma: "1ºs anos",
    nota: 60,
    media: 50,
  },
  {
    id: 2,
    turma: "2ºs anos",
    nota: 55,
    media: 50,
  },
  {
    id: 3,
    turma: "3ºs anos",
    nota: 70,
    media: 50,
  },
  {
    id: 4,
    turma: "4ºs anos",
    nota: 68,
    media: 50,
  },
  {
    id: 5,
    turma: "5ºs anos",
    nota: 30,
    media: 50,
  },
];

const NotaRede = [
  {
    id: 1,
    turma: "Q01",
    nota: 22,
    media: 21,
  },
  {
    id: 2,
    turma: "Q02",
    nota: 17,
    media: 14,
  },
  {
    id: 3,
    turma: "Q03",
    nota: 18,
    media: 17,
  },
  {
    id: 4,
    turma: "Q04",
    nota: 15,
    media: 13,
  },
  {
    id: 5,
    turma: "Q05",
    nota: 10,
    media: 16,
  },
  {
    id: 6,
    turma: "Q06",
    nota: 5,
    media: 8,
  },
  {
    id: 7,
    turma: "Q07",
    nota: 9,
    media: 8,
  },
  {
    id: 8,
    turma: "Q08",
    nota: 12,
    media: 13,
  },
  {
    id: 9,
    turma: "Q09",
    nota: 13,
    media: 12,
  },
  {
    id: 10,
    turma: "Q10",
    nota: 14,
    media: 15,
  },
  {
    id: 11,
    turma: "Q11",
    nota: 11,
    media: 17,
  },
  {
    id: 12,
    turma: "Q12",
    nota: 10,
    media: 12,
  },
  {
    id: 13,
    turma: "Q13",
    nota: 16,
    media: 15,
  },
  {
    id: 14,
    turma: "Q14",
    nota: 15,
    media: 16,
  },
  {
    id: 15,
    turma: "Q15",
    nota: 13,
    media: 12,
  },
  {
    id: 16,
    turma: "Q16",
    nota: 14,
    media: 15,
  },
  {
    id: 17,
    turma: "Q17",
    nota: 11,
    media: 11,
  },
  {
    id: 18,
    turma: "Q18",
    nota: 15,
    media: 14,
  },
  {
    id: 19,
    turma: "Q19",
    nota: 15,
    media: 16,
  },
  {
    id: 20,
    turma: "Q20",
    nota: 12,
    media: 12,
  },
  {
    id: 21,
    turma: "Q21",
    nota: 17,
    media: 15,
  },
  {
    id: 22,
    turma: "Q22",
    nota: 13,
    media: 12,
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
        datalabels: {
          color: "black",
          anchor: "end",
          align: "top"
        }
      },
      {
        label: 'media',
        data: UserData.map((data) => data.media),
        backgroundColor: "#c4c4c4",
        borderColor: "black",
        borderWidth: 1,
        datalabels: {
          color: "black",
          anchor: "end",
          align: "top"
        }
      }
    ]
  });

  const [notaRede, setNotaRede] = useState({
    labels: NotaRede.map((item) => item.turma),
    datasets: [
      {
        label: 'nota',
        data: NotaRede.map((data) => data.nota),
        backgroundColor: "#0000ff",
        borderColor: "black",
        borderWidth: 1,
        barThickness: 15,
        datalabels: {
          color: "black",
          anchor: "end",
          align: "top"
        }
      },
      {
        label: 'media',
        data: NotaRede.map((data) => data.media),
        backgroundColor: "#c4c4c4",
        borderColor: "black",
        borderWidth: 1,
        barThickness: 15,
        datalabels: {
          color: "black",
          anchor: "end",
          align: "top"
        }
      }
    ]
  });

  // IF YOU SEE THIS COMMENT: YOU HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 900 }}>
        <QuestionsChart chartData={notaRede} />
      </div>
      {/* <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div> */}
    </div>
  );
}

export default App;