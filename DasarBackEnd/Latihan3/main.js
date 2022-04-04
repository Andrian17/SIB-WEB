const Tiger = require("./Tiger");
const Wolf = require("./Wolf");

function fighting(tiger, wolf) {
  if (tiger.strength > wolf.strength) {
    console.log("Tiger Win");
    tiger.skil();
  } else if (tiger.strength < wolf.strength) {
    console.log("Wolf Win");
    wolf.skil();
  } else {
    console.log("Draw");
  }
}

const tiger = new Tiger();
const wolf = new Wolf();
fighting(tiger, wolf);
