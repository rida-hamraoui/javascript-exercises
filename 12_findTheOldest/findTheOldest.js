const findTheOldest = function(persons) {
    let indexOld = 0;
    let oldAge = 0;

    for(let i = 0; i < persons.length ; i++){
        if(!("yearOfDeath" in persons[i])){
            const d = new Date();
            if(d.getFullYear() - persons[i].yearOfBirth > oldAge){
                indexOld = i;
                oldAge = d.getFullYear() - persons[i].yearOfBirth;
            }
        }else{
            if(persons[i].yearOfDeath - persons[i].yearOfBirth > oldAge){
                indexOld = i;
                oldAge = persons[i].yearOfDeath - persons[i].yearOfBirth;
            }
        }        
    }
    return persons[indexOld];
};

// Do not edit below this line
module.exports = findTheOldest;
