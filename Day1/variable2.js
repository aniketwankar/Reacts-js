//variable
const a = 10; //global variable var
{
  console.log("Outer scope", a);
  {
    let a = 90;
    console.log("Inner scope", a);
  }
  console.log("Outer scope", a);
}
