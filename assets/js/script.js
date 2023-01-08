let playerText = document.getElementById('player text');
let restartBtn = document.getElementById('restartBtn');
let boxes = Array.from(document.getElementsByClassName('box'));

/*
    ============================================
      Define event Listener 
    ============================================
    */
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () =>{
    boxes.forEach(box => box.addEventListener('click', boxClicked));
}
/*
    ============================================
      SwitchTurn Function.
    ============================================
    */
function boxClicked(e){
    const id = e.target.id;

    if(!spaces[id]){
        spaces[id]= currentPlayer;
        e.target.innerText = currentPlayer;

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT; 
    }
}

/*
    ============================================
      Restart Button Function.
    ============================================
    */

    restartBtn.addEventListener('click' , restart);

    function restart(){
        spaces.fill(null);

        boxes.forEach(box =>{
            box.innerText = '';
        })

        currentPlayer = X_TEXT;
    }
startGame();