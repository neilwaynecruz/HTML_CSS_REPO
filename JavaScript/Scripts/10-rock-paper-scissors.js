let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function pickComputerMove() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerMove = "";

  if (randomNumber === 1) {
    computerMove = "rock";
  } else if (randomNumber === 2) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}

function playGame(playermove) {
  computerMove = pickComputerMove();
  const message = `You choose ${playermove}. The Computer choose ${computerMove}.`;
  let result = "";

  if (playermove === "rock") {
    if (computerMove === "rock") {
      result = "It's a Tie!";
    } else if (computerMove === "paper") {
      result = "You Lose!";
    } else {
      result = "You Win!";
    }
  } else if (playermove === "paper") {
    if (computerMove === "rock") {
      result = "You Win!";
    } else if (computerMove === "paper") {
      result = "It's a Tie!";
    } else {
      result = "You Lose!";
    }
  } else {
    if (computerMove === "rock") {
      result = "You Lose!";
    } else if (computerMove === "paper") {
      result = "You Win!";
    } else {
      result = "It's a Tie!";
    }
  }

  if (result === "You Win!") {
    score.wins += 1;
  } else if (result === "You Lose!") {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `
        You choose <img class="move-icon" src="/JavaScript/img/${playermove}-emoji.png" />.
        The Computer choose
        <img class="move-icon" src="/JavaScript/img/${computerMove}-emoji.png" />.`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
  localStorage.removeItem("score");
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  document.querySelector(".js-result").innerHTML = "";
  document.querySelector(".js-moves").innerHTML = "";
  document.querySelector(
    ".js-score"
  ).innerHTML = `The score resets.<br/>Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
