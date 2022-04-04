const EventEmitter = require("events");
const MyEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

//set Event
MyEmitter.on("birthday", birthdayEventListener);
//Trigger Event
MyEmitter.emit("birthday", "Liana");
