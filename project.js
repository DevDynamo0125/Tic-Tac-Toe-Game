let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#Reset");
let newGame=document.querySelector("#new-btn");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO =true;
count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw=()=>{
    msg.innerText="GAME WAS A DRAW";
    msgcont.classList.remove("hide");
    disableBoxes();
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        
    }
};
const showWinner=(winner)=>{
    msg.innerText=`CONGRATULATIONS,winner is ${winner}`;
    msgcont.classList.remove("hide");
    box.disabled=true;

}
const checkWinner=()=>{
    for (pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&& pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
};
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgcont.classList.add("hide");


};
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

