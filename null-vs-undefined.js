//How you will get undefined

let tomato; //(by giving without value)

function add(num1, num2) {
  console.log(num1 + num2);
  return;
}

function add(num1, num2) {
  console.log(num1, num2);
}

const student = { name: "Smart dude", phone: 01712222222 };
console.log(student.gf);

let fun = undefined;
console.log(fun);

let ages = [2, 5, 9];

console.log(ages[11]);

//null means blank usually developers set null where
//undefined can be found in many ways in above .
