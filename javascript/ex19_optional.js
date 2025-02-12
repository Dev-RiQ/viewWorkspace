// 옵셔널 체이닝 => ES11(ECMA 2020)

let cat = {
  name: "나비",
  age: 2,
  owner: {
    name: "김철수"
  }
}

console.log(cat.name)
console.log(cat['name'])

// 객체 동적 접근
function getValue(obj, key) {
  if (!obj[key])
    return "해당 키값이 없습니다"
  return obj[key]
}
console.log(getValue(cat, 'age'))
console.log(getValue(cat, 'age2'))
// 객체 동적 추가
function addKey(obj, key, value) {
  if (!obj || !key || !value) return
  if (!!obj[key])
    return console.log("해당 키값이 있습니다")
  obj[key] = value
}

function printKey(obj, key) {
  return obj?.[key] ? obj[key] : '없는 값입니다'
}
console.log(printKey(cat, 'age'))
console.log(printKey(cat, 'age2'))

addKey(cat, 'callOwner', '냐옹')
addKey(cat, 'callOwner', '냐옹')
console.log(cat)

// 객체에서 요소 한개 삭제하는 메서드 만들기
function removeKey(obj, key) {
  obj?.[key] ? delete obj[key] : console.log('없는 값입니다')
}
removeKey(cat, 'name')
console.log(cat)
removeKey(cat, 'name')
console.log(cat)

// ES11 nullish coalesing operater ??
let num = 0;
console.log(num || -1)
// null, undefine 제외한 것들 ( 0, '' , 등등) => false 말고 true로 인식하게 해줌
console.log(num ?? -1)
console.log(null || -1)
console.log(null ?? -1)
console.log('' ?? -1)
console.log('' || -1)
