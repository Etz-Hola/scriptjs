const choice = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreBoard = { player: 0, computer: 0 };

const play = (e) => {
  // console.log(e.target.id);  //To confirm if the clicked icons are working
  restart.style.display = "inline-block";
  const playChoice = e.target.id; //The clicked Icon (Go to event Listeners at bottom of the page)
  const computerChoice = getComputerChoice(); //The generated computer choice
  const winner = getWinner(playChoice, computerChoice);
  showWinner(winner, computerChoice);

//   console.log(playChoice, computerChoice);
};

const getComputerChoice = () => {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getWinner = (p, c) => {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
};

const showWinner = (winner, computerChoice) => {
  if (winner === "player") {
    // increase by score
    scoreBoard.player++;

    //show modal result
    result.innerHTML = ` 
    <h1 class="text-win">You Win</h1>
    <i id="${computerChoice}" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>
    `;
  } else if (winner === "computer") {
    //increase by score
    scoreBoard.computer++;
    //show modal result
    result.innerHTML = ` 
    <h1 class="text-win">You Lose</h1>
    <i id="${computerChoice}" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>
    `;
  } else {
    result.innerHTML = `
        <h1>It is a Draw</h1>
        <i id="${computerChoice}" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>
        `;
  }

  score.innerHTML = `
  <p>Player: ${scoreBoard.player}</p>
  <p>Computer: ${scoreBoard.computer}</p>
  `

  modal.style.display = 'block'
};

const restartGame = () => {
    scoreBoard.player = 0;
    scoreBoard.computer = 0
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `
}

const clearModal = (e) => {
    if(e.target == modal) {
        modal.style.display = "none"
    }
}


//Event Listener
choice.forEach((choice) => choice.addEventListener("click", play));
window.addEventListener("click", clearModal)
restart.addEventListener('click', restartGame)
