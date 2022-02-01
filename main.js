
var helloWorld = "Baseball Quiz";
var positions = ['Catcher', 'Pitcher', 'First Base', 'Second Base',  'Third Base', 'Shortstop', 'Right Field', 'Center Field', 'Left Field'];

// HEADER Section
var header = document.getElementById("homeHeader");
header.textContent = helloWorld;

var myButton = document.querySelector("button");
myButton.onclick = () => {
    beginQuiz();
    addCircleEvents();
}


// Game Section
function beginQuiz(){
    var quizQuestions = document.querySelector("p");
    quizQuestions.textContent = positions[Math.floor(Math.random()*positions.length)];
    return quizQuestions.textContent;
}

function addCircleEvents(){
    var circleList = document.querySelectorAll("circle");
    circleList.forEach((circle)=>{
        circle.setAttribute("onclick", "checkAnswer()");
    })
}

function getQuizQuestion(){
    return document.querySelector("p").textContent;
}

function compareInput(answersArray){
    return answersArray.find(answer => answer == getQuizQuestion());
}

function checkAnswer(){
    var positionTags = [...document.querySelector("#positions").children];
    var arrayAnswers = [];
    positionTags.forEach((tag)=>{
        arrayAnswers.push(tag.textContent.replace(/ {4}|[\t\n\r]/gm,""));
    })
    console.log(compareInput(arrayAnswers));
}
