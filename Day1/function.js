// function with return type
function pi_value() {
  return 3.14;
}
a = pi_value() * 2;
console.log("a = ", a);

// function with argument and return type
function multiply(a, b) {
  return a * b;
}
res = multiply(4, 5);
console.log("multiplication is ", res);

function check() {
  console.log("step 1");
  console.log("step 2");
  return false;
  console.log("step 3");
  console.log("step 4");
}
console.log(check());
