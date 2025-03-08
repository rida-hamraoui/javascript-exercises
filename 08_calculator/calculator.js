const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	result = 0;
	for(let i=0; i < arr.length ; i++){
    result += arr[i];
  }
  return result;
};

const multiply = function(arr) {
  result = 1;
	for(let i=0; i < arr.length ; i++){
    result *= arr[i];
  }
  return result;
};

const power = function(base, pow) {
	return base ** pow;
};

const factorial = function(num) {
	if(num == 0) return 1;
  return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
