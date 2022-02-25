//Class Pada Js

class Mobil {
  constructor(brand, unit) {
    this.brand = brand;
    this._unit = unit;
    this.mesinNyala = false;
  }

  nyalakanMesin() {
    console.log("Mobil dinyalakan");
    this.mesinNyala = true;
  }

  matikanMein() {
    console.log("Mesin dimatikan");
    this.mesinNyala = false;
  }

  info() {
    console.log(`Merek Mobil ${this.brand}`);
    console.log(`Type Mobil ${this.unit}`);
    console.log(`Status Mesin ${this.mesinNyala ? "Nyala" : "Mati"}`);
  }

  get unit() {
    return `Type mobil ini ${this._unit}`;
  }

  set unit(val) {
    console.log(`Type mobil berubah dari ${this._unit} menjadi ${val}`);
    this._unit = val;
  }
}

const mobilSaya = new Mobil("Ahond", "SEdan");
// mobilSaya.nyalakanMesin();
// mobilSaya.info();
// mobilSaya.matikanMein();
// mobilSaya.info();

mobilSaya.unit = "SUV";
console.log(mobilSaya.unit);
