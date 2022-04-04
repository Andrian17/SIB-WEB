const { averageExams, isStudentPassExamp } = require("../gradeCalculations");

describe("Test file gradeCalculations", () => {
  test("Harus mengembalikan nilai rata-rata", () => {
    expect(averageExams([80, 100, 100, 80])).toEqual(90);
  });

  //isStudentPassExamp => true
  test("Harus mengembalikan status lulus ujian", () => {
    expect(isStudentPassExamp([80, 100, 100, 80], "Budi")).toEqual(true);
  });
  //isStudentPassExamp => false
  test("Harus mengembalikan status tidak lulus ujian", () => {
    expect(isStudentPassExamp([50, 40, 70, 80], "Budi")).toEqual(false);
  });
});

// test("harus mengembalikan nilai rata-rata", () => {
//   const listNilai = [80, 100, 100, 80];
//   expect(averageExams(listNilai)).toEqual(90);
// });
