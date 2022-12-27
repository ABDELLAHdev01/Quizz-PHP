import {questions} from "./qs.js";
shuffle();
let startboard = document.getElementById('startquizz');
let Qestionboard = document.getElementById('q1');
let strtbtnn = document.getElementById('startbtn');
let subbtn = document.getElementById('subbtn');
let theq = document.getElementById('question');
let o1 = document.getElementById('a');
let o2 = document.getElementById('b');
let o3 = document.getElementById('c');
let o4 = document.getElementById('d');
let refreasher = document.getElementById('refreash');
let scoreboard = document.getElementById('scores');
let answersop =   document.querySelector('.answersss');
let S1 = document.getElementById('scno');
let S2 = document.getElementById('sct');
let current = 0;
var score = 0;
var selectedanser=0 ;
let progressBar = document.querySelector('.progress-bar');
let progressBarFill = progressBar.querySelector('.progress-bar-fill');

refreasher.addEventListener('click', () => {
    location.reload();
})

function shuffle(){
    let randIndex = Math.floor(Math.random()*questions.length);
    for ( let i=0;i<questions.length;i++)
    {
        [questions[i],questions[randIndex]]=[questions[randIndex],questions[i]];
    }
}
strtbtnn.addEventListener('click',() => {
    setProgress(10);

    startboard.style.display = "none";
    Qestionboard.style.display = "block";
    refreasher.style.display = "block";
    let questionss = questions[current];
    
    theq.innerText = questionss["question"];
    o1.innerText = questionss["a"];
    o2.innerText = questionss["b"];
    o3.innerText = questionss["c"];
    o4.innerText = questionss["d"];
    answer=questionss['answer'];
    // current++;

});

let answer = 0;
subbtn.addEventListener('click', () => {

if(current<questions.length){
    console.log(current,questions.length);
    for(let i=0;i<4;i++){
        if(document.querySelectorAll('input[name=answers]')[i].checked == true ){
            selectedanser = document.querySelectorAll('input[name=answers]')[i].value;
            
        }
    }
    
    if(selectedanser ==answer){
        score++;
        
    }else{
        
    }
    document.querySelector('input[name=answers]:checked').checked = false;
    
    // progress bar


let task = current +1;

setProgress(task*10);
    // 
    if(current<questions.length-1){
        let questionss = questions[current+1];
        theq.innerText = questionss["question"];
        o1.innerText = questionss["a"];
        o2.innerText = questionss["b"];
        o3.innerText = questionss["c"];
        o4.innerText = questionss["d"];
        answer=questionss['answer'];
        current ++;
    }
else{
    Qestionboard.style.display = "none";
    if(score<=3){
        S1.innerText = "Your Score is "+ score +"/10"
        S2.innerText =  "you can do better next time 😔 "
    }else if(score>3 && score<=5){
        S1.innerText = "Your Score is "+ score +"/10"
        S2.innerText =  "Your Score it Okey 👌"
    }else if(score>5 && score < 9){
        S1.innerText = "Your Score is "+ score +"/10"
        S2.innerText =  "Your Score it Good 👍 "   
    }else if(score >= 10){
        S1.innerText = "Your Score is "+ score +"/10"
        S2.innerText =  "Your Score it Perfect 💯  "    
    }
    scoreboard.removeAttribute('style');


}
}
   

})

let setProgress = (percentage) => {
    progressBarFill.style.width = percentage + '%';
  };






