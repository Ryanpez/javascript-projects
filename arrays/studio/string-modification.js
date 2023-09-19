const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
rest = str.slice(3,10);
end = str.slice(0,3);

console.log(rest + end);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original string is ${str}, but we modified it to be ${rest + end}.\n`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
letters = input.question('Please enter how many letters will be relocated: ');

//console.log(rest + end);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (letters > 9) {
    console.log(`I am choosing  for you since there are only 10 characters\n ${rest + end}`);
} else {
    end = str.slice(0, letters);
    rest = str.slice(letters, 10);
    console.log(rest + end);
}