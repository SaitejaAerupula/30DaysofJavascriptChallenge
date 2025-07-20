let age = 21;
if (age>=18){
    console.log("eligible");
}else{
    console.log("not eligible");
}


let score = 95.5;
if (score >= 90) {
    console.log("Excellent");
}else if (score >= 75) {
    console.log("Good");
}else if (score >= 50) {
    console.log("Average");
}else {
    console.log("Poor");
}   

let number = 42;
if (number % 2 === 0) {
    console.log("The number " + number + " is even.");
}else {
    console.log("The number " + number + " is odd.");
}


let day =3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

let username = "Saiteja";
let password = "password123";   
let inputUsername = "Saiteja";
let inputPassword = "password123";
if (inputUsername === username && inputPassword === password) {
    console.log("Login successful!");

} else {
    console.log("Login failed. Please check your username and password.");
}   