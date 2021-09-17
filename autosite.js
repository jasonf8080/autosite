var navMenu = document.querySelector('.navMenu');
var menu = document.querySelector('.menu');

navMenu.addEventListener('click', showMenu);

function showMenu(e){
    menu.classList.toggle('toggleMenu');
}

const reviews = [

    {
        rating: '5.0',
        content: 'Expert Care Auto Company has helped with my Toyota for years. Their staff is very friendly, experienced, and dedicated to their work. Very nice people.',
        img: 'https://2d3z3x4e2xrx130kvm2hxdsp-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/Tracy_Wright_Corvo_Photography_actor_headshot-16.jpg',
        person: 'Joe Harrison'

    },

    {
        rating: '4.7',
        content: 'Expert Care Auto Company has helped with my Toyota for years. Their staff is very friendly, experienced, and dedicated to their work. Very nice people.',
        img: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
        person: 'Alina Shi'

    },

    {
        rating: '4.5',
        content: 'Expert Care Auto Company has helped with my Toyota for years. Their staff is very friendly, experienced, and dedicated to their work. Very nice people.',
        img: 'https://marvel-b1-cdn.bc0a.com/f00000000243271/www.languageline.com/s/person-headshot-51.jpg',
        person: 'Marvin Lowton'

    },



    

];



const ratingNumber = document.querySelector('.rating-number');
const reviewContent = document.querySelector('.review-content');
const personImg = document.querySelector('.person-img-container img');
const personName = document.querySelector('.name');

const arrowRight = document.querySelector('.arrows .fa-chevron-right');
const arrowLeft = document.querySelector('.arrows .fa-chevron-left');

let currentReview = 0;//ALl this is for rn is just 0, it isnt connected to the array or anything, just simply 0



function showPerson(currentReview){
    const item = reviews[currentReview];//item represents individual object  ---  connecting the reviews array, to actual numbers within array so they can be modified 

    //Linking up object(item) items (name, img, rating, person) with actual elements (querySelectors) that need to be fulfilled (ratingNumber, reviewContent, personImg)
    ratingNumber.textContent = item.rating; // reviews[0].rating
    reviewContent.textContent = item.content; 
    personImg.src = item.img;
    personName.textContent = item.person; 
}

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentReview); //showPerson - links elements with individual objects ---- currentReview is 0 --- so show the first object with its connected strings
})

arrowRight.addEventListener('click', function(){
    currentReview++;
    if(currentReview > reviews.length -1){
        currentReview = 0;
    }
    
    console.log(currentReview);
    showPerson(currentReview);
})

arrowLeft.addEventListener('click', function(){
    currentReview--;
    if(currentReview < 0){
        currentReview = reviews.length -1; //Jumps to the highest number in the array and moves back from there --- so it starts at 0, then jumos back to 2
    }
    
    console.log(currentReview);
    showPerson(currentReview);
})