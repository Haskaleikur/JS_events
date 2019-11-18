// ********************** Fonctionnalité 1 & 1bis : Clic sur le footer & compteur **********************

let myFooter = document.getElementsByTagName('footer')[0];
let counter = 0;
myFooter.addEventListener('click',onFooterClick);

function onFooterClick() {
    console.log("clique");
    counter += 1;
    console.log(`clic numéro ${counter}`);
}

// ********************** Fonctionnalité 2 : Hamburger menu **********************
let myButton = document.querySelector('button')
let navbarHeader = document.getElementById('navbarHeader');
let navbarHeaderStatus = false;
myButton.addEventListener('click',collapseNavbar);


function collapseNavbar(){
  if (navbarHeaderStatus == false) {
    navbarHeader.classList.remove("collapse");
    navbarHeaderStatus = true
  } else {
    navbarHeader.classList.add("collapse");
    navbarHeaderStatus = false;
  }

}

// ********************** Fonctionnalié 3 : Mettre le texte de la 1ère carte en rouge **********************
let myButtonEdit1 = document.querySelector('.btn-group .btn-outline-secondary');
let textToTransform = document.querySelector('.card-text');

myButtonEdit1.addEventListener('click',transformRed);

function transformRed(){
  textToTransform.style.color = 'red';
}

// ********************** Fonctionnalié 4 : toggle sur le texte de la deuxième carte **********************
let myButtonEdit2 = document.querySelectorAll('.btn-group .btn-outline-secondary')[1];
let textToTransform2 = document.querySelectorAll('.card-text')[1];

myButtonEdit2.addEventListener('click',transformGreen);

function transformGreen (){
  if (textToTransform2.classList) {
    textToTransform2.classList.toggle("text-success");
  } else {
    // For IE9
    var classes = textToTransform2.className.split(" ");
    var i = classes.indexOf("text-success");

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("text-success");
      textToTransform2.className = classes.join(" ");
  }
}

// ********************** Fonctionnalié 5 : Désactiver Bootstrap avec JavaScript via double click **********************
let myNavbar = document.querySelector('.navbar');
let activatedBootstrap = true;

myNavbar.addEventListener('dblclick', removeBootstrap);

function removeBootstrap (){
  if (activatedBootstrap == true) {
    document.styleSheets[0].disabled = true;
    activatedBootstrap = false;
  } else {
    document.styleSheets[0].disabled = false;
    activatedBootstrap = true;
  }
}

// ********************** Fonctionnalié 6 : Désactiver le link avec JavaScript **********************
