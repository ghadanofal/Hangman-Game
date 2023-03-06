//letters
const letters = "abcdefghijklmnopqrstuvwxyz";

//Get Array from letters
let letterArray = Array.from(letters);

//select letter container
let letterscontainer = document.querySelector(".letters");

//Generate Letters
letterArray.forEach(letter=>{

    //creat span
    let span = document.createElement("span");

    //create letter text Node
    let theLetter = document.createTextNode(letter);

    //Appen the letter to span
    span.appendChild(theLetter);

    //Add class on span
    span.className = 'letter-box';

    //Append span to the Letter container
    letterscontainer.appendChild(span);

    //Object of word + Categories
});


const words = {
    programming: ["php", "java", "javascript", "python", "ruby", "scala", "fortran", "r", "mysql", "python", "go"],
    movies: ["Prestiga", "Inception", "Parasite", "Intersteller", "Whiplash", "Memento", "Coco","Up"],
    people: ["Albert Einstein", "Hitchock","Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Germany", "Yemen", "Russia", "Qatar", "India", "Bahrain"],
    }

// Get Random Properties
let allKeys = Object.keys(words);
//console.log(allKeys);

//Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

//Categories
let randomPropName = allKeys[randomPropNumber];

//Categories Words
let randomPropValue = words[randomPropName];
//console.log(allKeys[3])
//console.log(randomPropName)
//console.log(words["people"])

//Random Number Depend On Keys words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

//console.log(randomPropValue);
//console.log(randomValueNumber);

// The chosen Word
let randomValueValue = randomPropValue[randomValueNumber];

// set category Info
document.querySelector(".game-info .category span").innerHTML =  randomPropName;

//Select Letter Guess Element 
let letterGuessContainer = document.querySelector(".letter-guess");

//convert chosen word to array
let letterAndSpace = Array.from(randomValueValue);

//Create spans Depend on words
letterAndSpace.forEach( letter =>{

// Creat Empty Span
let emptySpan = document.createElement("span");

// If letter is space
if(letter === ' '){

    //Add Class To Span
    emptySpan.className = 'with-space';

}

//Append Span To The Guess Container
    letterGuessContainer.appendChild(emptySpan);

});

//Select Guess Spans
let guessSapns = document.querySelectorAll(".letter-guess span");

//Set Wrong Attempt
let WrongAttempts = 0;

//Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

//Handle Clicking On Letters
document.addEventListener("click", (e)=>{
    //Set The Chose Status
    let theStatus = false;

    if(e.target.className === 'letter-box'){

    e.target.classList.add("clicked");


//Get Clicked Letter
let theClickedLetter = e.target.innerHTML.toLowerCase();

// The Chosen Word 
let theChosenWord = Array.from(randomValueValue.toLowerCase());
//console.log(letterAndSpace);


theChosenWord.forEach((wordLetter , WordIndex) => {

    //If the Clicked Letter Equal To One Of The Chosen word Letter
    if(theClickedLetter == wordLetter){
       //console.log(`found at index number ${index}`);

        theStatus = true;
        //Loop On All Guess Spans
        guessSapns.forEach((span, SpanIndex)=>{
        if(WordIndex === SpanIndex)  {
            span.innerHTML = theClickedLetter;

        }
        });
    
//Outside Loop
//console.log(theStatus);


    }

});
//Outer Loop
 //console.log(theStatus);


if( theStatus !== true) {
    //Icrease The Wrong Attempts
        WrongAttempts++;

    //Add Class Wrong On The Draw Element
        theDraw.classList.add(`wrong-${WrongAttempts}`);

        //Play Fail Sound
        document.getElementById("fail").play();

        if(WrongAttempts === 8){
            endGame();
            letterscontainer.classList.add("finished");
        }

    }else{
        //Play sucess Sound
            document.getElementById("success").play();
        }
}

});

//End Game
function endGame(){
    let div = document.createElement("div");

    //Creat Text
    let divText = document.createTextNode(`Game Over, The world is ${randomValueValue}`);

    //Append Text To Div
    div.appendChild(divText);

    //Add Class On Div
    div.className = 'popup';

    //Append To The Bod
    document.body.appendChild(div);
}
//The End