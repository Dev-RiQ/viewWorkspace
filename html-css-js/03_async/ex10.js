// try {
//   setTimeout(() => {
//     throw new Error('에러발생')
//   }, 1000);
// } catch (error) {
//   console.log("에러 잡음")
// }

function testErrorCatch(callback, sec) {
  if (!callback || !(callback instanceof Function)) {
    throw new Error('콜백 함수가 아님')
  }
  if (!sec || sec <= 0) {
    throw new Error('0보다 큰 초단위 입력')
  }
  setTimeout(callback, sec * 1000);
}

try {
  testErrorCatch(() => {
    console.log("타이머 종료")
  }, 2)
} catch (error) {
  console.log(error)
}

function runTimer(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!sec || sec <= 0) {
        reject(new Error('0보다 큰 초단위 입력'))
      } else {
        resolve(`${sec} 초 지남`)
      }
    }, sec * 1000);
  })
}
runTimer(2)
  .then(console.log)
  .catch(console.log)