let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
let computerLabel_div = document.getElementById("comp-label");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const myAudio_audio = document.getElementById("myAudio");

main();

function main(){
    rock_div.addEventListener("click", function(){
        game('r')
        myAudio_audio.play();
    })


    paper_div.addEventListener("click", function(){
        game('p')
    })

    scissors_div.addEventListener("click", function(){
        game('s')
    })

    function game(userChoice){
        const compOptions = ["r","p","s"];
        var compChoice = compOptions[Math.floor(Math.random() * compOptions.length)];
        console.log("Comp chose --> " + compChoice);
        console.log("User chose --> " + userChoice);

        switch(userChoice + compChoice){
            case "rs":
            case "pr":
            case "sp":
                win(userChoice, compChoice);
                break;
            case "rp":
            case "ps":
            case "sr":
                loss(userChoice, compChoice);
                break;
            case "rr":
            case "pp":
            case "ss":
                tie(userChoice, compChoice);
                break;

        }

    }

    function win(user, computer){
        userScore++;
        console.log(userScore);
        userScore_span.innerHTML = userScore;
        result_p.innerHTML = getMessage(user, computer);
        document.getElementById(user).classList.add('green-glow');
        setTimeout(function(){document.getElementById(user).classList.remove('green-glow')}, 400);

    }

    function loss(user, computer){
        computerScore++;
        console.log(computerScore);
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = getMessage(user, computer);
        document.getElementById(user).classList.add('red-glow');
        setTimeout(function(){document.getElementById(user).classList.remove('red-glow')}, 400);

    }

    

    function tie(user, computer){
        result_p.innerHTML = getMessage(user, computer);
        document.getElementById(user).classList.add('gray-glow');
        setTimeout(function(){document.getElementById(user).classList.remove('gray-glow')}, 400);
    }

    function getMessage(letter1,letter2){
        if(letter1 === "r" && letter2 ==="s") return "Rock beats Scissors. You win!";
        if(letter1 === "r" && letter2 ==="p") return "Paper covers Rock. You lose. 💩";
        if(letter1 === "r" && letter2 ==="r") return "Rock and Rock = Tie!";

        if(letter1 === "p" && letter2 ==="r") return "Paper covers Rock. You win!";
        if(letter1 === "p" && letter2 ==="s") return "Scissors cut Paper. You lose. 💩";
        if(letter1 === "p" && letter2 ==="p") return "Paper and Paper = Tie!";

        if(letter1 === "s" && letter2 ==="p") return "Scissors cut Paper. You win!";
        if(letter1 === "s" && letter2 ==="r") return "Rock smashes Scissors. You lose. 💩";
        if(letter1 === "s" && letter2 ==="s") return "Scissors and Scissors = Tie!";

    }



}



