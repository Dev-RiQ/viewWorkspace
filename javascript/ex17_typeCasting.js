// 묵시적 타입 변환 (자동 형변환)

console.log('1' + 2)
console.log(+'1' + 2)
console.log(1 + true) // true => 1, false => 0
console.log(1 + false)
console.log(1 + null)
console.log(1 + undefined)
console.log(!!'x')
console.log(!!'')


// 명시적 타입 변환 (강제 형변환)
console.log(Boolean(''))
console.log(Boolean('x'))
console.log(Boolean('false'))
console.log(Boolean(0))
console.log(Boolean(1))

console.log(NaN === NaN) // false => 예외적임
console.log(isNaN(NaN))

let str = '김철수'
console.log(str[0], str.length)
str[0] = '박'
console.log(str[0])
str = str.split("")
console.log(str)
str[0] = '박'
console.log(str[0])