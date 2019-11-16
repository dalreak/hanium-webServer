
var chartForTemp;
var chartForHumi;
var chartForFinedust;
var charForGas;
var mapForRaspberry;

var vmap;
var mapController;
var markerLayer;
var map;

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
gps[0] = "GPS";

function prepareChart(vmapKey, machine_num) {

  var jsFileForVmap = document.createElement('script');
  jsFileForVmap.type = 'text/javascript';
  jsFileForVmap.src = 'https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.4.4/proj4.js' + vmapKey;
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
          tempData.splice(i, 30 - i+1);
          humiData.splice(i, 30 - i+1);
          finedustData.splice(i, 30 - i+1);
          gasData.splice(i, 30 - i+1);
          date.splice(i, 30 - i+1);
          gps.splice(i, 30 - i+1);

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


  var initPos = ["127.892509", "36.325328"];

  for (var i = 1; i < gps.length; i++) {
    //console.log(gps);
    if (gps[i] && gps[i].length > 8) {
      initPos = gps[i].split(",");
      break;
    }
  }
//console.log(gps);

  map = new ol.Map({
    target: 'mapForRaspberry',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.XYZ({ // 브이월드 WMTS API 호출
          url: 'https://api.vworld.kr/req/wmts/1.0.0/2B5FD2E8-215F-3B64-B391-486EBBCC9185/Base/{z}/{y}/{x}.png'
        })
      })
    ],
    //overlays: [overlay],
    view: new ol.View({ //지도위치 설정
      center: ol.proj.transform(initPos, 'EPSG:4326', "EPSG:900913"), //위경도 좌표계 변환
      zoom: 15
    }),
    logo: false,
  });

  for (var i = 1; i < gps.length; i++) {
    //console.log(gps);
    if (gps[i] && gps[i].length > 8) {
      var layer = new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [
            new ol.Feature({
              type: 'click',
              geometry: new ol.geom.Point(ol.proj.fromLonLat(gps[i].split(","))),
              desc: "온도 : " + tempData[i]+"\n습도 : "+humiData[i]+"\n미세먼지 : "+finedustData[i]+"\n시간 : " + date[i],
            })
          ],
        }),
        style: [
          new ol.style.Style({
            image: new ol.style.Icon( /** @type {olx.style.IconOptions} */ ({
              anchor: [0.5, 46],
              anchorXUnits: 'fraction',
              anchorYUnits: 'pixels',
              src: 'https://toojs.asuscomm.com/images/marker.png',
              scale: 0.08 // 마커 사이즈
            }))
          })
        ],
      });
      map.addLayer(layer);
    }
  }
/*
  var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [
        new ol.Feature({
          type: 'click',
          geometry: new ol.geom.Point(ol.proj.fromLonLat(["127.892509", "36.325328"])),
          desc: "hello\nhello",
        })
      ],
    }),
    style: [
      new ol.style.Style({
        image: new ol.style.Icon( /** @type {olx.style.IconOptions}  ({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'https://toojs.asuscomm.com/images/marker.png',
          scale: 0.08 // 마커 사이즈
        }))
      })
    ],
  });
  map.addLayer(layer);
  */
  map.on('click', function (evt) {
      var feature = map.forEachFeatureAtPixel(evt.pixel,
          function (feature) {
              return feature;
          });

      if (feature) {
          alert(feature.get('desc'));
          //content.innerHTML = '<p>You clicked here:</p>' + feature.get('desc');
          //overlay.setPosition(evt.coordinate);
      }
  });
}

function updateChart(chartName, temp, hum, fine, gas, recorddate, gpsD, machineNum) {
  if (document.getElementById("machineNum").value == machineNum) {

    tempData.splice(1, 1);
    humiData.splice(1, 1);
    finedustData.splice(1, 1);
    gasData.splice(1, 1);
    date.splice(1, 1);
    gps.splice(1, 1);

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
    if (gps[gps.length -1] && gps[gps.length -1].length > 8) {
      var layer = new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [
            new ol.Feature({
              type: 'click',
              geometry: new ol.geom.Point(ol.proj.fromLonLat(gps[gps.length -1].split(","))),
              desc: "온도 : " + tempData[tempData.length -1]+"\n습도 : "+humiData[humiData.length -1]+"\n미세먼지 : "+finedustData[finedustData.length -1]+"\n시간 : " + date[date.length -1],
            })
          ],
        }),
        style: [
          new ol.style.Style({
            image: new ol.style.Icon( /** @type {olx.style.IconOptions} */ ({
              anchor: [0.5, 46],
              anchorXUnits: 'fraction',
              anchorYUnits: 'pixels',
              src: 'https://toojs.asuscomm.com/images/marker.png',
              scale: 0.08 // 마커 사이즈
            }))
          })
        ],
      });
      map.addLayer(layer);
    }

  }

}
