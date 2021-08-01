var headerText = document.querySelector('.header-content');



function showHeaderText(){
    headerText.style.opacity = '1';
}

showHeaderText();


var frame = document.querySelector('.frame');
var dots = document.querySelectorAll('.fa-circle');

dots[0].addEventListener('click', scroll0);
dots[1].addEventListener('click', scroll1);
dots[2].addEventListener('click', scroll2);
dots[3].addEventListener('click', scroll3);

function scroll0(e){
    frame.style.transform = 'translateX(0vw)';
}

function scroll1(e){
    frame.style.transform = 'translateX(-100%)';
}

function scroll2(e){
    frame.style.transform = 'translateX(-200%)';
}

function scroll3(e){
    frame.style.transform = 'translateX(-300%)';
}

var navMenu = document.querySelector('.navMenu');
var menu = document.querySelector('.menu');

navMenu.addEventListener('click', showMenu);

function showMenu(e){
    menu.classList.toggle('toggleMenu');
}