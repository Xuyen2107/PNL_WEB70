function FizzBuzz() {
   let output = "";
   for (let i = 1; i <= 15; i++) {
      const element = [i];
      if (element % 3 === 0) {
         output += "Fizz";
      } else if (element % 5 == 0) {
         output += "Buzz";
      } else if (element % 3 == 0 && element % 5 == 0) {
         output += "FizzBuzz";
      }
   }
   return output;
}
console.log(FizzBuzz());
