
function createArray(lenght){

    let array = [];
    for (let index = 0; index < lenght; index++) {
        array.push(Math.floor(Math.random()*(5-1)+1));
        
    }
    
    console.log(array);
    return array;
}

export { createArray }