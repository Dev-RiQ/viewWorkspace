const cat = {
  name: '나비',
  age: 4,
  play: () => { console.log('낚시줄 놀이') },
  owner: { name: '김철수' },
  favorite: ['캣잎', '잠자기', '츄르']
}

console.log(cat)

// 객체 -> json 파일 변환 (텍스트 형식 문자 포멧)
// 함수 값은 저장 안됨
let jsonData = JSON.stringify(cat)
console.log(jsonData)

// json => js객체
let obj = JSON.parse(jsonData)
console.log(obj)

jsonData = JSON.stringify([cat, cat, cat, cat, cat])
console.log(jsonData)

obj = JSON.parse(jsonData)
console.log(obj)