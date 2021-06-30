const submitBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city-current');
const city_temp = document.getElementById('city-temp');
const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");

const getCurrentDay = ()=>{
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
      let currentTime = new Date();
      let day = weekday[currentTime.getDay()];
      return day;
  };
  const getCurrenTime = () =>{

    var perios = "AM";
      var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
      var now = new Date();
      var month = months[now.getMonth()];
      var date = now.getDate();
      var year = now.getFullYear();

      let hours = now.getHours();
      let mins = now.getMinutes();
      if(hours > 11){
          perios = "PM";
          if(hours > 12){
            hours -= 12;
          }                  
      }
      if(mins < 10){
          mins = "0" + mins;
      }
     
      return `${month} ${date} | ${hours}:${mins}${perios}`;

  }; 
  //getCurrentDay();
 curDate.innerHTML = getCurrentDay() + " | " + getCurrenTime();
const getinfo = async(e) =>{
    let cityval = cityName.value;
    e.preventDefault();
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=79246df07be87839d0783fab468d0f2c`;
   
    if(cityval == ''){
        city_name.innerText = `Please write the city name before search`;
    }else{
        try{
            const response = await fetch(url);
            const arrRes = await response.json(); 
            const dataarr = [arrRes];
            city_temp.innerText = dataarr[0].main.temp;
            city_name.innerText = dataarr[0].name;
            console.log(dataarr);
            console.log(dataarr[0].weather[0].main);
            const tempStatus = dataarr[0].weather[0].main;
            if(tempStatus == "Sunny"){
                weathercon.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
              }else if(tempStatus == "Clouds"){
                weathercon.innerHTML = "<i class='fas fa-cloud' style='color: #dfe4ea;'></i>";
              }else if(tempStatus == "Rainy"){
                weathercon.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
              }else{
                weathercon.innerHTML = "<i class='fas fa-sun' style='color: #44c3de;'></i>";
              }
        }catch{
            city_name.innerText = `Please enter the city name properly`;
        }
        
    }
}
submitBtn.addEventListener('click', getinfo);