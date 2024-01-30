const key = 'c7771b03ac42b461e5813bac8be3db27';

const btn = document.querySelector('.btn');
const degree=document.querySelector('.degree')
const desc=document.querySelector('.description')
const wind = document.querySelector('.wind')
const image =document.querySelector('img')
const humidity=document.querySelector('.humid')
const city =document.querySelector('.city')
const togglecls=document.querySelector('.hide')

btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Move the value assignment inside the event listener to get the current value when the button is clicked
    const val = document.querySelector('#val');
    const apiUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${val.value}`;

    console.log(val.value);

    // fetch(apiUrl)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("data", data);
    //         const locationKey = data[0].Key;
    //         console.log("loc", locationKey);

    //         // Fix the API key variable here (change 'key' to 'key')
           
    //     });

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val.value}&units=metric&appid=${key}`)
    .then(res => res.json())
    .then(data1 => {
        console.log(data1)
        degree.innerHTML=`${data1.main.temp}<span>°C</span>`
        humidity.innerHTML=data1.main.humidity
        wind.innerHTML=`${data1.wind.speed}km/h`
        desc.innerHTML=data1.weather[0].description
        city.innerHTML=data1.name

        togglecls.classList.add('show')
        // togglecls.style.transition='ease in'
    });
});

