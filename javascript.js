let generator = Math.random()
let computerHand;
let humanHand;
let submission;
let humanSubmission = "rock"
let submitButton;
let rounds = 0;

function computerPlay(){
    rnd = Math.random()
    stringOfRnd = rnd.toString()
    fourthDigit = stringOfRnd.charAt(4)

    if(fourthDigit <= 3){
        return "paper"
    } else if (fourthDigit >=7) {
        return "rock"
    } else {
        return "scissors"
    }
}


function humanPlay(){
   return humanSubmission
}

function winnerDeclaration(a,b) {
    let computerHand = computerPlay();
    let humanHand = humanPlay();

    if (humanHand == computerHand){
        rounds +=1 
        return "It's a fucking tie"
    } else if ((humanHand == "rock" && computerHand == "scissors") 
            || (humanHand == "paper" && computerHand == "rock") 
            || (humanHand == "scissors" && computerHand == "paper")) {
                rounds +=1 
                return "Human Victory!!!"
    } else if ((computerHand == "rock" && humanHand == "scissors") 
            || (computerHand == "paper" && humanHand == "rock") 
            || (computerHand == "scissors" && humanHand == "paper"))
        {
        rounds +=1 
        return "The computer has beaten the human contestant!"
    } else { return "no contest"}
}

function gameResults(){
    for (let i=0; i < 5; i++){

        if (winnerDeclaration() == "It's a fucking tie"){
            rounds +=1
            console.log(rounds)
        } else if (winnerDeclaration() == "Human Victory!!!"){
            rounds +=1
            console.log(rounds)
        } else if (winnerDeclaration() == "Human Victory!!!"){
            rounds +=1
            console.log(rounds)
    } else {
            rounds +=1
            console.log(rounds)
    }
}
}
