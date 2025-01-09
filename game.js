let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
    const options = ["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock paper, scissors

};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#000409";
}

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    // generate computer choice
    const compChoice = genComputerChoice();
    console.log("computer choice ", compChoice);

    if(userChoice === compChoice){
        // Draw game
        drawGame();
        
    }
    else{
            let userWin = true;
            if( userChoice === "rock"){
                userWin = compChoice ==="paper"? false : true;
                //scissor, paper
            }
            else if(userChoice === "paper"){
                userWin = compChoice === "scissors"? false : true;
                // rock, scissors
            }
    
            else{
                //rock, paper
                userWin = compChoice ==="rock"? false : true;
            }

            showWinner(userWin);
    }
};

choices.forEach((choices) => {
   // console.log(choice);
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        //console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});