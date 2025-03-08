const repeatString = function(toBeRepeated, nTimes) {
    if(nTimes < 0) return "ERROR";
    let Repeated = '';
    for(let i = 0; i <nTimes; i++){
        Repeated = Repeated + toBeRepeated;
    }
    return Repeated;
}

// Do not edit below this line
module.exports = repeatString;
