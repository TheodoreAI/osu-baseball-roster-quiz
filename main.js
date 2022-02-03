var positions = ['Catcher', 'Pitcher', 'First Base', 'Second Base',  'Third Base', 'Shortstop', 'Right Field', 'Center Field', 'Left Field'];

var answersMap = new Map();

var answersCorrect = [];


// Begins the process
function submitAnswer(clickedPosition, globalId){
    let tag = document.getElementById(globalId).childNodes[1];
    if (clickedPosition === getQuizQuestion()){
        changeColor(tag, 'green');
        askPosition();
        removePosition(getQuizQuestion());
        numberOfCorrectAnswers('score', 'Correct');
        console.log(answersMap.get('score'));
    }else{
        changeColor(tag, 'red');
        askPosition();
        removePosition(getQuizQuestion());
        numberOfCorrectAnswers('Score', 'Wrong');
    }
}

// Button Section
var header = document.getElementById("homeHeader");
header.textContent = "Baseball Game";

var myButton = document.querySelectorAll("button")[0];
myButton.onclick = () => {
    askPosition();
}

var myButton = document.querySelectorAll("button")[1];
myButton.onclick = () => {
    window.location.reload();
}

function changeColor(tag, color){
    tag.style.fill = `${color}`;
}

function askPosition(){
    var quizQuestions = document.querySelector("p");
    quizQuestions.textContent = positions[positions.length-1];
    return quizQuestions.textContent;
}

function giveScore(){
    document.querySelector('#score').textContent = answersMap.get('');

}

function removePosition(position){
    var positionIndex = positions.indexOf(position);
    positions.splice(positionIndex);
    console.log(positions);
    if (positions.length === 0){
        alert("You Finished!");
        giveScore();
    }
}

function numberOfCorrectAnswers(key, value){
    answersMap.set(key, value);
}

function getQuizQuestion(){
    return document.querySelector("p").textContent;
}

// Add the shuffle, see the elements, reset the colors when asking for positions. 
// Add the text that says if its incorreect


// Apply a visibility variable to switch the text being visable or not (production vs. Dev)

// Low Priority: shake the svg circle

// Tomorrow: shuffle and the grey, correct and incorrect. 