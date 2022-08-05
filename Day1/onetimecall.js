//only one time call
(function () {
  console.log("This is Anonymous funciton");
})();

function greet() {
  console.log("Good Morning");
}
greet(); //function call
greet(); //function call
greet(); //function call
greet(); //function call
greet(); //function call
greet(); //function call

greet = function (name) {
  console.log("Greet " + name);
};

console.log(greet);
greet("Harish");

greet2 = greet;
console.log(greet2);
greet2("Alok");

greet3 = greet;
greet3("Rohit");
