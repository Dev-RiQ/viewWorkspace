// 산술연산자
let a;
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);

console.log(10 ** 3); //거듭제곱
console.log(Math.pow(10, 3));

console.log(2 - "test"); // NaN
console.log(10 / 0);

let intro = '김철수 \n 입니다';
console.log(intro);
intro = " '김철수' 입니다";
console.log(intro);
intro = ' "김철수" 입니다';
console.log(intro);

// `` : 스트링 템플릿 (${변수이름}로 외부값 입력가능)
const myName = "김개똥";
const job = "백수";
intro = `저는 ${myName} 입니다 \n 직업은 ${job} 입니다`
console.log("------");

let isDead = true;
console.log(isDead);
console.log(!isDead);
console.log(!!isDead);
console.log(!!!isDead);

console.log("------");
//truthy value
console.log(!!'0');
console.log("------");
//falsey value
console.log(!!0);
console.log(!!false);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

let cat = null; // 비어있다는 표시 null로

console.log("------");
const num1 = '1';
const num2 = '1';
console.log(num1 == num2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 == symbol2);

console.log("------");

