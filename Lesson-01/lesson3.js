//Vòng lặp for
function removeDuplicateFromArray(arr) {
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
         newArr.push(arr[i]);
      }
   }

   return newArr;
}

// Dùng fillter
function removeDuplicateFromArrayOne(arr) {
   return arr.filter((item, index) => {
      return arr.indexOf(item) === index;
   });
}

//Dùng forEach
function removeDuplicateFromArrayTwo(arr) {
   let newArr = [];
   arr.forEach((item) => {
      if (!newArr.includes(item)) {
         newArr.push(item);
      }
   });
   return newArr;
}

//Dùng Set có sẵn trong JS
function removeDuplicateFromArrayThree(arr) {
   return [...new Set(arr)];
}

const arr = ["one", "one", 1, 1, 2, 5, 9, -1, 2, -1, "vietnam", "hanoi"];

console.log("Array", removeDuplicateFromArray(arr));
console.log("ArrayOne", removeDuplicateFromArrayOne(arr));
console.log("ArrayTwo", removeDuplicateFromArrayTwo(arr));
console.log("ArrayThree", removeDuplicateFromArrayThree(arr));
