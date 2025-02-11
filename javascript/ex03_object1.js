// object 타입
let dog = {
  name: "바둑이",
  age: 3
};
const hamster = {
  name: "푸딩",
  age: 0.3
};
console.log(dog);
console.log(hamster);

//값 추가
dog.like = ["개껌", "뼈다귀"];
console.log(dog);
// dog[like] = ["개껌", "뼈다귀"]; => [ ]하면 변수로 인식해서 안됨
// console.log(dog);
hamster["like"] = ["개껌", "뼈다귀"];
console.log(hamster);

//값 삭제
dog.owner = "제임스";
console.log(dog);
delete dog.owner;
console.log(dog);
dog.owner = "토마스";
console.log(dog);
delete dog['owner'];
console.log(dog);

// 객체타입 ['속성이름'] 으로 접근하는 이유
function getKeyValue(obj, key) {
  return obj.key; // obj에 key라는 속성값을 찾는것 (동적으로 못 바꿈)
};
console.log(getKeyValue(dog, "name"));
function getKeyValue2(obj, key) {
  return obj[key];
};
console.log(getKeyValue2(dog, "name"));