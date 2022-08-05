// =============Super keyword===========
class A {
  start() {
    this.name = "Apache";
    console.log("A class " + this.name);
  }
}

class B extends A {
  start() {
    super.start();
    console.log("B Class");
    console.log("B class", this.name);
  }
}
obj = new B();
obj.start();
