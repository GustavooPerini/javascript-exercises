const removeFromArray = function(array, ...values) {

    let newArray = [];

    for(let i = 0; i < array.length; i++){

        let foundElement = false;

        for(let j = 0; j < values.length; j++){
            if(array[i] === values[j]){
                foundElement = true;
                break;
            }
        }
        
        if(foundElement === false){
            newArray.push(array[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
