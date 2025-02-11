const dog = {
  name: "바둑이",
  age: 3,
  like: ["뼈", "인형"],
  owner: { name: "박찰스", age: 20 },
  sayHi: function hi() { console.log("왈왈왈!!") },
}
console.log(dog)
console.log(dog.name)
console.log(dog.age)
console.log(dog.like)
console.log(dog.owner)
console.log(dog.sayHi)

console.log("-----")
console.log(dog.owner.name)
console.log(dog.owner.age)
dog.sayHi();

console.log("-----")
//얕은복사
const dog2 = dog;
dog2.name = "개똥이"
console.log(dog.name)
console.log(dog2.name)

console.log("-----")
//깊은복사
const dog3 = { ...dog };
dog3.name = "새똥이"
console.log(dog.name)
console.log(dog3.name)

let obj = {};
let obj2 = new Object();

console.log(typeof obj)
console.log(typeof obj2)

obj.name = "테스트1"
obj2['name'] = "테스트2"
console.log(obj)
console.log(obj2)

let num = 10
num.number = "100"
console.log(num)
console.log(typeof num)