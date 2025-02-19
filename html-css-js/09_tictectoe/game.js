class TicTacToe {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
    this.turn = p1;
    this.round = 1;
    this.maps = document.querySelector('.maps');
    this.target = null;
    this.init();
  }

  init() {
    for (let i = 0; i < 9; i++)
      this.maps.appendChild(this.createMap());
    this.addMapsEvent()
    this.gameStart()
  }

  createMap() {
    let div = document.createElement('div');
    div.classList.add('map');
    return div;
  }

  addMapsEvent() {
    this.mapsMouseOver();
    this.mapsMouseOut();
    this.mapsMouseup();
  }

  gameStart() {
    if (!sessionStorage.getItem('playing')) {
      document.querySelector('.play').addEventListener('click', () => {
        document.querySelector('.start').classList.add('off')
      })
      sessionStorage.setItem('playing', 'now')
    } else {
      document.querySelector('.start').classList.add('off')
    }
  }

  mapsMouseOver() {
    this.maps.addEventListener('mouseover', (e) => {
      if (e.target == this.maps || e.target.classList[1]) return;
      e.target.classList.add('over');
      if (this.target != null && this.target != e.target)
        this.target.classList.remove('over');
      this.target = e.target;
    });
  }

  mapsMouseOut() {
    this.maps.addEventListener('mouseout', () => {
      if (this.target === null) return
      this.target.classList.remove('over');
    });
  }

  mapsMouseup() {
    this.maps.addEventListener('mouseup', (e) => {
      if (e.target.classList[1] == 'O' || e.target.classList[1] == 'X') return
      this.target.classList.add(this.turn.shape);
      this.target.innerText = this.turn.shape;
      this.target.classList.remove('over');
      if (this.isWin())
        this.gameOver();
      else
        this.turnChange();
    });
  }

  turnChange() {
    this.turn = this.turn === this.p1 ? this.p2 : this.p1;
    this.round++;
    if (this.round == 10)
      this.draw();
  }

  isWin() {
    let idxs = this.getIndexs();
    if (this.garo(idxs[0]) || this.sero(idxs[1]) || this.daegak1() || this.daegak2())
      return true;
    return false;
  }

  garo(idx) {
    for (let i = 0; i < 3; i++)
      if (this.maps.childNodes.item(idx * 3 + i).classList[1] != this.turn.shape)
        return false;
    return true;
  }

  sero(idx) {
    for (let i = 0; i < 3; i++)
      if (this.maps.childNodes.item(i * 3 + idx).classList[1] != this.turn.shape)
        return false;
    return true;
  }

  daegak1() {
    for (let i = 0; i < 3; i++)
      if (this.maps.childNodes.item(i * 4).classList[1] != this.turn.shape)
        return false
    return true;
  }
  daegak2() {
    for (let i = 0; i < 3; i++)
      if (this.maps.childNodes.item(2 * (i + 1)).classList[1] != this.turn.shape)
        return false
    return true;
  }

  getIndexs() {
    let idx = 0;
    let idxs = [];
    this.maps.childNodes.forEach(i => {
      if (i === this.target) {
        idxs[0] = parseInt(idx / 3);
        idxs[1] = idx % 3;
      }
      idx++;
    })
    return idxs
  }

  draw() {
    this.res = '무승부';
    this.showResult()
  }

  gameOver() {
    this.res = `${this.turn.name} 승리`;
    this.showResult()
  }

  showResult() {
    document.querySelector('.result').classList.add('on');
    document.querySelector('.res').innerText = this.res;
    document.querySelector('.replay').addEventListener('click', () => {
      location.reload()
    })
  }
}

class Player {
  constructor(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;
  }
}

window.addEventListener('load', () => {
  window.game = new TicTacToe(new Player('핑크', 'pink', 'O'), new Player('블루', 'blue', 'X'))
})