const input = document.querySelector('.input');
const button = document.querySelector('.button');
const city = document.querySelector('.city');
const degree = document.querySelector('.degree');
const country = document.querySelector('.country');
const time = document.querySelector('.time')

function getWeather() {
  if (input.value !== '' && isNaN(Number(input.value))) {
    fetch(
      `http://api.weatherstack.com/current?access_key=98d80252ba98f95845714563be3d9a86&query=${input.value},${country.value}`, {
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
      }
    )
      .then((res) => res.json())
      .then(({ current, location }) => {
        (degree.innerText = `${current.temperature} \u00b0C`),
          (city.innerText = `${location.name}, ${location.country}`),
          (time.innerText = (location.localtime));
      });
  }
}

button.addEventListener('click', getWeather);
document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    getWeather();
  }
});
