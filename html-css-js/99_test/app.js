const map = document.querySelector('.map')
{
  (() => {
    let idx1 = 0
    let idx2 = 0
    for (let i = 0; i < 255; i++) {
      let div = document.createElement('div')
      div.classList.add('point')
      div.setAttribute('id', `${idx2}-${idx1}`)
      map.appendChild(div)
      idx1++
      if (idx1 == 15) {
        idx1 = 0
        idx2++
      }
    }
  })()
}

const point = document.querySelectorAll('.point')
const winBox = document.querySelector('.win-box')
const winner = document.querySelector('.winner')
const replay = document.querySelector('button')

let turn = 'black'
let action = false
let mapCheck = Array.from(Array(15), () => new Array(15).fill(0))
let round = 1

let now
let before

function move() {
  if (before) before.classList.remove(turn, 'ready')
}
map.addEventListener('mouseover', (e) => {
  if (action) return
  if (e.target.classList[1] && !e.target.classList[2]) {
    move()
    return
  }
  now = e.target
  now.classList.add(turn, 'ready')
  if (now === before) return
  move()
  before = e.target
})

map.addEventListener('mouseout', () => {
  if (now && now.classList[1] && !now.classList[2]) return
})

let num = 1
map.addEventListener('mouseup', (e) => {
  if (e.button != 0) return
  if (!now || e.target.classList[1] && !e.target.classList[2]) return
  action = true;
  now.classList.remove('ready')
  let idxs = now.id.split("-")
  let idx1 = parseInt(idxs[0])
  let idx2 = parseInt(idxs[1])
  mapCheck[idx1][idx2] = num
  if (checkWin(idx1, idx2))
    gameEnd()
  else
    changeTurn()
})

function checkWin(idx1, idx2) {
  if (garo(idx1) || sero(idx2) || daegak1(idx1, idx2) || daegak2(idx1, idx2))
    return true
  return false
}

function garo(idx) {
  let cnt = 0;
  for (let i = 0; i < 15; i++)
    if (mapCheck[idx][i] == num) {
      cnt++;
      if (cnt == 5) return true
    } else
      cnt = 0
  return false
}
function sero(idx) {
  let cnt = 0;
  for (let i = 0; i < 15; i++)
    if (mapCheck[i][idx] == num) {
      cnt++;
      if (cnt == 5) return true
    } else
      cnt = 0
  return false
}
function daegak1(idx1, idx2) {
  let cnt = 0;
  let diff = idx1 - idx2
  if (diff >= 0)
    for (let i = 0; i < 15 - diff; i++)
      if (mapCheck[i + diff][i] == num) {
        cnt++;
        if (cnt == 5) return true
      } else
        cnt = 0
  else
    for (let i = 0; i < 15 + diff; i++)
      if (mapCheck[i][i - diff] == num) {
        cnt++;
        if (cnt == 5) return true
      } else
        cnt = 0
  return false

}
function daegak2(idx1, idx2) {
  let cnt = 0;
  let sum = idx1 + idx2
  if (sum <= 14)
    for (let i = 0; i < sum + 1; i++)
      if (mapCheck[sum - i][i] == num) {
        cnt++;
        if (cnt == 5) return true
      } else
        cnt = 0
  else
    for (let i = 0; i < 30 - sum - 1; i++)
      if (mapCheck[14 - i][sum - (14 - i)] == num) {
        cnt++;
        if (cnt == 5) return true
      } else
        cnt = 0
  return false
}

function changeTurn() {
  now = null
  before = null;
  action = false
  num = turn === 'black' ? 2 : 1
  turn = turn === 'black' ? 'white' : 'black'
  round++
  if (round == 226)
    draw()
}

function gameEnd() {
  winBox.classList.add('on')
  winner.classList.add(turn)
}

function draw() {
  winBox.classList.add('on')
}

replay.addEventListener('click', () => {
  location.reload()
})