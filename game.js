


class Base{
    constructor(baseName){
        this.baseName = baseName;
        this.selected = false;
        this.color = '';
    }
    get baseNames(){
        return this.baseName;
    }
    get baseState(){
        return this.selected;
    }
    /**
     * @param {boolean} selectedBool
     */
    set baseSelected(selectedBool){
        this.selected = selectedBool;
    }

    /**
     * @param {string} color
     */
    set baseColor(color){
        this.color = color;
    }
}


class GameState{
    constructor(baseballField){
        this.baseballField = baseballField;
    }

    get currentValues(){
        return this.currentValue;
    }
    setCurrentQuestion(){
        var quizQuestions = document.querySelector("p");
        quizQuestions.textContent = '';
        quizQuestions.textContent = this.baseballField.basesArray[this.baseballField.basesArray.length - 1].baseName;
    }

}

class BaseballField{
    
    constructor(){
        this.bases = ['Catcher', 'Pitcher', 'First Base', 'Second Base',  'Third Base', 'Shortstop', 'Right Field', 'Center Field', 'Left Field'];
        this.basesArray = [];
        this.currentValue = '';
    }

    // GET SECTION
    get positions(){
        return this.bases;
    }

    get answer(){
        // return this.answers[this.randomNumber(0, this.answers.length - 1)];
        return this.bases[this.bases.length-1];
    }

    get allBaseballBases(){
        return this.basesArray;
    }

    get currentQuestion(){
        return this.currentValue;
    }

    /**
     * @param {any} base
     */
    set baseballBases(base){
        this.basesArray.push(base);
    }

    // MEHTODS
    circleEvents(){
        let answer = this.bases[this.bases.length-1];
        let positionTags = [...document.querySelector("#positions").children];
        let bases = this.bases;
        for (let tag = 0; tag < positionTags.length; tag++){
            positionTags[tag].addEventListener("click", function(event){
                event.preventDefault();
                let clickedPosition = positionTags[tag].textContent.replace(/ {4}|[\t\n\r]/gm,"");
                if (clickedPosition.includes(answer)){
                    changeState(positionTags[tag], 'green', answer, bases);
                }else{
                    changeState(positionTags[tag], 'red', answer, bases);
                }
            })
        }
    }
   
}
function changeColor(tag, color){
    tag.firstElementChild.style.fill = `${color}`;
}

function changeNumberPositions(position, bases){
    var positionIndex = bases.indexOf(position);
    bases.splice(positionIndex);
    console.log(bases);
    if (bases.length === 0){
        alert("You won!");
    }
}


function changeState(tag, color, position, bases){
    changeColor(tag, color);
    changeNumberPositions(position, bases);
    updateQuizQuestion();
}


function listeningToBases(bases, currentValue){
    let positionTags = [...document.querySelector("#positions").children];
    bases.find((baseObject, index)=>{
        positionTags[index].addEventListener("click", function(event){
        event.preventDefault();
        let clickedPosition = positionTags[index].textContent.replace(/ {4}|[\t\n\r]/gm,"");
        if (clickedPosition.includes(currentValue))
            {
            console.log(`You are correct! ${clickedPosition}`, currentValue);
            baseObject.baseSelected = true;
            baseObject.baseColor = 'green';
            }
        else
            {
            alert(`Try again! ${clickedPosition}`);
            baseObject.baseSelected = true;
            baseObject.baseColor = 'red';

            }
        })
    })
    
}

window.onload = () => {
    let bases = ['Catcher', 'Pitcher', 'First Base', 'Second Base',  'Third Base', 'Shortstop', 'Right Field', 'Center Field', 'Left Field'];
    // Add the event listener to the bases.
    let baseballQuiz = new BaseballField();
    // baseballQuiz.circleEvents();

    // Add the bases to the baseballQuiz
    bases.forEach((base)=>{
        baseballQuiz.baseballBases = new Base(base);
    })
    // Begin the Game logic
    let gameState = new GameState(baseballQuiz);
    gameState.setCurrentQuestion();
    // Listen to the document for any click events on the bases.

    // I need to feed the baseballfield and the bases to my gamestate.
    // Set the game state value
    console.log(baseballQuiz.allBaseballBases);
    listeningToBases(baseballQuiz.allBaseballBases, document.querySelector("p").textContent);
    console.log(baseballQuiz.allBaseballBases);
    
    // If one of the bases is clicked
}


module.exports = BaseballQuiz;
