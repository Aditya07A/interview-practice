
const arr =[1,2,3,4,5];
//map function

// function double(x){
//     return x*2
// };

// const output = arr.map(double);
// console.log(output);



const output1 = arr.map(function double(x){
    return x*2
});
console.log(output1);

const output2 = arr.map((x)=> x*3);
console.log(output2);

function binary(x){
    return x.toString(2);
};

const output = arr.map(binary);
console.log(output);

const users = [
    {firstName : "Aditya", lastName : "Rao", age : 27},
    {firstName : "Adi", lastName : "Kumar", age : 27},
    {firstName : "Donald", lastName : "Trump", age : 75},
    {firstName : "Elon", lastName : "Musk", age : 50}
];

const res = users.map((x)=>  x.firstName +" "+x.lastName);
console.log(res);

const res1 = users.reduce(function(acc,curr){
    if(curr.age <50){
        acc = curr.age;
    }
    return acc;
 }, {});
 console.log(res1);
