//This function creates the initial array of numbers from 1-4. 
function createArray(lenght){

    let array = [];
    for (let index = 0; index < lenght; index++) {
        array.push(Math.floor(Math.random()*(5-1)+1));
        
    }
    
    return array;
}

export { createArray }