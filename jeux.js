function getComputerChoice() {
    const randomNumber = Math.random();
  
    if (randomNumber < 0.33) {
      return "rock";
    } else if (randomNumber < 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  function getHumanChoice() {
    let userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    return userInput
    }
  
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {
    const resultDiv = document.getElementById("result");
  
    if (humanChoice === computerChoice) {
      resultDiv.textContent = "It's a tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      resultDiv.textContent = "You win this round!";
      humanScore++;
    } else {
      resultDiv.textContent = "Computer wins this round!";
      computerScore++;
    }
  
    // Update scores
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
  }
  
  function setupGame() {
    const buttons = document.querySelectorAll('.choice-btn');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const humanChoice = this.id;
        const computerChoice = getComputerChoice();
  
        playRound(humanChoice, computerChoice);
      });
    });
  }
  
  setupGame();