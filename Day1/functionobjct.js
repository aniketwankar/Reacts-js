function student(a, b) {
  this.fname = a;
  this.lname = b;
}
//argument
s1 = new student("Rahul", "Gupta");
console.log(s1);

console.log(s1.fname + s1.lname);
s1.fullName = s1.fname + s1.lname;

console.log("Full name", s1.fullName);

function student(a, b) {
  this.fname = a;
  this.lname = b;
}
