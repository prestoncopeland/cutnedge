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

  $('#about-title').airport(['about', 'cut', 'n', 'edge']);
  $('#gallery-title').airport(['photo', 'gallery']);
  $('#contact-title').airport(['contact', 'us']);
}

window.onload = init;






