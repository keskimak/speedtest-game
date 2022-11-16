

export default function highLightArray(generatedArray) {

    let interval = 5000; // initial gap between highlights
   
    let index=0;
    console.log(generatedArray);

   function printArray(){
    

    if(index < generatedArray.length) {
        console.log(generatedArray[index]);

        index++;

    }
   }

   setInterval(printArray, interval);
  
}
