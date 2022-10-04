
// variabelen koppelen aan de classes
var button = document.querySelector("nav > button")
var nav = document.querySelector("nav")
// audio variabelen
var audioObj = new Audio('./audio/siu.mp3')
var audiobutton = document.querySelector('.audiobutton')
// variabelen van de vink image op de suprise page
var vink = document.querySelector(".vinkje")
// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
button.addEventListener('click',toggleMenu);

// stap 3: voeg in de functie een class toe aan de nav

function toggleMenu(){
  console.log("het werkt lan")
  nav.classList.toggle("toon-menu")
}

// als er op de knop geklikt word, word de audio afgespeelt en word er een image vervangen!
audiobutton.addEventListener('click', function() {

    audioObj.play();
    console.log("het werkt lan2");
    vink.src = `images/lasereye.gif`
  })




