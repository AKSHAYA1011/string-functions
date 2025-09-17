let sentence = "Find the longest word in this sentence";
let words = sentence.split(" "); 
let longestWord = "";
for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}
console.log("The longest word is:", longestWord);
