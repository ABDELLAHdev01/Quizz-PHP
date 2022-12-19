// timer
const startintime = 5;
let time = startintime *60;
const countDown = document.getElementById('countdown');




//start the game
function startgame() {
    document.getElementById('startquizz').style.display = "none";
    document.getElementById('q1').style.display = "block";


    // start timing
    setInterval(updateCounteDown, 1000);
    
    function updateCounteDown(){
        const minutes = Math.floor(time / 60);
        let secondes = time % 60;
        countDown.innerHTML = `${minutes}:${secondes}`
        if(time === 0){
            window.location.reload();

                }
        time--;
        
       
    }
 }
//  displaying array of objects

// array of questions
let questions = [{
    'question' : 'Que signifie PHP?',
    'answers' : ['Personal Home Page Hypertext Preprocessor','Pretext Hypertext Processor','Preprocessor Home Page','Pretext Hypertext Processor'],
    'correctIndex' : 0 
    },
    {
        'question' : 'what is php?',
        'answers' : ['opp','ppp','php','pop'],
        'correctIndex' : 2 
    }
];

// questions
document.getElementById('question').innerText = questions[0]['question'];
// select
document.getElementById('question1').innerText = questions[0]['answers']['0'];
document.getElementById('question2').innerText = questions[0]['answers']['1'];
document.getElementById('question3').innerText = questions[0]['answers']['2'];
document.getElementById('question4').innerText = questions[0]['answers']['3'];
console.log(questions[1]['answers']['2']);
