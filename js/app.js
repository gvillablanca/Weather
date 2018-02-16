const ubicacion = document.getElementById('btnLocation');
const clima = document.getElementById('btn-weather');
const sectionWeather = document.getElementById('container-weather');
const container =document.getElementById('container');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

container.appendChild(first);
container.appendChild(second);
container.appendChild(third);
sectionWeather.appendChild(container);

let long = "";
let lat = "";

  ubicacion.addEventListener('click', function(){ 
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position){
        long = position.coords.latitude;
        lat = position.coords.longitude;
        apiFunction();
        });
    } else {
        console.log('error');
      } 
  });

function apiFunction(){
  var apiKey = '5bc24f0767d7816e49d14c6dea39232e',
    url = 'https://api.darksky.net/forecast/',
    api_call = url + apiKey + "/" + lat + "," + long + "?extend=hourly&lang=es&units=auto&callback=?";

    var days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ];

    $.getJSON(api_call, function(forecast) {
      var dateTday = new Date(forecast.daily.data[0].time * 1000),
        tday = days[dateTday.getDay()],
        skiconsTday = forecast.daily.data[0].icon,
        humidityTday = forecast.daily.data[0].humidity,
        summaryTday = forecast.daily.data[0].summary,
        tempTday = Math.round(forecast.hourly.data[0].temperature),
        tempMinTday = Math.round(forecast.daily.data[0].temperatureMin),
        tempMaxTday = Math.round(forecast.daily.data[0].temperatureMax);

        document.getElementById('fecha').value = (tday);
        document.getElementById('temperatura').value = ( tempTday);
        document.getElementById('min').value= (tempMinTday);
        document.getElementById('max').value = (tempMaxTday);
        document.getElementById('humedad').value =(humidityTday);              
        document.getElementById('info').value = (summaryTday);

        skycons();

        clima.addEventListener('click', ()=>{
          let week = [];
           for (var i = 0; i < forecast.daily.data.length; i++) {
              var date = new Date(forecast.daily.data[i].time * 1000),
              day = days[date.getDay()],
              skicons = forecast.daily.data[i].icon,
              humidity = forecast.daily.data[i].humidity,
              summary = forecast.daily.data[i].summary,
              temp = Math.round(forecast.hourly.data[i].temperature),
              tempMin = Math.round(forecast.daily.data[i].temperatureMin),
              tempMax = Math.round(forecast.daily.data[i].temperatureMax);  
              week.push('DIA: ' + day + ' ||   ' + 'HUMEDAD: '+ humidity+ ' ||   ' + 'SUMARIO: '+ summary+ ' ||   ' + 'TEMPERATURA: '+ temp+ ' ||   ' + 'MINIMA: '+  tempMin+ ' ||   ' + '<MAXIMA></MAXIMA>: ' + tempMax +  '\n');

           }
          document.getElementById('day1').value = (week + '\n');
        });

 });
}


function skycons() {
  var i,
    icons = new Skycons({
      "color": "#FE2E9A",
      "resizeClear": true
    }),
    list = [
      "clear-day",
      "clear-night",
      "partly-cloudy-day",
      "partly-cloudy-night",
      "cloudy",
      "rain",
      "sleet",
      "snow",
      "wind",
      "fog"
    ];

  for (var i = list.length; i--;) {
    var weatherType = list[i],
      elements = document.getElementsByClassName(weatherType);
    for (e = elements.length; e--;) {
      icons.set(elements[e], weatherType);
    }
  }
  // animación de iconos
  icons.play();
}

