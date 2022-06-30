let generator = Math.random()
let computerHand;
let humanHand;

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

function winnerDeclaration () {
    computerHand = computerPlay();
    humanHand = humanPlay();

    if (humanHand == computerHand){
        return "It's a fucking tie"
    } else if ((humanHand == "rock" && computerHand == "scissors") 
            || (humanHand == "paper" && computerHand == "rock") 
            || (humanHand == "scissors" && computerHand == "paper")) {
                return "Human Victory!!!"
    } else {
        return "The computer has beaten the human contestant!"
    }
}



console.log(winnerDeclaration())