var chartForTemp;
var chartForHumi;
var chartForFinedust;
var charForGas;

var tempData = Array();
var humiData = Array();
var finedustData = Array();
var gasData = Array();
var date = Array();

tempData[0] = "온도";
humiData[0] = "습도";
finedustData[0] = "미세먼지";
gasData[0] = "유해가스";
date[0] = "times";

function initChart(machineNum) {
  var httpquery = "https://toojs.asuscomm.com/data/node/getData/hello@naver.com?machine_type=1&machine_num=";
  httpquery += machineNum;
  $.getJSON(httpquery,
    function(data) {

      for (var i = 1; i < 31; i++) {
        if(data[i-1] == undefined){
        tempData.splice(i,30-i);
        humiData.splice(i,30-i);
        finedustData.splice(i,30-i);
        gasData.splice(i,30-i);
        date.splice(i,30-i);
        break;
      }
        tempData[i] = data[i-1].temperature;
        humiData[i] = data[i-1].humidity;
        finedustData[i] = data[i-1].fine_dust;
        gasData[i] = data[i-1].gas;
        //var temp = data[0][i].recorddate;
        date[i] =new Date(data[i-1].recorddate.substr(0, 19));

      }
      chartForTemp = bb.generate({
        data: {
          x: 'times',
          xFormat: '%Y-%m-%d %H:%M:%S', // how the date is parsed
          columns: [
            date,
            tempData
          ]
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%Y-%m-%d %H:%M:%S' // how the date is displayed
            }
          }
        },

        bindto: "#chartForTemp"
      });

      chartForHumi = bb.generate({
        data: {
          x: 'times',
          xFormat: '%Y-%m-%d %H:%M:%S', // how the date is parsed
          columns: [
            date,
            humiData
          ]
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%Y-%m-%d %H:%M:%S' // how the date is displayed
            }
          }
        },

        bindto: "#chartForHumi"
      });

      chartForFinedust = bb.generate({
        data: {
          x: 'times',
          xFormat: '%Y-%m-%d %H:%M:%S', // how the date is parsed
          columns: [
            date,
            finedustData
          ]
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%Y-%m-%d %H:%M:%S' // how the date is displayed
            }
          }
        },

        bindto: "#chartForFinedust"
      });


      charForGas = bb.generate({
        data: {
          x: 'times',
          xFormat: '%Y-%m-%d %H:%M:%S', // how the date is parsed
          columns: [
            date,
            gasData
          ]
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%Y-%m-%d %H:%M:%S' // how the date is displayed
            }
          },
          y:{
            tick: {
              values:[0,1],
              format: function(x) {if(x == 1) return "가스 검출";else return "가스 미검출";}
            }
          },
        },

        bindto: "#charForGas"
      });
    });
    document.getElementById("chartName").innerHTML = "Arduino Num : " + machineNum;
}


function updateChart(chartName, temp, hum, fine, gas, recorddate,machineNum){
  if(document.getElementById("machineNum").value == machineNum){

    tempData.splice(1,1);
    humiData.splice(1,1);
    finedustData.splice(1,1);
    gasData.splice(1,1);
    date.splice(1,1);

    tempData.push(temp);
    humiData.push(hum);
    finedustData.push(fine);
    gasData.push(gas);
    date.push(new Date(recorddate.substr(0, 19)));


    chartForTemp.load({
      columns: [
        date,
       tempData
      ]
    });
    chartForHumi.load({
      columns: [
          date,
       humiData
      ]
    });
    chartForFinedust.load({
      columns: [
          date,
       finedustData
      ]
    });
     charForGas.load({
      columns: [
          date,
       gasData
      ]
    });
  }

}
