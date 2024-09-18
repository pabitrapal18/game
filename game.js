let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");

let newGame=document.querySelector("#new-btn");
let msgCointainer=document.querySelector(".msg-cointainer");
let msg=document.querySelector("#msg");

let turn0=true;
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
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgCointainer.classList.add("hide");
}

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turn0){
    box.innerText="O";
    turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;
    checkwinner();
});
});

const enableBoxes =()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const disableBoxes =()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner) =>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgCointainer.classList.remove("hide");
    disableBoxes();
};
const checkwinner=()=>{
    for(let pattern of winPatterns){
    
    let pov1Val=boxes[pattern[0]].innerText;
    let pov2Val=boxes[pattern[1]].innerText;
    let pov3Val=boxes[pattern[2]].innerText;

    if(pov1Val!="" && pov2Val!=""&& pov3Val!=""){
        if(pov1Val==pov2Val && pov2Val==pov3Val){
            console.log("winner",pov1Val);
            showWinner(pov1Val);
        }
    }
    }
};
newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);