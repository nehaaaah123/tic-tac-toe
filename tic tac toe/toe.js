let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#id");
let newGameBtn=document.querySelector("#new");
let msgContainer=document.querySelector(".msg");
let msg= document.querySelector("#msg");

let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame =() => {
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
       
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwin();
    });
});
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disabledboxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWinner=(winner) => {
    msg.innerText=`Congo ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
}
const checkwin=() => {
    for(let pattern of winpatterns){
        
       let  post1Val =boxes[pattern[0]].innerText;
       let  post2Val =boxes[pattern[1]].innerText;
       let  post3Val =boxes[pattern[2]].innerText;

       if(post1Val != "" && post2Val != "" && post3Val != ""){
        if(post1Val === post2Val && post2Val === post3Val){

            showWinner(post1Val);
        }
       }
            
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
