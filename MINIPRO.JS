// initial stages
let gameSeq=[];
let userSeq=[];

let btns=["green","yellow","red","blue"];

// initial stages
let started=false;
let level=0;

let highestScore = 0; // to get the highest score till date

let h2=document.querySelector("h2");

// start the game
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started= true;

        levelUp();
    }
});

// white flash of the buttons
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}

// increment the level
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    // random btn choose 
    let randomIndex=Math.floor(Math.random() * 4);
    let randomColor=btns[randomIndex];
    let randomBtn=document.querySelector(`.${randomColor}`);
    console.log(gameSeq);
    btnFlash(randomBtn);
}

// comparing userSeq and gameSeq
// generating highest score
function checkAns(index){
    // console.log("current level : ", level);
    
    if(userSeq[index]==gameSeq[index]){
       if(userSeq.length==gameSeq.length){
       setTimeout(levelUp,1000);
       }
    }else{
        if(level > highestScore){
            highestScore = level;
        }
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>
                      <u>Your Highest Score is ${highestScore}</u>.<br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        setTimeout
        reset();
    }
}


function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


// reseting the game
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}