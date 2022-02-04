// Global variables
let positions = ['Catcher', 'Pitcher', 'First Base', 'Second Base',  'Third Base', 'Shortstop', 'Right Field', 'Center Field', 'Left Field'];
let scoreArray = [];
const projectState = 'dev';

// Document elements
let header = document.getElementById("homeHeader");
header.textContent = "Baseball Quiz";

let myButton = document.querySelectorAll("button")[0];
myButton.onclick = () => {
    askPosition();
}
// Begin the page state
window.onload = ()=>{
    // Shuffle around the items in the array
    shuffle(positions);
    checkState();
}

function checkState(){
    // Checks if in production or development to hide/show baseball base text.
    let projectText = [...document.querySelector("#positions").children];
    projectText.map((base)=>{
        if (projectState === 'production'){
            base.lastElementChild.innerHTML = '';
        }
    });
}

function getQuizQuestion(){
    // Get the value of the current question from the prompt.
    return document.querySelector("#questionPrompt").textContent;
}
function changeColor(tag, color){
    tag.style.fill = `${color}`;
}
function removePosition(position){
    // Removes a position once it's selected correctly.
    var positionIndex = positions.indexOf(position);
    positions.splice(positionIndex);
    if (positions.length === 0){
        finishedMessage();
        
    }
}

// Funtionality 
function submitAnswer(clickedPosition, globalId){
    let tag = document.getElementById(globalId).childNodes[1];
    if (clickedPosition === getQuizQuestion()){
        changeColor(tag, 'green');
        setTimeout(() => {
            changeColor(tag, 'grey');
        }, 500);
        removePosition(clickedPosition);
        notifyUser('Correct!')
    }else{
        changeColor(tag, 'red');
        setTimeout(() => {
            changeColor(tag, '#00a5ad')
        }, 500);
        notifyUser("Try again!");
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

function askPosition(){
    var quizQuestions = document.querySelector("#questionPrompt");
    quizQuestions.textContent = positions[positions.length-1];
    notifyUser('');
    return quizQuestions.textContent;
}

function notifyUser(message){
    let element = document.querySelector("#notify");
    element.textContent = '';
    element.textContent = message;
}

function finishedMessage(){
    let element = document.querySelector('#questionPrompt');
    element.textContent = '';
    element.textContent = 'You Finished!'
}

// Add the shuffle, see the elements, reset the colors when asking for positions. 
// Add the text that says if its incorreect
// Apply a visibility variable to switch the text being visable or not (production vs. Dev)
// Low Priority: shake the svg circle
// By Tomorrow: 
// Refactored my addEventListener() to onclick setAttribute added to each base in the SVG. DONE
// Added a shuffle funtionality that initialy randomly changes the state of my position array. DONE
// Added the color change for correct and incorrect. DONE