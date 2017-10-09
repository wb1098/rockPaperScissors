
// Button selectors
var resetButton = document.querySelector("#resetBtn");
var rockBtn = document.querySelector("#rockBtn");
var paperBtn = document.querySelector("#paperBtn");
var scissorsBtn = document.querySelector("#scissorsBtn");
var spockLizardBtn  = document.querySelector("#spockLizardBtn");
var fistBumpBtn = document.querySelector("#fistBumpBtn");

//Visual elements selectors
var resultsWindow = document.querySelector(".resultsWindow");
var player1ScoreDisplay = document.querySelector("#player1Scr");
var player2ScoreDisplay = document.querySelector("#player2Scr");
var winningScoreDisplay = document.querySelector("#winningScoreDsp");
var winningScore = document.querySelector("#winScoreInp");
var playerScoresTextStyle = document.querySelector('.playerScores');
var playerScoresTextIH = document.querySelector('.playerScores').innerHTML;

//set defaults
var rockpaperscissors = ['rock', 'paper', 'scissors', 'spockLizard', 'fistBump'];
var player1Score = 0;
var player2Score = 0;
var gameOver = false;
winningScore.value = 3;

//#region add event listerners
rockBtn.addEventListener('click', function(){
    var result = compareChoices('rock', getComputerChoice());
    
    if(!gameOver){
      resultsWindow.textContent = result.trim();
    } else {resultsWindow.textContent = 'We have a Winner';}
    
});

paperBtn.addEventListener('click', function(){
   var result = compareChoices('paper', getComputerChoice());
    
    if(!gameOver){
      resultsWindow.textContent = result.trim();
    } else {resultsWindow.textContent = 'We have a Winner';}

}); 

scissorsBtn.addEventListener('click', function(){
   var result = compareChoices('scissors', getComputerChoice());
    
    if(!gameOver){
      resultsWindow.textContent = result.trim();
    } else {resultsWindow.textContent = 'We have a Winner';}

}); 

spockLizardBtn.addEventListener('click', function(){
   var result = compareChoices('spockLizard', getComputerChoice());
    
    if(!gameOver){
      resultsWindow.textContent = result.trim();
    } else {resultsWindow.textContent = 'We have a Winner';}

}); 

fistBumpBtn.addEventListener('click', function(){
   var result = compareChoices('fistBump', getComputerChoice());
    
    if(!gameOver){
      resultsWindow.textContent = result.trim();
    } else {resultsWindow.textContent = 'We have a Winner';}

}); 

resetButton.addEventListener('click', resetPage);

winningScore.addEventListener('change', function(){
    winningScoreDisplay.textContent = winningScore.value;
});

//#endregion

winningScoreDisplay.textContent = winningScore.value;

function resetPage(){
    resultsWindow.textContent = `Alright!  Let's play Rock, Paper, Scissors, SpockLizard and Fist Bump again!`;
    
    playerScoresTextStyle.innerHTML = playerScoresTextIH; 
    player1ScoreDisplay.textContent = 0;
    player2ScoreDisplay.textContent = 0;   
    player1Score = 0;
    player2Score = 0;
    gameOver = false;
    resultsWindow.style.fontSize = "14px";
    resultsWindow.style.color = "#000";   
    
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    spockLizardBtn.disabled = false;
    fistBumpBtn.disabled = false;    
}

function gameOverTF(score, wscore){
	if(score >= Number(wscore)){        
     rockBtn.disabled = true;
     paperBtn.disabled = true;
     scissorsBtn.disabled = true;
     spockLizardBtn.disabled = true;
     fistBumpBtn.disabled = true;
     gameOver = true;
     return true;
	}
	return false;
}

function compareChoices(choice1,choice2){   
    'use strict';
    
    //ties
    if(choice1 === choice2){
        return('The result is a TIE! Spin around twice and try again!');        
    }
    
    //user wins
    if(rockWins(choice1,choice2)){        
        return('You have SMASHED!  Rock Wins!');
    }
    
    if(paperWins(choice1,choice2)){
        return('Paper Covers for the Win!');
    }
    
    if(scissorsWins(choice1,choice2)){
        return('Scissors cuts to the Victory!');
    }
    
    if(spockLizardWins(choice1,choice2)){
        return('Spock Lizard is Triumphant!');
    }
    
    if(fistBumpWins(choice1,choice2)){        
        return('The mighty Fist Bump prevails!');
    }
    
    //computer wins
    return(choice2.substr(0,1).toUpperCase() + choice2.substr(1) + ' beats you this time! \nTry Again!');
}
//#region button decisions
function rockWins(choice1, choice2){
    'use strict';
    if(choice1 === 'rock' && (choice2 === 'scissors' || choice2 === 'spockLizard')){
        changeScore(0);
        return(true);
    }
    
    if(choice1 === 'rock' && (choice2 === 'paper' || choice2 === 'fistBump')){
        changeScore(1);
        return(false);
    }
    
    return(false);    
}

