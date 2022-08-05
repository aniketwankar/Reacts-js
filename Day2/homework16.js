function student(fname, lname, mark1, mark2, mark3) {
  this.firstName = fname;
  this.lastName = lname;
  this.mark1 = mark1;
  this.mark2 = mark2;
  this.mark3 = mark3;

  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
  this.total = function () {
    return mark1 + mark2 + mark3;
  };
  this.percentage = function () {
    return ((mark1 + mark2 + mark3) / 300) * 100;
  };
}

s1 = new student("Aniket", "wankar", 50, 60, 80);
console.log("Full Name  : " + s1.fullName());
console.log("Total Mark : " + s1.total());
console.log("Percentage : " + s1.percentage());
