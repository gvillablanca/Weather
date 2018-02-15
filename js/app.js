const ubicacion = document.getElementById('btnLocation');

let long = "";
let lat = "";

  ubicacion.addEventListener('click', function(){ 
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position){
        long = position.coords.latitude;
        lat = position.coords.longitude;
        console.log('ya eh pasado los parametros');

        fetch("https://api.darksky.net/forecast/5bc24f0767d7816e49d14c6dea39232e/" + lat + "," + long + "?lang=es&unit=auto").then(function(response){
          return response.json();
        }).then(function(data){
          console.log(data);
        });
       });
    } else {
        console.log('error');
      } 
  });

function skycons() {
  var i,
    icons = new Skycons({
                "color" : "#FFFFFF",
                "resizeClear": true
}),
list  = ["clear-day", "clear-night", "partly-cloudy-day", "partly-cloudy-night", "cloudy","rain","sleet","snow","wind","fog"];
    for(i = list.length; i--;) {
        var weatherType = list[i], 
            elements = document.getElementsByClassName( weatherType );
        for (e = elements.length; e--;) {
            icons.set(elements[e], weatherType);
        }
    }

 icons.play();
}
