import { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import Button from './components/UI/Button';
import QuestionsChart from "./components/QuestionsChart";
import { Chart } from "chart.js";
import useApi from "./hooks/useApi";
import { UserData } from "./Data";

const colorArray = [
  "#5B9BD5",
  "#FFC000",
  "#ED7D31",
  "#70AD47",
  "#7030A0"
]

function App() {
  const [dadosGraficos, setDadosGraficos] = useState();
  const [dadosUsuarios, setDadosUsuarios] = useState();

  // const dataGraficos = [
  //     {
  //       id: 1,
  //       turma: "LINGUAGENS",
  //       nota: UserData.porAno.a1.linguagens.escola,
  //       media: UserData.porAno.a1.linguagens.rede,
  //     },
  //     {
  //       id: 2,
  //       turma: "MATEMÁTICA",
  //       nota: UserData.porAno.a1.matematica.escola,
  //       media: UserData.porAno.a1.matematica.rede,
  //     },
  //     {
  //       id: 3,
  //       turma: "ARTES",
  //       nota: UserData.porAno.a1.arte.escola,
  //       media: UserData.porAno.a1.arte.rede,
  //     },
  //     {
  //       id: 4,
  //       turma: "ED. FÍSICA",
  //       nota: UserData.porAno.a1.ed_fisica.escola,
  //       media: UserData.porAno.a1.ed_fisica.rede,
  //     },
  //   ];
const [userData, setUserData] = useState();
  // const [userData, setUserData] = useState({
  //   labels: dataGraficos.map((item) => item.turma),
  //   datasets: [
  //     {
  //       label: 'UNIDADE',
  //       data: dataGraficos?.map((data) => data.nota),
  //       // backgroundColor: UserData.map((data) => {
  //       //   if (data.nota < 70) {
  //       //     if (data.nota < 50) {
  //       //       return "#e7402d";
  //       //     } else {
  //       //       return "#fdc719";
  //       //     }
  //       //   } else {
  //       //     return "#75b52b";
  //       //   }
  //       // }),
  //       backgroundColor: "#5B9BD5",
  //       borderColor: "black",
  //       borderWidth: 1,
  //       datalabels: {
  //         color: "black",
  //         anchor: "end",
  //         align: "top"
  //       }
  //     },
  //     {
  //       label: 'REDE',
  //       data: dataGraficos?.map((data) => data.media),
  //       backgroundColor: "#7F7F7F",
  //       borderColor: "black",
  //       borderWidth: 1,
  //       datalabels: {
  //         color: "black",
  //         anchor: "end",
  //         align: "top"
  //       }
  //     }
  //   ]
  // });

  // const [notaRede, setNotaRede] = useState({
  //   labels: NotaRede.map((item) => item.turma),
  //   datasets: [
  //     {
  //       label: 'UNIDADE',
  //       data: NotaRede.map((data) => data.nota),
  //       backgroundColor: "#0000ff",
  //       borderColor: "black",
  //       borderWidth: 1,
  //       barThickness: 15,
  //       datalabels: {
  //         color: "black",
  //         anchor: "end",
  //         align: "top"
  //       }
  //     },
  //     {
  //       label: 'REDE',
  //       data: NotaRede.map((data) => data.media),
  //       backgroundColor: "#c4c4c4",
  //       borderColor: "black",
  //       borderWidth: 1,
  //       barThickness: 15,
  //       datalabels: {
  //         color: "black",
  //         anchor: "end",
  //         align: "top"
  //       }
  //     }
  //   ]
  // });

  const [escola, setEscola] = useState();
  const [chartLinguagens, setChartLinguagens] = useState([]);
  const [chartMatematica, setChartMatematica] = useState();
  const [chartArte, setChartArte] = useState();
  const [chartEdFisica, setChartEdFisica] = useState();
  // const [porAno, setPorAno] = useState();

  const [graficosEscola, graficosEscolaInfo] = useApi({
    debounceDelay:0,
    url: 'relatorio/get_percentuais/',
    method: 'get',
    onCompleted: (response) => {
      if (!response.error) {
        setDadosGraficos(response.data);
        setEscola(response.data.escola);
      }
    }
  });

  useEffect(()=>{
    graficosEscola({
      params: {
        idescola: 238,
      }
    });
  },[]);

  useEffect(()=>{
    const dg = [];
    const obj = [];
//grafico por turma 01
      dg[0] = [
        {
          id: 1,
          turma: "LINGUAGENS",
          nota: dadosGraficos?.porAno.a1.linguagens.escola,
          media: dadosGraficos?.porAno.a1.linguagens.rede,
        },
        {
          id: 2,
          turma: "MATEMÁTICA",
          nota: dadosGraficos?.porAno.a1.matematica.escola,
          media: dadosGraficos?.porAno.a1.matematica.rede,
        },
        {
          id: 3,
          turma: "ARTES",
          nota: dadosGraficos?.porAno.a1.arte.escola,
          media: dadosGraficos?.porAno.a1.arte.rede,
        },
        {
          id: 4,
          turma: "ED. FÍSICA",
          nota: dadosGraficos?.porAno.a1.ed_fisica.escola,
          media: dadosGraficos?.porAno.a1.ed_fisica.rede,
        },
      ];

      dg[1] = [
        {
          id: 1,
          turma: "LINGUAGENS",
          nota: dadosGraficos?.porAno.a2.linguagens.escola,
          media: dadosGraficos?.porAno.a2.linguagens.rede,
        },
        {
          id: 2,
          turma: "MATEMÁTICA",
          nota: dadosGraficos?.porAno.a2.matematica.escola,
          media: dadosGraficos?.porAno.a2.matematica.rede,
        },
        {
          id: 3,
          turma: "ARTES",
          nota: dadosGraficos?.porAno.a2.arte.escola,
          media: dadosGraficos?.porAno.a2.arte.rede,
        },
        {
          id: 4,
          turma: "ED. FÍSICA",
          nota: dadosGraficos?.porAno.a2.ed_fisica.escola,
          media: dadosGraficos?.porAno.a2.ed_fisica.rede,
        },
      ];

      dg[2] = [
        {
          id: 1,
          turma: "LINGUAGENS",
          nota: dadosGraficos?.porAno.a3.linguagens.escola,
          media: dadosGraficos?.porAno.a3.linguagens.rede,
        },
        {
          id: 2,
          turma: "MATEMÁTICA",
          nota: dadosGraficos?.porAno.a3.matematica.escola,
          media: dadosGraficos?.porAno.a3.matematica.rede,
        },
        {
          id: 3,
          turma: "ARTES",
          nota: dadosGraficos?.porAno.a3.arte.escola,
          media: dadosGraficos?.porAno.a3.arte.rede,
        },
        {
          id: 4,
          turma: "ED. FÍSICA",
          nota: dadosGraficos?.porAno.a3.ed_fisica.escola,
          media: dadosGraficos?.porAno.a3.ed_fisica.rede,
        },
      ];

      dg[3] = [
        {
          id: 1,
          turma: "LINGUAGENS",
          nota: dadosGraficos?.porAno.a4.linguagens.escola,
          media: dadosGraficos?.porAno.a4.linguagens.rede,
        },
        {
          id: 2,
          turma: "MATEMÁTICA",
          nota: dadosGraficos?.porAno.a4.matematica.escola,
          media: dadosGraficos?.porAno.a4.matematica.rede,
        },
        {
          id: 3,
          turma: "ARTES",
          nota: dadosGraficos?.porAno.a4.arte.escola,
          media: dadosGraficos?.porAno.a4.arte.rede,
        },
        {
          id: 4,
          turma: "ED. FÍSICA",
          nota: dadosGraficos?.porAno.a4.ed_fisica.escola,
          media: dadosGraficos?.porAno.a4.ed_fisica.rede,
        },
      ];
    
      dg[4] = [
        {
          id: 1,
          turma: "LINGUAGENS",
          nota: dadosGraficos?.porAno.a5.linguagens.escola,
          media: dadosGraficos?.porAno.a5.linguagens.rede,
        },
        {
          id: 2,
          turma: "MATEMÁTICA",
          nota: dadosGraficos?.porAno.a5.matematica.escola,
          media: dadosGraficos?.porAno.a5.matematica.rede,
        },
        {
          id: 3,
          turma: "ARTES",
          nota: dadosGraficos?.porAno.a5.arte.escola,
          media: dadosGraficos?.porAno.a5.arte.rede,
        },
        {
          id: 4,
          turma: "ED. FÍSICA",
          nota: dadosGraficos?.porAno.a5.ed_fisica.escola,
          media: dadosGraficos?.porAno.a5.ed_fisica.rede,
        },
      ];

      dg.map((o,k)=>{
        obj[k] = {
          labels: o.map((item) => item.turma),
          datasets: [
            {
              label: 'UNIDADE',
              data: o.map((data) => data.nota),
              backgroundColor: colorArray[k],
              borderColor: "black",
              borderWidth: 1,
              datalabels: {
                color: "black",
                anchor: "end",
                align: "top"
              }
            },
            {
              label: 'REDE',
              data: o.map((data) => data.media),
              backgroundColor: "#7F7F7F",
              borderColor: "black",
              borderWidth: 1,
              datalabels: {
                color: "black",
                anchor: "end",
                align: "top"
              }
            }
          ]
        }
      });
    
    setUserData(obj);


    // por questão 03
    let temp = [];

    dadosGraficos?.porQuestao.linguagens.map((o, k) => {
      let NotaRede = [
        {
          id: 1,
          turma: "Q01",
          nota: o.acertos.q1.escola,
          media: o.acertos.q1.rede,
        },
        {
          id: 2,
          turma: "Q02",
          nota: o.acertos.q2.escola,
          media: o.acertos.q2.rede,
        },
        {
          id: 3,
          turma: "Q03",
          nota: o.acertos.q3.escola,
          media: o.acertos.q3.rede,
        },
        {
          id: 4,
          turma: "Q04",
          nota: o.acertos.q4.escola,
          media: o.acertos.q4.rede,
        },
        {
          id: 5,
          turma: "Q05",
          nota: o.acertos.q5.escola,
          media: o.acertos.q5.rede,
        },
        {
          id: 6,
          turma: "Q06",
          nota: o.acertos.q6.escola,
          media: o.acertos.q6.rede,
        },
        {
          id: 7,
          turma: "Q07",
          nota: o.acertos.q7.escola,
          media: o.acertos.q7.rede,
        },
        {
          id: 9,
          turma: "Q09",
          nota: o.acertos.q9.escola,
          media: o.acertos.q9.rede,
        },
        {
          id: 10,
          turma: "Q010",
          nota: o.acertos.q10.escola,
          media: o.acertos.q10.rede,
        },
        {
          id: 11,
          turma: "Q011",
          nota: o.acertos.q11.escola,
          media: o.acertos.q11.rede,
        },
        {
          id: 12,
          turma: "Q012",
          nota: o.acertos.q12.escola,
          media: o.acertos.q12.rede,
        },
        {
          id: 13,
          turma: "Q013",
          nota: o.acertos.q13.escola,
          media: o.acertos.q13.rede,
        },
        {
          id: 14,
          turma: "Q014",
          nota: o.acertos.q14.escola,
          media: o.acertos.q14.rede,
        },
        {
          id: 15,
          turma: "Q015",
          nota: o.acertos.q15.escola,
          media: o.acertos.q15.rede,
        },
        {
          id: 16,
          turma: "Q016",
          nota: o.acertos.q16.escola,
          media: o.acertos.q16.rede,
        },
        {
          id: 17,
          turma: "Q017",
          nota: o.acertos.q17.escola,
          media: o.acertos.q17.rede,
        },
        {
          id: 18,
          turma: "Q018",
          nota: o.acertos.q18.escola,
          media: o.acertos.q18.rede,
        },
        {
          id: 19,
          turma: "Q019",
          nota: o.acertos.q19.escola,
          media: o.acertos.q19.rede,
        },
        {
          id: 20,
          turma: "Q020",
          nota: o.acertos.q20.escola,
          media: o.acertos.q20.rede,
        },
        {
          id: 21,
          turma: "Q021",
          nota: o.acertos.q21.escola,
          media: o.acertos.q21.rede,
        },
        {
          id: 22,
          turma: "Q022",
          nota: o.acertos.q22.escola,
          media: o.acertos.q22.rede,
        },
      ]

      temp[k] = {
            labels: NotaRede.map((item) => item.turma),
            datasets: [
              {
                label: 'UNIDADE',
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
                label: 'REDE',
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
          };
    });
    setChartLinguagens(temp);

    
  },[dadosGraficos])


 
    


  // IF YOU SEE THIS COMMENT: YOU HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 800 }}>   
      {/* {userData && <BarChart chartData={userData} escola={escola} />}      */}
        
        {/* <BarChart chartData={userData} escola={escola} outro={porAno?.a2}/>
        <BarChart chartData={userData} escola={escola} outro={porAno?.a3}/>
        <BarChart chartData={userData} escola={escola} outro={porAno?.a4}/>
        <BarChart chartData={userData} escola={escola} outro={porAno?.a5}/> */}
      </div>
      <div style={{ width: 900 }}>
        {chartLinguagens && <QuestionsChart chartData={chartLinguagens} />}
        
      </div>
      {/* <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div> */}
    </div>
  );
}

export default App;