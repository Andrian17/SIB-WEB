class Vehicle {
  constructor(licensePlate, manufacture) {
    this.licensePlate = licensePlate;
    this.manufacture = manufacture;
    this.engineActive = false;
  }

  startEngines() {
    console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
    this.engineActive = true;
  }
  info() {
    console.log(`Nomor Kendaraan: ${this.licensePlate}`);
    console.log(`Manufacture: ${this.manufacture}`);
    console.log(`Mesin: ${this.engineActive ? "Active" : "Inactive"}`);
  }

  parking() {
    console.log(`Kendaraan ${this.licensePlate} parkir!`);
  }
}

class Car extends Vehicle {
  constructor(licensePlate, manufacture, wheels) {
    super(licensePlate, manufacture);
    this.wheels = wheels;
  }

  droveOff() {
    console.log(`Kendaraan ${this.licensePlate} melaju!`);
  }
  openDoor() {
    console.log(`Membuka pintu!`);
  }
}

const mobilImpian = new Car("Dk 19 AND", "Honda", 4);
const mobilImpian2 = new Car("Dk 18 NIA", "Toyota", 4);
mobilImpian.droveOff();
console.log(mobilImpian.wheels);
mobilImpian.info();
mobilImpian.startEngines();
mobilImpian.info();

class VehicleFactory {
  static repair(vehicles) {
    vehicles.forEach((vehicle) => {
      console.log(
        `Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`
      );
    });
  }
}

VehicleFactory.repair([mobilImpian, mobilImpian2]);
