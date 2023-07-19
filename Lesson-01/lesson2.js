//Vòng lặp for
function countVowels(str) {
   const vowels = ["e", "u", "o", "a", "i"];
   let count = 0;
   for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
         count++;
      }
   }
   return count;
}

//Biểu thức chính quy
function countVowelsOne(str) {
   const regex = /[aeiou]/gi;
   const matches = str.match(regex);
   return matches ? matches.length : 0;
}

const str = "Javascript is a beautiful programming language";
console.log("Count", countVowels(str));
console.log("CountOne", countVowelsOne(str));
