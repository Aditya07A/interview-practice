 

 const arr =[1,2,3,4,5];

 function findSum(arr){
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
 }
 console.log(findSum(arr));

 const output = arr.reduce(function (acc,curr){
    acc = acc + curr;
    return acc;
 }, 0);

 console.log(output);

 const arr1 = [5,7,8,4,3,1];

 function findMax(arr1){
     let max = 0;
     for(let i = 0; i < arr1.length; i++){
         if(arr1[i] > max){
             max = arr1[i];
         }
     }
     return max;
 }
 
 console.log(findMax(arr1));

 const output1 = arr1.reduce(function (max , curr){
    if(curr > max){
        max = curr;
    }
    return max;
 }, 0)
 console.log(output1);

 const users = [
    {firstName : "Aditya", lastName : "Rao", age : 27},
    {firstName : "Adi", lastName : "Kumar", age : 27},
    {firstName : "Donald", lastName : "Trump", age : 75},
    {firstName : "Elon", lastName : "Musk", age : 50}
];

 const res = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
 }, {});
 console.log(res);














