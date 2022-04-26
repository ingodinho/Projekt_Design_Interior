'use strict';

const inputName = document.getElementById('input_name');
const inputEmail = document.getElementById('input_email');
const inputTextarea = document.getElementById('input_msg');
const navMenu = document.querySelector('.nav_menu');
const navNav = document.querySelector('.navbar_nav');
const navLink = document.querySelector('nav_link');

function showValue() {
    console.log(inputName.value);
    console.log(inputEmail.value);
    console.log(inputTextarea.value);
}


navMenu.addEventListener('click', function() {
    console.log('test');
    navNav.classList.toggle('navbar_show');
})

// document.body.addEventListener('click',function(){
//     console.log('test');
//     navNav.classList.remove('navbar_show');
// })

