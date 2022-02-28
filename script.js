const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const answer = document.querySelector('#answerDiv');

rock.addEventListener("click", function() {playRound(0)});
paper.addEventListener("click", function() {playRound(1)});
scissors.addEventListener("click", function() {playRound(2)});

function computerPlay() {
    let val = ((Math.floor(Math.random()*10)) % 3);
    return val;
};

function decide(humanVal,robotVar){
    if(humanVal===robotVar){
        answer.textContent="Tie!";
        console.log("Tie!");
    } else {
        switch(humanVal) {
            case 0: //rock
                if (robotVar===1){
                    answer.textContent="Paper beats rock. You lose!";
                    console.log("Paper beats rock. You lose!");
                } else {
                    answer.textContent="Rock beats scissors. You win!";
                    console.log("Rock beats scissors. You win!");
                }
            break;
            case 1: //paper
                if (robotVar===2){
                    answer.textContent="cissors beat paper. You lose!";
                    console.log("Scissors beat paper. You lose!");
                } else {
                    answer.textContent="Paper beats rock. You win!";
                    console.log("Paper beats rock. You win!");
                }
            break;
            case 2: //scissors
                if (robotVar===0){
                    answer.textContent="Rock beats scissors. You lose!";
                    console.log("Rock beats scissors. You lose!");
                } else {
                    answer.textContent="Scissors beats paper. You win!";
                    console.log("Scissors beats paper. You win!");
                }
            break;
        }
    }
}

function playRound(humanSel) {   
    decide(humanSel,computerPlay());
}