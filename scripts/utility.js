function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function addBackgroundColor(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}

function removeBackgroundColor(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}

function getTexElementValueById(elementId){
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  return value;
}  

function setTextElementValueById(elementId,value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function getElementTextId(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function getRandomAlphabet(){
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');

  const random = Math.random()*25;
  const index = Math.round(random);
  const alphabet = alphabets[index];
  // console.log(alphabet,index);
  return alphabet;
}