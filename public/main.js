const submitBtn = document.getElementById('Submit');
const cityName = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real = document.getElementById("temp_real");
//const datahide =document.querySelector(".middle_layer");


const getInfo = async(event)=>{
    event.preventDefault();
let cityVal = cityName.value; 
    //console.log(cityVal);
    if(cityVal == ""){
        city_name.innerText = `please write the city name`;
        //datahide.classList.add('data_hide');
    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=806fb2b035a782bb65e544ab09dd1317`;
        const response =   await fetch(url);
        const data = await response.json();
        const arrData = [data];
        //console.log(arrData);

        //console.log(data);
        //console.log(response)
        city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country} `;
        temp_real.innerText = arrData[0].main.temp;
        //temp_status.innerText = arrData[0].weather[0].main;

        const tempMood = arrData[0].weather[0].main;
        if(tempMood== "Clear"){
            temp_status.innerHTML = "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
        }
         else if(tempMood== "Clouds"){
            temp_status.innerHTML = "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
        }
         else if(tempMood== "Rain"){
            temp_status.innerHTML = "<i class='fas  fa-cloud-rain' style='color:#1E5162;'></i>";
        }
        else {
            temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }
        //datahide.classList.remove("data_hide");
    }
        catch{
            city_name.innerText = `please write the city name properly`;
           //datahide.classList.add("data_hide");
        }
    }
}

submitBtn.addEventListener('click', getInfo);




