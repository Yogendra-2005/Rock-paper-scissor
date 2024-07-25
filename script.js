let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg")
const userscorePara=document.querySelector("#user-score")
const compscorePara=document.querySelector("#comp-score")


const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}
const playGame=(userChoice)=>{
console.log("user choice=",userChoice);

const compChoice=genCompChoice();

console.log("computer choice=",compChoice);

if(userChoice===compChoice){
    console.log("draw");
    msg.style.backgroundColor="#081b31";
    msg.innerText="Its Draw . Play Again"; 
}
else{
     let userWin=true; // if userWin=true comp win 
    if(userChoice==="rock"){
        // scissor paper
userWin= compChoice ==="paper" ? true:false;
}
else if(userChoice==="paper"){
    // rock scissor
    userWin=compChoice==="scissor"?true:false;
}
else{
    // scissor left
    // either rock or paper comp will take
    userWin=compChoice==="rock"?true:false;
}
showWinner(userWin,userChoice,compChoice);
}  
};


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        compscore++;
        compscorePara.innerText=compscore;
msg.innerText=`BOO ! You Lost .  your ${userChoice} can't beat computer  ${compChoice}`;
msg.style.backgroundColor="red";
    }
    else{
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText=` Woo ! You Won .your ${userChoice} beat computer  ${compChoice}`;
        msg.style.backgroundColor="green";
    }

}
 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
 });
 