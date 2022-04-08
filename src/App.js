import { useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
// import { UserData } from "./Data";

const UserData = [
  {
    id: 1,
    turma: "1ºs anos",
    userGain: 60,
    userLost: 0,
  },
  {
    id: 2,
    turma: "2ºs anos",
    userGain: 55,
    userLost: 0,
  },
  {
    id: 3,
    turma: "3ºs anos",
    userGain: 70,
    userLost: 0,
  },
  {
    id: 4,
    turma: "4ºs anos",
    userGain: 68,
    userLost: 0,
  },
  {
    id: 5,
    turma: "5ºs anos",
    userGain: 30,
    userLost: 0,
  },
];

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((item) => item.turma),
    datasets: [
      {
        label: 'hide',
        data: UserData.map((data) => data.userGain),
        backgroundColor: UserData.map((data) => {
          if (data.userGain < 70) {
            if (data.userGain < 50) {
              return "#ff0000";
            } else {
              return "#ffff00";
            }
          } else {
            return "#00ff00";
          }
        }),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
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