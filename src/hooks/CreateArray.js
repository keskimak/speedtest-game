//This function creates the initial array of numbers from 1-4. 
function createArray(lenght){

//This should be modified so that it cannot give you two same numbers in a row because that is not playable

    let array = [];
    for (let index = 0; index < lenght; index++) {
        array.push(Math.floor(Math.random()*(5-1)+1));   
    }
    return array;
}

export { createArray }