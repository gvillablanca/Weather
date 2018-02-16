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

 });
}


function skycons() {
  var i,
    icons = new Skycons({
                "color" : "#FE2E9A",
                "resizeClear": true
}),
list  = ["clear-day", "clear-night", "partly-cloudy-day", "partly-cloudy-night", "cloudy","rain","sleet","snow","wind","fog"];
    for(i = list.length; i--;) {
        var weatherType = list[i], 
            elements = document.getElementById( 'weatherType' );
        for (e = elements.length; e--;) {
            icons.set(elements[e], weatherType);
        }
    }

 icons.play();
}


        /*
               const h1 = document.getElementById('ubicacion');
              const icon = document.getElementById('icon');              

              const fecha = document.getElementById('fecha');

              const temperatura = document.getElementById('temperatura');
              const minima = document.getElementById('min');
              const maxima = document.getElementById('max');
              const humedad = document.getElementById('humedad');              
              const informacion = document.getElementById('info');
              const actual = document.getElementById('actual');
              const next1 = document.getElementById('next1');
              const next2 = document.getElementById('next2');
              const next3 = document.getElementById('next3');
              const next4 = document.getElementById('next4');
              const next5 = document.getElementById('next5');
              const next6 = document.getElementById('next6');

              first.appendChild(h1);
              second.appendChild(icon);
              third.appendChild(fecha);              
              third.appendChild(temperatura);              
              third.appendChild(minima);              
              third.appendChild(maxima);              
              third.appendChild(humedad);              
              third.appendChild(informacion);              
              third.appendChild(actual);              
              third.appendChild(next1);              
              third.appendChild(next2);              
              third.appendChild(next3);              
              third.appendChild(next4);              
              third.appendChild(next5);              
              third.appendChild(next6);

             
              const fechatext = document.createTextNode();
              const temptext = document.createTextNode();
              const mintext = document.createTextNode();
              const maxtext = document.createTextNode();
              const humtext = document.createTextNode();
              const infotext = document.createTextNode();
              const acttext = document.createTextNode();
              const txt1 = document.createTextNode();
              const txt2 = document.createTextNode();
              const txt3 = document.createTextNode();
              const txt4 = document.createTextNode();
              const txt5 = document.createTextNode();
              const txt6 = document.createTextNode();

              fecha.appendChild(fechatext);
              temperatura.appendChild(temptext);
              minima.appendChild(mintext);
              maxima.appendChild(maxtext);
              humedad.appendChild(humtext);
              informacion.appendChild(infotext);
              actual.appendChild(acttext);
              next1.appendChild(txt1);
              next2.appendChild(txt2);
              next3.appendChild(txt3);
              next4.appendChild(txt4);
              next5.appendChild(txt5);
              next6.appendChild(txt6);
                          
        */