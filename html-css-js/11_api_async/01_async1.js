const myPromise = () => {
  return new Promise((resolve, reject) => {
    resolve('One');
  });
};

const myFunc = async () => {
  console.log('Inner function');
  console.log(await myPromise());
  console.log('goOut function');
  console.log("=====1==========");
};

console.log('Before Function');
myFunc();
console.log('After Function');