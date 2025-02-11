// scope 영역, 구분

let x = 100;
{
  let y = 10;
  console.log(x)
  console.log(y)
}
console.log(x)
// console.log(y) // y is not defined

function test() {
  let z = 300;
  console.log("x=", x)
  console.log("z=", z)
}
test()

// let, const 는 block scope 영역
// var 는 function scope 영역 (java 17 이후)
{
  var number = 100;
}
console.log(number)
function printTest() {
  var age = 100;
  console.log(age)
}