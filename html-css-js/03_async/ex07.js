let data = '강내연,김나경,김도연,김민규,한종석,구승회,박시현,송명보,이원규,이종현,정지원,조지영';

const $userList = document.querySelector('#user-list')
function addData(data) {
  let $li = document.createElement('li')
  $li.classList.add('item')
  $li.innerText = data
  $userList.appendChild($li)
}

data = data.split(',')
data.forEach(addData)

//[1] userList input 값을 입력 => <li class="item">박연미</li> 추가
document.querySelector('#btn-add').addEventListener('click', () => {
  let $input = document.querySelector('input').value
  if ($input == '') return
  if (data.includes($input))
    alert('이미 있는 값입니다.')
  else {
    alert(`${$input} 추가 완료`)
    data += $input
    addData($input)
  }
  $input = ''
})

//[2] 시작버튼을 누르면 순차적으로 on 붙이기
let cnt = 0
let interval
let timeInterval = 50
let clickStart = false;
function newInterval() {
  let list = document.querySelectorAll('#user-list>li')
  interval = setInterval(() => {
    if (cnt != 0) list[cnt - 1].classList.remove('on')
    else list[list.length - 1].classList.remove('on')
    list[cnt].classList.add('on')
    cnt++;
    if (cnt == list.length) cnt = 0;
  }, timeInterval);
}


document.querySelector('#btn-start').addEventListener('click', () => {
  if (clickStart) return
  if (document.querySelector('#user-list').childElementCount == 0) return
  if (document.querySelector('#user-list').childElementCount == 1) {
    setResult()
    return
  }
  clickStart = true;
  clickStop = false;
  newInterval()
})

//[3] 정지버튼을 누르면 on 삭제 fix 붙이기 , user-list있는 li 태그
// 값 삭제하기

let clickStop = false;
document.querySelector('#btn-stop').addEventListener('click', () => {
  if (!clickStart || clickStop) return
  clickStop = true;
  let rdNum = parseInt(Math.random() * 20) + 5
  changeTime()
})

let count = 0
function changeTime() {
  clearInterval(interval)
  if (count >= 3) {
    setResult()
    count = 0
  }
  else {
    timeInterval *= 2
    newInterval()
    setTimeout(() => {
      changeTime()
      count++
    }, timeInterval * (parseInt(Math.random() * 3) + 2));
  }
}

function setResult() {
  if (cnt == 0) cnt = document.querySelector('#user-list').childElementCount
  let selectedList = document.querySelectorAll('#user-list>li')[cnt - 1]
  selectedList.classList.remove('on')
  selectedList.classList.add('fix')
  document.querySelector('#selected-list').appendChild(selectedList)
  cnt = 0;
  timeInterval = 50;
  clickStart = false;
}