//variable
var a = 10; //global variable
let b = 90; //scope
{
  console.log("Outer scope", a);
  {
    var a = 90;
    console.log("Inner scope", a);
  }
  console.log("Outer scope", a);
}
