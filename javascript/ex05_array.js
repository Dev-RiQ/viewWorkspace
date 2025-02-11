let arr1 = [];
let arr2 = new Array();

console.log(typeof arr1)
console.log(typeof arr2)

arr1[0] = 100;
arr1[1] = 200;
arr1[3] = 300;

console.log(arr1)

arr2 = [1, '2', true, NaN, {}, [100, 20, 30], [], 10.123, undefined, null, function test() {
  console.log("hello")
}]
console.log(arr2)
arr2[arr2.length - 1]()

for (let i = 0; i < arr2.length; i++) {
  console.log(`index ${i} = ${arr2[i]}`)
}

console.log(arr2[-1])
arr2[-1] = "Test"
console.log(arr2[-1])
console.log(arr2)