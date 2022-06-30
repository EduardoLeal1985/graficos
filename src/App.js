import { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import Button from './components/UI/Button';
import QuestionsChart from "./components/QuestionsChart";
import QuestionsChartMat from "./components/QuestionsChartMat";
import QuestionsChartArt from "./components/QuestionsChartArt";
import QuestionsChartEdF from "./components/QuestionsChartEdF";
import PorTurmaChart from "./components/PorTurmaChart";
import { Chart } from "chart.js";
import useApi from "./hooks/useApi";
import { UserData } from "./Data";

const colorArray = [
  "#5B9BD5",
  "#FFC000",
  "#ED7D31",
  "#70AD47",
  "#7030A0"
];

let rotulo = [];
let notasLinguagem = [];
let notasMatematica = [];
// let notasArte = [];
// let notasEdFisica = [];
let rotulo2 = [];
let notasLinguagem2 = [];
let notasMatematica2 = [];
// let notasArte2 = [];
// let notasEdFisica2 = [];
let rotulo3 = [];
let notasLinguagem3 = [];
let notasMatematica3 = [];
// let notasArte3 = [];
// let notasEdFisica3 = [];
let rotulo4 = [];
let notasLinguagem4 = [];
let notasMatematica4 = [];
// let notasArte4 = [];
// let notasEdFisica4 = [];
let rotulo5 = [];
let notasLinguagem5 = [];
let notasMatematica5 = [];
// let notasArte5 = [];
// let notasEdFisica5 = [];

function App() {
  const [dadosGraficos, setDadosGraficos] = useState();
  const [dadosUsuarios, setDadosUsuarios] = useState();
  const [turmasArray, setTurmasArray] = useState();

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
        // backgroundColor: UserData.map((data) => {
        //   if (data.nota < 70) {
        //     if (data.nota < 50) {
        //       return "#e7402d";
        //     } else {
        //       return "#fdc719";
        //     }
        //   } else {
        //     return "#75b52b";
        //   }
        // }),
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
  const [chartLinguagens2, setChartLinguagens2] = useState([]);
  const [chartMatematica, setChartMatematica] = useState([]);
  const [chartMatematica2, setChartMatematica2] = useState([]);
  // const [chartArte, setChartArte] = useState([]);
  // const [chartEdFisica, setChartEdFisica] = useState([]);
  // const [porAno, setPorAno] = useState();
  const [porTurma, setPorTurma] = useState();
  const [porTurma2, setPorTurma2] = useState();
  const [porTurma3, setPorTurma3] = useState();
  const [porTurma4, setPorTurma4] = useState();
  const [porTurma5, setPorTurma5] = useState();
  const [porTurma6, setPorTurma6] = useState();
  const [porTurma7, setPorTurma7] = useState();
  const [porTurma8, setPorTurma8] = useState();
  const [porTurma9, setPorTurma9] = useState();
  const [porTurma10, setPorTurma10] = useState();

  const [graficosEscola, graficosEscolaInfo] = useApi({
    debounceDelay:0,
    url: 'https://api.duedu.website/relatorio/get_percentuais/',
    method: 'get',
    onCompleted: (response) => {
      if (!response.error) {
        setDadosGraficos(response.data);
      }
    }
  });

  useEffect(()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setEscola(urlParams.get('idescola'));
    graficosEscola({
      params: {
        idescola: urlParams.get('idescola'),
      }
    });
  },[]);

  useEffect(()=>{
    //gráficos por turma 01
    const dg = [];
    const obj = [];
      dg[0] = [
        {
          id: 1,
          turma: "LÍNGUA PORTUGUESA",
          nota: dadosGraficos?.porAno.a1.linguagens.escola,
          media: dadosGraficos?.porAno.a1.linguagens.rede,
        },
        {
          id: 2,
          turma: "MATEMÁTICA",
          nota: dadosGraficos?.porAno.a1.matematica.escola,
          media: dadosGraficos?.porAno.a1.matematica.rede,
        },
        // {
        //   id: 3,
        //   turma: "ARTES",
        //   nota: dadosGraficos?.porAno.a1.arte.escola,
        //   media: dadosGraficos?.porAno.a1.arte.rede,
        // },
        // {
        //   id: 4,
        //   turma: "ED. FÍSICA",
        //   nota: dadosGraficos?.porAno.a1.ed_fisica.escola,
        //   media: dadosGraficos?.porAno.a1.ed_fisica.rede,
        // },
      ];

      dg[1] = [
        {
          id: 1,
          turma: "LÍNGUA PORTUGUESA",
          nota: dadosGraficos?.porAno.a2.linguagens.escola,
          media: dadosGraficos?.porAno.a2.linguagens.rede,
        },
        {
          id: 2,
          turma: "MATEMÁTICA",
          nota: dadosGraficos?.porAno.a2.matematica.escola,
          media: dadosGraficos?.porAno.a2.matematica.rede,
        },
        // {
        //   id: 3,
        //   turma: "ARTES",
        //   nota: dadosGraficos?.porAno.a2.arte.escola,
        //   media: dadosGraficos?.porAno.a2.arte.rede,
        // },
        // {
        //   id: 4,
        //   turma: "ED. FÍSICA",
        //   nota: dadosGraficos?.porAno.a2.ed_fisica.escola,
        //   media: dadosGraficos?.porAno.a2.ed_fisica.rede,
        // },
      ];

      dg[2] = [
        {
          id: 1,
          turma: "LÍNGUA PORTUGUESA",
          nota: dadosGraficos?.porAno.a3.linguagens.escola,
          media: dadosGraficos?.porAno.a3.linguagens.rede,
        },
        {
          id: 2,
          turma: "MATEMÁTICA",
          nota: dadosGraficos?.porAno.a3.matematica.escola,
          media: dadosGraficos?.porAno.a3.matematica.rede,
        },
        // {
        //   id: 3,
        //   turma: "ARTES",
        //   nota: dadosGraficos?.porAno.a3.arte.escola,
        //   media: dadosGraficos?.porAno.a3.arte.rede,
        // },
        // {
        //   id: 4,
        //   turma: "ED. FÍSICA",
        //   nota: dadosGraficos?.porAno.a3.ed_fisica.escola,
        //   media: dadosGraficos?.porAno.a3.ed_fisica.rede,
        // },
      ];

      dg[3] = [
        {
          id: 1,
          turma: "LÍNGUA PORTUGUESA",
          nota: dadosGraficos?.porAno.a4.linguagens.escola,
          media: dadosGraficos?.porAno.a4.linguagens.rede,
        },
        {
          id: 2,
          turma: "MATEMÁTICA",
          nota: dadosGraficos?.porAno.a4.matematica.escola,
          media: dadosGraficos?.porAno.a4.matematica.rede,
        },
        // {
        //   id: 3,
        //   turma: "ARTES",
        //   nota: dadosGraficos?.porAno.a4.arte.escola,
        //   media: dadosGraficos?.porAno.a4.arte.rede,
        // },
        // {
        //   id: 4,
        //   turma: "ED. FÍSICA",
        //   nota: dadosGraficos?.porAno.a4.ed_fisica.escola,
        //   media: dadosGraficos?.porAno.a4.ed_fisica.rede,
        // },
      ];
    
      dg[4] = [
        {
          id: 1,
          turma: "LÍNGUA PORTUGUESA",
          nota: dadosGraficos?.porAno.a5.linguagens.escola,
          media: dadosGraficos?.porAno.a5.linguagens.rede,
        },
        {
          id: 2,
          turma: "MATEMÁTICA",
          nota: dadosGraficos?.porAno.a5.matematica.escola,
          media: dadosGraficos?.porAno.a5.matematica.rede,
        },
        // {
        //   id: 3,
        //   turma: "ARTES",
        //   nota: dadosGraficos?.porAno.a5.arte.escola,
        //   media: dadosGraficos?.porAno.a5.arte.rede,
        // },
        // {
        //   id: 4,
        //   turma: "ED. FÍSICA",
        //   nota: dadosGraficos?.porAno.a5.ed_fisica.escola,
        //   media: dadosGraficos?.porAno.a5.ed_fisica.rede,
        // },
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

    // gráfico por turma - 02
    const turmaColors = [
      '#7F7F7F',
      '#5B9BD5',
      '#ED7D31',
      '#E763D7',
      '#FFC000',
      '#4472C4',
      '#70AD47',
      '#255E91',
      '#9E480E',
      '#8612B4',
      '#A2F731',
      '#B493B7',
      '#232D24'

    ]
    // const dgTurma = [];
    const dataSetsPorTurma = [];
    const dataSetsPorTurma2 = [];
    const dataSetsPorTurma3 = [];
    const dataSetsPorTurma4 = [];
    const dataSetsPorTurma5 = [];
    const dataSetsPorTurma6 = [];
    const dataSetsPorTurma7 = [];
    const dataSetsPorTurma8 = [];
    const dataSetsPorTurma9 = [];
    const dataSetsPorTurma10 = [];
// console.log(dadosGraficos?.porTurma.a1.escola);
      
    dadosGraficos?.porTurma.a1.escola[0].linguagens.map((i,k)=>{
      rotulo[k] = i.turma;
      notasLinguagem[k] = i.nota;
    });
    dadosGraficos?.porTurma.a1.escola[1].matematica.map((i,k)=>{
      notasMatematica[k] = i.nota;
    });
    // dadosGraficos?.porTurma.a1.escola[2].arte.map((i,k)=>{
    //   notasArte[k] = i.nota;
    // });    
    // dadosGraficos?.porTurma.a1.escola[3].edFisica.map((i,k)=>{
    //   notasEdFisica[k] = i.nota;
    // });

      rotulo.map((item,key)=>{
        dataSetsPorTurma[key] =  {
            label: item,
            data: [notasLinguagem[key],notasMatematica[key]],
            backgroundColor: [turmaColors[key], turmaColors[key]],
            borderColor: "black",
            borderWidth: 1,
            datalabels: {
              color: "black",
              anchor: "end",
              align: "top"
            }
          }

          // dataSetsPorTurma6[key] =  {
          //   label: item,
          //   data: [notasArte[key],notasEdFisica[key]],
          //   backgroundColor: [turmaColors[key], turmaColors[key]],
          //   borderColor: "black",
          //   borderWidth: 1,
          //   datalabels: {
          //     color: "black",
          //     anchor: "end",
          //     align: "top"
          //   }
          // }
      });

// 2 ANO
      // let rotulo2 = [];
      // let notasLinguagem2 = [];
      // let notasMatematica2 = [];
      // let notasArte2 = [];
      // let notasEdFisica2 = [];
    dadosGraficos?.porTurma.a2.escola[0].linguagens.map((a,q)=>{
      rotulo2[q] = a.turma;
      notasLinguagem2[q] = a.nota;
    });
    dadosGraficos?.porTurma.a2.escola[1].matematica.map((a,q)=>{
      notasMatematica2[q] = a.nota;
    });
    // dadosGraficos?.porTurma.a2.escola[2].arte.map((a,q)=>{
    //   notasArte2[q] = a.nota;
    // });    
    // dadosGraficos?.porTurma.a2.escola[3].edFisica.map((a,q)=>{
    //   notasEdFisica2[q] = a.nota;
    // });
    console.log(notasLinguagem2);

      rotulo2.map((item,key)=>{
        dataSetsPorTurma2[key] =  {
            label: item,
            data: [notasLinguagem2[key],notasMatematica2[key]],
            backgroundColor: [turmaColors[key], turmaColors[key]],
            borderColor: "black",
            borderWidth: 1,
            datalabels: {
              color: "black",
              anchor: "end",
              align: "top"
            }
        }

        // dataSetsPorTurma7[key] =  {
        //   label: item,
        //   data: [notasArte2[key],notasEdFisica2[key]],
        //   backgroundColor: [turmaColors[key], turmaColors[key]],
        //   borderColor: "black",
        //   borderWidth: 1,
        //   datalabels: {
        //     color: "black",
        //     anchor: "end",
        //     align: "top"
        //   }
        // }
      });

      // 3 ANO
      // let rotulo3 = [];
      // let notasLinguagem3 = [];
      // let notasMatematica3 = [];
      // let notasArte3 = [];
      // let notasEdFisica3 = [];
    dadosGraficos?.porTurma.a3.escola[0].linguagens.map((i,k)=>{
      rotulo3[k] = i.turma;
      notasLinguagem3[k] = i.nota;
    });
    dadosGraficos?.porTurma.a3.escola[1].matematica.map((i,k)=>{
      notasMatematica3[k] = i.nota;
    });
    // dadosGraficos?.porTurma.a3.escola[2].arte.map((i,k)=>{
    //   notasArte3[k] = i.nota;
    // });    
    // dadosGraficos?.porTurma.a3.escola[3].edFisica.map((i,k)=>{
    //   notasEdFisica3[k] = i.nota;
    // });

      rotulo3.map((item,key)=>{
        dataSetsPorTurma3[key] =  {
            label: item,
            data: [notasLinguagem3[key],notasMatematica3[key]],
            backgroundColor: [turmaColors[key], turmaColors[key]],
            borderColor: "black",
            borderWidth: 1,
            datalabels: {
              color: "black",
              anchor: "end",
              align: "top"
            }
          }
          // dataSetsPorTurma8[key] =  {
          //   label: item,
          //   data: [notasArte3[key],notasEdFisica3[key]],
          //   backgroundColor: [turmaColors[key], turmaColors[key]],
          //   borderColor: "black",
          //   borderWidth: 1,
          //   datalabels: {
          //     color: "black",
          //     anchor: "end",
          //     align: "top"
          //   }
          // }
      });

      // 4 ANOS 
      // let rotulo4 = [];
      // let notasLinguagem4 = [];
      // let notasMatematica4 = [];
      // let notasArte4 = [];
      // let notasEdFisica4 = [];
    dadosGraficos?.porTurma.a4.escola[0].linguagens.map((i,k)=>{
      rotulo4[k] = i.turma;
      notasLinguagem4[k] = i.nota;
    });
    dadosGraficos?.porTurma.a4.escola[1].matematica.map((i,k)=>{
      notasMatematica4[k] = i.nota;
    });
    // dadosGraficos?.porTurma.a4.escola[2].arte.map((i,k)=>{
    //   notasArte4[k] = i.nota;
    // });    
    // dadosGraficos?.porTurma.a4.escola[3].edFisica.map((i,k)=>{
    //   notasEdFisica4[k] = i.nota;
    // });

      rotulo4.map((item,key)=>{
        dataSetsPorTurma4[key] =  {
            label: item,
            data: [notasLinguagem4[key],notasMatematica4[key]],
            backgroundColor: [turmaColors[key], turmaColors[key]],
            borderColor: "black",
            borderWidth: 1,
            datalabels: {
              color: "black",
              anchor: "end",
              align: "top"
            }
          }
          // dataSetsPorTurma9[key] =  {
          //   label: item,
          //   data: [notasArte4[key],notasEdFisica4[key]],
          //   backgroundColor: [turmaColors[key], turmaColors[key]],
          //   borderColor: "black",
          //   borderWidth: 1,
          //   datalabels: {
          //     color: "black",
          //     anchor: "end",
          //     align: "top"
          //   }
          // }
      });

// 5 ANOS
      // let rotulo5 = [];
      // let notasLinguagem5 = [];
      // let notasMatematica5 = [];
      // let notasArte5 = [];
      // let notasEdFisica5 = [];
    dadosGraficos?.porTurma.a5.escola[0].linguagens.map((i,k)=>{
      rotulo5[k] = i.turma;
      notasLinguagem5[k] = i.nota;
    });
    dadosGraficos?.porTurma.a5.escola[1].matematica.map((i,k)=>{
      notasMatematica5[k] = i.nota;
    });
    // dadosGraficos?.porTurma.a5.escola[2].arte.map((i,k)=>{
    //   notasArte5[k] = i.nota;
    // });    
    // dadosGraficos?.porTurma.a5.escola[3].edFisica.map((i,k)=>{
    //   notasEdFisica5[k] = i.nota;
    // });

      rotulo5.map((item,key)=>{
        dataSetsPorTurma5[key] = {
            label: item,
            data: [notasLinguagem5[key],notasMatematica5[key]],
            backgroundColor: [turmaColors[key], turmaColors[key]],
            borderColor: "black",
            borderWidth: 1,
            datalabels: {
              color: "black",
              anchor: "end",
              align: "top"
            }
          }
          // dataSetsPorTurma10[key] =  {
          //   label: item,
          //   data: [notasArte5[key],notasEdFisica5[key]],
          //   backgroundColor: [turmaColors[key], turmaColors[key]],
          //   borderColor: "black",
          //   borderWidth: 1,
          //   datalabels: {
          //     color: "black",
          //     anchor: "end",
          //     align: "top"
          //   }
          // }
      });
      
      
      // item.matematica.map((i,k)=>{
      //   notasMatematica[k]=i.nota;     
      // });
      // item.arte.map((i,k)=>{
      //   notasArte[k]=i.nota;     
      // });
      // item.edFisica.map((i,k)=>{
      //   notasEdFisica[k]=i.nota;     
      // });
      // console.log(rotulo);
      // console.log(notasLinguagem);
      // console.log(notasMatematica);
      // console.log(notasArte);
      // console.log(notasEdFisica);
      
      
      // dataSetsPorTurma[key] = {
      //   label: item.linguagens[0].turma,
      //   data: [1,2,3],
      //   backgroundColor: [turmaColors[key], turmaColors[key]],
      //   borderColor: "black",
      //   borderWidth: 1,
      //   datalabels: {
      //     color: "black",
      //     anchor: "end",
      //     align: "top"
      //   }
      // };
    

    setPorTurma(dataSetsPorTurma);
    setPorTurma2(dataSetsPorTurma2);
    setPorTurma3(dataSetsPorTurma3);
    setPorTurma4(dataSetsPorTurma4);
    setPorTurma5(dataSetsPorTurma5);
    setPorTurma6(dataSetsPorTurma6);
    setPorTurma7(dataSetsPorTurma7);
    setPorTurma8(dataSetsPorTurma8);
    setPorTurma9(dataSetsPorTurma9);
    setPorTurma10(dataSetsPorTurma10);

    // dadosGraficos?.porTurma.a2.escola.linguagens.map((item,key)=>{
    //   dataSetsPorTurma[key] = {
    //     label: dadosGraficos?.porTurma.a2.escola.linguagens[key].turma,
    //     data: [dadosGraficos?.porTurma.a2.escola.linguagens[key].nota,dadosGraficos?.porTurma.a2.escola.matematica[key].nota],
    //     backgroundColor: [turmaColors[key], turmaColors[key]],
    //     borderColor: "black",
    //     borderWidth: 1,
    //     datalabels: {
    //       color: "black",
    //       anchor: "end",
    //       align: "top"
    //     }
    //   };
    // });

    // dadosGraficos?.porTurma.a3.escola.linguagens.map((item,key)=>{
    //   dataSetsPorTurma[key] = {
    //     label: dadosGraficos?.porTurma.a3.escola.linguagens[key].turma,
    //     data: [dadosGraficos?.porTurma.a3.escola.linguagens[key].nota,dadosGraficos?.porTurma.a3.escola.matematica[key].nota],
    //     backgroundColor: [turmaColors[key], turmaColors[key]],
    //     borderColor: "black",
    //     borderWidth: 1,
    //     datalabels: {
    //       color: "black",
    //       anchor: "end",
    //       align: "top"
    //     }
    //   };
    // });

    // dadosGraficos?.porTurma.a4.escola.linguagens.map((item,key)=>{
    //   dataSetsPorTurma[key] = {
    //     label: dadosGraficos?.porTurma.a4.escola.linguagens[key].turma,
    //     data: [dadosGraficos?.porTurma.a4.escola.linguagens[key].nota,dadosGraficos?.porTurma.a4.escola.matematica[key].nota],
    //     backgroundColor: [turmaColors[key], turmaColors[key]],
    //     borderColor: "black",
    //     borderWidth: 1,
    //     datalabels: {
    //       color: "black",
    //       anchor: "end",
    //       align: "top"
    //     }
    //   };
    // });

    // dadosGraficos?.porTurma.a5.escola.linguagens.map((item,key)=>{
    //   dataSetsPorTurma[key] = {
    //     label: dadosGraficos?.porTurma.a5.escola.linguagens[key].turma,
    //     data: [dadosGraficos?.porTurma.a5.escola.linguagens[key].nota,dadosGraficos?.porTurma.a5.escola.matematica[key].nota],
    //     backgroundColor: [turmaColors[key], turmaColors[key]],
    //     borderColor: "black",
    //     borderWidth: 1,
    //     datalabels: {
    //       color: "black",
    //       anchor: "end",
    //       align: "top"
    //     }
    //   };
    // });

    // const objPorTurma = [
    //   {
    //     labels: ['LINGUAGENS', 'MATEMÁTICA'],
    //     datasets: dataSetsPorTurma,
    //   },
    //   {
    //     labels: ['LINGUAGENS', 'MATEMÁTICA'],
    //     datasets: dataSetsPorTurma2,
    //   },
    //   {
    //     labels: ['LINGUAGENS', 'MATEMÁTICA'],
    //     datasets: dataSetsPorTurma3,
    //   },
    //   {
    //     labels: ['LINGUAGENS', 'MATEMÁTICA'],
    //     datasets: dataSetsPorTurma4,
    //   },
    //   {
    //     labels: ['LINGUAGENS', 'MATEMÁTICA'],
    //     datasets: dataSetsPorTurma5,
    //   }
    // ];

    // console.log(objPorTurma);

    // dgTurma[0] = [
    //   {
    //     id: 1,
    //     turma: "LINGUAGENS",
    //     nota: dadosGraficos?.porAno.a1.linguagens.escola,
    //     media: dadosGraficos?.porAno.a1.linguagens.rede,
    //   },
    //   {
    //     id: 2,
    //     turma: "MATEMÁTICA",
    //     nota: dadosGraficos?.porAno.a1.matematica.escola,
    //     media: dadosGraficos?.porAno.a1.matematica.rede,
    //   },
    //   {
    //     id: 3,
    //     turma: "ARTES",
    //     nota: dadosGraficos?.porAno.a1.arte.escola,
    //     media: dadosGraficos?.porAno.a1.arte.rede,
    //   },
    //   {
    //     id: 4,
    //     turma: "ED. FÍSICA",
    //     nota: dadosGraficos?.porAno.a1.ed_fisica.escola,
    //     media: dadosGraficos?.porAno.a1.ed_fisica.rede,
    //   },
    // ];

    // gráficos por questão 03
    let temp = [];
    let temp2= [];
    let tempTurma = [];

    //LINGUAGENS
    dadosGraficos?.porQuestao.linguagens.map((o, k) => {
      tempTurma[k] = [o.turma];
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
          id: 8,
          turma: "Q08",
          nota: o.acertos.q8.escola,
          media: o.acertos.q8.rede,
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
        }
      ]

      let NotaRede2 = [
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
        }
      ]

      temp[k] = {
            labels: NotaRede.map((item) => item.turma),
            datasets: [
              {
                label: 'UNIDADE',
                data: NotaRede.map((data) => data.nota),
                // backgroundColor: "#0000ff",
                backgroundColor: NotaRede.map((data) => {
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
                barThickness: 25,
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
                barThickness: 25,
                datalabels: {
                  color: "black",
                  anchor: "end",
                  align: "top"
                }
              }
            ]
          };

          temp2[k] = {
            labels: NotaRede2.map((item) => item.turma),
            datasets: [
              {
                label: 'UNIDADE',
                data: NotaRede2.map((data) => data.nota),
                // backgroundColor: "#0000ff",
                backgroundColor: NotaRede2.map((data) => {
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
                barThickness: 25,
                datalabels: {
                  color: "black",
                  anchor: "end",
                  align: "top"
                }
              },
              {
                label: 'REDE',
                data: NotaRede2.map((data) => data.media),
                backgroundColor: "#c4c4c4",
                borderColor: "black",
                borderWidth: 1,
                barThickness: 25,
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
    setChartLinguagens2(temp2);

    // MATEMATICA
    let tempMat = [];
    let tempMat2= [];

    dadosGraficos?.porQuestao.matematica.map((o, k) => {
      // tempTurma[k] = [o.turma];
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
          id: 8,
          turma: "Q08",
          nota: o.acertos.q8.escola,
          media: o.acertos.q8.rede,
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
        }
      ]

      let NotaRede2 = [
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
        }
      ]

      tempMat[k] = {
            labels: NotaRede.map((item) => item.turma),
            datasets: [
              {
                label: 'UNIDADE',
                data: NotaRede.map((data) => data.nota),
                // backgroundColor: "#0000ff",
                backgroundColor: NotaRede.map((data) => {
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
                barThickness: 25,
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
                barThickness: 25,
                datalabels: {
                  color: "black",
                  anchor: "end",
                  align: "top"
                }
              }
            ]
          };

          tempMat2[k] = {
            labels: NotaRede2.map((item) => item.turma),
            datasets: [
              {
                label: 'UNIDADE',
                data: NotaRede2.map((data) => data.nota),
                // backgroundColor: "#0000ff",
                backgroundColor: NotaRede2.map((data) => {
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
                barThickness: 25,
                datalabels: {
                  color: "black",
                  anchor: "end",
                  align: "top"
                }
              },
              {
                label: 'REDE',
                data: NotaRede2.map((data) => data.media),
                backgroundColor: "#c4c4c4",
                borderColor: "black",
                borderWidth: 1,
                barThickness: 25,
                datalabels: {
                  color: "black",
                  anchor: "end",
                  align: "top"
                }
              }
            ]
          };
    });
    setChartMatematica(tempMat);
    setChartMatematica2(tempMat2);

// ARTE
// let tempArt = [];

// dadosGraficos?.porQuestao.arte.map((o, k) => {
//   // tempTurma[k] = [o.turma];
//   let NotaRede = [
//     {
//       id: 1,
//       turma: "Q01",
//       nota: o.acertos.q1.escola,
//       media: o.acertos.q1.rede,
//     },
//     {
//       id: 2,
//       turma: "Q02",
//       nota: o.acertos.q2.escola,
//       media: o.acertos.q2.rede,
//     },
//     {
//       id: 3,
//       turma: "Q03",
//       nota: o.acertos.q3.escola,
//       media: o.acertos.q3.rede,
//     }
//     ]

//   tempArt[k] = {
//         labels: NotaRede.map((item) => item.turma),
//         datasets: [
//           {
//             label: 'UNIDADE',
//             data: NotaRede.map((data) => data.nota),
//             // backgroundColor: "#0000ff",
//             backgroundColor: NotaRede.map((data) => {
//               if (data.nota < 70) {
//                 if (data.nota < 50) {
//                   return "#e7402d";
//                 } else {
//                   return "#fdc719";
//                 }
//               } else {
//                 return "#75b52b";
//               }
//             }),
//             borderColor: "black",
//             borderWidth: 1,
//             barThickness: 25,
//             datalabels: {
//               color: "black",
//               anchor: "end",
//               align: "top"
//             }
//           },
//           {
//             label: 'REDE',
//             data: NotaRede.map((data) => data.media),
//             backgroundColor: "#c4c4c4",
//             borderColor: "black",
//             borderWidth: 1,
//             barThickness: 25,
//             datalabels: {
//               color: "black",
//               anchor: "end",
//               align: "top"
//             }
//           }
//         ]
//       };
// });
// setChartArte(tempArt);

// ED. FÍSICA
// let tempEdF = [];

// dadosGraficos?.porQuestao.edFisica.map((o, k) => {
//   // tempTurma[k] = [o.turma];
//   let NotaRede = [
//     {
//       id: 1,
//       turma: "Q01",
//       nota: o.acertos.q1.escola,
//       media: o.acertos.q1.rede,
//     },
//     {
//       id: 2,
//       turma: "Q02",
//       nota: o.acertos.q2.escola,
//       media: o.acertos.q2.rede,
//     },
//     {
//       id: 3,
//       turma: "Q03",
//       nota: o.acertos.q3.escola,
//       media: o.acertos.q3.rede,
//     }
//     ]

//     tempEdF[k] = {
//         labels: NotaRede.map((item) => item.turma),
//         datasets: [
//           {
//             label: 'UNIDADE',
//             data: NotaRede.map((data) => data.nota),
//             // backgroundColor: "#0000ff",
//             backgroundColor: NotaRede.map((data) => {
//               if (data.nota < 70) {
//                 if (data.nota < 50) {
//                   return "#e7402d";
//                 } else {
//                   return "#fdc719";
//                 }
//               } else {
//                 return "#75b52b";
//               }
//             }),
//             borderColor: "black",
//             borderWidth: 1,
//             barThickness: 25,
//             datalabels: {
//               color: "black",
//               anchor: "end",
//               align: "top"
//             }
//           },
//           {
//             label: 'REDE',
//             data: NotaRede.map((data) => data.media),
//             backgroundColor: "#c4c4c4",
//             borderColor: "black",
//             borderWidth: 1,
//             barThickness: 25,
//             datalabels: {
//               color: "black",
//               anchor: "end",
//               align: "top"
//             }
//           }
//         ]
//       };
// });
// setChartEdFisica(tempEdF);


    setTurmasArray(tempTurma);

    
  },[dadosGraficos])


 
    


  // IF YOU SEE THIS COMMENT: YOU HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 900 }}>   
      {/* DESCOMENTAR PARA O GRÁFICO 1 - POR ANO */}
      {userData && <BarChart chartData={userData} escola={escola} />} 
      </div>    
      
      <div style={{ width: 900 }}>
        {/* DESCOMENTAR ABAIXO PARA O GRÁFICO 2 - POR TURMA */}
        {porTurma && <PorTurmaChart 
          chartData={porTurma} 
          chartData2={porTurma2} 
          chartData3={porTurma3} 
          chartData4={porTurma4}  
          chartData5={porTurma5} 
          chartData6={porTurma6} 
          chartData7={porTurma7} 
          chartData8={porTurma8} 
          chartData9={porTurma9} 
          chartData10={porTurma10} 
          escola={escola} />}
      </div>
      <div style={{ width: 900 }}>
        {/* DESCOMENTAR ABAIXO GRÁFICO 3 - POR QUESTÃO */}
        {chartLinguagens && <QuestionsChart chartData={chartLinguagens} chartData2={chartLinguagens2} turmas={turmasArray} escola={escola} />}
        {chartMatematica && <QuestionsChartMat chartData={chartMatematica} chartData2={chartMatematica2} turmas={turmasArray} escola={escola} />}
        {/* {chartArte && <QuestionsChartArt chartData={chartArte} turmas={turmasArray} escola={escola} />}
        {chartEdFisica && <QuestionsChartEdF chartData={chartEdFisica} turmas={turmasArray} escola={escola} />} */}
        
      </div>
      {/* <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div> */}
    </div>
  );
}

export default App;