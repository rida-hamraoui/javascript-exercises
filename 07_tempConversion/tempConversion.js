function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(fahrenheitTem) {
  return round(((fahrenheitTem - 32) * 5/9), 1) ;
};

const convertToFahrenheit = function(celsiusTem) {
  return round((celsiusTem * 9/5 + 32), 1) ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
