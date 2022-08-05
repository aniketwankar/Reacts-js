// =======Class and Object=============
// class
class Bike {
  constructor(arg) {
    this.name = arg;
    console.log("Constructor Called!");
  }

  start() {
    console.log(this.name + "Started!");
  }
}
// object
rider1 = new Bike("Apache");
console.log(rider1);
rider1.start();

rider2 = new Bike("Pulsar");
console.log(rider2);
rider2.start();
