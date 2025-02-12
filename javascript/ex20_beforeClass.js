// let cat = {
//   kind: '고양이',
//   name: '나비',
//   age: 2,
//   printInfo: function () {
//     let str = `kind = ${this.kind} \t name = ${this.name} \t age = ${this.age}`
//     console.log(str)
//   }
// }
// console.log(cat)
// cat.printInfo()

function printAllPets() {
  let pets = [cat, dog, hamster]
  pets.forEach(pet => console.log(pet))
}

// 대문자로 시작하면 생성자로 생각
function Pet(kind, name, age) {
  this.kind = kind
  this.name = name
  this.age = age
  this.printInfo = () => {
    let str = `kind = ${this.kind} \t name = ${this.name} \t age = ${this.age}`
    console.log(str)
  }
}
let cat = new Pet('고양이', '나비', 2)
let dog = new Pet('개', '바둑이', 5)
let hamster = new Pet('햄스터', '모찌', 0.2)
printAllPets()