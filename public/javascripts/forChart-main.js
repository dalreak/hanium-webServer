//for chart function
var arduinoNumONE_tem;
var arduinoNumONE_hum;
var arduinoNumONE_fine;
var arduinoNumTWO_tem;
var arduinoNumTWO_hum;
var arduinoNumTWO_fine;
var arduinoNumTHREE_tem;
var arduinoNumTHREE_hum;
var arduinoNumTHREE_fine;
var arduinoNumFOUR_tem;
var arduinoNumFOUR_hum;
var arduinoNumFOUR_fine;
var arduinoNumFIVE_tem;
var arduinoNumFIVE_hum;
var arduinoNumFIVE_fine;
var raspberryPiNumONE_tem;
var raspberryPiNumONE_hum;
var raspberryPiNumONE_fine;
var raspberryPiNumTWO_tem;
var raspberryPiNumTWO_hum;
var raspberryPiNumTWO_fine;
var raspberryPiNumTHREE_tem;
var raspberryPiNumTHREE_hum;
var raspberryPiNumTHREE_fine;

function upDateChart(chartName, temp, hum, fine, gas, recorddate) {
  switch (chartName) {
    case "arduinoNumONE":

      arduinoNumONE_tem.load({
        columns: [
          ["온도", temp]
        ]
      });
      arduinoNumONE_hum.load({
        columns: [
          ["습도", hum]
        ]
      });
      arduinoNumONE_fine.load({
        columns: [
          ["미세먼지", fine]
        ]
      });
      document.getElementById("arduinoNumONE_recordDate").innerHTML = recorddate.substr(0, 19);
      if (gas == 1) {
        var target = document.getElementById(chartName + '_gas');
        if (!target.classList.contains('text-danger')) {
          target.classList.add('text-danger');

        }
        target.innerHTML = "가스상태 : 감지";
      } else {
        var target = document.getElementById(chartName + '_gas');

        if (target.classList.contains('text-danger')) {
          target.classList.remove('text-danger');

        }
        target.innerHTML = "가스상태 : 정상";
      }
      break;

    case "arduinoNumTWO":

      arduinoNumTWO_tem.load({
        columns: [
          ["온도", temp]
        ]
      });
      arduinoNumTWO_hum.load({
        columns: [
          ["습도", hum]
        ]
      });
      arduinoNumTWO_fine.load({
        columns: [
          ["미세먼지", fine]
        ]
      });
      document.getElementById("arduinoNumTWO_recordDate").innerHTML = recorddate.substr(0, 19);
      if (gas == 1) {
        var target = document.getElementById(chartName + '_gas');
        if (!target.classList.contains('text-danger')) {
          target.classList.add('text-danger');

        }
        target.innerHTML = "가스상태 : 감지";
      } else {
        var target = document.getElementById(chartName + '_gas');

        if (target.classList.contains('text-danger')) {
          target.classList.remove('text-danger');

        }
        target.innerHTML = "가스상태 : 정상";
      }
      break;


    case "arduinoNumTHREE":

      arduinoNumTHREE_tem.load({
        columns: [
          ["온도", temp]
        ]
      });
      arduinoNumTHREE_hum.load({
        columns: [
          ["습도", hum]
        ]
      });
      arduinoNumTHREE_fine.load({
        columns: [
          ["미세먼지", fine]
        ]
      });
      document.getElementById("arduinoNumTHREE_recordDate").innerHTML = recorddate.substr(0, 19);
      if (gas == 1) {
        var target = document.getElementById(chartName + '_gas');
        if (!target.classList.contains('text-danger')) {
          target.classList.add('text-danger');

        }
        target.innerHTML = "가스상태 : 감지";
      } else {
        var target = document.getElementById(chartName + '_gas');

        if (target.classList.contains('text-danger')) {
          target.classList.remove('text-danger');

        }
        target.innerHTML = "가스상태 : 정상";
      }
      break;


    case "arduinoNumFOUR":

      arduinoNumFOUR_tem.load({
        columns: [
          ["온도", temp]
        ]
      });
      arduinoNumFOUR_hum.load({
        columns: [
          ["습도", hum]
        ]
      });
      arduinoNumFOUR_fine.load({
        columns: [
          ["미세먼지", fine]
        ]
      });
      document.getElementById("arduinoNumFOUR_recordDate").innerHTML = recorddate.substr(0, 19);
      if (gas == 1) {
        var target = document.getElementById(chartName + '_gas');
        if (!target.classList.contains('text-danger')) {
          target.classList.add('text-danger');

        }
        target.innerHTML = "가스상태 : 감지";
      } else {
        var target = document.getElementById(chartName + '_gas');

        if (target.classList.contains('text-danger')) {
          target.classList.remove('text-danger');

        }
        target.innerHTML = "가스상태 : 정상";
      }
      break;


    case "arduinoNumFIVE":

      arduinoNumFIVE_tem.load({
        columns: [
          ["온도", temp]
        ]
      });
      arduinoNumFIVE_hum.load({
        columns: [
          ["습도", hum]
        ]
      });
      arduinoNumFIVE_fine.load({
        columns: [
          ["미세먼지", fine]
        ]
      });
      document.getElementById("arduinoNumFIVE_recordDate").innerHTML = recorddate.substr(0, 19);
      if (gas == 1) {
        var target = document.getElementById(chartName + '_gas');
        if (!target.classList.contains('text-danger')) {
          target.classList.add('text-danger');

        }
        target.innerHTML = "가스상태 : 감지";
      } else {
        var target = document.getElementById(chartName + '_gas');

        if (target.classList.contains('text-danger')) {
          target.classList.remove('text-danger');

        }
        target.innerHTML = "가스상태 : 정상";
      }
      break;


    case "raspberryPiNumONE":

      raspberryPiNumONE_tem.load({
        columns: [
          ["온도", temp]
        ]
      });
      raspberryPiNumONE_hum.load({
        columns: [
          ["습도", hum]
        ]
      });
      raspberryPiNumONE_fine.load({
        columns: [
          ["미세먼지", fine]
        ]
      });
      document.getElementById("raspberryPiNumONE_recordDate").innerHTML = recorddate.substr(0, 19);
      if (gas == 1) {
        var target = document.getElementById(chartName + '_gas');
        if (!target.classList.contains('text-danger')) {
          target.classList.add('text-danger');

        }
        target.innerHTML = "가스상태 : 감지";
      } else {
        var target = document.getElementById(chartName + '_gas');

        if (target.classList.contains('text-danger')) {
          target.classList.remove('text-danger');

        }
        target.innerHTML = "가스상태 : 정상";
      }
      break;


    case "raspberryPiNumTWO":


      raspberryPiNumTWO_tem.load({
        columns: [
          ["온도", temp]
        ]
      });
      raspberryPiNumTWO_hum.load({
        columns: [
          ["습도", hum]
        ]
      });
      raspberryPiNumTWO_fine.load({
        columns: [
          ["미세먼지", fine]
        ]
      });
      document.getElementById("raspberryPiNumTWO_recordDate").innerHTML = recorddate.substr(0, 19);
      if (gas == 1) {
        var target = document.getElementById(chartName + '_gas');
        if (!target.classList.contains('text-danger')) {
          target.classList.add('text-danger');

        }
        target.innerHTML = "가스상태 : 감지";
      } else {
        var target = document.getElementById(chartName + '_gas');

        if (target.classList.contains('text-danger')) {
          target.classList.remove('text-danger');

        }
        target.innerHTML = "가스상태 : 정상";
      }
      break;


    case "raspberryPiNumTHREE":


      raspberryPiNumTHREE_tem.load({
        columns: [
          ["온도", temp]
        ]
      });
      raspberryPiNumTHREE_hum.load({
        columns: [
          ["습도", hum]
        ]
      });
      raspberryPiNumTHREE_fine.load({
        columns: [
          ["미세먼지", fine]
        ]
      });
      document.getElementById("raspberryPiNumTHREE_recordDate").innerHTML = recorddate.substr(0, 19);
      if (gas == 1) {
        var target = document.getElementById(chartName + '_gas');
        if (!target.classList.contains('text-danger')) {
          target.classList.add('text-danger');

        }
        target.innerHTML = "가스상태 : 감지";
      } else {
        var target = document.getElementById(chartName + '_gas');

        if (target.classList.contains('text-danger')) {
          target.classList.remove('text-danger');

        }
        target.innerHTML = "가스상태 : 정상";
      }
      break;

  }

}

