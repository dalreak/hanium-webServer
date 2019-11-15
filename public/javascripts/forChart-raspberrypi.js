var chartForTemp;
var chartForHumi;
var chartForFinedust;
var charForGas;
var mapForRaspberry;

var vmap;
var mapController;
var markerLayer;

var tempData = Array();
var humiData = Array();
var finedustData = Array();
var gasData = Array();
var date = Array();
var gps = Array();

tempData[0] = "온도";
humiData[0] = "습도";
finedustData[0] = "미세먼지";
gasData[0] = "유해가스";
date[0] = "times";


function prepareChart(vmapKey, machine_num) {

  var jsFileForVmap = document.createElement('script');
  jsFileForVmap.type = 'text/javascript';
  jsFileForVmap.src = 'https://map.vworld.kr/js/vworldMapInit.js.do?version=2.0&apiKey=' + vmapKey;
  jsFileForVmap.id = 'extraModule1';

  document.getElementById('extraModules').appendChild(jsFileForVmap);
  document.getElementById("extraModule1").onload = function() {
    initChart(machine_num);
  };
}

function initChart(machineNum) {
  $("#mapForRaspberry *").remove();
  var httpquery = "https://toojs.asuscomm.com/data/node/getData/hello@naver.com?machine_type=0&machine_num=";
  httpquery += machineNum;
  $.getJSON(httpquery,
    function(data) {
      for (var i = 1; i < 31; i++) {
        if (data[i - 1] == undefined) {
          tempData.splice(i, 30 - i);
          humiData.splice(i, 30 - i);
          finedustData.splice(i, 30 - i);
          gasData.splice(i, 30 - i);
          date.splice(i, 30 - i);
          gps.splice(i, 30 - i);

          break;
        }
        tempData[i] = data[i - 1].temperature;
        humiData[i] = data[i - 1].humidity;
        finedustData[i] = data[i - 1].fine_dust;
        gasData[i] = data[i - 1].gas;
        //var temp = data[0][i].recorddate;
        date[i] = new Date(data[i - 1].recorddate.substr(0, 19));
        gps[i] = data[i - 1].gps;

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
          y: {
            tick: {
              values: [0, 1],
              format: function(x) {
                if (x == 1) return "가스 검출";
                else return "가스 미검출";
              }
            }
          },
        },

        bindto: "#charForGas"
      });
    });
  document.getElementById("chartName").innerHTML = "RaspberryPi Num : " + machineNum;

//console.log(newCameraPosion);
//tempOption = new vw.ol3.CameraPosition();
//tempOption.zoom = 10;
//tempOption.center = [35.84631116666667,127.13362183333334];
  vw.ol3.MapOptions = {
    basemapType: vw.ol3.BasemapType.GRAPHIC,
    controlDensity: vw.ol3.DensityType.EMPTY,
    interactionDensity: vw.ol3.DensityType.BASIC,
    controlsAutoArrange: true,
    homePosition: {
      center :ol.proj.fromLonLat(127.1,35.8),
    zoom : 3,
    rotation : 0.5,},
    initPosition: {
      center :ol.proj.fromLonLat(127.1,35.8),
    zoom : 3,
    rotation : 0.5,},
    zoom : 16,
  };

  vmap = new vw.ol3.Map("mapForRaspberry",  vw.ol3.MapOptions);
   markerLayer = new vw.ol3.layer.Marker(vmap);
   vmap.addLayer(markerLayer);

  //  for (var i = 1; i < 31; i++) {
      //console.log((gps[i].substr(10,3)+"."+gps[i].substr(13,2)) *1 ,(gps[i].substr(1,2)+"."+gps[i].substr(3,2)) *1);
      //if(gps[i] != undefined){
      console.log(gps[i]);
      vw.ol3.markerOption = {
        x: 126.24,
        y: 37.4,
        epsg: "EPSG:4326",
        title: '테스트마커1',
        contents: '테스트마커1 본문내용',
        //iconUrl: 'http://map.vworld.dev/images/ol3/marker_blue.png'
      };
      markerLayer.addMarker(vw.ol3.markerOption);
      vw.ol3.markerOption = {
    x : 14164292.00853613,
    y : 4495009.258626321,
    epsg : "EPSG:900913",
    title : '테스트마커2',
    contents : '테스트마커2 본문내용<br>테스트마커2 본문내용',
    iconUrl : 'http://map.vworld.dev/images/ol3/btn_area.png'
   };
   markerLayer.addMarker(vw.ol3.markerOption);

   vw.ol3.markerOption = {
    x : 14129709.590359,
    y : 4442313.7639686,
    epsg : "EPSG:3857",
    title : '브이월드로 가자',
    contents : "<a href='http://map.vworld.dev' target='_blank'>브이월드로 GOGOGO</a><br><br><a href='http://dev.vworld.kr' target='_blank'>개발자센터 GOGOGO</a>"
   };
   markerLayer.addMarker(vw.ol3.markerOption);

  //  }
  //}


}

function updateChart(chartName, temp, hum, fine, gas, recorddate,gpsD,machineNum){
  if(document.getElementById("machineNum").value == machineNum){

    tempData.splice(1,1);
    humiData.splice(1,1);
    finedustData.splice(1,1);
    gasData.splice(1,1);
    date.splice(1,1);
    gps.splice(1,1);

    tempData.push(temp);
    humiData.push(hum);
    finedustData.push(fine);
    gasData.push(gas);
    date.push(new Date(recorddate.substr(0, 19)));
    gps.push(gpsD);

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
