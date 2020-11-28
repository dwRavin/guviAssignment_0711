var js = {};
var arr = [];
var cityId = prompt('Please enter the city id :');

var request = new XMLHttpRequest();

request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id='+cityId+'&appid=9a31905779f831e0a9b69e8556d71800', true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response)
    js = {};
    js['CityId'] = cityId;
    js['weather']=data;
    console.log(js);
}

    


