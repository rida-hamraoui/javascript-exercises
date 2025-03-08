const fibonacci = function(index) {
    if(index < 0){
        return "OOPS"
    }else if(index == 0){
        return 0;
    }else if(index == 1){
        return 1;
    }else{
        let fib1 = 0;
        let fib2 = 1;
        for(let i = 1; i < index; i++){
            let tmp = fib1 + fib2;
            fib1 = fib2;
            fib2 = tmp;
        }
        return fib2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
