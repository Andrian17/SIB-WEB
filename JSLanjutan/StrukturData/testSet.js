const angkaSet = new Set([1, 5, 7, 1, 5, 9]);
angkaSet.add(11);
console.log(angkaSet);

angkaSet.forEach((e) => {
  console.log(e);
});

angkaSet.delete(5);
console.log(angkaSet);
