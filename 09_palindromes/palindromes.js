const palindromes = function (word) {
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");
    word = word.toLowerCase();
    result = true;
    for(let i = 0, j = word.length -1; i < j; i++, j--){
        if(word.charAt(i) != word.charAt(j)) 
            result = false;
    }
    return result;
};

// Do not edit below this line
module.exports = palindromes;
