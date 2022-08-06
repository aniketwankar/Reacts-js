// Function Argument
//{fname, lname} = {fname:"Harish", lname:"Chopkar"}
// function with default argument with destructing
function greet({ fname, ...details }) {
  console.log(`Hi  ${fname}`);
  console.log(details);
}

//function call
greet({ lname: "Chopkar", fname: "Harish", comapny: "Webakruti" });
