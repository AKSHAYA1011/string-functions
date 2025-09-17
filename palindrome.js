let str="Madam";
let letter=str.split(" ");
let reversedLetters = letter.reverse();
let reversedWords = reversedLetters.join();
if(str.toLowerCase()==reversedWords.toLowerCase()){
    console.log("It is a Palindrome");
}else{
    console.log("It is not a Palindrome");
}