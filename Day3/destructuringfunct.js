// Function Argument
//{fname, lname} = {fname:"Harish", lname:"Chopkar"}
// function with default argument with destructing
function greet({ fname, lname }) {
  console.log(`Hi  ${fname} ${lname}`);
}

//function call
greet({ lname: "Chopkar", fname: "Harish" });
