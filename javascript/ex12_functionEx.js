function printArray(start, end) {
  if (!isValidRange(start, end))
    return;
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  console.log(getAnswer(start, end))
}

function isValidRange(start, end) {
  // let isValid = typeof start == 'number' && typeof end == 'number';
  let isValid = !isNaN(start) && !isNaN(end);
  if (isValid)
    return true;
  console.log('숫자값을 넣어주세요')
  return false;
}

function getAnswer(start, end) {
  let ans = '';
  for (let i = start; i <= end; i++)
    ans += i + " ";
  return ans.substring(0, ans.length - 1);
}

printArray(1, 5)
printArray(6, 15)
printArray(15, 4)
printArray('test', 4)