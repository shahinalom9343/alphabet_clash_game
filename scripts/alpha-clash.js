// function play(){
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');

//   const playGround = document.getElementById('play-ground');
//   playGround.classList.remove('hidden');
// }
function keyboardPressEvent(event){
  const playerPressed = event.key;
  // console.log('You Pressed :',playerPressed);

  // stop the game with pressing 'Esc'

  if(playerPressed==='Escape'){
    gameOver();
  }

  // get the expected key
  const currentAlphabetElement = document.getElementById('cuurent-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playerPressed, expectedAlphabet);

  if(playerPressed===expectedAlphabet){
    // console.log('you got a point');

    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    const currentScore = getTexElementValueById('current-score');
    const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;
    setTextElementValueById('current-score', newScore);

    removeBackgroundColor(expectedAlphabet);
    continueGame();
  }
  else{
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    const currentLife = getTexElementValueById('current-life');
    const newLife = currentLife -1;
    setTextElementValueById('current-life',newLife);
    // currentLifeElement.innerText = newLife;

    if(newLife===0){
      gameOver();
    }

  }
}
// capture keyboard by press
document.addEventListener('keyup',keyboardPressEvent)

function continueGame(){
  const alphabet = getRandomAlphabet();
  console.log('your random number is :',alphabet);

  const currentAlphabetElement = document.getElementById('cuurent-alphabet');
  currentAlphabetElement.innerText = alphabet;

  addBackgroundColor(alphabet);
}

function play(){
  // hide all and play in playgoround code
  hideElementById('home-screen');
  showElementById('play-ground');
  hideElementById('final-score');

  // reset score code
  setTextElementValueById('current-life',5);
  setTextElementValueById('current-score',0);
  continueGame();
}

// game over code
function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');

  // update final score
  const lastScore = getTexElementValueById('current-score');
  // console.log(lastScore);
  setTextElementValueById('last-score',lastScore);

  // clear the last selected alphabet
  const elementText = getElementTextId('cuurent-alphabet');
  removeBackgroundColor(elementText);
}





























































// function play(){
//   const homeCScreen = document.getElementById('home-screen');
//   homeCScreen.classList.add('hidden');

//   const playGround = document.getElementById('play-ground');
//   playGround.classList.remove('hidden');
//   const alphabet = getRandomAlphabet();
//   console.log('your random alphabet is:',alphabet);

//   const currentAlphabetElement = document.getElementById('cuurent-alphabet');
//   currentAlphabetElement.innerText =alphabet;

//   const element = document.getElementById(alphabet);
//   element.classList.add('bg-orange-400');
  
// }


// // getting a random number code
// function getRandomAlphabet(){
//   const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//   const alphabets = alphabetString.split('');

//   const random = Math.random()*25;
//   const index = Math.round(random);
//   const alphabet = alphabets[index];
//   // console.log(alphabet,index);
//   return alphabet;
// }

// // keyboard handler code
// // function handleKeyboardUpEvent(event){
// //   const playerPressed = event.key;
// //   console.log('player pressed',playerPressed);

// //   const currentAlphabetElement = document.getElementById('cuurent-alphabet');
// //   const currentAlphabet = currentAlphabetElement.innerText;
// //   const expectedAlphabet = currentAlphabet.toLowerCase;
// //   const output = console.log(playerPressed,expectedAlphabet);
// //   return output;
// // }
// function handleKeyboardUpEvent(event){
//   const playerPressed = event.key;
//   const currentAlphabetElement = document.getElementById('cuurent-alphabet');
//   const currentAlphabet = currentAlphabetElement.innerText;
//   const expectedAlphabet = currentAlphabet.toLowerCase();
//   // const newOutput = console.log(playerPressed,expectedAlphabet);
//   if(playerPressed===expectedAlphabet){
//     console.log("You press right key");
//     return;
//     getRandomAlphabet();
//   }
//   else{
//     console.log("you loss a point");
//     return;
//     getRandomAlphabet();
//   }
// }
// document.addEventListener('keyup',handleKeyboardUpEvent);