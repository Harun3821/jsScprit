// একই কাজ দুই ভাবে করা যাই
// প্রথম নিয়ম  fast option
// function play(){
//   const homeSection = document.getElementById('home-scering');
//   homeSection.classList.add('hidden');

//   const gameSection = document.getElementById('game-scring');
//   gameSection.classList.remove('hidden');
// }

// ২য় নিয়ম 2nd option
function hideElementById(ElementId){
   const Element = document.getElementById(ElementId)
   Element.classList.add('hidden');
}

function showElementId(ElementId){
   const Element = document.getElementById(ElementId);
   Element.classList.remove('hidden');
}

// -----১ম নিয়ম-----------//
function getTextElementValueById(Element){
   const element = document.getElementById(Element);
   const elementVlueText = element.innerText;
   const Value = parseInt(elementVlueText);
   return Value;
}

function SetTextValueElemeintById(ElementId, Value){
   const element = document.getElementById(ElementId);
    element.innerText = Value;
}


// ------২য় নিয়ম---------//
function SetbackgrountColerById(ElementId){
    const Element = document.getElementById(ElementId);
    Element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(ElementId){
   const Element = document.getElementById(ElementId);
   Element.classList.remove('bg-orange-400');
}



// ----------------//
function handalKeyBordKeyUpEvent(event){
const PlayerPressKey = event.key;   

// Player press to key
const currentalfabetEleMent = document.getElementById('curent-Alfabet');
const CurrentAlfabet = currentalfabetEleMent.innerText;
const expectedAlfabet = CurrentAlfabet.toLowerCase();

// check right or Wrong key pressed
if(PlayerPressKey === expectedAlfabet){
// -------১ম নিয়ম---------//
const curentSecor = getTextElementValueById('curent-seore');
const Updetsecro = curentSecor + 1
SetTextValueElemeintById('curent-seore', Updetsecro);




// -------২য় নিয়ম-------------//
// console.log('you got a point');
//    console.log('you curet press key', expectedAlfabet)
// //  Updet Secor
// // 1.Get The Curet Score
// const CurrentSecoElement = document.getElementById('curent-seore');
// const curentSecorText = CurrentSecoElement.innerText;
// const curentSecrot = parseInt(curentSecorText);
// console.log(curentSecrot);
   
// // 2 increg score By 1
// const newScore = curentSecrot + 1;
// // Show the updet Score
// CurrentSecoElement.innerText = newScore;


//   Start a NMew Round
   removeBackgroundColorById(PlayerPressKey);
   CountinuGame();
}
else{
//    console.log('dhur mia to rong key');
//    const curentlifeElement = document.getElementById('curent-life');
//    const curentliftText = curentlifeElement.innerText;
//    const curentLife = parseInt(curentliftText);
  
//   const newLife = curentLife - 1;
//   curentlifeElement.innerText = newLife;
}

}
document.addEventListener('keyup', handalKeyBordKeyUpEvent);


// ------------//
function CountinuGame(){
    const AlFabet =  getArandomGame();
   //  console.log('Random Alfabet', AlFabet);

   // set Randomly generated alfabet to the screen (disply it)
   const currentAlfabetElement = document.getElementById('curent-Alfabet');
   currentAlfabetElement.innerText = AlFabet;
   SetbackgrountColerById(AlFabet);

}


function getArandomGame(){
   // Get a Alfabet create of Array
   const alfabetString = 'abcdefghijklmnopqrstuvwxyz'
   const alfaBet = alfabetString.split('');
   // console.log(alfaBet);

   // Get a Random index between 0-25

   const randomNumber = Math.random() * 25;
   const index = Math.round(randomNumber);
   const alfaBets = alfaBet[index] 
//   console.log(index, alfaBets)
  return alfaBets;
}


// ------------//
function play(){
   hideElementById('home-scering');
   showElementId('game-scring');
   CountinuGame()
}

