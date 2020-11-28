var js = {};
var arr = [];
var request1 = new XMLHttpRequest();

request1.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request1.send();

request1.onload = function(){
    var data1 = JSON.parse(this.response)
    for (let i in data1) {
        getWeather(data1[i].latlng);
    }
    console.log(arr)
}


function getWeather(city){
    var request2 = new XMLHttpRequest();
    request2.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat='+city[0]+'&lon='+city[1]+'&appid=9a31905779f831e0a9b69e8556d71800', true);
    request2.send();
    request2.onload = function(){
        var data = JSON.parse(this.response)
        js = {};
        js['latitude'] = city[0];
        js['longitude'] = city[1];
        js['weather']=data;
        arr.push(js);
    }
}