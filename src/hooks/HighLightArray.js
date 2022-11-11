


export default function highLightArray(generatedArray) {

    let timeout = 1000; // initial gap between highlights
    let newArray=[];
    console.log(generatedArray);

    for (let index = 0; index < generatedArray.length; index++) {

        function printToConsole() {
            newArray.push(generatedArray[index]);


        }
       

        setTimeout(printToConsole, timeout);



        
    }
    console.log(newArray);
}