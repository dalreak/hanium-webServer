function selectCheckMachineType(sel) {
  var res_a = ["1", "2", "3", "4", "5"];
  var res_r = ["1", "2", "3"];
  var target = document.getElementById("machineNum");

  if (sel.value == "arduino") var res = res_a;
  else if (sel.value == "raspberry") var res = res_r;

  target.options.length = 0;

  for (var machineNum in res) {
    var opt = document.createElement("option");
    opt.value = res[machineNum];
    opt.innerHTML = res[machineNum];
    target.appendChild(opt);
  }
}

function makeID(t, e) {
  var idVar = "";
  if (t == 0)
    idVar += "raspberryPiNum";
  else
    idVar += "arduinoNum";

  switch (e + 1) {
    case 1:
      idVar += "ONE";
      break;
    case 2:
      idVar += "TWO";
      break;
    case 3:
      idVar += "THREE";
      break;
    case 4:
      idVar += "FOUR";
      break;
    case 5:
      idVar += "FIVE";
      break;
  }
  return idVar;
}

function onClickChangeGraph(machineType, machineNum) {
  switch (machineType) {
    case 'arduino':
      if (document.getElementById("extraModuleO").src != "https://toojs.asuscomm.com/javascripts/forChart-arduino.js") {
        socket4Html.emit('arduinoHtml', 'req arduinoHtml');
        $("#chartPage *").remove(); //for arduino chart layout
        $("#extraModules *").remove();
        var jsFile = document.createElement('script');
        jsFile.type = 'text/javascript';
        jsFile.src = '/javascripts/forChart-arduino.js';
        jsFile.id = 'extraModuleO';
        //test.onload = alertTest();
        document.getElementById('extraModules').appendChild(jsFile);
        document.getElementById("extraModuleO").onload = function() {
          initChart(machineNum);
        };
      } else {
        initChart(machineNum);
      }
      break;
    case 'raspberry':
      if (document.getElementById("extraModuleO").src != "https://toojs.asuscomm.com/javascripts/forChart-raspberrypi.js") {
        socket4Html.emit('raspberrypiHtml', 'req raspberrypiHtml');
        $("#chartPage *").remove(); //for raspberry chart layout
        $("#extraModules *").remove();
        var jsFile = document.createElement('script');
        jsFile.type = 'text/javascript';
        jsFile.src = '/javascripts/forChart-raspberrypi.js';
        jsFile.id = 'extraModuleO';
        document.getElementById('extraModules').appendChild(jsFile);
        document.getElementById("extraModuleO").onload = function() {
          //socket4Html.emit('vmapKeyServer',{text:"req vmapKeyServer",machine_num:machineNum});
          initChart(machineNum);
        };
      } else {
        initChart(machineNum);
      }
      break;
    case 'allmachine':
      if (document.getElementById("extraModuleO").src != "https://toojs.asuscomm.com/javascripts/forChart-main.js") {
        socket4Html.emit('dashboardHtml', 'req dashboardHtml');
        $("#chartPage *").remove(); //for arduino chart layout
        $("#extraModules *").remove();
        var jsFile = document.createElement('script');
        jsFile.type = 'text/javascript';
        jsFile.src = '/javascripts/forChart-main.js';
        jsFile.id = 'extraModuleO';
        document.getElementById('extraModules').appendChild(jsFile);
        document.getElementById("extraModuleO").onload = function() {
          initChart();
        };
      }
      break;
  }
}

function updateGraph(userId, machineType, machineNum) {
  var addressQuery = "https://toojs.asuscomm.com/data/node/getData/";
  addressQuery += userId;
  addressQuery += "?machine_type=" + machineType + "&machine_num=" + machineNum + "&getSensorData=1";
  $.getJSON(addressQuery,
    function(data) {
      var machineName = makeID(machineType, machineNum - 1);
      if (document.getElementById("machineType").value == "allmachine")
        upDateChart(machineName, data[0].temperature, data[0].humidity, data[0].fine_dust, data[0].gas, data[0].recorddate);
      else if (document.getElementById("machineType").value == "arduino")
        updateChart(machineName, data[0].temperature, data[0].humidity, data[0].fine_dust, data[0].gas, data[0].recorddate,machineNum);
      else if (document.getElementById("machineType").value == "raspberry")
        updateChart(machineName, data[0].temperature, data[0].humidity, data[0].fine_dust, data[0].gas, data[0].recorddate, data[0].gps,machineNum);

    }
  );
}
