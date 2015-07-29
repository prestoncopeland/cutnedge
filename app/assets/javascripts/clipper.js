function init () {
  $('#clipper').jrumble();

  var clipperStart = function(){
    $('#clipper').trigger('startRumble');
    setTimeout(clipperStop, 300);
  };

  var clipperStop = function(){
    $('#clipper').trigger('stopRumble');
    setTimeout(clipperStart, 300);
  };

  clipperStart();
}

window.onload = init;






