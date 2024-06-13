const convertToCelsius = function(temperature) {

  temperature = (temperature - 32) / 1.8;

  if(!Number.isInteger(temperature)){
    temperature = Number(temperature.toFixed(1));
  }

  return temperature;
};

const convertToFahrenheit = function(temperature) {

  temperature = 1.8 * temperature + 32;

  if(!Number.isInteger(temperature)){
    temperature = Number(temperature.toFixed(1));
  }

  return temperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
