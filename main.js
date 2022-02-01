
var helloWorld = "Baseball Quiz";
var positions = ['Catcher', 'Pitcher', 'First Base', 'Second Base',  'Third Base', 'Shortstop', 'Right Field', 'Center Field', 'Left Field'];



// Begins the process
window.onload = () => {
    beginQuiz();
    addCircleEvents();
}


// HEADER Section
var header = document.getElementById("homeHeader");
header.textContent = helloWorld;

var myButton = document.querySelectorAll("button")[0];
myButton.onclick = () => {
    beginQuiz();
    addCircleEvents();
}

var myButton = document.querySelectorAll("button")[1];
myButton.onclick = () => {
    window.location.reload();
}



// Function Section
function beginQuiz(){
    var quizQuestions = document.querySelector("p");
    quizQuestions.textContent = positions[Math.floor(Math.random()*positions.length)];
    return quizQuestions.textContent;
}

function changeColor(tag, color){
    console.log(tag.firstElementChild);
    tag.firstElementChild.style.fill = `${color}`;
}

function addCircleEvents(){
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
                changeColor(positionTags[tag], 'green');
            }else{
                alert('Try again!');
                changeColor(positionTags[tag], 'red');
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
