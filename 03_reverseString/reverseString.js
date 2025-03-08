const reverseString = function(stringa) {
    let result = "";
    for(let j = stringa.length ; j >= 0; j--){
        result += stringa.charAt(j);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
