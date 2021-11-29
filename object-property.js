const students = [
  { id: 21, name: "Omar Sunny" },
  { id: 31, name: "Mannnaaaa" },
  { id: 41, name: "Moyori71" },
  { id: 71, name: "depjol" },
];

// for (var i = 0; (i = students.length); i++) {
//   console.log(students.id);
// }

const name = students.map((s) => s.name);
const ids = students.map((s) => s.id);
const bigger = students.filter((s) => s.id > 40);
const biggerOne = students.find((s) => s.id > 40);

console.log(biggerOne);
