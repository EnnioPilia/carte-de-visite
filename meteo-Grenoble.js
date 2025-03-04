
const APIkey = "e3286e4c21490b1511e7321ee5767a1e";

let url = `https://api.openweathermap.org/data/2.5/weather?q=grenoble&appid=${APIkey}&units=metric&lang=fr`;

    fetch(url).then( reponse => 
        reponse.json().then(data => {
            console.log(data);

            let temp = data.main.temp;
            temp = parseFloat(temp.toFixed(1))

            document.querySelector('#description').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"><p>${data.weather[0].description}</p>`;                                      
            document.querySelector('#temparature').innerHTML = "<i class='fa-solid fa-temperature-three-quarters'></i> " + temp + '°';
            document.querySelector('#vent').innerHTML = "<i class='fa-solid fa-wind'></i> " + data.wind.speed + ' k/m';
            document.querySelector('#humidite').innerHTML = "<i class='fa-solid fa-droplet'></i> " + data.main.humidity + ' %';
        })
    ).catch(err => console.log('erreur :' + err ));       

    
   setInterval(() => {
        fetch(url);
    }, 3600000); 
