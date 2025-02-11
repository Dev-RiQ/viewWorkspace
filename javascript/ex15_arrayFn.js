// 고차함수 => 콜백함수 사용
// 콜백함수 => 화살표함수로 많이쓴다

let array = [3, 5, 8, 6, 7, 11, 15, 14, 23]
// 짝수만 출력
array.forEach(n => { if (n % 2 == 0) console.log(n) })

// map() => 데이터를 받아서 새로운 값 가공

let result = array.map(x => x * 10)
console.log(array)
console.log(result)

// filter : true 만 가져옴

result = array.filter(v => v % 2 == 0)
console.log(result)

result = array.find(v => v > 10)
console.log(result)

result = array.findIndex(v => v > 10)
console.log(result)

// 총합
result = array.reduce((p, n) => {
  console.log(`누적값 ${p} 현재값 ${n}`)
  return p + n
}, 0)
console.log(result)

// 홀수 갯수
result = array.reduce((p, n) => {
  if (n % 2 == 0) return p;
  return ++p;
}, 0)
console.log(result)