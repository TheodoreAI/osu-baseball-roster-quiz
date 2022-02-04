// Global variables
let positions = ['Catcher', 'Pitcher', 'First Base', 'Second Base',  'Third Base', 'Shortstop', 'Right Field', 'Center Field', 'Left Field'];
let scoreArray = [];
const production = false;

// Document elements
let header = document.getElementById("homeHeader");
header.textContent = "Baseball Quiz";

// Begin the page state
window.onload = ()=>{
    // Check the state of the project
    checkState();
    shuffle(positions);
}

function startQuiz(){
    //unhidestuff
    document.querySelector("#quizControls").hidden = false;
    document.querySelector("#startQuizBtn").hidden = true;
    document.querySelector("#quizSvg").style.display = "block";
    document.querySelector("#instructions").hidden = false;
    askQuestion();

}

function checkState(){
    // Checks if in production or development to hide/show baseball base text.
    let projectText = [...document.querySelector("#positions").children];
    projectText.map((base)=>{
        if (production){
            base.lastElementChild.innerHTML = '';
            document.querySelector("#quizSvg").style.display = "none";
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
    console.log(positions.length===0);
    if (positions.length === 0){
        finishedMessage();
    }
}

function notifyUser(message,symbol){
    // Let user know if they answered correct/incorrect
    let notify = document.getElementById("notification");
    notify.innerHTML = '';
    notify.innerHTML =`${symbol} ${message}`;
    
}

function submitAnswer(clickedPosition, globalId){
    let tag = document.getElementById(globalId).childNodes[1];
    if (clickedPosition === getQuizQuestion()){
        changeColor(tag, 'green');
        notifyUser('Correct!', `<span>&#10003;</span>`);
        removePosition(clickedPosition);
    }else{
        changeColor(tag, 'red');
        setTimeout(() => {
            changeColor(tag, '#00a5ad')
        }, 250);
        notifyUser("Try again!", `<span>&#x2718;</span>`);
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

function getCircleTag(){
    console.log(document.querySelector('circle'));
    return document.querySelector('circle');
}

function askQuestion(){
    let tag = getCircleTag();
    changeColor(tag, 'grey');
    let quizQuestions = document.querySelector("#questionPrompt");
    quizQuestions.textContent = positions[positions.length-1];
    return quizQuestions.textContent;
}

function finishedMessage(){
    let element = document.querySelector('#promptSection');
    let h2 = document.createElement("h2")
    h2.textContent = 'You Finished!';
    element.appendChild(h2);
}

// Add the shuffle, see the elements, reset the colors when asking for positions. 
// Add the text that says if its incorreect
// Apply a visibility variable to switch the text being visable or not (production vs. Dev)
// Low Priority: shake the svg circle
// By Tomorrow: 
// Refactored my addEventListener() to onclick setAttribute added to each base in the SVG. DONE
// Added a shuffle funtionality that initialy randomly changes the state of my position array. DONE
// Added the color change for correct and incorrect. DONE