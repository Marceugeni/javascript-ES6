
/* Exercici 2*/

multiply = (num1, num2) => num1 * num2;

console.log(multiply(2,3));

//------------------------------------------------------------

toCelsius = fahrenheit =>  (5/9)*(fahrenheit-32);

console.log(toCelsius(90));


//------------------------------------------------------------

// This function returns a string padded with leading zeros

zeros = padzeros (num, totalLen) => {
   let numStr = num.toString();
   let numZeros = totalLen - numStr.length;
   for (let i = 1; i <= numZeros; i++) {
      numStr="0" + numStr; 
      } 
   return numStr;
 } 

console.log(padZeros(3,18));

//-----------------------------------------------------------

power = (base, exponent) => {
   let result = 1;
   for (let i=0; i<exponent; i++){
      result *= base;
   }
   return result;
}

//----------------------------------------------------------

greet = who => console.log (`Hello ${who}`);
