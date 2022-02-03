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
    constructor(){
        this.basesArray = [];
        this.field;
        this.gameState = false;
    }

    get fieldObject(){
        return this.field;
    }
    get allBaseballBases(){
        return this.basesArray;
    }
    // setCurrentQuestion(){
    //     var quizQuestions = document.querySelector("p");
    //     quizQuestions.textContent = '';
    //     quizQuestions.textContent = this.baseballField.basesArray[this.baseballField.basesArray.length - 1].baseName;
    // }
    /**
    * @param {any} base
    */
    set baseballBases(base){
        this.basesArray.push(base);
    }

    /**
    * @param {any} field
    */
       set baseballField(field){
        this.field = field;
    }

    /**
     * @param {any} state
     */
    set gameStates(state){
        this.gameState = state;
    }



}

class BaseballField{
    
    constructor(){
        this.currentQuestionValue = '';
    }

    // GET SECTION
    get positions(){
        return this.bases;
    }

    get answer(){
        return this.bases[this.bases.length-1];
    }

    get currentQuestion(){
        return this.currentQuestionValue;
    }

    // SET
    set currentQuestion(value){
        this.currentQuestionValue = value;
    }

    // MEHTODS
    // circleEvents(){
    //     let answer = this.bases[this.bases.length-1];
    //     let positionTags = [...document.querySelector("#positions").children];
    //     let bases = this.bases;
    //     for (let tag = 0; tag < positionTags.length; tag++){
    //         positionTags[tag].addEventListener("click", function(event){
    //             event.preventDefault();
    //             let clickedPosition = positionTags[tag].textContent.replace(/ {4}|[\t\n\r]/gm,"");
    //             if (clickedPosition.includes(answer)){
    //                 changeState(positionTags[tag], 'green', answer, bases);
    //             }else{
    //                 changeState(positionTags[tag], 'red', answer, bases);
    //             }
    //         })
    //     }
    // }
   
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
            console.log(bases);
            }
        else
            {
            console.log(`Try again ${clickedPosition}`, currentValue);
            baseObject.baseSelected = true;
            baseObject.baseColor = 'red';
            console.log(bases);
            }
        })
    })
    
    
}

window.onload = () => {
    let positionTags = [...document.querySelector("#positions").children];
    let baseballField = new BaseballField();
    let gameState = new GameState();
    positionTags.map((tag) =>{
        tag.addEventListener("click", (event)=>{
            event.preventDefault();
            main(baseballField, gameState);
        });
    })
}



function main(gameState, baseballField){
    let bases = ['Catcher', 'Pitcher', 'First Base', 'Second Base',  'Third Base', 'Shortstop', 'Right Field', 'Center Field', 'Left Field'];
    // Feed the GameState the baseballField and the Base
    bases.forEach((base)=>{
        gameState.baseballBases = new Base(base);
    })
    gameState.baseballField = baseballField;
    console.log(gameState);
}
module.exports = BaseballQuiz;
