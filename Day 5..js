for(let i=1;i<=50;i++){
    if(i%3==0 && i%5===0){
        console.log("FizzBuzz");
    }else if    (i%3===0){
        console.log("Fizz");
    }else if(i%5===0){
        console.log("Buzz");
    }else{
        console.log(i);
    }

}

let num1=10;
let num2=5;
let operator="*";
let result;
if(operator === "+") {
    result = num1 + num2;
}else if(operator === "-") {
    result = num1 - num2;
}else if(operator === "*") {
    result = num1 * num2;
}else if(operator === "/") {
    result = num1 / num2;
}
else {
    console.log("Invalid operator");
}



let secret = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let guess=7;
if(guess === secret) {
    console.log("Congratulations! You guessed the secret number: " + secret);
}else if(guess < secret) {
    console.log("Your guess is too low. Try again!");   
}else if(guess > secret) {
    console.log("Your guess is too high. Try again!");
}else {
    console.log("Invalid guess. Please enter a number between 1 and 100.");
}

let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i; // Multiply factorial by i
}
console.log("The factorial of " + num + " is: " + factorial);

for(let i=1;i<=5;i++){
    let row = "";
    for(let j=1;j<=i;j++){
        row += j; // Append asterisk
    }   console.log(row); // Print the row
}
