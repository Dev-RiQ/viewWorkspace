

function getCat() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ kind: '고양이', name: '나비' });
    }, 300);
  });
}

function getDog() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ kind: '강아지', name: '바둑이' });
    }, 500);
  });
}

function getHamster() {
  return new Promise((reject) => {
    setTimeout(() => {
      reject(new Error('햄스터 도망감'));
    }, 100);
  });
}

async function getPets1() {
  let cat = await getCat();
  let dog = await getDog();
  console.log("=======2======")
  return [cat, dog];
}

getPets1().then((pet) => console.log(pet));



async function getPets2() {
  let cat = await getCat();

  let hamster;
  try {
    hamster = await getHamster();
  } catch (error) {
    console.log(error);
    //hamster = { kind: '햄스터', name: '햄찌' };
  }
  let dog = await getDog();
  console.log("=======3======")

  return [cat, dog, hamster];
}

getPets2().then((pet) => console.log(pet));