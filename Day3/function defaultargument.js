// function with default argument
function greet1(fname = "user") {
  console.log("Hi " + fname);
}

greet1("harish");
greet1();

// function with default argument with destructing
function greet({ fname = "user" } = {}) {
  console.log(`Hi  ${fname}`);
}

greet({ fname: "Harish" });
greet();
