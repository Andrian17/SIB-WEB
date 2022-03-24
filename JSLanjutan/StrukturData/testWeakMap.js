const { inspect } = require("util");

let visitsCountMap = new WeakMap();

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };

countUser(jonas);

jonas = null;

setTimeout(function () {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);
