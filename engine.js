var userPoint = 0;
var computerPoint = 0;
var choiceofuser = document.getElementsByClassName("choiceofuser");
var choiceofcomp = document.getElementsByClassName("choiceofcomp");
var userPoint_span = document.getElementById("user-point");
var computerPoint_span = document.getElementById("computer-point");
var scoreBoard_div = document.getElementById("score-board");
var result_p= document.querySelector(".result > p");
var stone_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissor_div = document.getElementById("s");
function getComputerOption() {
    var options = ['r', 'p', 's'];
    var randomNmuber = Math.floor(Math.random() * 3);
    return options[randomNmuber];

}

function convertToWord(letter){
    if (letter === "r") return "stone";
    if (letter === "p") return "paper";
    return "scissor";
}
function win(userOption, computerOption) {
    userPoint++;
    userPoint_span.innerHTML = userPoint;
    computerPoint_span.innerHTML = computerPoint;
    result_p.innerHTML = convertToWord(userOption)  + " beats " +  convertToWord(computerOption) + "  .you win!!";

}

function lose(userOption, computerOption) {
    computerPoint++;
    userPoint_span.innerHTML = userPoint;
    computerPoint_span.innerHTML = computerPoint;
    result_p.innerHTML = convertToWord(userOption)  + " loses to " +  convertToWord(computerOption) + "  .you became loser!!";

}
function draw(userOption, computerOption){
    result_p.innerHTML = convertToWord(userOption)  + " equals " +  convertToWord(computerOption) + "  .SO its a draww";

}


function game(userOption) {
    const computerOption= getComputerOption();
    switch (userOption + computerOption) {
        case "sp":
        case "pr":
        case "rs":
            win(userOption , computerOption);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userOption, computerOption);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userOption, computerOption);
            break;
    }
}

function main() {
    stone_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissor_div.addEventListener('click', function () {
        game("s");
    })

}

main();