const imge1 = document.querySelector(".img1");
const imge2 = document.querySelector(".img2");
const title = document.querySelector("h1");
const button = document.querySelector("#rollButton");

function rollDice() {
  // 랜덤 숫자 만들기
  const random1 = Math.floor(Math.random() * 6) + 1;
  const random2 = Math.floor(Math.random() * 6) + 1;

  // 주사위 이미지 변경
  imge1.src = `images/dice${random1}.png`;
  imge2.src = `images/dice${random2}.png`;

  // 승패 판정
  if (random1 > random2) {
    title.textContent = "Player 1 Wins!";
  } else if (random1 < random2) {
    title.textContent = "Player 2 Wins!";
  } else {
    title.textContent = "Draw!";
  }

  console.log("Player 1:", random1);
  console.log("Player 2:", random2);
}

// 버튼 클릭 시 주사위 굴리기
button.addEventListener("click", rollDice);

// 페이지를 처음 열었을 때도 주사위 표시
rollDice();
