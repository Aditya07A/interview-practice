// function x(){
//     console.log("Namaste");
// }
// function y(x){
//     x();
// }

const radius = [3,1,2,4];

const calArea = function(radius){
    const output = [];
    for(let i= 0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
console.log(calArea(radius));

const calCir = function(radius){
    const output = [];
    for(let i = 0;i<radius.length;i++){
        output.push(2 * Math.PI*radius[i]);
    }
    return output;
}
console.log(calCir(radius));



const calDia = function(radius){
    const output=[];
    for(let i =0;i<radius.length;i++){
        output.push(2 *radius[i]);
    }
    return output;
}
console.log(calDia(radius));

//-------------------------------------------------------
const radius1 = [5,6,7,8];

const area  = function(radius1){
    return Math.PI*radius1*radius1;
};

const cir = function(radius1){
    return 2 * Math.PI*radius1;
};
const dia = function(radius1){
    return 2 *radius1;
};

const calculate = function(radius1,logic){
    const output1 = [];
    for(let i = 0;i<radius1.length;i++)(
        output1.push(logic(radius1[i]))
    )
return output1;

}
console.log(radius1.map(area));
console.log(calculate(radius1,area));
console.log(calculate(radius1,cir));
console.log(calculate(radius1,dia));





































