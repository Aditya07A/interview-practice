// setTimeout(function() {
//     console.log("timer");
// },5000);
// function x(y){
//     console.log("x");
//     y();
// }x(function y(){
//     console.log("y")
// });

function attachEvent() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
  });
}
attachEvent();
<h1>hello</h1>