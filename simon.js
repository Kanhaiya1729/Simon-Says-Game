const clickSound = new Audio("sounds/click.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
const levelupSound = new Audio("sounds/levelup.mp3");
const startSound = new Audio("sounds/start.mp3");
function playClickSound(){
    clickSound.currentTime = 0;
    clickSound.play();
}

function playWrongSound(){
    wrongSound.currentTime = 0;
    wrongSound.play();
}

function playLevelupSound(){
    levelupSound.currentTime = 0;
    levelupSound.play();
}
function playStartSound(){
    startSound.currentTime = 0;
    startSound.play();
}
let gameSeq=[];
let userSeq=[];
let btnColors=['yellow','pink','orange','purple'];
 let started=false;
 let level=0;
 let h2=document.querySelector("h2");
 let startBtn = document.querySelector("#startBtn");

//  document.addEventListener("keypress", function(){
//     if(started==false){
//         console.log("game is started");
//         started=true;
//         levelUp();
//     }
//  });
startBtn.addEventListener("click", function(){
    if(!started){
        
        started = true;
        startBtn.disabled = true; // prevent multiple clicks
         startBtn.innerText = "Game Running...";
         playStartSound();
        levelUp();
    }
});
 function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 250);
 }
  function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 500);
 }
 function levelUp(){
   userSeq=[];
    level++;
     if(level > 1){
        playLevelupSound();
     }
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btnColors[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
//   console.log(randIdx);
//   console.log(randColor);
//   console.log(randbtn);
gameSeq.push(randColor);
console.log(gameSeq);
   gameFlash(randbtn);
 }
 let highScore=0;
   function checkAns(idx){
      console.log('current level=',level);
      
      if(userSeq[idx]===gameSeq[idx]){
         if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
            
         }
         if(level > highScore){
            highScore = level;
        }
      }else{
          playWrongSound();
         h2.innerHTML=`Game Over!Your score was <b>${level}</b> <br> Highest score: <b>${highScore}</b> <br>Press any key to start.`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
document.querySelector("body").style.backgroundColor="white";
         },150)
         reset();
      }
   }
 function btnPress(){
   
    let btn=this;
     playClickSound();
    userFlash(btn);
    let userColor=btn.getAttribute("id"); 
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
 };
 let allBtns=document.querySelectorAll(".btn");
 for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
 };
  function reset(){
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
   startBtn.disabled = false;
     startBtn.innerText = "Play Again";
  }