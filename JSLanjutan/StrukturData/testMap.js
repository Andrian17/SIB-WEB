const Map1 = new Map([
  ["nama", "Andrian"],
  ["nim", 1901050024],
  ["prodi", "D3 Sistem Informasi"],
]);

Map1.set("univ", "Universitas Bumigora");
console.log(Map1.get("nama"));
console.log(Map1.get("univ"));

console.log(Map1.size);
//console.log(Map1.delete("prodi"));
console.log(Map1.size);
Map1.forEach((e, k) => {
  console.log(e, k);
});

// console.log(Map1.has(nim));
