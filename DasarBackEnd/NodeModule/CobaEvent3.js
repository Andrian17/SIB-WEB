const EventEmitter = require("events");
const MyEmitter = new EventEmitter();

function sayHello({ name }) {
  console.log(`Hello ${name}`);
}

//Set Event
MyEmitter.on("greet", sayHello);
//Trigger Event
MyEmitter.emit("greet", { name: "Liana" });
