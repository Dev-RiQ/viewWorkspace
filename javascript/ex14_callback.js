// 콜백 함수 => 이벤트 처리할때 많이 씀
//  => 함수 호출 권한을 남에게 넘겨줌

function sayHi(name) {
  console.log('hi ' + name)
}
// sayHi("흰둥이");

function intro(name, callback) {
  callback(name)
}
intro("개똥이", sayHi)

let array = [3, 5, 8, 6, 7, 11, 15, 14, 23]
let printAll = function (n) {
  console.log(n)
}
array.forEach(printAll);

array.forEach(n => console.log(n))