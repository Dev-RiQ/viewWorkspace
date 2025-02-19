class Game {
  constructor() {
    this.num = 1;
    this.time = 0;
    this.map = document.querySelector('.map');
    this.timer = document.querySelector('.timer');
    this.start()
  }

  start() {
    const start = document.querySelector('.start')
    start.addEventListener('click', () => {
      start.classList.add('off')
      this.init()
    })
  }

  init() {
    this.numsFront = this.suffleNums(1);
    this.numsBack = this.suffleNums(26);
    for (let i = 0; i < 25; i++)
      this.map.appendChild(this.createMap(this.numsFront[i]))
    this.countDown()
  }

  countDown() {
    this.setCountDown()
    setTimeout(() => {
      this.timer.classList.add('on')
      this.addClickEvent()
      this.runTimer()
    }, 3000);
  }

  setCountDown() {
    let countDown = document.querySelector('.countDown')
    countDown.classList.add('on')
    let count = 2
    let interval = setInterval(() => {
      countDown.innerText = `${count--}`;
    }, 1000);
    this.gameStart(interval, countDown)
  }

  gameStart(interval, countDown) {
    setTimeout(() => {
      clearInterval(interval)
      countDown.classList.remove('on')
      document.querySelectorAll('.box').forEach(i => i.classList.add('on'))
    }, 2999);
  }

  suffleNums(start) {
    let nums = [];
    for (let i = 0; i <= 24; i++)
      nums[i] = i + start;
    this.suffle(nums)
    return nums;
  }

  suffle(nums) {
    for (let i = 0; i < 300; i++) {
      let rdNum = parseInt(Math.random() * 25)
      let temp = nums[0];
      nums[0] = nums[rdNum];
      nums[rdNum] = temp;
    }
  }

  createMap(num) {
    let div = document.createElement('div');
    div.classList.add('box');
    div.innerText = num;
    return div;
  }

  addClickEvent() {
    this.map.addEventListener('click', (e) => {
      if (e.target === e.currentTarget || e.target.innerText != this.num) return
      this.setTargetText(e.target)
      if (this.num == 51) this.gameEnd()
    })
  }

  setTargetText(target) {
    if (this.num < 26)
      target.innerText = this.numsBack[this.num - 1];
    else
      target.innerText = '';
    this.num++;
  }

  runTimer() {
    this.interval = setInterval(() => {
      this.time++;
      if (this.time % 10000 == 6000)
        this.time += 4000
      this.timer.innerText = this.setTime(this.time)
    }, 10);
  }

  setTime(time) {
    return `${String(parseInt(time / 10000)).padStart(2, 0)}:${String(parseInt(time / 100) % 100).padStart(2, 0)}:${String(time % 100).padStart(2, 0)}`
  }

  gameEnd() {
    clearInterval(this.interval)
    let record = this.setRecord()
    this.setResult(record)
  }

  setRecord() {
    let record = localStorage.getItem('record')
    if (!record || JSON.parse(record) > this.time) {
      localStorage.setItem('record', JSON.stringify(this.time))
      record = localStorage.getItem('record')
      document.querySelector('.newRec').classList.add('on')
    }
    return record
  }

  setResult(record) {
    this.timer.classList.add('res')
    this.map.classList.add('off')
    document.querySelector('.result').classList.add('on')
    document.querySelector('.topRec').classList.add('on')
    document.querySelector('.topRec span').innerText = this.setTime(JSON.parse(record))
    document.querySelector('.end').addEventListener('click', () => {
      location.reload()
    })
  }
}

window.addEventListener('load', () => {
  window.game = new Game();
})