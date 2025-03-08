const removeFromArray = function(arrayToChange, ...toDelete) {
    const result = [];
    for(let i = 0; i < arrayToChange.length; i++){
        if(toDelete.includes(arrayToChange[i])  ){
            continue;
        }else{
            result.push(arrayToChange[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