function paperWins(choice1, choice2){
    'use strict';
    if(choice1 === 'paper' && (choice2 === 'rock' || choice2 === 'fistBump')){
        changeScore(0);
        return(true);
    } 
    
    if(choice1 === 'paper' && (choice2 === 'scissors' || choice2 === 'spockLizard')){
        changeScore(1);
        return(false);
    }
    
    return(false);
}

function scissorsWins(choice1, choice2){
    'use strict';
    if(choice1 === 'scissors' && (choice2 === 'paper' || choice2 === 'fistBump')){
        changeScore(0);
        return(true);
    }
    
    if(choice1 === 'scissors' && (choice2 === 'rock' || choice2 === 'spockLizard')){
        changeScore(1);
        return(false);
    }
    
    return(false);
}

function spockLizardWins(choice1, choice2){
    'use strict';
    if(choice1 === 'spockLizard' && (choice2 === 'paper' || choice2 === 'scissors')){
        changeScore(0);
        return(true);
    }
    
    if(choice1 === 'spockLizard' && (choice2 === 'fistBump' || choice2 === 'rock')){
        changeScore(1);
        return(false);
    }
    
    return(false);
}

function fistBumpWins(choice1, choice2){
    'use strict';
    
    if(choice1 === 'fistBump' && (choice2 === 'rock' || choice2 === 'spockLizard')){
        changeScore(0);
        return(true);
    }
    
    if(choice1 === 'fistBump' && (choice2 === 'paper' || choice2 === 'scissors')){        
        changeScore(1);
        return(false);
    }
    
    return(false);
}

//#endregion


function changeScore(winnerCode){
    let winnerTitle = '';
    
    if(winnerCode === 0 ){
        player1Score++;
        player1ScoreDisplay.textContent = player1Score;
        winnerTitle = 'Player One for the Win!';
    }

    if(winnerCode === 1 ){
        player2Score++;
        player2ScoreDisplay.textContent = player2Score;
        winnerTitle = 'The Code won this time!  Try again?';
    }
    
    
    if((gameOverTF(player1Score, winningScore.value) === true) || (gameOverTF(player2Score, winningScore.value) === true)){      
       playerScoresTextStyle.textContent = winnerTitle;           
       resultsWindow.style.fontSize = "32px";
       resultsWindow.style.color = "red";  
       return true;
    }
    
}

function getComputerChoice(){
    'use strict';
  var computerChoice = getRandomInt(0,5);    
  return(rockpaperscissors[computerChoice]);  
    
}

function getRandomInt(min, max) {
    'use strict';
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


// =============== testing section =========================
/* Normally I would not leave in the testing section once it went to production*/

function assertRPSOutcome(actual, expected, testName){
    if(actual === expected){
        console.log(`[${testName} - Passed!]`);
        return;
    }
    
    console.log(`[${testName} - FAILED] - Expected: ${expected} and Actual was: ${actual}.  `)
    return;
    
}

function testRockPaperScissorsFunctions(){
    console.log(getRandomInt(0,5));  // a number between 0 and 5
    console.log(getComputerChoice()); // an element from the rockpaperscissors array
    console.log(rockWins('rock', 'spockLizard'));//true
    console.log(rockWins('rock', 'fistBump')); //false
    console.log(paperWins('paper','rock')); // true
    console.log(paperWins('paper','spockLizard')); // false
    console.log(scissorsWins('scissors', 'paper')); // true
    console.log(scissorsWins('scissors','rock')); //false
    console.log(spockLizardWins('spockLizard', 'paper')); //true
    console.log(spockLizardWins('spockLizard', 'rock')); // false
    console.log(fistBumpWins('fistBump', 'rock')); // true
    console.log(fistBumpWins('fistBump','paper')); // false
    assertRPSOutcome(rockWins('rock', 'spockLizard'),true,'Testing rock paper scissors : TestA');
    assertRPSOutcome(rockWins('rock', 'spockLizard'),false,'Testing rock paper scissors : TestA.1');
    assertRPSOutcome(spockLizardWins('spockLizard', 'rock'), true, 'Testing RPS: Test B');    
}
//testRockPaperScissorsFunctions();

function testRPSCompare(){
    
    console.log(compareChoices('paper','paper')); // tie
    console.log(compareChoices('rock','spockLizard')); // rock wins
    console.log(compareChoices('paper','rock')); // paper wins
    console.log(compareChoices('scissors','paper')); // scissors wins
    console.log(compareChoices('spockLizard','scissors')); // spockLizard wins
    console.log(compareChoices('fistBump','rock'));  // fistBump wins
    
 assertRPSOutcome(compareChoices('rock','spockLizard'),'Rock Wins!','Testing CompareChoices - TestA');   
}
//testRPSCompare();
/*
var temp = compareChoices(userChoice,getComputerChoice());
console.log(temp);
mainSect.textContent = temp;
mainSect.classList.add("changeMe");
*/

