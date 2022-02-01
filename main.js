
var helloWorld = "Baseball Quiz";
var positions = ['Catcher', 'Pitcher', 'First Base', 'Second Base',  'Third Base', 'Shortstop', 'Right Field', 'Center Field', 'Left Field'];

// HEADER Section
var header = document.getElementById("homeHeader");
header.textContent = helloWorld;

var myButton = document.querySelector("button");
myButton.onclick = () => {
    // alert("Lets begin!");
    beginQuiz();
    addCircleEvents();
}


// Game Section
function beginQuiz(){
    var quizQuestions = document.querySelector("p");
    quizQuestions.textContent = positions[Math.floor(Math.random()*positions.length)];
    return quizQuestions.textContent;
}

function addCircleEvents(questionText){
    var circleList = document.querySelectorAll("circle");
    circleList.forEach((circle)=>{
        circle.setAttribute("onclick", "checkAnswer()");
    })
}

function getQuizQuestion(){
    return document.querySelector("p").textContent;
}

function checkAnswer(){
    var valueElement = document.querySelector("#positions");
    
    console.log(getQuizQuestion(), typeof(valueElement.CDATA_SECTION_NODE));
    
}
