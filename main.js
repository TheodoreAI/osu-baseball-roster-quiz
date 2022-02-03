var positions = ['Catcher', 'Pitcher', 'First Base', 'Second Base',  'Third Base', 'Shortstop', 'Right Field', 'Center Field', 'Left Field'];
var answers = {
                'question1': true, 
                'question2': true, 
                'question3': true, 
                'question4': true, 
                'question5': true, 
                'question6': true,
                'question7': true,
                'question8': true,
                'question9': true,
            }

// Begins the process
window.onload = () => {
    addCircleEvents();
}

// Button Section
var header = document.getElementById("homeHeader");
header.textContent = "Baseball Game";

var myButton = document.querySelectorAll("button")[0];
myButton.onclick = () => {
    askPosition();
    addCircleEvents();
}

var myButton = document.querySelectorAll("button")[1];
myButton.onclick = () => {
    window.location.reload();
}


function getRandomNumber(min, max) {
    let totalEle = max - min + 1;
    let result = Math.floor(Math.random() * totalEle) + min;
    return result;
}

// Function Section
function askPosition(){
    var quizQuestions = document.querySelector("p");
    quizQuestions.textContent = positions[getRandomNumber(0, positions.length)];
    return quizQuestions.textContent;
}

function countAnswers(color, index){
    if (color == 'red'){
        console.log(index, "red");
        
    }else if (color == 'green'){
        console.log(index, "green");
        
    }
}

function changeColor(tag, color, index){
    countAnswers(color, index);
    tag.firstElementChild.style.fill = `${color}`;
}

function removePosition(position){
    var positionIndex = positions.indexOf(position);
    positions.splice(positionIndex);
    console.log(positions);
    if (positions.length === 0){
        alert("You won!");
    }
}

function addCircleEvents(){
    var positionTags = [...document.querySelector("#positions").children];
    for (let tag = 0; tag < positionTags.length; tag++){
        positionTags[tag].addEventListener("click", function(){
            if (positionTags[tag].textContent.replace(/ {4}|[\t\n\r]/gm,"").includes(getQuizQuestion())){
                alert(getQuizQuestion());
                changeColor(positionTags[tag], 'green', tag);
                askPosition();
                removePosition(getQuizQuestion());
                
            }else{
                changeColor(positionTags[tag], 'red', tag);
                askPosition();
                removePosition(getQuizQuestion());
            }
        })
    }
}

function getQuizQuestion(){
    return document.querySelector("p").textContent;
}

function compareInput(answersArray){
    return answersArray.find(answer => answer.includes(getQuizQuestion()));
}

function checkAnswer(){
    var positionTags = [...document.querySelector("#positions").children];
    var arrayAnswers = [];
    positionTags.forEach((tag)=>{
        arrayAnswers.push(tag.textContent.replace(/ {4}|[\t\n\r]/gm,""));
    })
    for (let tag = 0; tag < positionTags.length; tag++){
        positionTags[tag].addEventListener("click", function(){
            console.log("You clicked", positionTags[tag].textContent.replace(/ {4}|[\t\n\r]/gm,""));
            if (positionTags[tag].textContent.replace(/ {4}|[\t\n\r]/gm,"").includes(getQuizQuestion())){
                alert("You are right!");
                return;
            }else{
                alert('Try again!');
                return;
            }
              
        })
    }
}
