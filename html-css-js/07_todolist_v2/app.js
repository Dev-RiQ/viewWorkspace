let cnt = 1;
class List {
  constructor(title, msg) {
    this.title = title
    this.msg = msg
    this.cnt = cnt++;
  }

  createItem() {
    let item = document.createElement('div')
    item.classList.add('item')
    item.setAttribute('draggable', 'true')
    item.setAttribute('id', this.cnt)
    item.appendChild(this.createTitle())
    item.appendChild(this.createMsg())
    return item
  }

  createTitle() {
    let newTitle = document.createElement('h4')
    newTitle.classList.add('title')
    newTitle.innerText = this.title
    return newTitle
  }
  createMsg() {
    let newMsg = document.createElement('span')
    newMsg.classList.add('msg')
    newMsg.innerText = this.msg
    return newMsg
  }
}

let todoList = []
const list = document.querySelector('#list')
const title = document.querySelector('#title')
const content = document.querySelector('#content')
const addBtn = document.querySelector('#addBtn')
const garbage = document.querySelector('#garbage')
const msgBox = document.querySelector('.msg-box')
const popUp = document.querySelector('.pop-up')
const btnClose = document.querySelector('#close')
let item = null;
let timeout = null;

window.addEventListener('load', () => {
  let data = localStorage.getItem('todo_list')
  if (!data) return
  JSON.parse(data).forEach(i => addData(i.title, i.msg))
})

function showMsg(msg) {
  msgBox.innerText = msg
  msgBox.classList.add('on')
  if (timeout !== null) {
    clearTimeout(timeout)
  }
  timeout = setTimeout(() => {
    msgBox.classList.remove('on')
    timeout = null;
  }, 1000);
}

function addData(title, msg) {
  let data = new List(title, msg)
  todoList.push(data)
  list.appendChild(data.createItem())
  // location.href = `#${data.cnt}`
  localStorage.setItem('todo_list', JSON.stringify(todoList))
}

addBtn.addEventListener('click', () => {
  let addTitle = title.value
  let addMsg = content.value
  if (!addTitle.trim() || !addMsg.trim()) {
    alert('제목 또는 내용을 입력하세요')
    return
  }
  addData(addTitle, addMsg)
  showMsg(`할 일 [${addTitle}]이/가 추가되었습니다.`)
  title.value = ''
  content.value = ''
})

list.addEventListener('dragover', (e) => {
  if (e.target == e.currentTarget) return
  if (!item) item = e.target
  if (item.classList[0] != 'item') item = e.target.parentElement
})

window.addEventListener('mouseout', () => {
  item = null
})

window.addEventListener('dragover', (e) => {
  if (e.target.getAttribute('id') !== 'garbage')
    garbage.classList.remove('on')
})

garbage.addEventListener('dragover', (e) => {
  e.preventDefault()
  e.target.classList.add('on')
})

garbage.addEventListener('drop', (e) => {
  todoList.splice(item.getAttribute('id') - 1, 1)
  localStorage.setItem('todo_list', JSON.stringify(todoList))
  showMsg(`할 일 [${item.childNodes[0].innerText}]이/가 삭제되었습니다.`)
  item.classList.add('off')
  setTimeout(() => {
    location.reload()
  }, 1000);
})

list.addEventListener('click', (e) => {
  if (e.target == e.currentTarget) return
  if (!item) item = e.target
  if (item.classList[0] != 'item') item = e.target.parentElement
  setPopUp(item)
  popUp.classList.add('on')
})

function setPopUp(data) {
  document.querySelector('.board-title').innerText = data.childNodes[0].innerText
  document.querySelector('.board-content').innerText = data.childNodes[1].innerText
}

btnClose.addEventListener('click', () => {
  popUp.classList.remove('on')
})