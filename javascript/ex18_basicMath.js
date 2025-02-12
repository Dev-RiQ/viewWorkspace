// console.log(Math.random())
// console.log(Math.random() * 10)
// console.log(parseInt(Math.random() * 10))

function getRandom(start, end) {
  if (isNaN(start) || isNaN(end))
    return parseInt(Math.random() * (15 - 5 + 1)) + 5;
  return parseInt(Math.random() * (end - start + 1)) + start;
}

function checkNum(n) {
  console.log(`${n} 은 ${n % 2 == 0 ? '짝수' : '홀수'}`)
}

checkNum(getRandom(50, 100))

function isAllOddNum(arr = []) {
  console.log(arr)
  printCheckOddResult(arr.every(n => n % 2 != 0))
}

function printCheckOddResult(isAllOdd) {
  if (isAllOdd)
    console.log('전부 홀수입니다')
  else
    console.log('전부 홀수가 아닙니다')
}

function getArray(size) {
  let array = []
  for (let i = 0; i < size; i++)
    array[i] = getRandom(-100, 100)
  return array;
}

isAllOddNum(getArray(4))