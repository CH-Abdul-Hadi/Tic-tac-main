let boxs= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset");
let newBtn= document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msgContainer");
let msga=document.querySelector("#msg");

let turnO = true; //playerX, playerO

const resetGame=()=>{
    turnO = true;
    enableBoxs();
    msgContainer.classList.add("hide");

};

const wincondition=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was click");
        if(turnO){//turn o
            box.innerText="o";
            turnO=false;
        } else{//turn x
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true; // button disable

        checkwinner();// call funtion
    })
})

const checkwinner=()=>{ // function
    for(pattern of wincondition){; // per click pattern check

        /*console.log(pattern[0],pattern[1],pattern[2]); //box number
        console.log(
            boxs[pattern[0]].innerText,
            boxs[pattern[1]].innerText,
            boxs[pattern[2]].innerText); //pattern value store in box */

    let pos1val=boxs[pattern[0]].innerText;
    let pos2val=boxs[pattern[1]].innerText;
    let pos3val=boxs[pattern[2]].innerText;
    if(pos1val!=""&& pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val){
            console.log('winner', pos1val);
            showwinner(pos1val);
        }
    }
    }
};

const showwinner=(winner)=>{ //function
    msg.innerText=`congranguration, Winner is ${winner}`; //msg display 
   msgContainer.classList.remove('hide'); // remove hide
   disableGame();
}

 const disableGame=()=>{
    for (let box of boxs){
        box.disabled=true;
    }
 };

 const enableBoxs=()=>{
    for (let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
 };

 newBtn.addEventListener("click", resetGame);
 resetbtn.addEventListener("click", resetGame);

