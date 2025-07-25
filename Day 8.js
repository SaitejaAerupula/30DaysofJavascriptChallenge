//day 9
//geometry and algebra expressions

//1
// Day 9: JavaScript Geometry Functions
// This code demonstrates how to calculate the area of a rectangle in JavaScript.
function triangleArea(base, height) {
    return 0.5 * base * height;
}
console.log("The area of the triangle is: " + triangleArea(5, 10)); // This will print: 25

//2
// Day 9: JavaScript circular circumference
// This code demonstrates how to calculate the circumference of a circle in JavaScript.
function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}
console.log("The circumference of the circle is: " + circleCircumference(7)); // This will print: 43.982297150257104

//3
// Day 9: JavaScript distance between two points
// This code demonstrates how to calculate the distance between two points in a 2D space in
function distanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log("The distance between the points is: " + distanceBetweenPoints(1, 2, 4, 6)); // This will print: 5

//4
// Day 9: JavaScript Pythagorean theorem    
// This code demonstrates how to calculate the hypotenuse of a right triangle using the Pythagorean theorem in JavaScript.
function pythagoreanTheorem(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
console.log("The length of the hypotenuse is: " + pythagoreanTheorem(3, 4)); // This will print: 5


//5
// Day 9: JavaScript Quadratic Equation Solver
// This code demonstrates how to solve a quadratic equation using the quadratic formula in JavaScript.
function solveQuadratic(a, b, c) {
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant < 0) {
        return "No real roots";
    }
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return `The roots are: ${root1} and ${root2}`;
}
console.log(solveQuadratic(1, -3, 2)); // This will print: The roots are: 2 and 1


//6 
// Day 9: JavaScript factorial function
// This code demonstrates how to calculate the factorial of a number in JavaScript.
function factorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("The factorial of 5 is: " + factorial(5)); // This will print: 120  