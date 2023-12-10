
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; //playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const resetGame =() =>{
    turnO = true;
    enableBoxs();
    msgContainer.classList.add("hide");
    
  };


  

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
    
    //  console.log("box was clicked");

     if (turnO) {
        box.innerText ="O";
        box.style.backgroundColor='mediumspringgreen';
        box.style.color='black';
        turnO =false;  
     }else{
        box.innerText ="X";
        box.style.backgroundColor='lightskyblue';
        box.style.color='black';
        turnO =true;
     }
     box.disabled = true;

     checkWinner () ;
    
    });
  });



  const disableBoxs =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
  };

  const enableBoxs =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
  };

  const showWinner = (winner) =>{
    msg.innerText=`Congratulations 🥳, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxs ();
  };
  
  const checkWinner = () =>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
       
           let pos1val = boxes[pattern[0]].innerText;
           let pos2val =boxes[pattern[1]].innerText;
           let pos3val = boxes[pattern[2]].innerText;

           if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val ){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }

           }
    }
  }

  newGameBtn.addEventListener("click" , resetGame) ;
  resetBtn.addEventListener("click",resetGame);
  

boxes.forEach((box) => {
  resetBtn.addEventListener("click", () => {
  // previous color of boxes
  
  box.style.backgroundColor = 'white';
  });
});

boxes.forEach((box) => {
  newGameBtn.addEventListener("click", () => {
  // previous color of boxes
  
  box.style.backgroundColor = 'white';
  });
});

// function up(field, player) {
//   player.column = player.column + 1;
//   field[player.row][player.column] = 'P'; 
// }

// function right(field, player) {
//   player.row = player.row + 1;
//   field[player.row][player.column] = 'P';
// }

// function down(field, player) {
//   player.column = player.column - 1;
//   field[player.row][player.column] = 'P';
// }

// function left(field, player) {
//   player.row = player.row - 1;
//   field[player.row][player.column] = 'P';
// }

function arrowFunction(event) {
  var x = event.key;

  // If the pressed keyboard button is "a" or "A" (using caps lock or shift), alert some text.
  if (x == "37") { 
    alert ("You pressed the 'left' key!");
  }

  else if (x == "38") { 
    alert ("You pressed the 'left' key!");
  }
}



  