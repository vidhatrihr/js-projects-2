const celsiusEl = document.querySelector('#celsius');
const fahrenheitEl = document.querySelector('#fahrenheit');
const kelvinEl = document.querySelector('#kelvin');

function calculateTemp(event) {
  const currentValue = +event.target.value;

  if (event.target.name == 'celsius') {
    kelvinEl.value = (currentValue + 273.15).toFixed(2);
    fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
  } else if (event.target.name == 'fahrenheit') {
    celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
    kelvinEl.value = ((currentValue - 32) / 1.8 + 273.15).toFixed(2);
  } else if (event.target.name == 'kelvin') {
    celsiusEl.value = (currentValue - 273.15).toFixed(2);
    fahrenheitEl.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
  }
}
