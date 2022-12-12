//This function creates the initial array of numbers from 1-4. 
function createArray(lenght) {
    let array = [];
    for (let index = 0; index < lenght; index++) {
        let number = Math.floor(Math.random() * (5 - 1) + 1);
        //Prevent 2 same numbers in a row
        if (number === array[index - 1]) {
            if (number < 3) {
                number++;
            }
            else {
                number--;
            }
        }
        array.push(number);
    }
    return array;
}
export { createArray }