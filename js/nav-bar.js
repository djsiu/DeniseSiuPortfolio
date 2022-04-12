// USED FOR COLLAPSING THE NAV BAR AT SMALLER SIZES


"use strict";


console.log('running nav-bar.js');

// toggle button with help from: https://codepen.io/WebDevSimplified/pen/LqKQRK
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})



// adapted from IAT 339 code demo:  https://codepen.io/andrewhaw/pen/poeYqzO/45464025d337bc2bd33a6567350a4a68

// javascript media queries learned from: https://css-tricks.com/working-with-javascript-media-queries/

// also with help from: http://www.javascriptkit.com/dhtmltutors/cssmediaqueries4.shtml

// const mediaQuery = window.matchMedia('(max-width: 45rem)');

// let menu = document.querySelector('#nav-bar');
// let header = document.querySelector('header');
// let menuToggle = document.createElement('button');

// function mediaqueryresponse(mql) {
//     if (mql.matches) { // if media query matches
//         console.log("screen is mobile size")

//         menu.classList.add('hidden');
//         menu.setAttribute('aria-hidden', 'true');
//         menu.setAttribute('aria-labelledby', 'menu-toggle');

//         // creating menuToggle button
//         menuToggle.classList.remove('not-needed');
//         menuToggle.classList.add('button');
//         menuToggle.setAttribute('id', 'menu-toggle');
//         menuToggle.innerHTML = 'menu ▼';

//         // accessibility
//         menuToggle.setAttribute('aria-label', 'Main menu');
//         menuToggle.setAttribute('aria-controls', 'menu');
//         menuToggle.setAttribute('aria-expanded', 'false');

//         header.insertBefore(menuToggle, menu);

//         menuToggle.addEventListener('click',
//             function() {

//                 console.log('menuToggle has been clicked.');

//                 if (menu.classList.contains('hidden')) {
//                     console.log('show menu');
//                     menu.classList.remove('hidden');

//                     menu.setAttribute('aria-hidden', 'false');
//                     menuToggle.setAttribute('aria-expanded', 'true');

//                     this.innerHTML = 'Menu ▲';
//                 } else {
//                     console.log('hide menu');
//                     menu.classList.add('hidden');

//                     menu.setAttribute('aria-hidden', 'true');
//                     menuToggle.setAttribute('aria-expanded', 'false');

//                     this.innerHTML = 'Menu ▼';
//                 }

//             }
//         );
//     } else {
//         console.log("screen is not mobile size");

//         menu.classList.remove('hidden');
//         menuToggle.classList.add('not-needed');
//     }
// }
// mediaqueryresponse(mediaQuery);
// mediaQuery.addListener(mediaqueryresponse);