function initChart() {
  $.getJSON("https://toojs.asuscomm.com/data/node/getRecentData/hello@naver.com",
    function(data) {
      var datas = Array(Array(Array(), Array(), Array()), Array(Array(), Array(), Array(), Array(), Array())),
        t, e;
      arduinoNumONE_tem = bb.generate({
        data: {
          columns: [
            ["온도", 24.5]
          ],
          type: "gauge",

        },
        gauge: {
          max: 50,
          label: {
            format: function(value, ratio) {
              return value + "℃";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#4ceaf3",
            "#F29886",
            "#FF7F00",
            "#FF0000"
          ],
          threshold: {
            values: [
              10,
              23,
              35,
              50
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "온도",
          position: "center",
          fontsize : 30,
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumONE_tem"
      });
      arduinoNumONE_hum = bb.generate({
        data: {
          columns: [
            ["습도", 91.4]
          ],
          type: "gauge",

        },
        gauge: {
          label: {
            format: function(value, ratio) {
              return value + "%";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#C79471",
            "#9DAAB7",
            "#77B4DB",
            "#00BFFF"
          ],
          threshold: {
            values: [
              30,
              60,
              90,
              100
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "습도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumONE_hum"
      });
      arduinoNumONE_fine = bb.generate({
        data: {
          columns: [
            ["미세먼지", 60]
          ],
          type: "gauge"
        },
        gauge: {
          max: 200,
          fullCircle: true,
          label: {
            format: function(value, ratio) {
              return value + "㎍/㎥";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          },
        },
        color: {
          pattern: [
            "#689F38",
            "#FBC02D",
            "#F57C00",
            "#C53929"
          ],
          threshold: {
            values: [
              50,
              100,
              150,
              200
            ]
          }
        },
        title: {
          text: "미세먼지 수치",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumONE_fine"
      });
      arduinoNumTWO_tem = bb.generate({
        data: {
          columns: [
            ["온도", 24.5]
          ],
          type: "gauge",

        },
        gauge: {
          max: 50,
          label: {
            format: function(value, ratio) {
              return value + "℃";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#4ceaf3",
            "#F29886",
            "#FF7F00",
            "#FF0000"
          ],
          threshold: {
            values: [
              10,
              23,
              35,
              50
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "온도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumTWO_tem"
      });
      arduinoNumTWO_hum = bb.generate({
        data: {
          columns: [
            ["습도", 91.4]
          ],
          type: "gauge",

        },
        gauge: {
          label: {
            format: function(value, ratio) {
              return value + "%";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#C79471",
            "#9DAAB7",
            "#77B4DB",
            "#00BFFF"
          ],
          threshold: {
            values: [
              30,
              60,
              90,
              100
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "습도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumTWO_hum"
      });
      arduinoNumTWO_fine = bb.generate({
        data: {
          columns: [
            ["미세먼지", 60]
          ],
          type: "gauge"
        },
        gauge: {
          max: 200,
          fullCircle: true,
          label: {
            format: function(value, ratio) {
              return value + "㎍/㎥";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          },
        },
        color: {
          pattern: [
            "#689F38",
            "#FBC02D",
            "#F57C00",
            "#C53929"
          ],
          threshold: {
            values: [
              50,
              100,
              150,
              200
            ]
          }
        },
        title: {
          text: "미세먼지 수치",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumTWO_fine"
      });
      arduinoNumTHREE_tem = bb.generate({
        data: {
          columns: [
            ["온도", 24.5]
          ],
          type: "gauge",

        },
        gauge: {
          max: 50,
          label: {
            format: function(value, ratio) {
              return value + "℃";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#4ceaf3",
            "#F29886",
            "#FF7F00",
            "#FF0000"
          ],
          threshold: {
            values: [
              10,
              23,
              35,
              50
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "온도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumTHREE_tem"
      });
      arduinoNumTHREE_hum = bb.generate({
        data: {
          columns: [
            ["습도", 91.4]
          ],
          type: "gauge",

        },
        gauge: {
          label: {
            format: function(value, ratio) {
              return value + "%";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#C79471",
            "#9DAAB7",
            "#77B4DB",
            "#00BFFF"
          ],
          threshold: {
            values: [
              30,
              60,
              90,
              100
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "습도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumTHREE_hum"
      });
      arduinoNumTHREE_fine = bb.generate({
        data: {
          columns: [
            ["미세먼지", 60]
          ],
          type: "gauge"
        },
        gauge: {
          max: 200,
          fullCircle: true,
          label: {
            format: function(value, ratio) {
              return value + "㎍/㎥";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          },
        },
        color: {
          pattern: [
            "#689F38",
            "#FBC02D",
            "#F57C00",
            "#C53929"
          ],
          threshold: {
            values: [
              50,
              100,
              150,
              200
            ]
          }
        },
        title: {
          text: "미세먼지 수치",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumTHREE_fine"
      });
      arduinoNumFOUR_tem = bb.generate({
        data: {
          columns: [
            ["온도", 24.5]
          ],
          type: "gauge",

        },
        gauge: {
          max: 50,
          label: {
            format: function(value, ratio) {
              return value + "℃";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#4ceaf3",
            "#F29886",
            "#FF7F00",
            "#FF0000"
          ],
          threshold: {
            values: [
              10,
              23,
              35,
              50
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "온도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumFOUR_tem"
      });
      arduinoNumFOUR_hum = bb.generate({
        data: {
          columns: [
            ["습도", 91.4]
          ],
          type: "gauge",

        },
        gauge: {
          label: {
            format: function(value, ratio) {
              return value + "%";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#C79471",
            "#9DAAB7",
            "#77B4DB",
            "#00BFFF"
          ],
          threshold: {
            values: [
              30,
              60,
              90,
              100
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "습도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumFOUR_hum"
      });
      arduinoNumFOUR_fine = bb.generate({
        data: {
          columns: [
            ["미세먼지", 60]
          ],
          type: "gauge"
        },
        gauge: {
          max: 200,
          fullCircle: true,
          label: {
            format: function(value, ratio) {
              return value + "㎍/㎥";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          },
        },
        color: {
          pattern: [
            "#689F38",
            "#FBC02D",
            "#F57C00",
            "#C53929"
          ],
          threshold: {
            values: [
              50,
              100,
              150,
              200
            ]
          }
        },
        title: {
          text: "미세먼지 수치",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumFOUR_fine"
      });
      arduinoNumFIVE_tem = bb.generate({
        data: {
          columns: [
            ["온도", 24.5]
          ],
          type: "gauge",

        },
        gauge: {
          max: 50,
          label: {
            format: function(value, ratio) {
              return value + "℃";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#4ceaf3",
            "#F29886",
            "#FF7F00",
            "#FF0000"
          ],
          threshold: {
            values: [
              10,
              23,
              35,
              50
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "온도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumFIVE_tem"
      });
      arduinoNumFIVE_hum = bb.generate({
        data: {
          columns: [
            ["습도", 91.4]
          ],
          type: "gauge",

        },
        gauge: {
          label: {
            format: function(value, ratio) {
              return value + "%";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#C79471",
            "#9DAAB7",
            "#77B4DB",
            "#00BFFF"
          ],
          threshold: {
            values: [
              30,
              60,
              90,
              100
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "습도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumFIVE_hum"
      });
      arduinoNumFIVE_fine = bb.generate({
        data: {
          columns: [
            ["미세먼지", 60]
          ],
          type: "gauge"
        },
        gauge: {
          max: 200,
          fullCircle: true,
          label: {
            format: function(value, ratio) {
              return value + "㎍/㎥";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          },
        },
        color: {
          pattern: [
            "#689F38",
            "#FBC02D",
            "#F57C00",
            "#C53929"
          ],
          threshold: {
            values: [
              50,
              100,
              150,
              200
            ]
          }
        },
        title: {
          text: "미세먼지 수치",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#arduinoNumFIVE_fine"
      });
      raspberryPiNumONE_tem = bb.generate({
        data: {
          columns: [
            ["온도", 24.5]
          ],
          type: "gauge",

        },
        gauge: {
          max: 50,
          label: {
            format: function(value, ratio) {
              return value + "℃";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#4ceaf3",
            "#F29886",
            "#FF7F00",
            "#FF0000"
          ],
          threshold: {
            values: [
              10,
              23,
              35,
              50
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "온도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#raspberryPiNumONE_tem"
      });
      raspberryPiNumONE_hum = bb.generate({
        data: {
          columns: [
            ["습도", 91.4]
          ],
          type: "gauge",

        },
        gauge: {
          label: {
            format: function(value, ratio) {
              return value + "%";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#C79471",
            "#9DAAB7",
            "#77B4DB",
            "#00BFFF"
          ],
          threshold: {
            values: [
              30,
              60,
              90,
              100
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "습도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#raspberryPiNumONE_hum"
      });
      raspberryPiNumONE_fine = bb.generate({
        data: {
          columns: [
            ["미세먼지", 60]
          ],
          type: "gauge"
        },
        gauge: {
          max: 200,
          fullCircle: true,
          label: {
            format: function(value, ratio) {
              return value + "㎍/㎥";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          },
        },
        color: {
          pattern: [
            "#689F38",
            "#FBC02D",
            "#F57C00",
            "#C53929"
          ],
          threshold: {
            values: [
              50,
              100,
              150,
              200
            ]
          }
        },
        title: {
          text: "미세먼지 수치",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#raspberryPiNumONE_fine"
      });
      raspberryPiNumTWO_tem = bb.generate({
        data: {
          columns: [
            ["온도", 24.5]
          ],
          type: "gauge",

        },
        gauge: {
          max: 50,
          label: {
            format: function(value, ratio) {
              return value + "℃";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#4ceaf3",
            "#F29886",
            "#FF7F00",
            "#FF0000"
          ],
          threshold: {
            values: [
              10,
              23,
              35,
              50
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "온도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#raspberryPiNumTWO_tem"
      });
      raspberryPiNumTWO_hum = bb.generate({
        data: {
          columns: [
            ["습도", 91.4]
          ],
          type: "gauge",

        },
        gauge: {
          label: {
            format: function(value, ratio) {
              return value + "%";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#C79471",
            "#9DAAB7",
            "#77B4DB",
            "#00BFFF"
          ],
          threshold: {
            values: [
              30,
              60,
              90,
              100
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "습도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#raspberryPiNumTWO_hum"
      });
      raspberryPiNumTWO_fine = bb.generate({
        data: {
          columns: [
            ["미세먼지", 60]
          ],
          type: "gauge"
        },
        gauge: {
          max: 200,
          fullCircle: true,
          label: {
            format: function(value, ratio) {
              return value + "㎍/㎥";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          },
        },
        color: {
          pattern: [
            "#689F38",
            "#FBC02D",
            "#F57C00",
            "#C53929"
          ],
          threshold: {
            values: [
              50,
              100,
              150,
              200
            ]
          }
        },
        title: {
          text: "미세먼지 수치",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#raspberryPiNumTWO_fine"
      });
      raspberryPiNumTHREE_tem = bb.generate({
        data: {
          columns: [
            ["온도", 24.5]
          ],
          type: "gauge",

        },
        gauge: {
          max: 50,
          label: {
            format: function(value, ratio) {
              return value + "℃";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#4ceaf3",
            "#F29886",
            "#FF7F00",
            "#FF0000"
          ],
          threshold: {
            values: [
              10,
              23,
              35,
              50
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "온도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#raspberryPiNumTHREE_tem"
      });
      raspberryPiNumTHREE_hum = bb.generate({
        data: {
          columns: [
            ["습도", 91.4]
          ],
          type: "gauge",

        },
        gauge: {
          label: {
            format: function(value, ratio) {
              return value + "%";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          }
        },
        color: {
          pattern: [
            "#C79471",
            "#9DAAB7",
            "#77B4DB",
            "#00BFFF"
          ],
          threshold: {
            values: [
              30,
              60,
              90,
              100
            ]
          }
        },
        size: {
          //height: 180
        },
        title: {
          text: "습도",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#raspberryPiNumTHREE_hum"
      });
      raspberryPiNumTHREE_fine = bb.generate({
        data: {
          columns: [
            ["미세먼지", 60]
          ],
          type: "gauge"
        },
        gauge: {
          max: 200,
          fullCircle: true,
          label: {
            format: function(value, ratio) {
              return value + "㎍/㎥";
            },
            extents: function(value, isMax) {
              return (isMax ? "Max:" : "Min:") + value;
            }
          },
        },
        color: {
          pattern: [
            "#689F38",
            "#FBC02D",
            "#F57C00",
            "#C53929"
          ],
          threshold: {
            values: [
              50,
              100,
              150,
              200
            ]
          }
        },
        title: {
          text: "미세먼지 수치",
          position: "center",
        },
        transition: {
          duration: 700
        },
        bindto: "#raspberryPiNumTHREE_fine"
      }); 

      for (var i = 0; i < 8; i++) {

        datas[data[0][i].machine_type][data[0][i].machine_num - 1][0] = data[0][i].temperature;
        datas[data[0][i].machine_type][data[0][i].machine_num - 1][1] = data[0][i].humidity;
        datas[data[0][i].machine_type][data[0][i].machine_num - 1][2] = data[0][i].fine_dust;
        datas[data[0][i].machine_type][data[0][i].machine_num - 1][3] = data[0][i].gas;
        datas[data[0][i].machine_type][data[0][i].machine_num - 1][4] = data[0][i].recorddate;
      }
      for (i = 0, t = 0, e = 0; i < 8; i++) {
        if (i == 3) {
          t = 1;
          e = 0;
        }
        var targetId = makeID(t, e);

        upDateChart(targetId, datas[t][e][0], datas[t][e][1], datas[t][e][2], datas[t][e][3], datas[t][e][4]);
        e++;
      }


      //alert('성공');
    }
  );
}

initChart();
