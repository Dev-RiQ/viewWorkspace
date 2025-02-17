let btnDelete = document.querySelectorAll('.item_delete');
const btnFooter = document.querySelector('.footer_btn')
const item = document.querySelector('.items')
let items = []
let idx = 0;
let isDel = false

let cnt = 1;
function addList() {
  let $input = document.querySelector('input')
  if (!$input.value.trim()) return
  if (items.includes($input.value)) {
    alert('이미 존재하는 품목입니다')
    $input.value = ''
    return
  }
  items[idx++] = $input.value
  item.appendChild(createList($input.value))
  $input.value = ''
  btnDelete = document.querySelectorAll('.item_delete')
  btnDelete.forEach(i => i.addEventListener('click', () => deleteData(i)))
  isDel = false
}

function createList(input) {
  let $div = createDiv()
  $div.appendChild(createSpan(input))
  let $button = createButton()
  $button.appendChild(createI())
  $div.appendChild($button)
  let $li = createLi()
  $li.appendChild($div)
  return $li
}

function createLi() {
  let $li = document.createElement('li')
  $li.classList.add('item_row')
  $li.setAttribute('data-id', cnt++)
  return $li
}
function createDiv() {
  let $div = document.createElement('div')
  $div.classList.add('item')
  return $div
}
function createSpan(input) {
  let $span = document.createElement('span')
  $span.classList.add('item_name')
  $span.innerText = input
  $span.title = input
  return $span
}
function createButton() {
  let $button = document.createElement('button')
  $button.classList.add('item_delete')
  return $button
}
function createI() {
  let $i = document.createElement('i')
  $i.classList.add('fa-solid', 'fa-trash-can')
  $i.setAttribute('data-id', cnt)
  return $i
}
btnFooter.addEventListener('click', () => {
  addList()
})
document.querySelector('input').addEventListener('keydown', (e) => {
  if (e.isComposing) return
  if (e.code == 'Enter')
    addList()
})

function deleteData(i) {
  const itemRow = document.querySelectorAll('.item_row')
  idx = 0;
  if (itemRow.length == 1 && isDel) {
    document.querySelector('.item_row').remove()
    items = []
    return
  }
  if (itemRow.length == 1) isDel = true
  itemRow.forEach(k => {
    if (k.getAttribute('data-id') == i.querySelector('svg').getAttribute('data-id')) {
      k.remove()
      items.splice(idx, 1)
    }
    idx++
  })
}
