for(let i=1; i<=5; i++){
    console.log("Iteration: " + i);
}



let i=2;
while(i <= 10){
    console.log("Current number: " + i);
    i += 2; // Increment by 2
}


let count = 1;
do {
    console.log("Count is: " + count);
    count++;
} while (count <= 5);



let sum = 0;
for (let j = 1; j <= 10; j++) {
    sum += j; // Add j to sum
}
console.log("Sum of numbers from 1 to 10 is: " + sum);
  


let pattern = "";
for (let k = 1; k <= 5; k++) {
    for (let l = 1; l <= k; l++) {
        pattern += "*"; // Append asterisk
    }
    pattern += "\n"; // New line after each row
}
console.log(pattern); // Print the pattern


