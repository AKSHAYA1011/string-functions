let str1 = "capitalize each word";
let words = str1.split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
let str2 = words.join(" ");
console.log(str2);
