let cat = {
  kind: '고양이',
  age: 5
};
let dog = {
  kind: '개',
  age: 4
};
let rabbit = {
  kind: '토끼',
  age: 0.5
};
let hamster = {
  kind: '햄스터',
  age: 1,
  eat: function () {
    console.log('해바라기씨를 먹는다 ')
  }
};


let pets = [cat, dog, rabbit, hamster, cat];

// 1. 동물의 kind 가 개 인것을 찾아라
console.log(pets.find(v => v.kind == '개'))
// 2. 동물의 kind 가 고양이가 아닌것만 빼서 배열로 만들어라
console.log(pets.filter(v => v.kind != '고양이'))
// 3. 총 동물의 평균 나이를 구해라 => 총합 => 갯수로 나눠기
console.log(`${pets.reduce((p, n) => {
  return p + n.age
}, 0) / pets.length} 살`)
// 4.동물 나이순으로 내림차순 정렬 : 기존 배열 건드리지 않는다 
console.log(pets.sort((a, b) => a.age < b.age ? 1 : -1))

// some , every 

// some => 무조건 리턴이 true이면 반복문 중단

console.log("----some----")
// 개가 있으면 true 
let cnt = 0;
res = pets.some(obj => {
  cnt++;
  return obj.kind === '개'
})

console.log(res);
console.log(cnt);

console.log("----every----")
// every => 무조건 리턴이 false 이면 반복문 중단
cnt = 0;
res = pets.every(obj => {
  cnt++;
  return obj.kind === '개';
})
console.log(res);
console.log(cnt);

console.log("----forEach----")
cnt = 0;
// 매번 요소마다 함수를 호출하기때문에 반복문 중간에 멈출 수 없다 : 무조건 첨 - 배열요소 끝까지 한다
pets.forEach(obj => {
  cnt += 1;
  if (obj.kind === '개') return true;
  // console.log("test");
})

console.log(cnt);