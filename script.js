function computerPlay() {
    let val = ((Math.floor(Math.random()*10)) % 3);
    return val;
};
function assign(val) {
    switch(val) {
        case "rock":
            return 0;
        break;
        case "paper":
            return 1;
        break;
        case "scissors":
            return 2;
        break; 
        default:
            console.log("Yeah, you've made an error.");
        break;   
    }
}

function decide(humanVal,robotVar){
    if(humanVal===robotVar){
        console.log("Tie!");
    } else {
        switch(humanVal) {
            case 0:
                if (robotVar===1){
                    console.log("Paper beats rock. You lose!");
                } else {
                    console.log("Rock beats scissors. You win!");
                }
            break;
            case 1: //paper
                if (robotVar===2){
                    console.log("Scissors beat paper. You lose!");
                } else {
                    console.log("Paper beats rock. You win!");
                }
            break;
            case 2: //scissors
                if (robotVar===0){
                    console.log("Rock beats scissors. You lose!");
                } else {
                    console.log("Scissors beats paper. You win!");
                }
            break;
        }
    }
}

function play(humanSel) {
    humanSel=humanSel.toLowerCase();
    decide(assign(humanSel),computerPlay());
}