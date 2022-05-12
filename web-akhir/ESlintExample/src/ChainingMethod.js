class Mobil {
  constructor() {
    this._color = null;
    this._model = null;
    this._manufacture = null;
  }

  setModel(model) {
    this._model = model;
    return this;
  }
  setManufacture(manufacture) {
    this._manufacture = manufacture;
    return this;
  }
  setColor(color) {
    this._color = color;
    return this;
  }

  save() {
    console.log(
      `Car ${this._manufacture}, Model ${this._model}, Color ${this._color}`
    );
  }
}

const Honda = new Mobil()
  .setManufacture('Honda')
  .setModel('Civic')
  .setColor('Red')
  .save();
// Honda.setColor('Red');
// Honda.setModel('Civic');
// Honda.setManufacture('Honda');
// Honda.save();
