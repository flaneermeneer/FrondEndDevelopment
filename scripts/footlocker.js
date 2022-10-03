/******************************/
/* menu openen de MENU button */
/******************************/

/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
var button = document.querySelector("nav > button")
var nav = document.querySelector("nav")
// audio variabelen
var audioObj = new Audio('./audio/siu.mp3')
var audiobutton = document.querySelector('.audiobutton')


// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
button.addEventListener('click',toggleMenu);

// stap 3: voeg in de functie een class toe aan de nav

function toggleMenu(){
  console.log("het werkt lan")
  nav.classList.toggle("toon-menu")
}


audiobutton.addEventListener('click', function() {

    audioObj.play();
    console.log("het werkt lan2");

  })




