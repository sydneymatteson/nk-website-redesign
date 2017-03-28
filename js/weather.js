// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Pyongyang, North Korea',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h6>'+weather.temp+'&deg;'+weather.units.temp+' - '+weather.currently+'</h6>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<h6>'+error+'</h6>');
    }
  });
});
