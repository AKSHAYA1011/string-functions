let str = "Count the vowels in this string";
let count = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
        count++;
    }
}

console.log("Number of vowels:", count);
