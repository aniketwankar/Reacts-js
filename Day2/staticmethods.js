// =======Static Methods============
// class
class Bike {
  constructor(arg) {
    this.name = arg;
    console.log("Constructor Called!");
  }

  static start() {
    console.log("Static Method!");
  }
}

// static method can be called with className
Bike.start();

// class
class Bike {
  //global variable
  name = "Apache";

  constructor() {
    var a = 90; //local variable
    console.log(a);
    console.log("Bike Name", this.name);
  }

  start() {
    console.log(this.name);
  }
}

rider = new Bike();
rider.start();
rider.name = "Pulsar";
console.log("outside Bike name", rider.name);
