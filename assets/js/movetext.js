function includeJS(jsFilePath){
  var js=document.createElement("script");

  js.type="text/javascript";
  js.src=jsFilePath;

  document.body.appendChild(js);
}
includeJS("assets/js/jquery.textillate.js");
$('.tlt').textillate({ in: { effect: 'rollIn' } });
