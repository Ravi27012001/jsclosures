console.log("working...");

//    function Counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = Counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// Ans-this page show 1 then 2 ,3,4

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); // 0
})();
// -------------------------------
// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // 3
//     }, 1000);
//   }

//   Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function rectanglee(length){
    return function innerRectanglee(breadth){
        var area = length * breadth;
        console.log(area);
    }
}
 
 var areaa = rectanglee(2);
 areaa(3);
 //output 6

 

//  Take a variable in outer function and create an inner function to increase the counter every time it is called.
 
 
 const g = function(){
     let a =0;
 return  function(){
     a ++;
    console.log(`Now the count is ${a}`);
   
}

 }
 
  const f = g();
  f();
  f();
  f();
//   output-Now the count is 1
// index.js:58 Now the count is 2
// index.js:58 Now the count is 3

// -------------------------------
 

var a = 12;
(function () {
  alert(a);
})();

// showing an page -this page says 12

// -------------------------------------------------
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

// again // showing an page -this page says 12

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
// output-
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz
 