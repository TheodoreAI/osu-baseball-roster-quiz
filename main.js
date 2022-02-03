// Global variables
var positions = ['Catcher', 'Pitcher', 'First Base', 'Second Base',  'Third Base', 'Shortstop', 'Right Field', 'Center Field', 'Left Field'];
var answersMap = new Map();
var answersCorrect = [];

// Document elements
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

window.onload = ()=>{
    shuffle(positions);
    giveScore();
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
        numberOfCorrectAnswers('score', 'Correct');
        notifyUser('Correct')
    }else{
        changeColor(tag, 'red');
        setTimeout(() => {
            changeColor(tag, '#00a5ad')
        }, 500);
        notifyUser("Try again!");
    }
}

function notifyUser(message){
    let element = document.querySelector("#notify");
    element.textContent = '';
    element.textContent = message;
}

function shuffleBases(){
    // Using the Fisher-Yates Algorithm: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Fisher_and_Yates'_original_method
    for(let i = positions.length - 1; i > 0; i--){
        const j = Math.floor(Math.random()*(i+1))
        const temp = positions[i]
        positions[i] = positions;
        positions[j] = temp;
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

function changeColor(tag, color){
    tag.style.fill = `${color}`;
}

function askPosition(){
    var quizQuestions = document.querySelector("p");
    quizQuestions.textContent = positions[positions.length-1];
    return quizQuestions.textContent;
}

function giveScore(){
    let tableHouse = document.querySelector('#tableHousing');
    makeTable(tableHouse);
}

function makeTable(tableDiv) {
    var body = tableDiv;
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 3; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 2; j++) {
        if (i == 2 && j == 1) {
          break
        } else {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('\u0020'))
          i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
          tr.appendChild(td)
        }
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }


function removePosition(position){
    var positionIndex = positions.indexOf(position);
    positions.splice(positionIndex);
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

// By Tomorrow: 

// Refactored my code so that onclick attribute added to each base in the SVG. DONE
// Added a shuffle funtionality that initialy randomly changes the state of my position array. DONE
// and the grey, correct and incorrect. 