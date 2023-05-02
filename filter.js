const arr = [5, 1, 3, 2, 6];

//filter odd values

function isOdd(x) {
  return x % 2;
}

const output = arr.filter(isOdd);
console.log(output);

const output1 = arr.filter((x) => x % 2 === 0);
console.log(output1);

const users = [
  { firstName: "Aditya", lastName: "Rao", age: 27 },
  { firstName: "Adi", lastName: "Kumar", age: 27 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
];
const res = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(res);

const res1 = users.reduce(function(acc,curr){
  if(curr.age >50){
      acc = curr.firstName;
  }
  return acc;
}, {});
console.log(res1);
