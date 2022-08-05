// 1. simple functions
function fun() {
  console.log("Function fun");
}

fun();
// function with default argument
function greet(name = "User") {
  console.log("Good Morning " + name); //concatenation
}
greet("Harish");
greet("Alok");
greet();

function sum(a, b = 0) {
  console.log("Sum is " + (a + b));
}
sum();
sum(7, 7);
