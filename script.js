const boxes = document.querySelectorAll(".boxes");
const body = document.querySelector("body");
const game = document.querySelector(".game");
const newGame = document.querySelector(".newgame");
const winner = document.querySelector(".winner");
const Turn = document.querySelector(".turn");
let TurnX = true;
let draw = 0;

const winningPatt = [
    [0 , 1, 2],
    [3 , 4, 5],
    [6 , 7, 8],
    [0 , 3, 6],
    [1 , 4, 7],
    [2 , 5, 8],
    [0 , 4, 8],
    [6 , 4, 2]
]

function disableButtons() {

    for(box of boxes){
        box.disabled = true;
    }
}


const winFunction = (Winner) => {
    disableButtons();
    if (Winner == "X") {
        Turn.innerHTML = "Congratulations, 'X' Wins";
        game.style.backgroundColor = "lime";
        body.style.backgroundColor = "lime";
    } else {
        Turn.innerHTML = "Congratulations, 'O' Wins";
        game.style.backgroundColor = "skyblue";
        body.style.backgroundColor = "skyblue";
    }
  };

const winChecker = () => {
    for (let i of winningPatt) {
        let [element1, element2, element3] = [
            boxes[i[0]].innerText,
            boxes[i[1]].innerText,
            boxes[i[2]].innerText,
        ];
        if (element1 != "" && (element2 != "") & (element3 != "")) {
            if (element1 == element2 && element2 == element3) {
                winFunction(element1);
            }
        }
    }
  };

boxes.forEach((element) => {
    element.addEventListener("click", () => {
        if (TurnX) {
            TurnX = false;
            element.innerText = "X";
            Turn.innerText = "Turn : O"
            element.disabled = true;
            element.style.color = "#00FF40";
            element.style.borderColor = "black";
        } else {
            TurnX = true;
            element.innerText = "O";
            Turn.innerText = "Turn : X"
            element.disabled = true;
            element.style.color = "#1560bd";
            element.style.borderColor = "black";
        }
        winChecker();
        draw = draw + 1;
        if(draw == 9){
            Turn.innerHTML = "No One Won :("
            game.style.backgroundColor = "orange";
            body.style.backgroundColor = "orange";
        }
    });
  });

newGame.addEventListener("click", () => {
    TurnX = true;
    boxes.forEach((el) => {
        el.innerText = "";
        el.disabled = false;
        Turn.innerText = "Turn : X"
        game.style.backgroundColor = "#C4BBAF";
        body.style.backgroundColor = "#C4BBAF";
        draw = 0;
    })
})