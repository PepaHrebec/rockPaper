const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const answer = document.querySelector('#answerDiv');
const scoreYou = document.querySelector('#scoreYou');
const scoreComp = document.querySelector('#scoreComp');
const result = document.querySelector('#result')

rock.addEventListener("click", function() {playRound(0)});
paper.addEventListener("click", function() {playRound(1)});
scissors.addEventListener("click", function() {playRound(2)});

let scoreYouNum=0;
let scoreCompNum=0;

//////////////////////////////functions

function changeScore() {
    scoreYouNum=scoreYouNum+1;
    scoreYou.textContent=`Your score is ${scoreYouNum}.`;
}

function changeScoreComp() {
    scoreCompNum=scoreCompNum+1;
    scoreComp.textContent=`Computer's score is ${scoreCompNum}.`;
}

function computerPlay() {
    let val = ((Math.floor(Math.random()*10)) % 3);
    return val;
};

function reset() {
    scoreCompNum=0;
    scoreYouNum=0;
    scoreYou.textContent=`Your score is ${scoreYouNum}.`;
    scoreComp.textContent=`Computer's score is ${scoreCompNum}.`;
    answer.textContent="Choose a button.";
    result.textContent="";
}

function decide(humanVal,robotVar){
    if(humanVal===robotVar){
        answer.textContent="Tie!";
    } else {
        switch(humanVal) {
            case 0: //rock
                if (robotVar===1){
                    answer.textContent="Paper beats rock. You lose!";
                    changeScoreComp()
                } else {
                    answer.textContent="Rock beats scissors. You win!";
                    changeScore();
                }
            break;
            case 1: //paper
                if (robotVar===2){
                    answer.textContent="Scissors beat paper. You lose!";
                    changeScoreComp()
                } else {
                    answer.textContent="Paper beats rock. You win!";
                    changeScore();
                }
            break;
            case 2: //scissors
                if (robotVar===0){
                    answer.textContent="Rock beats scissors. You lose!";
                    changeScoreComp()
                } else {
                    answer.textContent="Scissors beats paper. You win!";
                    changeScore();
                }
            break;
        }
    }
    if(scoreYouNum===5){
        result.textContent="Congrats, you win!";
    } else if(scoreCompNum===5) {
        result.textContent="Shame, you lose."
    }
}

function playRound(humanSel) {  
    if(scoreCompNum===5 || scoreYouNum===5){
        reset();
    } 
    decide(humanSel,computerPlay());
}