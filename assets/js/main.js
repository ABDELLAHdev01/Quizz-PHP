import {questions} from "./qs.js";

let startboard = document.getElementById('startquizz');
let Qestionboard = document.getElementById('q1');
let strtbtnn = document.getElementById('startbtn');
let subbtn = document.getElementById('subbtn');
let theq = document.getElementById('question');
let o1 = document.getElementById('a');
let o2 = document.getElementById('b');
let o3 = document.getElementById('c');
let o4 = document.getElementById('d');

let current = 0;
var score = 0;


strtbtnn.addEventListener('click',() => {
    startboard.style.display = "none";
    Qestionboard.style.display = "block";
    let questionss = questions[current];
    
    theq.innerText = questionss["question"];
    o1.innerText = questionss["a"];
    o2.innerText = questionss["b"];
    o3.innerText = questionss["c"];
    o4.innerText = questionss["d"];

    

});


subbtn.addEventListener('click', () => {
    
    current ++;
    let questionss = questions[current];
    
    document.querySelector('input[name=answers]:checked').checked = false;


    theq.innerText = questionss["question"];
    o1.innerText = questionss["a"];
    o2.innerText = questionss["b"];
    o3.innerText = questionss["c"];
    o4.innerText = questionss["d"];

})







