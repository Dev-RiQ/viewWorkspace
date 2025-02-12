// java와 달리 this에 유동성이 있어 직접 설정도 가능
// function -> this : 전역 최상위 객체

function printName() {
  return this?.name || '이름이 없습니다'
}
console.log(printName())
const cat = {
  name: '나비'
}

//this 바인딩
//1. apply
console.log(printName.apply({ name: '넓이' })) // this를 cat 갯체 주소값으로 변경하며 실행
console.log(printName())
//2. call (결과값 저장해두고(즉시 함수 호출하여 실행) 나중에 실행가능)
console.log(printName.call(cat)) // this를 cat 갯체 주소값으로 변경하며 실행
console.log(printName())
//3. bind (함수형으로 저장해두고(부르면 함수 호출하여 실행) 나중에 실행가능)
const printCatName = printName.bind(cat)
console.log(printCatName())

function addAll(x, y, z) {
  return `${this?.name || '이름이 없습니다'} 결과값 : ${x + y + z}`
}

console.log(addAll(1, 2, 3))
console.log(addAll.call(cat, 1, 2, 3)) // 인자값 순서대로 넘겨줌
console.log(addAll.apply(cat, [1, 2, 3])) // 인자값 오브젝트로 넘겨줌
const printAddAll = addAll.bind(cat, 10, 20, 30) // 인자값 순서대로 넘겨줌
console.log(printAddAll()) 