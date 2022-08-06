// Function Argument
//Array -> object
data = [
  { lname: "Chopkar", fname: "Harish", comapny: "Webakruti" },
  { lname: "Chaudhary", fname: "Rahul", comapny: "Webakruti" },
  { lname: "Chopkar", fname: "Rohit", comapny: "Webakruti" },
  { lname: "Gupta", fname: "Shilpa", comapny: "Webakruti" },
];

for ({ fname, lname } of data) {
  console.log(fname, lname);
}
